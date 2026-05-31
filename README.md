# Portfólio — Lucas de Andrade Souza Leão

Portfólio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Deploy no Vercel (recomendado)

1. Faça push do projeto para um repositório GitHub.
2. Acesse [vercel.com](https://vercel.com) → **Add New Project** → importe o repositório.
3. Clique em **Deploy**. O Vercel detecta Next.js automaticamente.

## Estrutura

```
src/
├─ app/          # Layout global, page, globals.css
├─ components/   # Navbar, Footer, Badge, ProjectCard, SectionWrapper, SectionTitle
├─ sections/     # Hero, About, Experience, Skills, Projects, Education, Certifications, Languages, Contact
└─ data/         # Todos os dados do portfólio (perfil, experiências, projetos, skills…)
```

Para atualizar o conteúdo edite apenas os arquivos em `src/data/`.
