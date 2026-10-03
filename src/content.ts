// Todo o texto e os dados do site ficam aqui: trocar uma frase, um link ou um projeto
// é editar este arquivo, sem mexer nos componentes.
// Fonte: o portfólio atual (Desktop/portfolio/index.html) — bio, experiência, projetos e contatos.

export const profile = {
  name: 'Arthur Niceas',
  city: 'Recife, PE — BR',
  year: 2026,
};

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export const hero = {
  // Duas partes: no celular elas quebram em duas linhas (fonte bem maior); de sm para cima ficam numa só.
  greeting: ['Oi, sou o', 'arthur'] as [string, string],
  tagline: 'front-end dev que transforma layouts em interfaces rápidas e acessíveis',
  cta: { label: 'Fale comigo', href: '#contato' },
  photo: { webp: '/img/arthur.webp', jpg: '/img/arthur.jpg', alt: 'Foto de Arthur Niceas' },
};

export const about = {
  heading: 'Sobre mim',
  text: 'Sou Arthur Niceas, estudante de Ciência da Computação (UNINASSAU) e desenvolvedor front-end em Recife. Transformo layouts em interfaces limpas, responsivas e acessíveis, sempre de olho em performance e SEO. Já coloquei sites reais em produção e busco um estágio para crescer em um time forte rumo ao full-stack com Next.js.',
  decorations: [
    { src: '/img/3d/moon.webp', className: 'left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]', delay: 0.1, x: -80 },
    { src: '/img/3d/smile.webp', className: 'bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]', delay: 0.25, x: -80 },
    { src: '/img/3d/lego.webp', className: 'right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]', delay: 0.15, x: 80 },
    { src: '/img/3d/cursor.webp', className: 'bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]', delay: 0.3, x: 80 },
  ],
};

// Primeira fileira do marquee: prints reais dos projetos (a segunda é a stack, em data/tech.ts).
export const showcase = [
  { src: '/img/work/tile-01.webp', alt: 'Nutri Lab Brasil — página inicial' },
  { src: '/img/work/tile-02.webp', alt: 'Super Doc Robô — tela de login' },
  { src: '/img/work/tile-03.webp', alt: 'Nutri Lab Brasil — catálogo' },
  { src: '/img/work/tile-04.webp', alt: 'Super Doc Robô — pasta pronta para envio' },
  { src: '/img/work/tile-05.webp', alt: 'Nutri Lab Brasil — página de produto' },
  { src: '/img/work/tile-06.webp', alt: 'Super Doc Robô — pasta para revisar' },
  { src: '/img/work/tile-07.webp', alt: 'Nutri Lab Brasil — tema claro' },
  { src: '/img/work/tile-08.webp', alt: 'Super Doc Robô — pasta que não deve ser enviada' },
  { src: '/img/work/tile-09.webp', alt: 'Nutri Lab Brasil — linha de produtos' },
  { src: '/img/work/tile-10.webp', alt: 'Super Doc Robô — painel de análise' },
];

export const services = {
  heading: 'Serviços',
  items: [
    {
      number: '01',
      name: 'Sites & Landing Pages',
      description:
        'Do layout ao deploy: sites rápidos, responsivos e acessíveis, com foco em performance, SEO e uma boa experiência em qualquer tela.',
    },
    {
      number: '02',
      name: 'Front-end com React & Next.js',
      description:
        'Interfaces modernas em React, Next.js e TypeScript, com componentes reutilizáveis, código limpo e atenção aos detalhes de UI.',
    },
    {
      number: '03',
      name: 'E-commerce',
      description:
        'Lojas completas com carrinho, checkout via Pix, cartão e boleto e painel de gestão com KPIs e controle de estoque — como o Nutri Lab.',
    },
    {
      number: '04',
      name: 'Automação com IA',
      description:
        'Robôs que leem e conferem documentos com IA, eliminam trabalho manual e entregam painéis claros para decidir rápido — como o Super Doc Robô.',
    },
    {
      number: '05',
      name: 'Dashboards & Sistemas Web',
      description:
        'Painéis e aplicações completas, da API em Node.js ao banco de dados e à interface, com testes automatizados.',
    },
  ],
};

export interface ProjectImage {
  src: string;
  alt: string;
  /** CSS object-position: onde o recorte fica ancorado quando o quadro é mais estreito que o print. */
  position?: string;
}

export interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  stack: string;
  /** Sem `href` o botão não aparece (o Doc Robô está fora do ar). */
  href?: string;
  /** [esquerda-cima, esquerda-baixo, direita (alta)] */
  images: [ProjectImage, ProjectImage, ProjectImage];
}

