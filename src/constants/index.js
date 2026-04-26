// ============================================================
//  NASCENTE ADVOCACIA — Arquivo Central de Constantes
//  Edite aqui para atualizar textos, dados e configurações.
// ============================================================

// ── Informações do escritório ────────────────────────────────
export const ESCRITORIO = {
  nome: 'Nascente Advocacia',
  slogan: 'Advocacia clara, próxima e comprometida',
  descricao:
    'Advocacia cível em Contagem/MG. Atendimento organizado e próximo nas áreas de Família, Consumidor, Previdenciário, Imobiliário, Trânsito e Contratos.',
  oab: 'OAB/MG 225.962',
  ano_fundacao: 2020,
}

// ── Contato ──────────────────────────────────────────────────
export const CONTATO = {
  whatsapp: '5531994566699',           // somente dígitos, com DDI
  whatsapp_display: '(31) 9 9456-6699',
  whatsapp_horario: 'Segunda a sexta, das 9h às 18h',
  email: 'advvictorianascente@gmail.com',
  endereco: {
    logradouro: 'Rua Monte Belo, nº 23',
    bairro: 'Industrial São Luiz',
    cidade: 'Contagem',
    estado: 'MG',
    cep: '',
  },
}

// ── SEO ──────────────────────────────────────────────────────
export const SEO = {
  titulo:
    'Nascente Advocacia | Advocacia Cível em Contagem, MG — Dra. Victoria Nascente',
  descricao:
    'Advocacia cível em Contagem/MG com atendimento claro e próximo. Família, Consumidor, Previdenciário, Imobiliário, Trânsito e Contratos. Dra. Victoria Gabriela Soares Nascente — OAB/MG 225.962.',
  url: 'https://nascenteadvocacia.com.br',
  og_image: 'https://nascenteadvocacia.com.br/og-image.jpg',
  twitter_handle: '@nascenteadv',
}

// ── Navegação ─────────────────────────────────────────────────
// Rótulos curtos para escaneabilidade no header
export const NAV_LINKS = [
  { label: 'O Escritório', href: '#escritorio' },
  { label: 'Atuação',      href: '#atuacao' },
  { label: 'A Advogada',   href: '#advogada' },
  { label: 'Conteúdo',     href: '#conteudo' },
  { label: 'Contato',      href: '#contato' },
]

// ── Seção Hero ────────────────────────────────────────────────
// Objetivo: criar identificação imediata + confiança + CTA claro.
// "Advocacia cível | Contagem, MG" = sinaliza especialidade e localidade
// para quem chega pelo Google. Subtítulo em linguagem do cliente, não do advogado.
export const HERO = {
  label: 'Advocacia Cível · Contagem e Região',
  titulo_normal: 'Clareza e organização',
  titulo_destaque: 'em cada etapa do seu caso',
  subtitulo:
    'Dúvidas jurídicas geram insegurança. Na Nascente Advocacia, você recebe orientação direta, acompanhamento próximo e sabe exatamente o que está acontecendo — do primeiro contato ao encerramento.',
  cta_primario:   { label: 'Falar pelo WhatsApp', href: '#contato' },
  cta_secundario: { label: 'Conhecer o escritório', href: '#escritorio' },
  // Citação curta, impactante, sem prometer resultado
  citacao: '"Entender seus direitos é o primeiro passo para exercê-los."',
}

