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
      "Projeto em evolução com aplicação de inteligência artificial e modelos de machine learning para identificar padrões de risco em transações e apoiar a detecção de possíveis fraudes bancárias.",
    highlights: [
      "Foco em IA aplicada a um problema financeiro real",
      "Preparação, análise e validação de dados",
      "Estudo de modelos para classificação de transações suspeitas",
      "Conexão direta com interesse em cibersegurança",
    ],
    technologies: ["Python", "Machine Learning", "IA", "Análise de Dados", "Detecção de Fraudes"],
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
