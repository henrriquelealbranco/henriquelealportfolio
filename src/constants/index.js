import {
  frontend, backend, ux, prototyping, javascript, typescript, html, css,
  reactjs, tailwind, nodejs, git, postgresql, alexCoutinho, imobPro,
  espacoAluno, gabrielCoraiola, manguebras, drPericias, vellum, marfi,
  excellence, raquelRomano,
} from '../assets';

export const navLinks = [
  { id: 'about', title: 'Sobre' },
  { id: 'projects', title: 'Projetos' },
  { id: 'contact', title: 'Contato' },
];

const services = [
  { title: 'Sites comerciais', icon: frontend },
  { title: 'Sistemas web', icon: backend },
  { title: 'Experiência e interface', icon: ux },
  { title: 'IA e automação', icon: prototyping },
];

const technologies = [
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React', icon: reactjs },
  { name: 'Node.js', icon: nodejs },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Git', icon: git },
];

const projects = [
  {
    id: 'project-1', name: 'Alex Coutinho + ImobPro', category: 'Portal e sistema imobiliário',
    description: 'Um ecossistema imobiliário completo: portal corporativo para imóveis e uma plataforma de gestão com CRM, pipeline, locações, financeiro e automações.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'IA'], image: alexCoutinho, secondaryImage: imobPro,
  },
  {
    id: 'project-2', name: 'Espaço do Aluno', category: 'Plataforma educacional',
    description: 'Experiência acolhedora para estudantes, com atividades, conteúdos, acompanhamento emocional e painel demonstrativo para a equipe escolar.',
    tags: ['Next.js', 'TypeScript', 'UX', 'Playwright'], image: espacoAluno,
  },
  {
    id: 'project-3', name: 'Gabriel Coraiola Imóveis', category: 'Plataforma imobiliária',
    description: 'Catálogo mobile-first com filtros, páginas de imóveis, contato direto por WhatsApp e painel administrativo para publicação e gestão.',
    tags: ['Next.js', 'Supabase', 'Cloudflare', 'Vitest'], image: gabrielCoraiola,
  },
  {
    id: 'project-4', name: 'Manguebras', category: 'E-commerce automotivo',
    description: 'Loja virtual especializada em linha diesel, com catálogo amplo, busca, filtros, carrinho persistente e orçamento integrado ao WhatsApp.',
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Zod'], image: manguebras,
  },
  {
    id: 'project-5', name: 'DR Perícias Trabalhista', category: 'Sistema técnico',
    description: 'Plataforma segura para organizar documentos e rotinas de perícia trabalhista para peritos, assistentes técnicos e empresas.',
    tags: ['Sistema web', 'Autenticação', 'Documentos', 'SST'], image: drPericias,
  },
  {
    id: 'project-6', name: 'Véllum', category: 'IA e automação',
    description: 'Presença digital para apresentar soluções de inteligência artificial, integração de sistemas, automação de processos e software sob medida.',
    tags: ['IA', 'Automação', 'SEO', 'UX'], image: vellum,
  },
  {
    id: 'project-7', name: 'MARFI Refrigeração', category: 'Landing page comercial',
    description: 'Site comercial para serviços de refrigeração e climatização, com projetos, diferenciais técnicos e conversão direta por WhatsApp.',
    tags: ['JavaScript', 'SEO', 'Schema.org', 'Conversão'], image: marfi,
  },
  {
    id: 'project-8', name: 'Excellence Marmoraria', category: 'Site comercial local',
    description: 'Site responsivo para apresentar serviços, materiais, avaliações e conduzir clientes de Guarapuava até o orçamento.',
    tags: ['Design responsivo', 'SEO local', 'WhatsApp'], image: excellence,
  },
  {
    id: 'project-9', name: 'Raquel Romano', category: 'Presença profissional',
    description: 'Site autoral para clínica, formação e articulação com escolas, com narrativa sensível, serviços e agendamento organizado.',
    tags: ['Design autoral', 'Conteúdo', 'SEO local'], image: raquelRomano,
  },
];

export { services, technologies, projects };
