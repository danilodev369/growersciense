# Deploy na Vercel — Growers Science Nutrients

Este projeto é um mockup estático Vite. Não usa Manus, backend, banco, autenticação, APIs ou variáveis de ambiente.

## Opção 1 — GitHub + Vercel

1. Envie a pasta para um repositório GitHub.
2. Abra [vercel.com/new](https://vercel.com/new).
3. Importe o repositório.
4. Configure:

   - **Framework Preset:** `Vite`
   - **Root Directory:** `.`
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Node.js:** `20.x` ou superior
   - **Environment Variables:** nenhuma

5. Clique em **Deploy**.
6. Compartilhe a URL `.vercel.app` criada pela Vercel.

Pushes na branch de produção geram novos deploys. Pull requests e branches de trabalho geram URLs de preview.

## Opção 2 — Vercel CLI

No terminal, dentro da raiz do projeto:

```bash
npm install
npm run build
npm install -g vercel
vercel login
vercel
```

Na primeira execução, aceite a criação do projeto. Para publicar em produção:

```bash
vercel --prod
```

## Conferência antes do deploy

```bash
npm install
npm run build
npm run preview
```

Abra a URL local informada pelo Vite e confirme:

- hero e combo 4L aparecem corretamente;
- logo carrega a partir de `public/assets/growers-science-logo.png`;
- seletor `PT / EN` troca os textos;
- slider PPM e calculador respondem;
- layout funciona no celular.

## Domínio personalizado

No dashboard do projeto, acesse **Settings → Domains → Add**. Informe o domínio e crie no provedor DNS os registros que a Vercel solicitar. O HTTPS é provisionado automaticamente após a validação.

## Sem dependência Manus

A aplicação usa somente arquivos próprios do repositório. Não há chamadas para `/manus-storage`, endpoints da Manus ou configuração de projeto Manus. A fonte visual é carregada do Google Fonts quando disponível, com fallback local no CSS.

## Referências oficiais

- [Vercel — Vite](https://vercel.com/docs/frameworks/frontend/vite)
- [Vite — Deploy estático](https://vite.dev/guide/static-deploy)
- [Vercel — Domínios](https://vercel.com/docs/domains/working-with-domains)
