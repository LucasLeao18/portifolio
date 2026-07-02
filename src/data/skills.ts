export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "IA & Dados",
    items: [
      "Python", "Machine Learning", "Detecção de Fraudes", "Análise de Dados",
      "Preparação de Dados", "Modelos Preditivos", "Automação", "Aplicações com IA",
    ],
  },
  {
    name: "Linguagens & Fundamentos",
    items: [
      "Java", "Python", "Lua", "JavaScript", "TypeScript",
      "POO", "Estruturas de Dados", "Lógica de Programação", "APIs REST",
    ],
  },
  {
    name: "Frontend",
    items: [
      "JavaScript", "TypeScript", "React 18", "Next.js 14", "App Router",
      "Vite", "SPA", "Tailwind CSS", "Radix UI", "shadcn/ui",
      "React Hook Form", "Yup", "TanStack React Query", "Zustand", "Axios",
      "Chart.js", "Recharts", "Lazy Loading", "Dynamic Imports",
      "Componentização", "Gestão de Estado", "Cache em Memória",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js", "Express", "NestJS", "APIs REST", "JWT", "Autenticação com 2FA",
      "Prisma ORM", "Mongoose", "MongoDB", "SQLite", "Zod",
      "class-validator", "class-transformer", "bcrypt", "Webhooks",
      "BullMQ", "Redis", "Schedulers", "Controllers", "Guards", "Modules",
      "Use Cases",
    ],
  },
  {
    name: "Banco de Dados",
    items: ["SQLite", "MongoDB", "Prisma ORM", "Mongoose", "Modelagem Relacional", "Migrations", "Seeds"],
  },
  {
    name: "Segurança",
    items: ["JWT", "bcrypt", "Helmet", "CORS", "Cookies", "Rate Limiting", "Sanitização de Dados", "Prevenção contra XSS", "Validação de Dados", "Middleware de Segurança"],
  },
  {
    name: "DevOps & Infraestrutura",
    items: ["Git", "GitHub", "Docker", "Docker Compose", "Deploy de Aplicações", "AWS SDK", "S3", "CloudFront", "SES", "SNS", "SQS", "Scheduler", "Ambientes Locais (Mongo, Redis, AWS Mock)"],
  },
  {
    name: "Testes & Qualidade",
    items: ["Jest", "Supertest", "Cypress", "node:test", "ESLint", "Biome", "Prettier", "Husky", "Testes Unitários", "Testes de Integração", "Testes E2E"],
  },
  {
    name: "Integrações & E-commerce",
    items: ["Shopify", "WooCommerce", "Stripe", "PIX", "Boleto", "Cartão", "Meta Pixel", "Google Analytics", "Google Ads", "TikTok", "Kwai", "ActiveCampaign", "Utmify", "XTracky", "SMS Funnels", "Otimizey"],
  },
];
