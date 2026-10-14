import './styles.css';
import './shop.css';
import './light-theme.css';

const stageSlider = document.querySelector('#stageSlider');
const stageLabels = [...document.querySelectorAll('[data-stage-label]')];
const readouts = {
  ppm: document.querySelector('[data-readout="ppm"]'),
  absorption: document.querySelector('[data-readout="absorption"]'),
  stage: document.querySelector('[data-readout="stage"]'),
  stageChip: document.querySelector('[data-readout="stageChip"]'),
  nutrient: document.querySelector('[data-readout="nutrient"]'),
  fact: document.querySelector('[data-readout="fact"]'),
  flow: document.querySelector('[data-readout="flow"]'),
};

const stages = [
  { name: 'VEG STAGE', ppm: '200', absorption: '94.8', nutrient: 'Nitrogênio estrutural', fact: 'folhagem vigorosa e raiz ativa', flow: 'Fluxo iônico acelerado', chip: '200 PPM N', fill: '0%' },
  { name: 'TRANSITION STAGE', ppm: '150', absorption: '88.4', nutrient: 'Equilíbrio N · P · K', fact: 'transição limpa para a floração', flow: 'Fluxo iônico calibrado', chip: '150 PPM N', fill: '50%' },
  { name: 'BLOOM STAGE', ppm: '100', absorption: '82.1', nutrient: 'Fósforo + Potássio', fact: 'energia direcionada à floração', flow: 'Fluxo iônico concentrado', chip: '100 PPM N', fill: '100%' },
];
let currentLanguage = 'pt';
const stageText = {
  pt: [
    { name: 'VEG STAGE', nutrient: 'Nitrogênio estrutural', fact: 'folhagem vigorosa e raiz ativa', flow: 'Fluxo iônico acelerado' },
    { name: 'TRANSITION STAGE', nutrient: 'Equilíbrio N · P · K', fact: 'transição limpa para a floração', flow: 'Fluxo iônico calibrado' },
    { name: 'BLOOM STAGE', nutrient: 'Fósforo + Potássio', fact: 'energia direcionada à floração', flow: 'Fluxo iônico concentrado' },
  ],
  en: [
    { name: 'VEG STAGE', nutrient: 'Structural nitrogen', fact: 'vigorous foliage and active roots', flow: 'Accelerated ion flow' },
    { name: 'TRANSITION STAGE', nutrient: 'N · P · K balance', fact: 'a clean transition into bloom', flow: 'Calibrated ion flow' },
    { name: 'BLOOM STAGE', nutrient: 'Phosphorus + potassium', fact: 'energy directed to flowering', flow: 'Concentrated ion flow' },
  ],
};

function updateStage(value) {
  const stage = stages[Number(value)];
  readouts.ppm.innerHTML = `${stage.ppm} <small>PPM N</small>`;
  readouts.absorption.innerHTML = `${stage.absorption}<small>%</small>`;
  readouts.stage.textContent = stageText[currentLanguage][Number(value)].name;
  readouts.stageChip.innerHTML = `${stage.chip} <span class="live-dot"></span>`;
  readouts.nutrient.textContent = stageText[currentLanguage][Number(value)].nutrient;
  readouts.fact.textContent = stageText[currentLanguage][Number(value)].fact;
  readouts.flow.textContent = stageText[currentLanguage][Number(value)].flow;
  document.querySelector('[data-track-fill]').style.width = stage.fill;
  stageLabels.forEach((label, index) => label.classList.toggle('active', index === Number(value)));
  document.body.dataset.stage = value;
}

stageSlider?.addEventListener('input', (event) => updateStage(event.target.value));
stageLabels.forEach((label) => label.addEventListener('click', () => {
  stageSlider.value = label.dataset.stageLabel;
  updateStage(label.dataset.stageLabel);
}));

const reservoirSlider = document.querySelector('#reservoirSlider');
const reservoirValue = document.querySelector('#reservoirValue');
const doseVeg = document.querySelector('[data-dose="veg"]');
const doseBloom = document.querySelector('[data-dose="bloom"]');
const doseEC = document.querySelector('[data-dose="ec"]');
const phases = [...document.querySelectorAll('[data-phase]')];
const phaseValues = {
  'Early Veg': { veg: 0.4, bloom: 0, ec: '1.2' },
  'Peak Veg': { veg: 0.6, bloom: 0, ec: '1.5' },
  Transition: { veg: 0.45, bloom: 0.25, ec: '1.7' },
  'Early Bloom': { veg: 0.22, bloom: 0.62, ec: '1.8' },
};
let activePhase = 'Early Veg';

