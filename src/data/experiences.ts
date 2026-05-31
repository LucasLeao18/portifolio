export interface Experience {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Desenvolvedor Full Stack",
    company: "AdsFlowz.com.br",
    type: "Freelance",
    period: "Janeiro de 2026 – Atual",
    location: "São Paulo, Brasil · Remoto",
    description: [
      "Desenvolvimento do Ads Flow Store, plataforma web full stack para gerenciamento de produtos, afiliados, rastreamento de acessos e painel administrativo.",
      "Criação do frontend utilizando JavaScript Vanilla com Vite, desenvolvendo uma interface SPA dinâmica, organizada e responsiva.",
      "Construção do backend com Node.js, Express, Prisma e SQLite.",
      "Implementação de autenticação com JWT, validação de dados, gestão de preços, filtros dinâmicos e monitoramento de eventos.",
      "Aplicação de boas práticas de segurança, incluindo sanitização de dados para prevenção contra XSS.",
      "Realização do deploy da aplicação.",
      "Projeto desenvolvido para empresa, com mais de 2.000 acessos/usuários mensais.",
    ],
    technologies: ["JavaScript", "Vite", "Node.js", "Express", "Prisma", "SQLite", "JWT", "GitHub", "Chart.js"],
  },
  {
    id: 2,
    role: "Desenvolvedor de Software",
    company: "Cloudfy Checkout",
    type: "Estágio",
    period: "Outubro de 2025 – Atual",
    location: "Remoto",
    description: [
      "Atuação em ecossistema full stack voltado para vendas digitais, estruturado em múltiplos repositórios e aplicações integradas.",
      "Participação no desenvolvimento de painel administrativo para gestão de lojas, produtos, integrações e métricas.",
      "Apoio no desenvolvimento de aplicação dedicada a páginas de checkout, com foco em conversão, experiência do usuário e fluxo de compra.",
      "Participação no desenvolvimento de API em NestJS, responsável por autenticação, pagamentos, pedidos, webhooks e integrações externas.",
      "Contato com integrações envolvendo plataformas como Shopify e WooCommerce.",
      "Utilização de Git/GitHub para versionamento, organização de branches e colaboração em equipe.",
      "Vivência com Docker em ambiente de desenvolvimento e infraestrutura do projeto.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "NestJS", "MongoDB", "Docker", "Redis", "BullMQ", "Shopify", "WooCommerce", "GitHub"],
  },
];
