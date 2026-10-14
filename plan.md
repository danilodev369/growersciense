# Growers Science Nutrients — Mockup

## Objetivo
Criar uma primeira versão visual navegável da plataforma Growers Science Nutrients, usando a logo fornecida e traduzindo o briefing de “Cybernetic Agronomy & Deep Plant Science” para uma home premium em pt-BR. Esta etapa é demonstrativa: não inclui checkout, pagamentos, autenticação, banco, APIs ou backend.

## Direção de design
- **Movimento:** Cybernetic Agronomy / biohacking editorial: ciência vegetal apresentada como um sistema vivo, técnico e sensorial.
- **Princípios:** contraste alto com áreas de respiro; dados como evidência e não decoração; superfícies glass com bordas luminosas; navegação em trilho com âncoras internas.
- **Paleta:** preto carbono e verde floresta criam foco e confiança; verde-lima é o ativo próprio da marca; ciano sinaliza instrumentação e dados; âmbar marca etapas e alertas.
- **Layout:** composição assimétrica, hero dividido entre manifesto e “lab stage”, seguido por faixas de prova e painéis modulares que lembram um console de cultivo.
- **Assinaturas:** grade técnica quase invisível; partículas/íons luminosos; anéis de VPD e marcadores de fase em forma de cápsula.
- **Interação:** controles aparecem como instrumentos científicos: o slider PPM altera estado, cor e métrica do laboratório; CTAs rolam para áreas relevantes; menu mobile abre sem deslocar o conteúdo.
- **Animação:** órbitas lentas, pulso de glows, entrada escalonada e transições de 180–650ms. Respeitar `prefers-reduced-motion`.
- **Tipografia:** Space Grotesk / Inter como sans geométrica para display e UI; labels em caixa alta com tracking amplo; números com peso forte para transmitir medição.
- **Essência:** fertilização premium baseada em 35 anos de ciência canábica para growers que querem mais controle, rendimento e rastreabilidade.
- **Personalidade:** precisa, futurista, confiante.
- **Voz:** direta, técnica e sem promessas genéricas. Exemplos: “A ciência por trás de cada litro.” e “Ajuste o cultivo. Não o palpite.”
- **Wordmark/logo:** preservar a marca enviada como ativo principal; o símbolo de béquer + planta + DNA funciona como selo de laboratório e origem científica.
- **Cor proprietária:** `#B6FF28`, verde-lima elétrico da Growers Science.

## Estrutura do mockup
- `index.html`: casca semântica e conteúdo da home.
- `src/styles.css`: design system, responsividade, glassmorphism e animações.
- `src/main.js`: interações do slider PPM, calculador visual, menu mobile e navegação.

## Limites desta entrega
A interface simula estados e dados com valores de demonstração. A implementação futura pode conectar os módulos a catálogo, pagamentos brasileiros, autenticação, PWA, rastreabilidade por QR e dados de cultivo sem alterar a direção visual.

## Revisão visual aprovada
O cabeçalho agora expõe um seletor PT/EN, com troca client-side dos principais textos da home, microtextos dos módulos, CTA, rodapé e `lang` do documento. A direção visual permanece orientada a produto: o hero dá prioridade ao combo 4L e aos sinais de rendimento, enquanto os painéis seguintes sustentam a narrativa científica.

## Revisão de leveza visual
A referência comercial analisada usa superfícies claras como áreas de descanso e concentra a cor forte nos elementos de ação. O mockup passa a usar uma composição híbrida: o hero permanece escuro, com a imagem botânica e o verde neon como assinatura científica; header, vitrine de combos, calculador, prova e módulos usam branco quente, verde muito claro, bordas suaves e sombras mais discretas para melhorar leitura, escaneabilidade e conforto.

## Consultoria e tratamento de imagem
A vitrine comunica que qualquer combo inclui consultoria individual por texto com o criador da fórmula, diretamente do Canadá, sem necessidade de falar inglês. A imagem de referência fornecida pelo usuário foi incorporada como asset local e neutralizada com desfoque, baixa opacidade, recorte e véus escuros para funcionar como atmosfera científica institucional, sem evidências visuais identificáveis.