function updateCalculator() {
  const liters = Number(reservoirSlider.value);
  const phase = phaseValues[activePhase];
  reservoirValue.value = liters;
  doseVeg.value = Math.round(liters * phase.veg);
  doseBloom.value = Math.round(liters * phase.bloom);
  doseEC.innerHTML = `${phase.ec} <span>mS/cm</span>`;
}
reservoirSlider?.addEventListener('input', updateCalculator);
phases.forEach((button) => button.addEventListener('click', () => {
  activePhase = button.dataset.phase;
  phases.forEach((item) => item.classList.toggle('selected', item === button));
  updateCalculator();
}));
document.querySelector('[data-calc-action]')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const original = button.innerHTML;
  button.innerHTML = 'Ciclo estimado · 10 semanas <span>✓</span>';
  button.style.color = 'var(--cyan)';
  window.setTimeout(() => { button.innerHTML = original; button.style.color = ''; }, 2200);
});

const menuToggle = document.querySelector('[data-menu-toggle]');
const header = document.querySelector('[data-header]');
menuToggle?.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.desktop-nav a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  menuToggle?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const languageCopy = {
  pt: {
    topline: 'Plataforma em preview · Ciência aplicada ao cultivo', nav: ['A ciência', 'Dosagem', 'Companion', 'Academy', 'Combos'], combo: 'Ver combo', simulate: 'Simular mistura',
    eyebrow: '35 anos de pesquisa · 1.600 L de precisão', title: 'O cultivo evolui<br /><em>quando a ciência</em><br />entra na raiz.', lead: 'Nutrição concentrada, mensurável e criada para quem não aceita cultivar no escuro.', heroButtons: ['Explore Science', 'Ver Combo 4L'], meta: ['combo concentrado', 'R$/L diluído', 'rastreável'],
    stageKicker: 'Calibre seu cultivo', stageTitle: 'A planta responde.<br /><span>Você controla.</span>', stageLead: 'Simule a curva de nitrogênio e veja como o sistema Growers Science acompanha cada fase do ciclo.', stageNote: '3D fallback ativo · modo 2D',
    proofIntro: 'Ciência que cabe no reservatório', proofSmall: ['de solução ativa<br />por combo', 'custo diluído<br />Growers Science', 'marcas importadas<br />tradicionais', 'anos<br />de pesquisa'],
    modulesKicker: 'Sistema Growers Science', modulesTitle: 'Um ecossistema<br /><em>para cultivar melhor.</em>', modulesLead: 'Da primeira mistura ao último dia do ciclo, a plataforma transforma informação em decisão.', cardDesc: ['A proporção exata para o seu reservatório, sem tentativa e erro.', 'Seu cultivo em uma leitura: logs, VPD e alertas na hora certa.', 'Microcursos para entender o que acontece depois da mistura.'], reservoir: 'Reservatório', calcButton: 'Calcular próximo ciclo', calcSuccess: 'Ciclo estimado · 10 semanas', currentPhase: 'FASE ATUAL', week: 'Semana 05 / 10', ideal: 'ideal', alert: ['Transição se aproxima', 'Reduza para 150 PPM N em 2 dias'], courses: ['Curva do Nitrogênio', 'Micro-elementos quelatados', 'VPD & irrigação'], progress: 'Seu progresso', modules: '01 / 03 módulos',
    shopKicker: 'Escolha sua escala', shopTitle: 'Ciência para<br /><em>cada cultivo.</em>', shopLead: 'Concentrados completos, sem suplementos adicionais. Escolha o volume ideal para o seu ciclo.', shopNote: 'Preços exibidos em USD · checkout será conectado na próxima etapa', buyNow: 'Buy Now', buySoon: 'Checkout em breve', consultKicker: 'BENEFÍCIO INCLUÍDO EM TODOS OS COMBOS', consultTitle: 'Seu cultivo acompanhado por quem desenvolveu a fórmula.', consultText: 'Ao adquirir qualquer combo, você recebe uma consultoria individual por texto com o criador da fórmula, diretamente do Canadá. Não é necessário falar inglês: a comunicação é feita por mensagens e você recebe orientação prática para aplicar o programa com segurança.', platformKicker: 'ACESSO INCLUÍDO EM CADA COMPRA', platformTitle: 'Seu combo também abre a plataforma Growers Science.', platformText: 'Cada compra adiciona seis meses de uso gratuito, com acesso à Academy, Growers Companion, Dosage Calculator e todos os novos recursos que forem incorporados à plataforma.', platformList: ['Academy', 'Companion', 'Dosage', 'Updates'],
    ctaEyebrow: 'Pronto para sair do escuro?', ctaTitle: 'Ajuste o cultivo.<br /><em>Não o palpite.</em>', ctaButton: 'Explorar o Combo 4L', footerTag: 'Plantas mais fortes<br />com base na ciência.', footerLine: 'Feito para growers que medem o impossível.'
  },
  en: {
    topline: 'Preview platform · Science applied to cultivation', nav: ['The science', 'Dosage', 'Companion', 'Academy', 'Combos'], combo: 'View combo', simulate: 'Simulate mix',
    eyebrow: '35 years of research · 1,600 L of precision', title: 'Cultivation evolves<br /><em>when science</em><br />reaches the root.', lead: 'Concentrated, measurable nutrition made for growers who refuse to cultivate in the dark.', heroButtons: ['Explore Science', 'View 4L Combo'], meta: ['concentrated combo', 'R$/diluted L', 'traceable'],
    stageKicker: 'Tune your cultivation', stageTitle: 'The plant responds.<br /><span>You control.</span>', stageLead: 'Simulate the nitrogen curve and see how the Growers Science system follows every stage of the cycle.', stageNote: '3D fallback active · 2D mode',
    proofIntro: 'Science that fits the reservoir', proofSmall: ['of active solution<br />per combo', 'diluted cost<br />Growers Science', 'traditional imported<br />brands', 'years<br />of research'],
    modulesKicker: 'Growers Science system', modulesTitle: 'An ecosystem<br /><em>to grow better.</em>', modulesLead: 'From the first mix to the final day of the cycle, the platform turns information into decisions.', cardDesc: ['The exact ratio for your reservoir, without trial and error.', 'Your grow in one read: logs, VPD and timely alerts.', 'Micro-courses to understand what happens after the mix.'], reservoir: 'Reservoir', calcButton: 'Calculate next cycle', calcSuccess: 'Estimated cycle · 10 weeks', currentPhase: 'CURRENT PHASE', week: 'Week 05 / 10', ideal: 'ideal', alert: ['Transition is near', 'Reduce to 150 PPM N in 2 days'], courses: ['Understanding Nitrogen Curves', 'Chelated Micro-elements', 'VPD & irrigation'], progress: 'Your progress', modules: '01 / 03 modules',
    shopKicker: 'Choose your scale', shopTitle: 'Science for<br /><em>every grow.</em>', shopLead: 'Complete concentrates with no additional supplements. Choose the volume that fits your cycle.', shopNote: 'Prices shown in USD · checkout will be connected in the next step', buyNow: 'Buy Now', buySoon: 'Checkout soon', consultKicker: 'INCLUDED WITH EVERY COMBO', consultTitle: 'Guidance from the person who developed the formula.', consultText: 'Every combo includes a private text consultation with the formula creator, directly from Canada. No English is required: communicate by message and receive practical guidance to apply the program with confidence.', platformKicker: 'ACCESS INCLUDED WITH EVERY PURCHASE', platformTitle: 'Your combo also unlocks the Growers Science platform.', platformText: 'Every purchase adds six months of free access to Academy, Growers Companion, Dosage Calculator and every new feature added to the platform.', platformList: ['Academy', 'Companion', 'Dosage', 'Updates'],
    ctaEyebrow: 'Ready to leave the dark?', ctaTitle: 'Tune the grow.<br /><em>Not the guess.</em>', ctaButton: 'Explore the 4L Combo', footerTag: 'Stronger plants<br />backed by science.', footerLine: 'Built for growers who measure the impossible.'
  },
};

