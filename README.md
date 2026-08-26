# 🚀 Coopstar Express - Moto Frete & Logística Urbana 24h

[![React 19](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **Modernização e Refatoração Completa** da plataforma web institucional da **Coopstar Express**, empresa especializada em serviços de moto frete, coletas rápidas e delivery empresarial com sede em Moema, São Paulo - SP.

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Stack Tecnológica](#-stack-tecnológica)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos e Instalação](#-pré-requisitos-e-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [SEO & Boas Práticas](#-seo--boas-práticas)
- [Segurança & Boas Práticas DevOps](#-segurança--boas-práticas-devops)
- [Autor](#-autor)

---

## 📖 Sobre o Projeto

Este projeto consiste na reengenharia e modernização completa do hotsite legado da Coopstar Express, transformando uma estrutura estática antiga em uma **Single Page Application (SPA)** de alta performance, ultra-responsiva e otimizada para máxima conversão de leads e solicitações de motoboy em tempo real.

---

## ✨ Funcionalidades Principais

- ⚡ **Hero Section Dinâmica:** Imagem de fundo cinematográfica de entrega rápida, propostas de valor claras e CTAs de conversão direta para ligação e WhatsApp.
- 🏢 **Quem Somos (About Section):** Apresentação institucional destacando os 15+ anos de mercado, frota profissional e base operacional em Moema.
- 📦 **Catálogo de Serviços Interativo:**
  - *Moto Frete Express (Urbano SP)*
  - *Delivery Corporativo & E-commerce*
  - *Viagens & Fora da Capital (Litoral e Interior)*
  - *Contratos Dedicados & Motoboy Fixo*
  - *Modal dinâmico* com detalhes técnicos completos de cada serviço.
- ⏱️ **Simulador de Chamada & Cotação Rápida:** Formulário interativo que monta e formata a mensagem com endereço de origem, destino e urgência diretamente no WhatsApp da central.
- 🗺️ **Mapa & Base Operacional de Moema:** Integração com Google Maps interativo, rotas e lista de bairros atendidos.
- ❓ **Central de Dúvidas (FAQ Acordeon):** Perguntas frequentes com animações fluidas via Framer Motion.
- 📩 **Formulário de Contato Completo:** Validação em tempo real e canais diretos (telefones, e-mail e WhatsApp).
- 💬 **Floating Action Button 24h:** Botão flutuante pulsante de WhatsApp com balão de atendimento prioritário.
- 📱 **100% Responsivo:** Adaptado com precisão para celulares, tablets e desktops (Mobile-First).

---

## 🛠️ Stack Tecnológica

| Tecnologia | Finalidade |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Biblioteca principal de interface declarativa e componentizada |
| **[TypeScript 5](https://www.typescriptlang.org/)** | Tipagem estática rigorosa para máxima confiabilidade |
| **[Vite 6](https://vitejs.dev/)** | Build tool e servidor de desenvolvimento ultra-rápido com HMR |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Estilização utilitária moderna com CSS-first architecture |
| **[Framer Motion](https://www.framer.com/motion/)** | Animações fluidas de entrada, modais e transições |
| **[Lucide React](https://lucide.dev/)** | Ícones vetoriais modernos e consistentes |

---

## 📁 Estrutura do Projeto

```text
├── public/                     # Assets estáticos públicos (imagens, ícones, logos)
│   ├── favicon.svg             # Favicon vetorial
│   ├── hero-bg.jpg             # Imagem de fundo do Hero
│   ├── logo-legacy.png         # Logotipo original
│   └── images/                 # Imagens temáticas dos serviços e frota
├── src/
│   ├── components/             # Componentes modulares da interface
│   │   ├── AboutSection.tsx    # Seção Quem Somos e história
│   │   ├── ContactSection.tsx  # Formulário e canais de contato
│   │   ├── CoverageMap.tsx     # Mapa e bairros de atuação em SP
│   │   ├── FAQ.tsx             # Sanfona de dúvidas frequentes
│   │   ├── FloatingWhatsApp.tsx# Botão flutuante 24h
│   │   ├── Footer.tsx          # Rodapé institucional
│   │   ├── Hero.tsx            # Seção principal de apresentação
│   │   ├── HowItWorks.tsx      # Fluxo de atendimento em 4 passos
│   │   ├── Logo.tsx            # Componente de marca e emblema
│   │   ├── Navbar.tsx          # Menu de navegação fixo com blur
│   │   ├── QuickEstimate.tsx   # Simulador de corrida para WhatsApp
│   │   ├── Services.tsx        # Catálogo e modal de serviços
│   │   └── TrustBar.tsx        # Métricas de confiança
│   ├── data/                   # Dados desacoplados da aplicação
│   │   ├── companyInfo.ts      # Informações corporativas centralizadas
│   │   ├── faq.ts              # Perguntas e respostas
│   │   └── services.ts         # Catálogo completo de serviços
│   ├── types/                  # Definições de tipos e interfaces TypeScript
│   ├── App.tsx                 # Componente raiz da aplicação
│   ├── index.css               # Estilos globais e tokens Tailwind
│   └── main.tsx                # Ponto de entrada React 19
├── old/                        # Arquivos legados originais (para referência)
├── index.html                  # HTML5 estruturado com metadados SEO e Schema.org
├── vite.config.ts              # Configuração do Vite
├── tsconfig.json               # Configuração do TypeScript
├── .env.example                # Modelo de variáveis de ambiente
└── .gitignore                  # Arquivos ignorados pelo Git
```

---

## 💻 Pré-requisitos e Instalação

Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em seu ambiente.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/felipelinuxnetwork/ATG2612-refaforar.git
   cd ATG2612-refaforar
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:5173` no seu navegador.

---

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor Vite em modo de desenvolvimento local.
- `npm run build`: Executa a checagem de tipos do TypeScript e compila o bundle otimizado para produção na pasta `dist/`.
- `npm run preview`: Inicializa um servidor local para inspecionar o build de produção.

---

## 🎯 SEO & Boas Práticas

- **Open Graph & Twitter Cards:** Configurados no `index.html` para compartilhamento enriquecido no WhatsApp, Facebook e LinkedIn.
- **Schema.org JSON-LD:** Marcação estruturada para `LocalBusiness`, indicando localização geográfica da sede em Moema, horário de atendimento 24h e contatos oficiais.
- **Acessibilidade:** Elementos semânticos, atributos `aria-*` em modais e acordeons, e contrastes de cor validados.

---

## 🔒 Segurança & Boas Práticas DevOps

- **Sem Segredos Expostos:** Nenhuma chave privada ou credencial sensível está no versionamento.
- **Variáveis de Ambiente:** Estruturado com `.env.example` para suportar futuras integrações seguras.
- **.gitignore Abrangente:** Previne envio acidental de dependências (`node_modules`), logs de erro, arquivos de build temporários e arquivos de sistema (`Thumbs.db`, `.DS_Store`).

---

## 👤 Autor

Desenvolvido e mantido por **[felipelinuxnetwork](https://github.com/felipelinuxnetwork)**.