// ── Seção Sobre ───────────────────────────────────────────────
// UX: dois parágrafos curtos > um longo. Pilares = âncoras visuais de escaneabilidade.
// Foco: o QUE o cliente ganha, não o que o escritório é.
export const SOBRE = {
  label: 'O Escritório',
  titulo: 'Advocacia que você consegue acompanhar',
  paragrafo1:
    'Questões jurídicas costumam surgir em momentos delicados — e a última coisa que alguém precisa é de respostas vagas ou processos que parecem caixas-pretas. Na Nascente Advocacia, o atendimento é organizado para que você entenda cada decisão e cada etapa do seu caso.',
  paragrafo2:
    'Atuamos nas principais áreas do direito cível, com foco em Família e Sucessões, Consumidor, Previdenciário, Imobiliário, Trânsito e Contratos. Cada caso é tratado com atenção individual — sem atalhos, sem descaso.',
  pilares: [
    {
      titulo: 'Clareza',
      descricao: 'Você entende o que está acontecendo no seu caso, sempre',
    },
    {
      titulo: 'Organização',
      descricao: 'Prazos, documentos e etapas sob controle, do início ao fim',
    },
    {
      titulo: 'Proximidade',
      descricao: 'Atendimento acessível, sem intermediários e sem distância',
    },
  ],
}

// ── Áreas de Atuação ─────────────────────────────────────────
// UX: descrições focadas no problema do cliente, não na lista técnica.
// "O que você pode resolver aqui?" — essa é a pergunta que cada card responde.
// Ordem: mais buscadas primeiro (Família, Consumidor, Previdenciário).
export const AREAS = [
  {
    icone: '⚖',
    titulo: 'Família e Sucessões',
    descricao:
      'Divórcio, guarda de filhos, pensão alimentícia, inventário e partilha de bens. Assessoria cuidadosa em momentos que exigem tanto sensibilidade quanto rigor.',
    aria: 'Família e Sucessões',
  },
  {
    icone: '📋',
    titulo: 'Direito do Consumidor',
    descricao:
      'Cobranças indevidas, negativações irregulares, contratos abusivos e problemas com produtos ou serviços. Defesa dos seus direitos de forma extrajudicial ou judicial.',
    aria: 'Direito do Consumidor',
  },
  {
    icone: '🏛',
    titulo: 'Direito Previdenciário',
    descricao:
      'Aposentadoria, auxílio-doença, BPC/LOAS, pensão por morte e revisão de benefícios. Orientação no pedido e defesa em caso de negativa do INSS.',
    aria: 'Direito Previdenciário',
  },
  {
    icone: '🏠',
    titulo: 'Direito Imobiliário',
    descricao:
      'Compra, venda, locação, usucapião, distrato e regularização de imóveis. Análise contratual e assessoria em todas as etapas da negociação.',
    aria: 'Direito Imobiliário',
  },
  {
    icone: '💸',
    titulo: 'Juros e Contratos Abusivos',
    descricao:
      'Revisão de empréstimos, financiamentos e cartões com juros acima do permitido. Análise de cláusulas abusivas e atuação para reequilíbrio contratual.',
    aria: 'Juros e Contratos Abusivos',
  },
  {
    icone: '🚗',
    titulo: 'Direito de Trânsito',
    descricao:
      'Recursos contra multas, suspensão de CNH, cassação de habilitação e ações envolvendo acidentes de trânsito. Defesa administrativa e judicial.',
    aria: 'Direito de Trânsito',
  },
  {
    icone: '📜',
    titulo: 'Direito Civil',
    descricao:
      'Contratos entre particulares, indenizações, responsabilidade civil, cobranças e questões patrimoniais regidas pelo Código Civil.',
    aria: 'Direito Civil',
  },
  {
    icone: '📁',
    titulo: 'Revisão de Contratos',
    descricao:
      'Análise de contratos de adesão, cláusulas leoninas e encargos em desacordo com a lei. Identificação de irregularidades antes ou após a assinatura.',
    aria: 'Revisão de Contratos',
  },
]