function setTexts(selector, values, html = false) {
  [...document.querySelectorAll(selector)].forEach((element, index) => {
    const value = values[index] ?? values[0];
    if (html) element.innerHTML = value; else element.textContent = value;
  });
}

function applyLanguage(language) {
  currentLanguage = language;
  const copy = languageCopy[language];
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US';
  document.title = language === 'pt' ? 'Growers Science Nutrients — Ciência aplicada ao cultivo' : 'Growers Science Nutrients — Science applied to cultivation';
  document.querySelector('.topline').lastChild.textContent = ` ${copy.topline}`;
  setTexts('.desktop-nav a', copy.nav); setTexts('.text-link', [copy.combo]); setTexts('.header-actions .button-small', [`${copy.simulate} <span>↗</span>`], true);
  setTexts('.hero-copy .eyebrow', [`<span class="eyebrow-line"></span> ${copy.eyebrow}`], true); setTexts('#hero-title', [copy.title], true); setTexts('.hero-lead', [copy.lead]); setTexts('.hero-actions .button', [`${copy.heroButtons[0]} <span>↗</span>`, `${copy.heroButtons[1]} <span>↓</span>`], true); setTexts('.meta-label', copy.meta);
  setTexts('.stage-control .section-kicker', [`<span>01</span> ${copy.stageKicker}`], true); setTexts('#stage-title', [copy.stageTitle], true); setTexts('.control-heading p', [copy.stageLead]); setTexts('.stage-note', [`<span class="live-dot"></span> ${copy.stageNote}`], true); setTexts('.stage-facts>div:nth-child(2) small', [language === 'pt' ? 'absorção visualizada em tempo real' : 'absorption visualized in real time']);
  setTexts('.proof-intro span:last-child', [copy.proofIntro]); setTexts('.proof-stat small, .proof-vs small, .proof-badge small', copy.proofSmall, true);
  setTexts('.shop-section .section-kicker', [`<span>02</span> ${copy.shopKicker}`], true); setTexts('#shop-title', [copy.shopTitle], true); setTexts('.shop-heading p', [copy.shopLead]); setTexts('.shop-note', [`<span class="live-dot"></span> ${copy.shopNote}`], true); setTexts('.product-buy', [`${copy.buyNow} <span>↗</span>`], true); setTexts('.consulting-kicker', [copy.consultKicker]); setTexts('.consulting-benefit h3', [copy.consultTitle]); setTexts('.consulting-benefit p', [copy.consultText]); setTexts('.platform-benefit .consulting-kicker', [copy.platformKicker]); setTexts('.platform-benefit h3', [copy.platformTitle]); setTexts('.platform-benefit p', [copy.platformText]); setTexts('.platform-benefit-list span', copy.platformList); setTexts('.modules .section-kicker', [`<span>04</span> ${copy.modulesKicker}`], true); setTexts('#modules-title', [copy.modulesTitle], true); setTexts('.modules-heading p', [copy.modulesLead]); setTexts('.card-desc', copy.cardDesc);
  setTexts('.calc-field span', [copy.reservoir]); setTexts('[data-calc-action]', [`${copy.calcButton} <span>↗</span>`], true); setTexts('.calc-output small', language === 'pt' ? ['VEG A / B', 'BLOOM A / B', 'ALVO EC'] : ['VEG A / B', 'BLOOM A / B', 'TARGET EC']); setTexts('.calc-output strong span', language === 'pt' ? ['cada', 'cada', 'mS/cm'] : ['each', 'each', 'mS/cm']); setTexts('.plant-stat .mini-label', [copy.currentPhase]); setTexts('.plant-stat small', [copy.week]); setTexts('.vpd-dial>b', [copy.ideal]); setTexts('.alert-row b, .alert-row small', copy.alert); setTexts('.dashboard-bar b', [language === 'pt' ? 'Meu ciclo #04' : 'My cycle #04']); setTexts('.day-pill', [`${language === 'pt' ? 'DIA 32' : 'DAY 32'} <i></i>`], true);
  setTexts('.course-row b', copy.courses); setTexts('.course-row small', language === 'pt' ? ['06:42 · fundamentos', '08:18 · avançado', '05:30 · ambiente'] : ['06:42 · fundamentals', '08:18 · advanced', '05:30 · environment']); setTexts('.academy-progress span', [copy.progress]); setTexts('.academy-progress strong', [copy.modules]); setTexts('.modules .section-kicker', [`<span>02</span> ${copy.modulesKicker}`], true); setTexts('.cta-section .eyebrow', [copy.ctaEyebrow]); setTexts('.cta-section h2', [copy.ctaTitle], true); setTexts('.cta-section .button', [`${copy.ctaButton} <span>↗</span>`], true); setTexts('.footer-main p', [copy.footerTag], true); setTexts('.footer-links a', language === 'pt' ? ['A ciência', 'Dosagem', 'Companion', 'Academy'] : ['The science', 'Dosage', 'Companion', 'Academy']); setTexts('.footer-bottom span:nth-child(2)', [copy.footerLine]); setTexts('.footer-bottom span:nth-child(3)', [language === 'pt' ? 'PT-BR <i>·</i> BRASIL' : 'EN-US <i>·</i> BRAZIL'], true);
  document.querySelectorAll('[data-language]').forEach((button) => { const active = button.dataset.language === language; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  updateStage(stageSlider.value);
}

document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));

document.querySelectorAll('.product-buy').forEach((button) => button.addEventListener('click', () => {
  const original = button.innerHTML;
  button.innerHTML = `${languageCopy[currentLanguage].buySoon} <span>✓</span>`;
  button.classList.add('is-selected');
  window.setTimeout(() => { button.innerHTML = original; button.classList.remove('is-selected'); }, 2200);
}));

updateStage(0);
updateCalculator();
