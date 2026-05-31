export interface Project {
  id: number;
  name: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Ads Flow Store",
    description:
      "Plataforma full stack desenvolvida para empresa, com gerenciamento de produtos, afiliados, rastreamento de acessos, painel administrativo, filtros dinâmicos, autenticação JWT, monitoramento de eventos e backend modular.",
    highlights: [
      "Mais de 2.000 acessos/usuários mensais",
      "Deploy realizado em produção",
      "Sistema administrativo completo",
      "Autenticação e segurança robustas",
      "Rastreamento de eventos e métricas",
    ],
    technologies: ["JavaScript", "Vite", "Node.js", "Express", "Prisma", "SQLite", "JWT", "Chart.js"],
    liveUrl: "http://adsflowz.com.br/",
  },
  {
    id: 2,
    name: "Cloudfy Checkout",
    description:
      "Participação em ecossistema de checkout digital com painel administrativo, páginas de checkout otimizadas para conversão, API em NestJS, webhooks, pagamentos e integrações com Shopify e WooCommerce.",
    technologies: ["TypeScript", "React", "Next.js", "NestJS", "Docker", "MongoDB", "Redis", "BullMQ", "Shopify", "WooCommerce"],
  },
  {
    id: 3,
    name: "Detecção de Fraudes Bancárias",
    description:
      "Projeto com aplicação de modelos de machine learning para identificação de possíveis fraudes bancárias, com preparação e análise de dados.",
    technologies: ["Python", "Machine Learning", "Análise de Dados", "Preparação de Dados"],
    githubUrl: "https://github.com/LucasLeao18",
  },
  {
    id: 4,
    name: "Automação em Jogos com Python",
    description:
      "Projeto de automação desenvolvido com Python para interações automatizadas em ambiente de jogo, utilizando lógica de controle, automação de ações e manipulação de eventos.",
    technologies: ["Python", "Automação", "Lógica de Programação"],
    githubUrl: "https://github.com/LucasLeao18",
  },
];