// ── Advogada ──────────────────────────────────────────────────
// UX: título em 3ª pessoa + foco em postura e abordagem, não em credenciais genéricas.
// Credenciais funcionam como prova social objetiva — listadas de forma direta.
export const ADVOGADA = {
  label: 'A Advogada',
  nome: 'Dra. Victoria Gabriela Soares Nascente',
  nome_curto: 'Dra. Victoria Nascente',
  oab_display: 'OAB/MG 225.962',
  titulo_secao: 'Atenção às pessoas, não apenas aos processos',
  paragrafo1:
    'A Dra. Victoria Nascente construiu sua atuação em torno de uma premissa simples: o cliente precisa entender o que está acontecendo com o próprio caso. Por isso, o atendimento prioriza comunicação direta, prazos cumpridos e respostas acessíveis — sem jargão desnecessário.',
  paragrafo2:
    'Com atuação nas principais áreas do direito cível, atende pessoas físicas em Contagem e na região metropolitana de Belo Horizonte, oferecendo também atendimento remoto em todo o país.',
  formacao: [
    'Inscrita na OAB/MG sob o nº 225.962',
    'Atuação em Direito Cível: Família, Consumidor, Previdenciário, Imobiliário, Trânsito e Contratos',
    'Atendimento presencial em Contagem/MG e remoto para toda Minas Gerais',
  ],
}

// ── Artigos ───────────────────────────────────────────────────
// UX: títulos em formato "problema ou situação real" — como o cliente pesquisa no Google.
// Resumos respondem à pergunta implícita do leitor, sem prometer resultado.
export const ARTIGOS = [
  {
    categoria: 'Família e Sucessões',
    titulo: 'Guarda dos filhos após o divórcio: como funciona na prática',
    resumo:
      'Guarda compartilhada, guarda unilateral, pensão alimentícia — entenda o que a lei prevê e como cada arranjo afeta o dia a dia das famílias.',
    data: 'Março 2025',
    href: '#',
  },
  {
    categoria: 'Direito do Consumidor',
    titulo: 'Nome negativado indevidamente: o que a lei garante e o que você pode fazer',
    resumo:
      'A inclusão irregular em cadastros de inadimplentes gera direito a cancelamento e, em alguns casos, a indenização por danos morais. Entenda os requisitos.',
    data: 'Fevereiro 2025',
    href: '#',
  },
  {
    categoria: 'Direito Previdenciário',
    titulo: 'BPC/LOAS: quem tem direito, como pedir e o que fazer em caso de negativa',
    resumo:
      'O benefício assistencial é frequentemente negado por questões formais. Saiba quais são os critérios legais e como recorrer administrativamente.',
    data: 'Janeiro 2025',
    href: '#',
  },
]

// ── Seção Contato ─────────────────────────────────────────────
// UX: título convida sem pressionar. Subtítulo reduz a fricção ("é simples").
// Avisos legais curtos, diretos e no lugar certo — não intimidam, informam.
export const SECAO_CONTATO = {
  label: 'Entre em Contato',
  titulo: 'Tire suas dúvidas sem compromisso',
  subtitulo:
    'O primeiro passo é simples: conte sua situação. A partir daí, orientamos sobre o que é possível fazer juridicamente e como o atendimento pode acontecer.',
  aviso_lgpd:
    'Todas as informações são tratadas com sigilo, conforme o Código de Ética da OAB e a LGPD.',
  aviso_mandato:
    'O contato inicial não estabelece relação advocatícia. O aceite do caso depende de análise prévia.',
}

// ── Footer ────────────────────────────────────────────────────
export const FOOTER = {
  aviso_oab:
    'Publicidade em conformidade com o Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do Conselho Federal da OAB. As informações deste site têm caráter informativo e não constituem aconselhamento jurídico nem estabelecem relação advogado-cliente.',
  links: [
    { label: 'O Escritório', href: '#escritorio' },
    { label: 'Atuação',      href: '#atuacao' },
    { label: 'A Advogada',   href: '#advogada' },
    { label: 'Contato',      href: '#contato' },
  ],
}

// ── Formulário de contato — áreas disponíveis ─────────────────
// Ordem alinhada com a prioridade das áreas de atuação
export const FORM_AREAS = [
  'Família e Sucessões',
  'Direito do Consumidor',
  'Direito Previdenciário',
  'Direito Imobiliário',
  'Juros e Contratos Abusivos',
  'Direito de Trânsito',
  'Direito Civil',
  'Revisão de Contratos',
  'Outro assunto',
]