export const projects: { heading: string; liveLabel: string; items: Project[] } = {
  heading: 'Projetos',
  liveLabel: 'Ver projeto',
  items: [
    {
      number: '01',
      category: 'E-commerce',
      name: 'Nutri Lab Brasil',
      description:
        'Loja de suplementos com catálogo com filtros, carrinho, checkout via Mercado Pago (Pix, cartão e boleto) e painel do dono com KPIs, gráficos e controle de estoque.',
      stack: 'next.js · typescript · prisma · mercado pago',
      href: 'https://nutrilab-seven.vercel.app',
      images: [
        { src: '/img/work/nutrilab-catalogo.webp', alt: 'Nutri Lab Brasil — catálogo com filtros', position: '0% 0%' },
        { src: '/img/work/nutrilab-produto.webp', alt: 'Nutri Lab Brasil — página de produto', position: '50% 0%' },
        { src: '/img/work/nutrilab-relatorios.jpg', alt: 'Nutri Lab Brasil — painel administrativo (relatórios)', position: '0% 0%' },
      ],
    },
    {
      number: '02',
      category: 'Automação com IA',
      name: 'Super · Doc Robô',
      description:
        'Automação para imobiliária que lê e confere documentos com IA, apura renda e monta o envio para análise de crédito. Painel web com semáforo por pasta.',
      stack: 'node · typescript · ia-ocr · railway',
      images: [
        { src: '/img/work/super-verde.webp', alt: 'Super Doc Robô — pasta pronta para envio (dados fictícios)', position: '0% 0%' },
        { src: '/img/work/super-vermelho.webp', alt: 'Super Doc Robô — pasta com documentos faltando (dados fictícios)', position: '0% 0%' },
        { src: '/img/work/super-login.webp', alt: 'Super Doc Robô — tela de login', position: '85% 50%' },
      ],
    },
    {
      number: '03',
      category: 'Sistema Web',
      name: 'TransLog',
      description:
        'Sistema de gestão de transporte para controlar veículos, motoristas e ocorrências, com dashboard de indicadores, histórico com filtros e login. Projeto em equipe de 5 pessoas.',
      stack: 'react · vite · react-router · localstorage',
      href: 'https://github.com/arthurniceass-jpg/translog',
      images: [
        { src: '/img/work/translog-login.jpg', alt: 'TransLog — tela de login', position: '85% 50%' },
        { src: '/img/work/translog-veiculos.jpg', alt: 'TransLog — veículos com busca e filtro por status', position: '0% 0%' },
        { src: '/img/work/translog-motoristas.jpg', alt: 'TransLog — motoristas com busca por nome ou CNH', position: '0% 0%' },
      ],
    },
  ],
};

export const experience = {
  heading: 'Experiência',
  items: [
    {
      role: 'Suporte Técnico de TI',
      org: 'Instituto Travessia',
      place: 'Recife, PE · Presencial',
      period: 'nov 2025 — mai 2026',
      description:
        'Automação de rotinas com scripts em Batch (CMD), manutenção de servidor e rede local, e suporte a estações Windows — instalação, troubleshooting e apoio ao usuário.',
    },
    {
      role: 'Assistente Administrativo · Aprendiz',
      org: 'Colégio CBV Boa Viagem',
      place: 'Recife, PE · Presencial',
      period: 'mar 2024 — set 2025',
      description:
        'Operação do sistema Atlas para registro de demandas e criação de planilhas no Excel (fórmulas, formatação condicional e tabelas dinâmicas), automatizando relatórios manuais.',
    },
  ],
};

export const contact = {
  heading: 'Contato',
  status: 'disponível para estágio · remoto',
  lede: 'Tem um projeto, uma vaga ou só quer trocar ideia? Me chama — respondo rápido.',
  cta: { label: 'Chamar no WhatsApp', href: 'https://wa.me/5581991121211' },
  links: [
    { label: 'e-mail', value: 'arthurniceass@gmail.com', href: 'mailto:arthurniceass@gmail.com' },
    { label: 'whatsapp', value: '(81) 99112-1211', href: 'https://wa.me/5581991121211' },
    { label: 'linkedin', value: 'linkedin.com/in/arthurniceas', href: 'https://www.linkedin.com/in/arthurniceas' },
    { label: 'github', value: 'github.com/arthurniceass-jpg', href: 'https://github.com/arthurniceass-jpg' },
    { label: 'local', value: 'Recife, PE — BR (aberto a remoto)' },
  ] as { label: string; value: string; href?: string }[],
};
