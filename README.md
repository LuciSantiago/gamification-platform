# 🎮 Gamification Platform

Uma plataforma moderna e interativa de gamificação construída com **React**, **TypeScript** e **Tailwind CSS**. Desenvolvida para proporcionar uma experiência imersiva com sistemas de recompensas, desafios, badges e roadmaps visuais.

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![React](https://img.shields.io/badge/react-18.3.1-61dafb.svg)
![TypeScript](https://img.shields.io/badge/typescript-latest-3178c6.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🌟 Características Principais

### 📊 Dashboard Interativo
- **Sistema de Níveis**: Progressão dinâmica com indicadores visuais
- **Stats em Tempo Real**: Estatísticas de performance do usuário
- **Badges Colecionáveis**: Sistema completo de conquistas e troféus
- **Notificações Contextuais**: Feedback imediato das ações do usuário

### 🎯 Sistema de Quests & Desafios
- **Quests Variadas**: Diferentes tipos de missões (diárias, semanais, especiais)
- **Desafios Semanais**: Sistema de challenge progressivo
- **Dificuldade Adaptável**: Níveis de dificuldade customizáveis
- **Rastreamento de Progresso**: Acompanhamento detalhado do progresso

### 🗺️ Roadmap Visual
- **Mapa Interativo**: Visualização de progressão em tempo real
- **Regiões Temáticas**: Organização de conteúdo por regiões
- **Pontos de Interesse**: Marcos e milestones ao longo do roadmap
- **Animações Suaves**: Transições fluidas entre estados

### 👤 Perfil de Usuário
- **Editor de Perfil**: Personalização completa de dados
- **Histórico de Conquistas**: Visualização de badges e medalhas
- **Estatísticas Pessoais**: Métricas detalhadas de desempenho
- **Preferências de Usuário**: Customização de experiência

### ⚙️ Painel Administrativo (Admin Panel)
- **CRUD Completo**: Gerenciamento de Quests, Badges, Regiões e Desafios
- **Gestão de Usuários**: Controle e monitoramento de usuários
- **Editor de Conteúdo**: Interface intuitiva para criação e edição
- **Validações em Tempo Real**: Feedback imediato de erros

## 🛠️ Stack Técnico

### Frontend
- **React 18.3.1** - UI Library moderna
- **TypeScript** - Type safety e melhor DX
- **Tailwind CSS** - Styling utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Motion/Framer Motion** - Animações suaves
- **Recharts** - Gráficos e visualizações

### Ferramentas de Desenvolvimento
- **Vite** - Build tool ultra-rápido
- **React Hook Form** - Gerenciamento de formulários
- **Sonner** - Toast notifications
- **Embla Carousel** - Carrossel responsivo

### Backend & Banco de Dados
- **Supabase** - Backend como serviço (Auth, DB, Storage)
- **PostgreSQL** - Banco de dados relacional

### Deployment
- **Dokploy** - Gerenciador de VPS e deployment
- **Docker** - Containerização da aplicação

## 📋 Pré-requisitos

- **Node.js**: v18+ 
- **npm** ou **yarn**
- **Git**: Para versionamento
- **Conta Supabase**: Para backend e autenticação
- **VPS com Dokploy**: Para produção

## 🚀 Instalação Local

### 1. Clonar o Repositório
```bash
git clone https://github.com/LuciSantiago/gamification-platform.git
cd gamification-platform
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar Variáveis de Ambiente
```bash
# Criar arquivo .env.local
cp .env.example .env.local
```

Configure as variáveis necessárias:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
VITE_API_URL=http://localhost:3000
```

### 4. Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📦 Build para Produção

### Build Local
```bash
npm run build
```

### Preview do Build
```bash
npm run preview
```

## 🔧 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes da UI (Radix UI)
│   ├── AdminPanel.tsx   # Painel administrativo
│   ├── QuestCard.tsx    # Card de quests
│   ├── BadgeDisplay.tsx # Sistema de badges
│   ├── RoadmapVisualMVP.tsx # Mapa visual
│   └── ...
├── hooks/               # Custom React hooks
│   └── useLocalStorage.ts
├── styles/              # Estilos globais
├── guidelines/          # Documentação de design
├── App.tsx              # Componente raiz
└── main.tsx             # Ponto de entrada
```

## 🎮 Funcionalidades Implementadas

### ✅ Sistema de Gamificação
- [x] Sistema de níveis com progressão
- [x] Badges e conquistas colecionáveis
- [x] Quests com diferentes tipos e dificuldades
- [x] Desafios semanais
- [x] Sistema de recompensas
- [x] Histórico de atividades

### ✅ Interface Interativa
- [x] Dashboard responsivo
- [x] Animações fluidas
- [x] Notificações contextuais
- [x] Modal dialogs interativos
- [x] Roadmap visual animado
- [x] Gráficos e estatísticas

### ✅ Gerenciamento de Dados
- [x] Persistência com localStorage
- [x] Integração Supabase-ready
- [x] Validações em tempo real
- [x] CRUD completo no admin panel

### ✅ UX/Accessibility
- [x] Design responsivo
- [x] Componentes acessíveis (Radix UI)
- [x] Tema escuro/claro
- [x] Transições suaves

## 🌐 Integração Supabase

### Próximas Etapas para Produção

1. **Criar Tabelas no Supabase**:
   ```sql
   -- Tabela de Usuários (estendida)
   CREATE TABLE users (
     id UUID PRIMARY KEY,
     username VARCHAR(255),
     level INTEGER DEFAULT 1,
     experience INTEGER DEFAULT 0,
     created_at TIMESTAMP
   );

   -- Tabela de Quests
   CREATE TABLE quests (
     id UUID PRIMARY KEY,
     title VARCHAR(255),
     description TEXT,
     type VARCHAR(50),
     reward INTEGER,
     created_at TIMESTAMP
   );

   -- Tabela de Badges
   CREATE TABLE badges (
     id UUID PRIMARY KEY,
     name VARCHAR(255),
     description TEXT,
     icon_url VARCHAR(500),
     created_at TIMESTAMP
   );

   -- Tabela de User Progress
   CREATE TABLE user_progress (
     id UUID PRIMARY KEY,
     user_id UUID REFERENCES users(id),
     quest_id UUID REFERENCES quests(id),
     status VARCHAR(50),
     completed_at TIMESTAMP
   );
   ```

2. **Configurar Autenticação**:
   - Habilitar Authentication no Supabase
   - Configurar OAuth providers (Google, GitHub)
   - Configurar email/password authentication

3. **Configurar Storage**:
   - Bucket para imagens de badges
   - Bucket para avatares de usuários

## 🐳 Deploy com Dokploy

### 1. Preparar Docker
Crie um `Dockerfile` na raiz:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### 2. Configurar no Dokploy
1. Conectar repositório GitHub
2. Configurar variáveis de ambiente
3. Ativar auto-deploy na branch `main`
4. Configurar domínio customizado
5. Ativar SSL/HTTPS

### 3. Deploy
```bash
git push origin main
# Dokploy acionará o build e deploy automaticamente
```

## 📚 Documentação Adicional

- [Figma Design](https://www.figma.com/design/MAvVraaobQr8ARNW3lxJFi/Gamification-Platform-PRD)
- [Conformidade com PRD](./src/PRD-CONFORMIDADE-FINAL.md)
- [CRUD Completo](./src/SISTEMA-CRUD-COMPLETO.md)
- [Funcionalidades Implementadas](./src/FUNCIONALIDADES-IMPLEMENTADAS.md)

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Roadmap Futuro

- [ ] Integração completa com Supabase
- [ ] Sistema de leaderboard global
- [ ] Notificações push
- [ ] Multiplayer challenges
- [ ] API REST documentada
- [ ] Mobile app (React Native)
- [ ] Análise avançada e relatórios
- [ ] Sistema de ranking e ligas

## 🐛 Suporte & Issues

Se encontrar bugs ou tiver sugestões, abra uma [issue no GitHub](https://github.com/LuciSantiago/gamification-platform/issues).

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Lucia Santiago**
- GitHub: [@LuciSantiago](https://github.com/LuciSantiago)
- Email: lucia@example.com

---

<p align="center">
  Desenvolvido com ❤️ para criar experiências gamificadas incríveis
</p>
  