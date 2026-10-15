# Site do Victor Aragão

Site pessoal — cientista e cirurgião-dentista. Next.js (exportação estática), publicado no GitHub Pages.

**No ar:** https://luisroquette-labs.github.io/victor-aragao-site/

Um presente. O código é seu: pode editar, mudar de hospedagem ou apontar um domínio próprio quando quiser.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

## Como ele é publicado

A cada `git push` na branch `main`, o GitHub Actions compila o site e publica no GitHub Pages automaticamente (`.github/workflows/deploy.yml`). Você não precisa fazer nada além de dar push.

## Editar o conteúdo

Tudo fica em arquivos de texto simples:

- `app/content.ts` — nome, bio, serviços, estatísticas, FAQ, trajetória, contatos.
- `app/posts.ts` — os artigos do blog.
- `public/victor.jpg` — a foto do hero (troque por uma em alta resolução quando quiser).

## Usar um domínio próprio

1. Compre o domínio (ex.: `victoraragao.com.br`).
2. Em `Settings → Pages → Custom domain` do repositório, aponte para ele.
3. Remova o `basePath` do `next.config.mjs` (com domínio próprio o site passa a servir na raiz).

## Elementos do site

- Hero com rede de biofilme viva e interativa (`components/Biofilm.tsx`)
- Estatísticas animadas, marquee de termos, bento de pesquisa, timeline, FAQ
- Blog com 4 artigos de divulgação científica
- Páginas: início, `/sobre`, `/pesquisa`, `/blog`
- `sitemap.xml` e `robots.txt` gerados automaticamente

## Ainda a confirmar/atualizar

Os textos de serviços e alguns dados (mestrado, cidade, e-mail de contato) foram um ponto de partida inferido do perfil público. Ajuste em `app/content.ts` para refletir exatamente o que você oferece. As credenciais e publicações são reais.
