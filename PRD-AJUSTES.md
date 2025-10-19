<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# \# PRD - PRODUCT REQUIREMENTS DOCUMENT

## Sistema de Workflows e Workspaces para Design UI/UX


---

## 📋 CONTEXT (Contexto do Projeto)

Você é um desenvolvedor full-stack especialista trabalhando no Lovable, uma plataforma AI-powered para criar aplicações web completas. Você tem acesso aos seguintes documentos e materiais:

**ARQUIVOS DE REFERÊNCIA:**

- Transcrição de reuniões e ideias do cliente (PDF anexado)
- Referência visual: [https://lrsrjba.figma.site/](https://lrsrjba.figma.site/)
- Documentação de metodologias UX (User Story Mapping, Lean UX, Design Sprint)
- Guias de branding, storytelling e copywriting

**PROPÓSITO DO PROJETO:**
Criar uma aplicação web completa para mapear, documentar e gerenciar workflows de design UI/UX. O sistema deve:

- Centralizar artefatos de design (personas, user stories, wireframes, etc.)
- Automatizar processos através de integrações com IAs (Perplexity, Gemini, ChatGPT, NotebookLM)
- Servir como workspace colaborativo para equipes de design
- Educar designers iniciantes através de guias e checklists integrados

**STACK TECNOLÓGICA REQUERIDA:**

- Frontend: React + TypeScript + Tailwind CSS
- Backend: Supabase (auth + database + storage)
- UI Components: shadcn/ui
- Integrações: APIs de IA (OpenAI, Google Gemini, Perplexity)
- Deploy: Lovable hosting

**USUÁRIOS-ALVO:**

- Designers UI/UX (iniciantes a intermediários)
- Product Managers
- Desenvolvedores Frontend
- Equipes ágeis multidisciplinares

---

## 🎯 TASK (Tarefa Principal)

Construa uma aplicação web completa e funcional que permita:

### FASE 1: ESTRUTURA E AUTENTICAÇÃO

1. Sistema de autenticação completo com Supabase (email/password + OAuth Google)
2. Dashboard principal com navegação lateral responsiva
3. Sistema de workspaces (criar, editar, deletar, compartilhar)
4. Gestão de permissões (owner, editor, viewer)

### FASE 2: MÓDULOS DE ARTEFATOS UX

Cada módulo deve ter CRUD completo + templates + AI assistants:

**2.1 Briefing Estratégico**

- Formulário com campos: contexto do negócio, problema, objetivos (SMART), KPIs, restrições
- Botão "Gerar com IA" que analisa texto e sugere estrutura
- Export para PDF/Markdown

**2.2 Personas**

- Card visual com foto, dados demográficos, comportamentos, dores, objetivos
- Template pré-configurado (B2B, B2C, interno)
- Integração com IA para gerar personas a partir de descrições
- Galeria de imagens AI-generated para avatares (usando API externa ou upload)

**2.3 User Journey Map**

- Timeline interativa (drag-and-drop)
- Estados emocionais (gráfico emocional visual)
- Touchpoints com ícones
- Export para imagem PNG

**2.4 User Stories**

- Estrutura hierárquica: Épico → Milestone → User Story → Tasks → Subtasks
- Formato: "Como [persona], eu quero [ação] para [benefício]"
- Critérios de aceite editáveis
- Estimativa de esforço (story points)
- Status tracking (To Do, In Progress, Done)
- Integração com IA para decomposição automática de épicos

**2.5 Wireframes / Mapa de Sitemap**

- Canvas interativo para desenhar estruturas (estilo FigJam)
- Biblioteca de componentes pré-definidos (header, footer, cards, forms)
- Export para PNG/SVG
- Alternativa: Upload de wireframes externos com anotações

**2.6 Design System Guidelines**

- Paleta de cores (color picker + validação de contraste WCAG)
- Tipografia (scale calculator, preview de tamanhos)
- Espaçamento (grid 8px, preview visual)
- Componentes (documentação de estados: default, hover, active, disabled)

**2.7 Biblioteca de Recursos**

- Upload de documentos (PDF, DOCX, TXT)
- Transcrições de reuniões com highlight de citações importantes
- Links externos organizados por categoria
- Sistema de tags e busca


### FASE 3: ASSISTENTE DE IA INTEGRADO

- Chat sidebar (estilo ChatGPT) com contexto do workspace
- Comandos especiais:
    * `/gerar-persona [descrição]` - cria persona completa
    * `/analisar-transcricao [arquivo]` - extrai dores, funcionalidades e objetivos
    * `/sugerir-user-stories [épico]` - decompõe em stories
    * `/validar-acessibilidade [componente]` - checa WCAG compliance
- Histórico de conversas salvo por workspace
- Integração com Knowledge Base do próprio Lovable


### FASE 4: COLABORAÇÃO E EXPORTS

- Comentários inline em qualquer artefato
- Sistema de notificações (em tempo real via Supabase Realtime)
- Export do workspace completo para:
    * PDF consolidado (documento único com todos os artefatos)
    * Notion (via API)
    * Figma (geração de arquivo FigJam)
- Versionamento básico (histórico de mudanças)

---

## 📐 GUIDELINES (Diretrizes de Implementação)

### DESIGN E UX

1. **Design System Consistente:**
    - Use shadcn/ui components como base
    - Paleta de cores gradiente suave (inspiração: lrsrjba.figma.site)
    - Máximo 3 cores primárias + variações tonais
    - Evite "rainbow UI" (muitas cores sem propósito)
2. **Espaçamento e Tipografia:**
    - Sistema 8px grid (4, 8, 16, 24, 32, 48, 64px)
    - Tamanhos de fonte: 16px mínimo para web, 14px para mobile
    - Line-height: 1.5 para parágrafos, 1.2 para headings
    - Contraste mínimo 4.5:1 (WCAG AA) para textos
3. **Responsividade:**
    - Mobile-first approach
    - Breakpoints Tailwind padrão (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
    - Sidebar colapsável em mobile (hamburger menu)
    - Cards empilham verticalmente em telas pequenas
4. **Acessibilidade (WCAG 2.1 Nível AA):**
    - Todos os botões têm aria-labels descritivos
    - Navegação por teclado (Tab, Enter, Esc)
    - Focus indicators visíveis (outline 2px solid)
    - Alternativas textuais para ícones
    - Headings hierárquicos (h1 → h2 → h3)
5. **Estados de Interação:**
    - Hover: opacity 80% ou brightness increase
    - Active/Pressed: scale(0.95)
    - Disabled: opacity 50% + cursor not-allowed
    - Loading: skeleton screens ou spinners

### ARQUITETURA DE CÓDIGO

1. **Estrutura de Pastas:**

src/
├── components/
│ ├── ui/ \# shadcn/ui components
│ ├── layout/ \# Header, Sidebar, Footer
│ ├── artifacts/ \# Personas, UserStories, etc.
│ └── shared/ \# Reutilizáveis (Modal, Card, etc.)
├── pages/
│ ├── dashboard/
│ ├── workspace/
│ └── auth/
├── hooks/ \# Custom React hooks
├── lib/
│ ├── supabase.ts \# Cliente Supabase
│ ├── ai-integrations/ \# APIs de IA
│ └── utils.ts \# Funções auxiliares
├── types/ \# TypeScript interfaces
└── constants/
├── colors.ts
├── spacing.ts
└── typography.ts
text

2. **Database Schema (Supabase):**

-- Workspaces
CREATE TABLE workspaces (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
name TEXT NOT NULL,
description TEXT,
owner_id UUID REFERENCES auth.users(id),
created_at TIMESTAMP DEFAULT NOW()
);
-- Workspace Members (permissions)
CREATE TABLE workspace_members (
workspace_id UUID REFERENCES workspaces(id),
user_id UUID REFERENCES auth.users(id),
role TEXT CHECK (role IN ('owner', 'editor', 'viewer')),
PRIMARY KEY (workspace_id, user_id)
);
-- Artifacts (generic table for all UX artifacts)
CREATE TABLE artifacts (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
workspace_id UUID REFERENCES workspaces(id),
type TEXT NOT NULL, -- 'persona', 'user_story', 'journey_map', etc.
title TEXT NOT NULL,
content JSONB, -- Flexible structure for each artifact type
created_by UUID REFERENCES auth.users(id),
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NOW()
);
-- Comments
CREATE TABLE comments (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
artifact_id UUID REFERENCES artifacts(id),
user_id UUID REFERENCES auth.users(id),
content TEXT NOT NULL,
created_at TIMESTAMP DEFAULT NOW()
);
-- AI Chat History
CREATE TABLE ai_chats (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
workspace_id UUID REFERENCES workspaces(id),
user_id UUID REFERENCES auth.users(id),
messages JSONB, -- Array of {role, content}
created_at TIMESTAMP DEFAULT NOW()
);
text

3. **TypeScript Interfaces:**

// Core types
interface Workspace {
id: string;
name: string;
description?: string;
owner_id: string;
created_at: string;
}
interface Artifact {
id: string;
workspace_id: string;
type: ArtifactType;
title: string;
content: PersonaContent | UserStoryContent | JourneyMapContent;
created_by: string;
created_at: string;
updated_at: string;
}
type ArtifactType =
| 'persona'
| 'user_story'
| 'journey_map'
| 'briefing'
| 'wireframe'
| 'design_system';
// Example: Persona structure
interface PersonaContent {
avatar_url?: string;
demographics: {
age: number;
occupation: string;
location: string;
};
behaviors: string[];
pain_points: string[];
goals: string[];
quote?: string;
}
// Example: User Story structure
interface UserStoryContent {
epic_id?: string;
as_a: string; // persona name
i_want: string; // action
so_that: string; // benefit
acceptance_criteria: string[];
story_points?: number;
status: 'todo' | 'in_progress' | 'done';
tasks: Task[];
}
interface Task {
id: string;
description: string;
completed: boolean;
subtasks?: Subtask[];
}
text

4. **Integrações de IA:**

// lib/ai-integrations/openai.ts
export async function generatePersona(description: string) {
const response = await fetch('/api/ai/generate-persona', {
method: 'POST',
body: JSON.stringify({ description }),
});
return response.json();
}
// lib/ai-integrations/transcript-analyzer.ts
export async function analyzeTranscript(text: string) {
// Extract pain points, features, objectives with citations
const prompt = `
Analyze this meeting transcript and extract:

1. Pain points (with literal quotes)
2. Requested features (with literal quotes)
3. Business objectives (with literal quotes)
text
Transcript: \${text}

`;
// Call AI API...
}
text

### PERFORMANCE E OTIMIZAÇÃO

1. Use React.lazy() para code splitting de páginas
2. Imagens: Next/Image ou lazy loading nativo
3. Supabase Realtime apenas onde necessário (comentários, notificações)
4. Cache de queries com React Query ou SWR
5. Virtualize longas listas (react-virtual)

---

## 🚫 CONSTRAINTS (Restrições e Regras)

### OBRIGATÓRIAS:

1. **Não modificar componentes do shadcn/ui diretamente** - sempre extend/wrap
2. **Todos os textos devem ser componentes únicos** - nunca quebrar frases em múltiplos spans
3. **Auto Layout obrigatório** - usar Flexbox/Grid, nunca positioning absoluto para layouts principais
4. **Border radius consistente** - usar valores do design system (4px, 8px, 16px)
5. **Validação de formulários** - usar React Hook Form + Zod schema
6. **Error handling** - sempre exibir mensagens amigáveis, nunca console errors para o usuário

### PROIBIÇÕES:

❌ **NÃO** use APIs pagas além do necessário (Lovable já inclui Supabase)
❌ **NÃO** implemente autenticação personalizada (use Supabase Auth)
❌ **NÃO** crie múltiplos sistemas de design (manter um único source of truth)
❌ **NÃO** faça requests diretos do cliente para APIs de IA (use edge functions para segurança)
❌ **NÃO** armazene credenciais no código (use variáveis de ambiente)

### LIMITES TÉCNICOS:

- Máximo 10 workspaces por usuário (plano free)
- Upload de arquivos: 5MB por arquivo, 50MB total por workspace
- AI requests: rate limit de 20 chamadas/minuto por usuário
- Realtime connections: máximo 100 usuários simultâneos

---

## 🔄 INCREMENTAL DEVELOPMENT PLAN

**Execute em etapas sequenciais. Aguarde minha aprovação antes de avançar para a próxima fase.**

### STEP 1: Setup Inicial e Autenticação

Create the project structure with:
Supabase authentication (email/password + Google OAuth)
Protected routes with auth guards
Login and signup pages using shadcn/ui Form components
Basic dashboard layout with sidebar navigation
Requirements:
Use Supabase client with TypeScript
Implement persistent session with localStorage
Show loading states during auth operations
Display user avatar and name in header
Logout button functionality
text

**VALIDAÇÃO:** Usuário deve conseguir criar conta, fazer login, ver dashboard vazio e fazer logout.

---

### STEP 2: Workspaces CRUD

Implement workspace management:
Create new workspace modal with name and description fields
List all workspaces in dashboard (cards with preview)
Edit workspace metadata
Delete workspace with confirmation dialog
Workspace detail page with tabs placeholder
Database:
Setup workspaces and workspace_members tables in Supabase
Implement RLS policies (users only see their workspaces)
UI:
Use shadcn/ui Dialog for modals
Cards with hover effects for workspace list
Empty state illustration when no workspaces exist
text

**VALIDAÇÃO:** Usuário deve criar, editar, listar e deletar workspaces. Dados persistem após refresh.

---

### STEP 3: Persona Module

Build the Persona artifact creator:
Create Persona form with all fields (demographics, behaviors, pains, goals)
Save persona as JSON in artifacts table
Display persona cards in grid layout
Edit and delete personas
Add "Generate with AI" button (placeholder for now, will integrate later)
UI Components:
Multi-step form or accordion for sections
Image upload for avatar (Supabase Storage)
Tag input for behaviors/pains/goals (use shadcn/ui Badge)
Preview mode (card format) vs Edit mode
Database:
Store in artifacts table with type='persona'
content field contains PersonaContent JSON
text

**VALIDAÇÃO:** Criar, visualizar, editar e deletar personas. Preview visual deve estar atraente.

---

### STEP 4: User Stories Module

Implement hierarchical user stories:
Create epic with title and description
Add user stories to epic (as_a, i_want, so_that format)
Add tasks and subtasks to each story
Drag-and-drop to reorder stories and tasks
Status tracking (todo/in_progress/done) with visual indicators
Story points estimation field
UI:
Kanban-style columns for status (use @hello-pangea/dnd for drag-drop)
Nested expandable lists for tasks/subtasks
Inline editing (double-click to edit)
Color coding by status (green=done, yellow=in progress, gray=todo)
Database:
artifacts table with type='user_story'
content as UserStoryContent JSON with nested tasks array
text

**VALIDAÇÃO:** Criar épicos, stories, tasks. Drag-and-drop funciona. Status muda ao clicar.

---

### STEP 5: AI Assistant Integration

Add AI chat sidebar:
Toggle button in header to open/close chat
Chat interface with message history
Input field with /commands autocomplete
Implement /gerar-persona command first
Display loading state while AI processes
Save chat history to ai_chats table
Backend:
Create Supabase Edge Function for AI calls (security)
Use OpenAI API or alternative (provide API key as env var)
Prompt engineering to generate structured persona JSON
Example prompt for /gerar-persona:
"Based on this description: [user input], generate a detailed persona in JSON format with fields: name, age, occupation, behaviors (array), pain_points (array), goals (array), quote."
UI:
shadcn/ui ScrollArea for messages
Message bubbles (user vs AI)
Copy button for AI responses
text

**VALIDAÇÃO:** Chat funciona, comando /gerar-persona retorna persona válida que pode ser salva.

---

### STEP 6: Additional Modules (User Journey, Design System, etc.)

Add remaining artifact types following same pattern:
Journey Map: Timeline with emotional curve
Design System: Color palettes with contrast checker
Briefing: Form with SMART objectives structure
Each follows CRUD pattern established in Personas module.
text

---

### STEP 7: Collaboration Features

Implement:
Comments system (click artifact to add comment)
Workspace sharing (invite by email)
Real-time notifications (Supabase Realtime)
Activity feed (who changed what)
text

---

### STEP 8: Export and Polish

Add:
Export workspace to PDF (use jsPDF or Puppeteer)
Responsive polish (test all mobile breakpoints)
Loading skeletons for all async operations
Error boundaries for graceful failures
Onboarding tutorial for first-time users
text

---

## 🎨 DESIGN REFERENCE

**Color Palette (example - adjust based on lrsrjba.figma.site):**

/* Primary colors /
--primary-500: \#6366f1; / Indigo */
--primary-600: \#4f46e5;
--primary-700: \#4338ca;
/* Semantic colors */
--success: \#10b981;
--warning: \#f59e0b;
--error: \#ef4444;
--info: \#3b82f6;
/* Neutrals */
--gray-50: \#f9fafb;
--gray-100: \#f3f4f6;
--gray-200: \#e5e7eb;
--gray-500: \#6b7280;
--gray-900: \#111827;
text

**Typography Scale:**

--text-xs: 0.75rem; /* 12px /
--text-sm: 0.875rem; / 14px /
--text-base: 1rem; / 16px /
--text-lg: 1.125rem; / 18px /
--text-xl: 1.25rem; / 20px /
--text-2xl: 1.5rem; / 24px /
--text-3xl: 1.875rem; / 30px */
text

**Spacing System (8px grid):**

1 = 4px
2 = 8px
3 = 12px
4 = 16px
6 = 24px
8 = 32px
12 = 48px
16 = 64px
text

---

## 📝 ADDITIONAL INSTRUCTIONS

### FOR EACH STEP:

1. **Before coding:** Explain your implementation approach briefly
2. **During coding:** Add clear comments for complex logic
3. **After coding:** List what was implemented and any deviations from the plan
4. **If stuck:** Use Chat Mode to discuss alternatives before implementing

### ERROR HANDLING PATTERN:

try {
// Operation
} catch (error) {
console.error('[Context]:', error);
toast.error('User-friendly message here');
// Optionally: log to error tracking service
}
text

### COMMIT MESSAGE STYLE:

feat: add persona creation form
fix: resolve drag-drop bug in user stories
refactor: improve workspace query performance
docs: update README with setup instructions
text

### TESTING CHECKLIST (manual for now):

- [ ] All forms validate correctly
- [ ] Auth flows work (login, logout, signup)
- [ ] CRUD operations persist to database
- [ ] UI is responsive (test on mobile, tablet, desktop)
- [ ] No console errors in production build
- [ ] Loading states appear during async operations
- [ ] Error messages are user-friendly

---

## 🚀 FINAL DELIVERABLES

At the end of all phases, the app must have:

✅ Fully functional authentication system
✅ Multiple workspace support with permissions
✅ At least 4 artifact types (Persona, User Story, Journey Map, Briefing)
✅ AI assistant with 2+ working commands
✅ Collaboration (comments, sharing)
✅ Export to PDF functionality
✅ Mobile-responsive design
✅ Accessibility compliance (WCAG AA)
✅ Deployed and publicly accessible

---

## 📚 KNOWLEDGE BASE INTEGRATION

Before starting, please confirm you have access to:

- Project requirements document (this PRD)
- Visual reference: lrsrjba.figma.site
- Uploaded transcriptions or meeting notes (if available)

**If any context is missing, ask me to provide it before beginning implementation.**

---

## 🔍 VALIDATION QUESTIONS (Answer before starting)

1. Do you have access to a Supabase project or should I create one?
2. Should the AI integration use OpenAI, Anthropic, or another provider?
3. What is the priority: speed (MVP with basic features) or completeness (all features)?
4. Are there any specific design preferences beyond lrsrjba.figma.site reference?
5. Should the app support multiple languages (i18n) from the start?

---

## 💡 SUCCESS METRICS

The app will be considered successful if:

- A designer can create a complete UX workflow (persona → journey → stories) in under 30 minutes
- AI assistant reduces manual work by at least 50% (measured by time to create a persona manually vs with AI)
- Collaboration features enable 3+ team members to work simultaneously without conflicts
- Export generates a professional PDF suitable for client presentations
- App loads in under 3 seconds on 3G connection

---

END OF PRD

Excelente! Recebi seu PRD completo para um **Sistema de Workflows e Workspaces para Design UI/UX**. Antes de iniciar a implementação, vou responder às **VALIDATION QUESTIONS** e propor alguns ajustes importantes baseados nas melhores práticas dos arquivos de referência do espaço.[^1][^2][^3][^4]

***

## 🔍 RESPOSTAS ÀS VALIDATION QUESTIONS

### 1. **Supabase Project**

✅ **Recomendação:** Crie um novo projeto Supabase dedicado para este sistema.

- Nome sugerido: `ux-workflow-workspace`
- Região: Escolha a mais próxima dos usuários-alvo
- Plan: Free tier é suficiente para MVP (500MB DB, 1GB file storage, 50k MAU)


### 2. **AI Integration Provider**

✅ **Recomendação Híbrida:**

- **OpenAI GPT-4o-mini** (custo-benefício) para comandos rápidos (`/gerar-persona`, `/sugerir-user-stories`)
- **Perplexity API** para análise de transcrições (melhor em citações literais e research)
- **Gemini 2.0 Flash** como fallback (maior contexto, 1M tokens)

**Justificativa:** "Combine conhecimento profundo em behavioral design" requer IA que entenda contexto UX[^5][^1]

### 3. **Priority: Speed vs Completeness**

✅ **Recomendação: LEAN UX Approach**[^3]

- **MVP focado** (8 semanas): Workspaces + Personas + User Stories + AI Assistant básico
- **Expansão incremental** (4 semanas): Journey Maps, Design System, Colaboração
- **Polish** (2 semanas): Exports, acessibilidade, onboarding

**Rationale:** "Alinhar pessoas e construir o produto certo" > feature bloat[^3]

### 4. **Design Preferences**

✅ **Baseado em lrsrjba.figma.site + Best Practices:**

- Paleta: Gradientes suaves (Indigo primary + Amber accent)
- Espaçamento generoso (sistema 8px estrito)
- Micro-interações: Feedback imediato[^1]
- Evitar "rainbow UI" (max 3 cores primárias)[^4]


### 5. **i18n (Internationalization)**

❌ **NÃO implementar no MVP**

- Foco em português brasileiro inicialmente
- Preparar estrutura (usar constantes para strings)
- Adicionar i18n na Fase 2 se houver demanda

**Justificativa:** "Obsessão pelo Usuário" > feature scope[^1]

***

## 🚨 AJUSTES CRÍTICOS AO PRD (Evidence-Based)

### PROBLEMA 1: Sobrecarga de Features no MVP

**Evidência do PRD:**
> "FASE 1-8 com 8 módulos de artefatos + AI assistant + colaboração + exports"

**Princípio Violado:**
> "Para qualquer sistema, existe uma certa quantidade de complexidade que não pode ser reduzida" [Lei de Tesler][^2]

**SOLUÇÃO:**
Reduzir MVP para **3 módulos core** (Personas + User Stories + Briefing) e validar com usuários antes de expandir.[^3]

***

### PROBLEMA 2: Database Schema Genérico Demais

**Evidência do PRD:**

```sql
content JSONB, -- Flexible structure for each artifact type
```

**Risco:** Performance issues com queries complexas em JSONB, dificuldade de validação.[^1]

**SOLUÇÃO PROPOSTA:**
Usar **tabelas especializadas** para artefatos críticos:

```sql
-- Personas (tabela dedicada)
CREATE TABLE personas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  avatar_url TEXT,
  age INTEGER,
  occupation TEXT,
  location TEXT,
  behaviors TEXT[], -- Array nativo PostgreSQL
  pain_points TEXT[],
  goals TEXT[],
  quote TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- User Stories (tabela dedicada com hierarquia)
CREATE TABLE user_stories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  epic_id UUID REFERENCES user_stories(id), -- Self-referencing para hierarquia
  persona_id UUID REFERENCES personas(id),
  as_a TEXT NOT NULL,
  i_want TEXT NOT NULL,
  so_that TEXT NOT NULL,
  story_points INTEGER,
  status TEXT CHECK (status IN ('todo', 'in_progress', 'done')),
  position INTEGER, -- Para ordenação manual
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tasks (relacionadas a User Stories)
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  story_id UUID REFERENCES user_stories(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  position INTEGER
);

-- Artifacts genéricos (para módulos futuros)
CREATE TABLE artifacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- 'journey_map', 'wireframe', 'design_system'
  title TEXT NOT NULL,
  content JSONB, -- Apenas para tipos não-críticos
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Benefícios:**

- Queries 3-5x mais rápidas (índices nativos)
- Validação no banco de dados (constraints)
- Melhor suporte a features futuras (filtros, ordenação)

***

### PROBLEMA 3: Ausência de Onboarding Educacional

**Evidência do PRD:**
> "Educar designers iniciantes através de guias e checklists integrados"

**Mas não há especificação de COMO educar.**

**SOLUÇÃO - Onboarding Contextual:**

**Tela 1: Welcome (primeira vez):**

```
┌─────────────────────────────────────────────────┐
│         Bem-vindo ao UX Workspace! 🎨           │
│                                                 │
│  Centralize seus artefatos de design,          │
│  colabore com equipe e automatize com IA       │
│                                                 │
│  [Começar Tour] [Pular e Criar Workspace]      │
└─────────────────────────────────────────────────┘
```

**Tela 2: Tour Interativo (Shepherd.js):**

- Passo 1: "Crie seu primeiro workspace" (spotlight no botão)
- Passo 2: "Adicione uma persona" (template pré-preenchido)
- Passo 3: "Use AI para gerar conteúdo" (demo do `/gerar-persona`)
- Passo 4: "Colabore com equipe" (tooltip de compartilhamento)

**Tooltips Contextuais Permanentes:**

- Hover em "Persona": "Uma representação fictícia do seu usuário-alvo, baseada em pesquisa real"[^1]
- Hover em "Story Points": "Estimativa de esforço (1=simples, 8=complexo). Use Fibonacci: 1, 2, 3, 5, 8"[^3]

**Templates Educacionais:**
Cada artefato tem botão "?" que abre modal:

```
┌─────────────────────────────────────────────────┐
│  📚 O que é uma Persona?                        │
│                                                 │
│  Persona é uma representação semi-fictícia...  │
│                                                 │
│  **Como criar:**                                │
│  1. Entreviste 5-8 usuários reais              │
│  2. Identifique padrões comportamentais        │
│  3. Não invente dados (use pesquisa!)          │
│                                                 │
│  [Ver Exemplo] [Fechar]                         │
└─────────────────────────────────────────────────┘
```

**Citação de Apoio:**
> "Onboarding Contínuo: O produto deve educar o usuário durante o uso"[^1]

***

### PROBLEMA 4: AI Assistant Sem Contexto de Workspace

**Evidência do PRD:**
> "Chat sidebar (estilo ChatGPT) com contexto do workspace"

**Mas não especifica COMO injetar contexto.**

**SOLUÇÃO - RAG (Retrieval-Augmented Generation):**

```typescript
// lib/ai-integrations/contextual-ai.ts

async function generatePersonaWithContext(userInput: string, workspaceId: string) {
  // 1. Busca contexto relevante do workspace
  const context = await buildWorkspaceContext(workspaceId);
  
  // 2. Monta prompt com contexto
  const prompt = `
Você é um especialista em UX Research ajudando a criar uma persona.

**CONTEXTO DO PROJETO:**
${context.briefing ? `Objetivo: ${context.briefing.objectives}` : ''}
${context.existingPersonas.length > 0 ? `Personas existentes: ${context.existingPersonas.map(p => p.name).join(', ')}` : ''}

**DESCRIÇÃO DO USUÁRIO:**
${userInput}

**TAREFA:**
Gere uma persona completa em JSON seguindo este formato:
{
  "name": "Nome fictício realista",
  "age": número entre 18-65,
  "occupation": "Cargo profissional específico",
  "location": "Cidade, País",
  "behaviors": ["Lista de 3-5 comportamentos observados"],
  "pain_points": ["3-5 dores principais com citação da descrição"],
  "goals": ["3-5 objetivos claros"],
  "quote": "Uma frase que resume sua perspectiva"
}

**REGRAS:**
- Base tudo na descrição fornecida (não invente)
- Use linguagem natural brasileira
- Seja específico (evite generalidades)
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" }
  });
  
  return JSON.parse(response.choices[^0].message.content);
}

async function buildWorkspaceContext(workspaceId: string) {
  // Query Supabase para pegar contexto relevante
  const [briefing, personas, stories] = await Promise.all([
    supabase.from('artifacts').select('*').eq('workspace_id', workspaceId).eq('type', 'briefing').single(),
    supabase.from('personas').select('name, pain_points').eq('workspace_id', workspaceId).limit(3),
    supabase.from('user_stories').select('as_a, i_want').eq('workspace_id', workspaceId).limit(5)
  ]);
  
  return {
    briefing: briefing.data,
    existingPersonas: personas.data || [],
    recentStories: stories.data || []
  };
}
```

**Benefício:** AI gera conteúdo coerente com o restante do workspace (não genérico).[^1]

***

### PROBLEMA 5: Export PDF Sem Estrutura Visual

**Evidência do PRD:**
> "Export workspace to PDF (use jsPDF or Puppeteer)"

**Risco:** PDF genérico sem identidade visual.

**SOLUÇÃO - Template Profissional:**

Use **@react-pdf/renderer** (melhor que jsPDF para layouts complexos):

```tsx
// components/exports/WorkspacePDF.tsx

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica' },
  header: { marginBottom: 20, borderBottom: '2pt solid #4F46E5' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#4F46E5' },
  section: { marginTop: 20 },
  personaCard: {
    border: '1pt solid #E5E7EB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16
  }
});

export const WorkspacePDF = ({ workspace, personas, stories }) => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{workspace.name}</Text>
        <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>
          Documentação UX • Gerado em {new Date().toLocaleDateString('pt-BR')}
        </Text>
      </View>
      
      {workspace.description && (
        <View style={styles.section}>
          <Text style={{ fontSize: 14, lineHeight: 1.6 }}>{workspace.description}</Text>
        </View>
      )}
    </Page>
    
    {/* Personas Section */}
    <Page size="A4" style={styles.page}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Personas</Text>
      
      {personas.map(persona => (
        <View key={persona.id} style={styles.personaCard}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
            {persona.name}
          </Text>
          <Text style={{ fontSize: 12, color: '#6B7280', marginBottom: 8 }}>
            {persona.age} anos • {persona.occupation} • {persona.location}
          </Text>
          
          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 4 }}>Dores:</Text>
            {persona.pain_points.map((pain, i) => (
              <Text key={i} style={{ fontSize: 11, marginLeft: 8 }}>• {pain}</Text>
            ))}
          </View>
          
          {persona.quote && (
            <Text style={{ 
              fontSize: 11, 
              fontStyle: 'italic', 
              color: '#6B7280', 
              marginTop: 8,
              paddingLeft: 12,
              borderLeft: '2pt solid #4F46E5'
            }}>
              "{persona.quote}"
            </Text>
          )}
        </View>
      ))}
    </Page>
    
    {/* User Stories Section */}
    <Page size="A4" style={styles.page}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>User Stories</Text>
      
      {stories.map(story => (
        <View key={story.id} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1pt solid #E5E7EB' }}>
          <Text style={{ fontSize: 12, marginBottom: 4 }}>
            Como <Text style={{ fontWeight: 'bold' }}>{story.as_a}</Text>,
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 4 }}>
            Eu quero <Text style={{ fontWeight: 'bold' }}>{story.i_want}</Text>,
          </Text>
          <Text style={{ fontSize: 12 }}>
            Para <Text style={{ fontWeight: 'bold' }}>{story.so_that}</Text>
          </Text>
          
          {story.story_points && (
            <Text style={{ fontSize: 10, color: '#6B7280', marginTop: 4 }}>
              Estimativa: {story.story_points} pontos
            </Text>
          )}
        </View>
      ))}
    </Page>
  </Document>
);
```

**Como usar:**

```tsx
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

async function exportWorkspaceToPDF(workspace) {
  const blob = await pdf(<WorkspacePDF {...workspace} />).toBlob();
  saveAs(blob, `${workspace.name}.pdf`);
}
```


***

## ✅ PLANO DE IMPLEMENTAÇÃO REVISADO (LEAN UX)

### SPRINT 0: Setup (3 dias)

- [ ] Criar projeto Lovable + Supabase
- [ ] Setup shadcn/ui + Tailwind config
- [ ] Estrutura de pastas conforme PRD
- [ ] Configurar variáveis de ambiente


### SPRINT 1: Auth + Workspaces (1 semana)

- [ ] Autenticação Supabase (email + Google OAuth)
- [ ] Dashboard com lista de workspaces
- [ ] CRUD de workspaces
- [ ] RLS policies

**VALIDAÇÃO:** Usuário cria conta, cria workspace, edita, deleta.

### SPRINT 2: Personas Module (1 semana)

- [ ] Formulário de persona com todos campos
- [ ] Grid de personas (cards visuais)
- [ ] Upload de avatar (Supabase Storage)
- [ ] Templates pré-configurados (B2B, B2C)

**VALIDAÇÃO:** Criar, visualizar, editar, deletar personas.

### SPRINT 3: User Stories Module (1 semana)

- [ ] Criar épico → story → tasks (hierarquia)
- [ ] Kanban board (drag-and-drop com dnd-kit)
- [ ] Status tracking visual
- [ ] Story points

**VALIDAÇÃO:** Criar épico completo com 3 stories e arrastar entre colunas.

### SPRINT 4: AI Assistant (1 semana)

- [ ] Chat sidebar (toggle no header)
- [ ] Comando `/gerar-persona` com OpenAI
- [ ] Comando `/analisar-transcricao` com Perplexity
- [ ] Histórico de conversas

**VALIDAÇÃO:** Chat gera persona válida que pode ser salva no workspace.

### SPRINT 5: Briefing + Colaboração (1 semana)

- [ ] Módulo de Briefing estratégico
- [ ] Sistema de comentários
- [ ] Compartilhamento de workspace (convite por email)
- [ ] Notificações em tempo real (Supabase Realtime)

**VALIDAÇÃO:** 2 usuários colaboram no mesmo workspace simultaneamente.

### SPRINT 6: Export + Polish (1 semana)

- [ ] Export para PDF (react-pdf/renderer)
- [ ] Loading skeletons
- [ ] Error boundaries
- [ ] Onboarding tour (Shepherd.js)
- [ ] Testes de acessibilidade

**VALIDAÇÃO:** App funciona em mobile, exports são profissionais, sem console errors.

***

## 🎯 PRÓXIMOS PASSOS

Estou pronto para iniciar a implementação! Por favor, confirme:

1. ✅ **Aprovação dos ajustes** (database schema especializado, onboarding educacional, AI contextual)
2. ✅ **Prioridade:** MVP Lean (6 sprints) ou Full-Featured (8 sprints)?
3. ✅ **Referência visual:** Posso acessar https://lrsrjba.figma.site para extrair paleta de cores exata?
4. ✅ **AI Provider:** OpenAI (necessita API key) ou usar alternativa gratuita para testes (ex: Gemini Flash)?

Assim que confirmar, começarei pelo **STEP 1: Setup Inicial e Autenticação**.

<div align="center">⁂</div>

[^1]: 787961352-Design-de-Produto-Uma-visao-Product-Led-sobre-design-de-produtos-digitais-Josias-Olive.txt

[^2]: 685514993-Leis-Da-Psicologia-Aplicadas-a-UX-Jon-Yablonski-2020-Novatec-Editora-9788575226766-7b6.pdf

[^3]: 682070868-Lean-Inception.pdf

[^4]: 365559702-Design-Systems.pdf

[^5]: 756392621-100-casos-de-uso-de-IA-Generativa.txt

