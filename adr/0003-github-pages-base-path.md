# GitHub Pages base path

## Context

GitHub Pages serves this repository under `/victor-aragao-site/`. Local development serves at the root.

## Decision

Read `NEXT_PUBLIC_BASE_PATH` for links and assets and `NEXT_PUBLIC_SITE_URL` for sitemap and robots URLs. The Pages workflow sets both values during export.

## Consequences

A custom domain or host migration must update the environment and public URL configuration together. Local development may keep an empty base path.
