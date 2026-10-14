# Growers Science Nutrients — Mockup independente

Mockup visual navegável da plataforma Growers Science Nutrients, preparado para subir diretamente na Vercel. O projeto é um site estático feito com **Vite + HTML + CSS + JavaScript**, sem dependência de Manus, banco de dados, backend, autenticação, checkout ou variáveis secretas.

A logo foi copiada para `public/assets/growers-science-logo.png` e a interface usa somente caminhos locais do próprio projeto. O visual inclui o hero científico do combo 4L, simulador PPM, calculador demonstrativo, Growers Companion, Academy e alternância PT/EN.

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior
- Conta na [Vercel](https://vercel.com/)
- Opcional: conta no GitHub para deploy automático por commit

## Rodar localmente

Na raiz do projeto:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Para validar exatamente o bundle de produção:

```bash
npm run build
npm run preview
```

O comando `npm run build` gera a pasta `dist/`. O comando `vite preview` serve essa pasta apenas para conferência local; ele não substitui um servidor de produção.

## Implantação pela interface da Vercel — recomendado

1. Crie um repositório no GitHub e envie todos os arquivos deste projeto para a branch `main`.
2. Acesse [vercel.com/new](https://vercel.com/new) e faça login.
3. Clique em **Add New Project** e importe o repositório.
4. Em **Framework Preset**, selecione **Vite** caso a detecção automática não aconteça.
5. Confirme as configurações abaixo:

   | Configuração | Valor |
   |---|---|
   | Root Directory | `.` (raiz do projeto) |
   | Install Command | `npm install` |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Node.js Version | `20.x` ou superior |
   | Environment Variables | Nenhuma |

6. Clique em **Deploy**.
7. Ao final, a Vercel exibirá uma URL `.vercel.app` para enviar ao cliente.
8. Use **Share** no painel da Vercel para copiar o link de revisão.

Cada novo push em `main` gera uma nova implantação de produção. Commits em outras branches ou pull requests geram URLs de preview independentes.

## Implantação pela Vercel CLI

Instale a CLI, faça login e execute na raiz do projeto:

```bash
npm install -g vercel
vercel login
vercel
```

Responda às perguntas iniciais:

- **Set up and deploy?** `Y`
- **Which scope?** escolha sua conta ou equipe
- **Link to existing project?** `N` na primeira implantação
- **Project name?** use, por exemplo, `growers-science-mockup`
- **In which directory is your code located?** `./`

Para publicar diretamente em produção:

```bash
vercel --prod
```

A saída da CLI mostrará a URL pública. A configuração `vercel.json` mantém o fallback para `index.html`, útil caso a interface ganhe rotas profundas no futuro.

## Domínio próprio

Depois do primeiro deploy:

1. Abra o projeto no dashboard da Vercel.
2. Entre em **Settings → Domains**.
3. Adicione o domínio desejado, por exemplo `growersscience.com.br` ou `www.growersscience.com.br`.
4. Copie os registros DNS indicados pela Vercel para o provedor do domínio.
5. Aguarde a validação e o certificado HTTPS automático.

## Estrutura principal

```text
.
├── index.html                 # Página completa do mockup
├── src/
│   ├── main.js                # Slider PPM, calculador, menu e PT/EN
│   └── styles.css             # Design system e responsividade
├── public/
│   └── assets/
│       └── growers-science-logo.png
├── package.json
├── package-lock.json
├── vercel.json                # Fallback de rota para index.html
└── .nvmrc
```

## Idiomas

O seletor `PT / EN` funciona no navegador e não depende de API ou servidor. A troca é feita no cliente e altera os textos principais, títulos, CTAs, microtextos dos cards, dashboard, Academy e rodapé. O idioma padrão é `pt-BR`.

## Observações para o cliente

Esta entrega é um **mockup front-end**. Os dados exibidos no calculador, VPD, rendimento, alertas e slider são demonstrativos. Ainda não existe processamento real de pedidos, PIX, Mercado Pago, Asaas, ViaCEP, Correios, QR code, login, catálogo ou persistência de cultivo.

A interface não usa endpoints da Manus nem caminhos `/manus-storage`. A única chamada externa opcional é o carregamento das fontes Google Fonts no CSS; existem fontes de fallback no sistema caso o CDN não esteja disponível.

## Referências oficiais

- [Vercel — Vite](https://vercel.com/docs/frameworks/frontend/vite)
- [Vite — Deploy de site estático](https://vite.dev/guide/static-deploy)
- [Vercel — Domínios](https://vercel.com/docs/domains/working-with-domains)

## Vitrine de combos

A home inclui uma vitrine visual com os combos informados para o mockup:

| Combo | Preço exibido |
|---|---:|
| 1 Liter Combo | $55 USD |
| 4 Liter Combo | $105 USD |
| 2x4 Liter Combo | $175 USD |
| 20 Liter Combo | $325 USD |
| 2x20 Liter Combo | $575 USD |
| 100 Liter Combo | $995 USD |
| 2x100 Liter Combo | $1630 USD |

Os botões **Buy Now** são demonstrativos nesta etapa. Ao clicar, exibem um estado temporário de confirmação, mas não iniciam pagamento nem checkout real.

O cabeçalho também exibe os mercados atendidos: Canadá, Brasil, Estados Unidos, União Europeia, Reino Unido, Austrália e México. As bandeiras são renderizadas localmente como parte da interface, sem dependência de API externa.

## Consultoria incluída

A vitrine informa que qualquer combo inclui uma consultoria individual por texto com o criador da fórmula, diretamente do Canadá. A comunicação não exige inglês e o mockup apresenta o benefício como orientação prática para aplicação do programa.

A imagem fornecida para o hero foi copiada para `public/assets/hero-growers-science.png` e aplicada como textura atmosférica fortemente desfocada, com baixa opacidade e alto escurecimento. O objetivo é manter uma referência visual científica sem deixar folhas, bandeiras, marca ou outros elementos específicos identificáveis.

## Benefício de plataforma incluído

O mockup informa que cada compra de fertilizante adiciona **seis meses de acesso gratuito** à plataforma Growers Science. O acesso inclui Academy, Growers Companion, Dosage Calculator e novos recursos futuros da plataforma. A área de consultoria também apresenta as bandeiras locais do Canadá e do Brasil na conexão `CA → BR`.
