import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import { tokenize as tokenizeCss, tokenTypes as cssTokens } from 'css-tree';
import { Parser as YamlParser } from 'yaml';
import { SaxesParser } from 'saxes';

const biofilmNotice = 'd86a6e836c945e02519af1bd6d01f8f64e696756c6666c0c5fc13ebdf6e9d333';

function sourceComments(file, source) {
  const kind = file.endsWith('.tsx') ? ts.ScriptKind.TSX : file.endsWith('.mjs') ? ts.ScriptKind.JS : ts.ScriptKind.TS;
  const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, kind);
  const ranges = new Map();
  const jsxText = [];
  function visit(node) {
    if (ts.isJsxText(node)) jsxText.push([node.pos, node.end]);
    for (const position of [node.pos, node.end]) {
      for (const finder of [ts.getLeadingCommentRanges, ts.getTrailingCommentRanges]) {
        for (const range of finder(source, position) || []) ranges.set(range.pos, range);
      }
    }
    if (ts.isJsxExpression(node)) {
      for (const range of ts.getTrailingCommentRanges(source, node.getStart(tree) + 1) || []) ranges.set(range.pos, range);
    }
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return [...ranges.values()]
    .filter(range => !jsxText.some(([start, end]) => start <= range.pos && range.pos < end))
    .filter(range => {
      const value = source.slice(range.pos, range.end);
      if (file === 'next.config.mjs' && value === "/** @type {import('next').NextConfig} */") return false;
      if (file === 'components/Biofilm.tsx' && createHash('sha256').update(value).digest('hex') === biofilmNotice) return false;
      return true;
    })
    .map(range => source.slice(0, range.pos).split('\n').length);
}

function cssComments(source) {
  const lines = [];
  tokenizeCss(source, (type, start) => {
    if (type === cssTokens.Comment) lines.push(source.slice(0, start).split('\n').length);
  });
  return lines;
}

function yamlComments(source) {
  const lines = [];
  function visit(token) {
    if (!token || typeof token !== 'object') return;
    if (token.type === 'comment') lines.push(source.slice(0, token.offset).split('\n').length);
    for (const value of Object.values(token)) {
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === 'object') visit(value);
    }
  }
  for (const token of new YamlParser().parse(source)) visit(token);
  return lines;
}

function svgComments(source) {
  const lines = [];
  const parser = new SaxesParser();
  parser.on('comment', value => lines.push(parser.line - value.split('\n').length + 1));
  parser.write(source).close();
  return lines;
}

function inspect(file, source) {
  if (/\.(?:ts|tsx|mjs)$/i.test(file)) return sourceComments(file, source);
  if (/\.css$/i.test(file)) return cssComments(source);
  if (/\.ya?ml$/i.test(file)) return yamlComments(source);
  if (/\.svg$/i.test(file)) return svgComments(source);
  if (file === '.gitignore') return source.split('\n').flatMap((line, index) => line.startsWith('#') ? [index + 1] : []);
  return [];
}

if (process.argv.includes('--self-test')) {
  assert.deepEqual(inspect('x.ts', 'const r = /[//]/; const x = `${1 /* why */}`;'), [1]);
  assert.deepEqual(inspect('x.ts', 'const a={x:1 /* why */};'), [1]);
  assert.deepEqual(inspect('x.tsx', 'const C=()=> <div> // text {/* why */}</div>;'), [1]);
  assert.deepEqual(inspect('x.css', 'a{content:"/* literal */"} /* why */'), [1]);
  assert.deepEqual(inspect('x.yml', 'run: |\n  echo "# literal"\nname: CI # why'), [3]);
  assert.deepEqual(inspect('x.svg', '<svg><![CDATA[<!-- literal -->]]><!-- why --></svg>'), [1]);
  console.log('Comment syntax checks passed.');
} else {
  const files = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean);
  const failures = files.filter(file => file !== 'next-env.d.ts').flatMap(file => inspect(file, readFileSync(file, 'utf8')).map(line => `${file}:${line}`));
  if (failures.length) {
    console.error(`Comments forbidden (${failures.length}):\n${failures.join('\n')}`);
    process.exitCode = 1;
  } else {
    console.log('Comment ratchet: zero new comments; generated directives and fixed Biofilm attribution preserved.');
  }
}
