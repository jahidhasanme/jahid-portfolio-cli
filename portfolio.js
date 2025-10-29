#!/usr/bin/env node
import chalk from "chalk";
import gradient from "gradient-string";
import boxen from "boxen";

console.log(
    gradient.pastel.multiline(`
                =============================================
                            👋 Hi, I'm Jahid Hasan
                            💻 Software Developer
                =============================================
`)
);

const about = boxen(
    `${chalk.bold("👤 Name:")}              Jahid Hasan
${chalk.bold("💼 Profession:")}        Software Developer

${chalk.bold("📍 Location:")}          Natore, Rajshahi, Bangladesh
${chalk.bold("📱 WhatsApp:")}          ${chalk.cyan("+88 01335560866")}
${chalk.bold("📧 Email:")}             ${chalk.cyan("jahidsite0@gmail.com")}
${chalk.bold("🌐 Website:")}           ${chalk.blue.underline("https://jahidhasan.me")}
${chalk.bold("🐙 GitHub:")}            ${chalk.blue.underline("https://github.com/jahidhasanme")}
${chalk.bold("🐙 GitLab:")}            ${chalk.blue.underline("https://gitlab.com/jahidhasanme")}
${chalk.bold("📘 Facebook:")}          ${chalk.blue.underline("https://facebook.com/jahidhasan4me")}
${chalk.bold("🐦 X (Twitter):")}       ${chalk.blue.underline("https://x.com/jahidhasanme")}
${chalk.bold("💬 Discord:")}           ${chalk.blue.underline("https://discord.gg/jahidhasanme")}
${chalk.bold("🏢 Working at:")}        TubeOnAI · FruGPT · SomoyPay · MarrfaAI
${chalk.bold("🏢 Founder of:")}        CodeX Soft (${chalk.blue.underline("https://codex4soft.com")})`,
    {
        padding: 1,
        borderStyle: "round",
        borderColor: "cyan",
        title: "👤 About Me",
        width: 78,
    }
);
console.log(about);

const company = boxen(
    `${chalk.greenBright.bold("🏢 Codex4Soft - Software Development Company")}

${chalk.white("We are a dynamic software development company dedicated to creating innovative solutions that drive business growth and digital transformation. Our team of expert developers and designers work together to deliver exceptional results.")}

${chalk.bold("🌐 Website:")} ${chalk.blue.underline("https://codex4soft.com")}`,
    {
        padding: 1,
        borderStyle: "classic",
        borderColor: "cyan",
        title: "🚀 About Codex4Soft",
        width: 78,
    }
);
console.log(company);

const skills = boxen(
    `${chalk.bold("🚀 Skills Overview")}

${chalk.cyan("💻 Frontend:")} React, Tailwind, Redux, Next.js, Svelte, Astro,
            Angular, Vue.js, Nuxt

${chalk.green("🚀 Backend:")} Node.js, Express, Fastify, Nest.js
            REST APIs, WebSockets, GraphQL, gRPC, tRPC, Prism
            Django, Flask, FastAPI, Tornado, Celery

${chalk.yellowBright("🤖 AI / ML:")} Matplotlib, Scikit-learn, TensorFlow, PyTorch,
            Open CV, Deep Learning (NLP, CV), AWS AI

${chalk.yellow("🧠 AI Integration:")} LangChain, Agno, Cruel, VercelAI,
                   OpenAI SDK

${chalk.magenta("📱 Mobile:")} Flutter, React Native, Android (Kotlin), 
           iOS (Swift)

${chalk.yellowBright("🧩 Desktop:")} Electron, Cross-Platform Apps

${chalk.greenBright("💾 Database:")} PostgreSQL, MySQL, SQLite,
             MongoDB, Redis

${chalk.blueBright("🧠 Vector DB:")} Pinecone, ChromaDB, Weaviate, Milvus

${chalk.blue("📡 Messaging:")} RabbitMQ, Kafka

${chalk.red("💎 DevOps:")} Docker, Kubernetes, Nginx, CI/CD, 
           GitHub Actions, AWS, Vercel

${chalk.green("🔷 Architecture:")} Microservices, Event-Driven, 
                 Monolith, SOA, Scalable Cloud

${chalk.cyanBright("💬 Languages:")} JavaScript, Python, Go, Rust, 
              Java, C++, C

${chalk.cyan("🔨 Tools:")} Git/GitLab, VS Code, Postman, Figma, 
          Notion, Slack`,
    {
        padding: 1,
        borderStyle: "double",
        borderColor: "magenta",
        title: "💻 Technical Stack",
        width: 78,
    }
);
console.log(skills);

const projects = boxen(
    `${chalk.greenBright.bold("🌐 Featured Projects:")}

• ${chalk.blue.underline("https://tubeonai.com")}   → AI-powered summarizer 
  for videos, podcasts & documents.  

• ${chalk.blue.underline("https://frugpt.com")}     → Secure AI platform 
  for enterprise RAG-based systems.  

• ${chalk.blue.underline("https://elaundry.com/")}  → Enterprise-level 
  laundry & linen management system.  

• ${chalk.blue.underline("https://somoypay.com")}   → Digital wallet & 
  mobile payment solution for Bangladesh.  

• ${chalk.blue.underline("https://mswott.net")}     → Video streaming OTT 
  platform supporting cross-platform mobile & desktop.  

• ${chalk.blue.underline("https://marffa.ai")}      → AI-driven marketing 
  automation & engagement platform.  

• ${chalk.blue.underline("https://codex4soft.com")} → Innovative software 
  solutions for business growth & digital transformation.`,
    {
        padding: 1,
        borderStyle: "classic",
        borderColor: "green",
        title: "📦 Projects",
        width: 78,
    }
);
console.log(projects);

console.log(
    gradient.instagram.multiline(`
                ----------------------------------------------------
                     💬 Thanks for visiting my CLI portfolio!
                ----------------------------------------------------
`)
);
