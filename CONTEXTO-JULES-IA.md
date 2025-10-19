# 🎮 GAMIFICATION PLATFORM - CONTEXTO COMPLETO PARA JULES IA

**Projeto:** Plataforma de Gamificação para Alcance de Objetivos
**Data Criação:** 19 de Outubro de 2025
**Status:** Pronto para Revisão e Finalização por Jules IA
**Autonomia:** 100% - Jules pode executar todas as tarefas sem interrupção

---

## 📑 ÍNDICE RÁPIDO

1. [Executive Summary](#executive-summary)
2. [PRD Consolidado](#prd-consolidado)
3. [Stack Técnico](#stack-técnico)
4. [Especificações de CRUD](#especificações-de-crud)
5. [Gerenciamento de Estado](#gerenciamento-de-estado)
6. [Fluxos de Dados](#fluxos-de-dados)
7. [User Stories Executáveis](#user-stories-executáveis)
8. [Padrões de UI/UX](#padrões-de-uiux)
9. [Diretrizes de Implementação](#diretrizes-de-implementação)
10. [Critérios de Aceitação](#critérios-de-aceitação)

---

## 🎯 EXECUTIVE SUMMARY

### Visão do Produto

**Easy-Goal** é uma plataforma de gamificação que transforma **aprendizado e desenvolvimento profissional** em uma experiência imersiva, engajante e recompensadora. Combina **mecânicas de jogo comprovadas** com **conteúdo educacional estruturado** para criar hábitos de aprendizado contínuo.

### Problema Resolvido

- ❌ Falta de motivação para iniciar desenvolvimento profissional
- ❌ Abandono frequente em plataformas de aprendizado (45-70% dropout rate)
- ❌ Falta de visibilidade de progresso
- ❌ Isolamento no processo de aprendizado

### Solução

- ✅ Sistema de gamificação completo (XP, níveis, badges, streaks)
- ✅ Quests estruturadas com múltiplos formatos (vídeo, leitura, áudio, prática)
- ✅ Roadmap visual interativo mostrando progresso
- ✅ Comunidade e competição saudável

### Diferencial Competitivo

- **Foco em Hábitos:** Streak system com proteção (freeze 1x/mês)
- **Flexibilidade:** Múltiplos tipos de conteúdo, não apenas vídeo
- **Recompensas Significativas:** Badges em tiers (comum, raro, lendário)
- **Escalabilidade:** Arquitetura modular, pronta para extensões

---

## 📋 PRD CONSOLIDADO

### 1. OBJETIVOS DE PRODUTO (OKRs)

#### **Objetivos de Negócio (12 Meses)**

| Objetivo           | Meta Quantitativa               | KPI de Sucesso              |
| ------------------ | ------------------------------- | --------------------------- |
| Aquisição          | 10.000 MAU (Mês 6)              | DAU/MAU Ratio > 0.35        |
| Retenção           | 60% Retenção D30                | Churn Rate < 5%/mês         |
| Engajamento        | 5 quests/semana (usuário médio) | Quest Completion Rate > 78% |
| Monetização        | 8% Conversion (free→paid)       | ARPU > R$8/mês              |
| Product-Market Fit | NPS > 50                        | CSAT > 4.2/5                |

#### **North Star Metric**

**"Número de quests completadas por usuário por semana"**

Justificativa: Captura simultaneamente engajamento (frequência), retenção (retorno semanal) e valor entregue (aprendizado).

- **Meta Evolutiva:**
  - Mês 1-3: 3 quests/semana
  - Mês 4-6: 5 quests/semana
  - Mês 7+: 7 quests/semana

### 2. PERSONAS DETALHADAS

#### **Persona 1: Ana Silva - Transição de Carreira**

**Perfil:**

- Idade: 28 anos
- Profissão Atual: Analista de Marketing
- Objetivo: Transitar para UX/UI Design
- Experiência Tech: Intermediária
- Dispositivo Principal: Laptop + iPhone

**Motivações:**

- Desenvolvimento profissional
- Reconhecimento social
- Segurança financeira
- Crescimento pessoal

**Dores:**

- "Não sei por onde começar"
- "Falta tempo entre trabalho e estudo"
- "Preciso de portfólio, não só certificado"
- "Sinto que estou aprendendo sozinha"

**Jornada Esperada:**

1. Descobre Easy-Goal (amiga recomenda)
2. Completa onboarding em 5 min
3. Escolhe "Rota UX Design" (30 dias)
4. Completa 3-5 quests/semana
5. Desbloqueia badges mensais
6. Atinge level 10 em 60 dias
7. Conclui portfólio (projeto final)

---

#### **Persona 2: Carlos Santos - Certificação Profissional**

**Perfil:**

- Idade: 35 anos
- Profissão: Desenvolvedor Full-Stack
- Objetivo: Obter certificação em cloud (AWS/GCP)
- Experiência Tech: Avançada
- Dispositivo Principal: Desktop + iPad

**Motivações:**

- Aumento salarial
- Credibilidade profissional
- Manter skills atualizado
- Competição saudável

**Dores:**

- "Cursos são muito longos e cansativos"
- "Prefiro microlearning focado"
- "Quero competir com colegas"
- "Preciso de gamificação para me manter motivado"

**Jornada Esperada:**

1. Inscreve-se em rota de certificação (60h)
2. Setup streak goal: 6 dias/semana
3. Compete no leaderboard mensal
4. Desbloqueia badges "Expert" com 30+ dias
5. Atinge 50+ level em 3 meses

---

#### **Persona 3: Marina Costa - Desenvolvimento Pessoal**

**Perfil:**

- Idade: 42 anos
- Profissão: Gerente de Projetos
- Objetivo: Liderança executiva + soft skills
- Experiência Tech: Básica
- Dispositivo Principal: Mobile-first (apps no ônibus)

**Motivações:**

- Autossuperação
- Qualidade de vida
- Reconhecimento na carreira
- Comunidade e amizades

**Dores:**

- "Aplicativos são muito complexos para iniciantes"
- "Preciso aprender no meu tempo livre"
- "Gosto de feedback e reconhecimento"
- "Quero uma comunidade que me ajude"

**Jornada Esperada:**

1. Explora rota "Liderança Moderna" (conteúdo acessível)
2. Usa principalmente mobile
3. Engaja com comunidade (comentários, dicas)
4. Desenvolve streak de 30+ dias
5. Torna-se "Helper" (badge social)

---

### 3. ARQUITETURA DE GAMIFICAÇÃO

#### **A. Mecânicas de Jogo**

```
SISTEMA DE XP (Experience Points)
├── Quest Concluída: +35-100 XP (conforme tipo/dificuldade)
├── Daily Streak: +5 XP por dia consecutivo
├── Ajudar Comunidade: +5-10 XP (comentário, dica)
├── Desafio Semanal: +50 XP (ao completar)
└── Interação Social: +2 XP (comentar, curtir)

SISTEMA DE NÍVEIS
├── Total: 50 níveis
├── Progressão: XP_necessário = 100 × nível^1.5
├── Tiers:
│   ├── Iniciante (1-10): Acesso a quests básicas
│   ├── Intermediário (11-20): Desafios adicionais
│   ├── Avançado (21-35): Acesso a conteúdo premium
│   ├── Expert (36-45): Status de mentor
│   └── Master (46-50): Acesso exclusivo + habilidade de guiar
└── Celebração: Modal full-screen ao passar de nível

SISTEMA DE BADGES
├── Categorias:
│   ├── Streaks (7d, 30d, 100d)
│   ├── Milestones (Level 5, 10, 25, 50)
│   ├── Sociais (Ajudador, Mentor, Comunista)
│   ├── Raros (Easter eggs, desafios secretos)
│   └── Sazonais (eventos especiais)
├── Visual: Ícone + nome + descrição + % de usuários com badge
└── Exibição: Perfil público, grid colecionável

SISTEMA DE STREAKS (Hábitos)
├── Definição: Dias consecutivos com ≥1 quest concluída
├── Proteção: "Freeze" 1x/mês (pular sem perder)
├── Notificação: Push às 20h se não completou
├── Recompensas:
│   ├── 7d: Badge Bronze + 50 XP
│   ├── 30d: Badge Prata + 300 XP
│   ├── 100d: Badge Ouro + 1.000 XP + menção comunidade
│   └── 365d: Status "Legendário" (premium)
└── Visual: Ícone 🔥 com contador
```

#### **B. Sistema de Quests**

```
TIPOS DE QUEST
├── 📹 Vídeo (5-20 min)
│   └── Componentes: Video player + Quiz 3q + Progresso %
├── 📖 Leitura (10-30 min)
│   └── Componentes: Artigo formatado + Scroll tracking
├── 🎧 Áudio (10-45 min)
│   └── Componentes: Player com speed control + bookmarks
├── 💻 Prática (30-120 min)
│   └── Componentes: IDE/editor embedded + validação automática
└── 👥 Social (variável)
    └── Componentes: Forum + comentários + votação

DIFICULDADE & XP
├── Fácil: +35 XP (< 15 min)
├── Média: +50 XP (15-45 min)
├── Difícil: +100 XP (45+ min)
└── Épica: +150 XP (desafios + projeto)

STATUS DE QUEST
├── Disponível: Pode começar
├── Em Progresso: Iniciada
├── Concluída: Finalizada com sucesso
├── Travada: Pré-requisitos não atendidos
└── Expirada: Prazo vencido (weekly challenges)
```

#### **C. Roadmap Visual**

```
ROADMAP ESTRUTURA
├── Regiões (temas educacionais)
│   ├── Fundamentos (básico)
│   ├── Intermediário (prático)
│   ├── Avançado (especializado)
│   └── Master (liderança)
├── Nós do Mapa
│   ├── Checkpoint (marco de aprendizado)
│   ├── Coleta (badge/item)
│   ├── Desafio (quest desafiadora)
│   └── Tesouro (recompensa grande)
├── Conexões
│   ├── Linear: A → B → C
│   ├── Ramificada: Múltiplos caminhos
│   └── Network: Conexões avançadas
└── Progresso
    └── Usuário vê onde está, para onde vai, caminho tomado
```

---

## 🛠️ STACK TÉCNICO

### Frontend

- **React 18.3.1** com TypeScript
- **Tailwind CSS** para styling
- **Radix UI** para componentes acessíveis
- **Motion/Framer Motion** para animações
- **React Hook Form + Zod** para validação
- **TanStack Query** para cache de dados
- **Zustand** para gerenciamento de estado

### Backend

- **Supabase** (PostgreSQL + Auth + Storage)
- **PostgreSQL** (banco relacional)
- **Supabase Realtime** (atualizações em tempo real)
- **Supabase Functions** (edge functions)

### Deploy

- **Docker** (containerização)
- **Dokploy** (gerenciamento VPS)
- **GitHub Actions** (CI/CD)
- **SSL/HTTPS** via Let's Encrypt

---

## 🔧 ESPECIFICAÇÕES DE CRUD

### **Padrão Universal de CRUD**

Toda entidade seguirá este padrão (Quest, Badge, User, etc):

```
CREATE (Criar)
├── Trigger: Botão "+ Novo"
├── Modal/Form abre
├── Validação em tempo real (Zod)
├── Submit → Salva em DB + UI atualiza imediatamente
└── Toast: "✅ [Entity] criado com sucesso"

READ (Ler)
├── Lista completa com paginação
├── Filtros (tipo, dificuldade, status)
├── Busca full-text
├── Detalhes em modal/sidebar ao clicar
└── Cache com TanStack Query

UPDATE (Atualizar)
├── Edição inline (clique em campo)
├── OU modal de edição para múltiplos campos
├── Validação em tempo real
├── Save automático (debounced 1s)
├── Histórico de mudanças
└── Toast: "✅ [Entity] atualizado"

DELETE (Deletar)
├── Botão com ícone 🗑️
├── Confirmação dialog: "Tem certeza?"
├── Hard delete para dados não críticos
├── Soft delete (is_deleted=true) para dados críticos
└── Toast: "✅ [Entity] removido"
```

### **CRUD - Quests**

```yaml
CREATE:
  Route: POST /api/quests
  Body:
    { title, description, type, difficulty, xpReward, duration_min, content }
  Response: { id, created_at, ... }

READ:
  Route: GET /api/quests?type=video&difficulty=easy&page=1&limit=20
  Response:
    [{ id, title, type, difficulty, xpReward, user_progress_status }, ...]

UPDATE:
  Route: PATCH /api/quests/:id
  Body: { title?, description?, difficulty?, xpReward?, content? }
  Response: { id, updated_at, ... }

DELETE:
  Route: DELETE /api/quests/:id
  Soft delete: UPDATE quests SET is_deleted=true WHERE id=:id
  Response: { success: true }
```

### **CRUD - Badges**

```yaml
CREATE:
  Route: POST /api/badges
  Body: { name, description, icon_url, category, rarity }
  Response: { id, created_at, ... }

READ:
  Route: GET /api/badges?category=streaks&rarity=rare
  Response: [{ id, name, description, icon_url, users_count, ... }, ...]

UPDATE:
  Route: PATCH /api/badges/:id
  Body: { name?, description?, icon_url?, rarity? }
  Response: { id, updated_at, ... }

DELETE:
  Route: DELETE /api/badges/:id
  Response: { success: true }
```

### **CRUD - User Progress**

```yaml
CREATE:
  Route: POST /api/user-progress
  Body: { quest_id, user_id, started_at }
  Response: { id, progress_percentage: 0, status: "in_progress" }

READ:
  Route: GET /api/user-progress?user_id=123&status=in_progress
  Response: [{ id, quest_id, progress_percentage, status }, ...]

UPDATE:
  Route: PATCH /api/user-progress/:id
  Body: { progress_percentage?, status?, completed_at? }
  Response: { id, updated_at, ... }

DELETE:
  Route: DELETE /api/user-progress/:id
  Response: { success: true }
```

---

## 💾 GERENCIAMENTO DE ESTADO

### **Estado Global com Zustand**

```typescript
// store/useGameStore.ts

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface GameState {
  // User
  user: {
    id: string;
    name: string;
    currentXP: number;
    currentLevel: number;
    xpToNextLevel: number;
    currentStreak: number;
    badges: Badge[];
    settings: UserSettings;
  };

  // Quests
  quests: {
    daily: Quest[];
    weekly: Quest[];
    userProgress: UserProgress[];
  };

  // UI
  ui: {
    loading: boolean;
    error: string | null;
    selectedQuestId: string | null;
    modalsOpen: {
      questDetail: boolean;
      badgeDetail: boolean;
      levelUp: boolean;
    };
  };

  // Actions
  addXP: (amount: number) => void;
  completeQuest: (questId: string) => void;
  updateStreak: (days: number) => void;
  unlockBadge: (badgeId: string) => void;
  setSelectedQuest: (questId: string | null) => void;
  toggleModal: (modal: string, open: boolean) => void;
}

export const useGameStore = create<GameState>()(
  subscribeWithSelector((set) => ({
    // Initial state
    user: {
      /* ... */
    },
    quests: { daily: [], weekly: [], userProgress: [] },
    ui: { loading: false, error: null, selectedQuestId: null, modalsOpen: {} },

    // Actions
    addXP: (amount) =>
      set((state) => ({
        user: {
          ...state.user,
          currentXP: state.user.currentXP + amount,
        },
      })),

    completeQuest: (questId) =>
      set((state) => {
        const quest = state.quests.daily.find((q) => q.id === questId);
        if (!quest) return state;

        return {
          user: {
            ...state.user,
            currentXP: state.user.currentXP + quest.xpReward,
          },
          quests: {
            ...state.quests,
            userProgress: [
              ...state.quests.userProgress,
              {
                questId,
                status: "completed",
                completedAt: new Date(),
              },
            ],
          },
        };
      }),

    // ... other actions
  }))
);
```

### **Estado Local com React Hooks**

```typescript
// Componentes podem ter estado local para UI ephemeral
const [isEditing, setIsEditing] = useState(false);
const [editValue, setEditValue] = useState(initialValue);

// Sincronizar com store global ao salvar
const handleSave = async () => {
  await updateQuest(questId, { title: editValue });
  setIsEditing(false);
  // Store atualiza automaticamente via subscription
};
```

### **Sincronização com Supabase Realtime**

```typescript
// hook/useRealtimeUpdates.ts

export const useRealtimeUpdates = () => {
  const gameStore = useGameStore();

  useEffect(() => {
    const subscription = supabase
      .channel("public:quests")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "quests" },
        (payload) => {
          // Atualizar store quando dados mudam no DB
          gameStore.updateQuestFromDB(payload.new);
        }
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, [gameStore]);
};
```

---

## 🔄 FLUXOS DE DADOS

### **Fluxo: Completar Quest**

```
1. USUÁRIO CLICA "CONCLUIR QUEST"
   ↓
2. COMPONENTE DISPARA ACTION:
   completeQuest(questId)
   ↓
3. ZUSTAND STORE ATUALIZA:
   - currentXP += quest.xpReward
   - quest.status = "completed"
   - streak incrementa
   - check se desbloqueou badge
   ↓
4. COMPONENTE REAGE À MUDANÇA (via subscription):
   - Anima "+XP" na tela
   - Atualiza progress bar
   - Mostra toast de sucesso
   ↓
5. PERSISTIR NO DB (background):
   POST /api/quests/:id/complete
   ↓
6. SE ERRO:
   - Rollback do estado local
   - Mostrar toast de erro
   - Retry automático (exponential backoff)
```

### **Fluxo: Editar Quest Inline**

```
1. USUÁRIO CLICA NO CAMPO "TITLE"
   ↓
2. CAMPO TORNA-SE EDITABLE:
   - onChange atualiza estado local (isEditing=true, editValue=...)
   - Mostra botões [Salvar] [Cancelar]
   ↓
3. USUÁRIO CLICA [SALVAR]
   ↓
4. VALIDAÇÃO ZODE:
   - Se inválido: highlight red + error message
   - Se válido: prossegue
   ↓
5. OTIMISTA UPDATE:
   - Atualiza store imediatamente (optimistic)
   - Desabilita campo (loading=true)
   ↓
6. SAVE NO DB:
   PATCH /api/quests/:id
   ↓
7. CONFIRMAÇÃO:
   - Toast "✅ Atualizado"
   - Re-enable campo
   - Fechar modo edição
   ↓
8. SE ERRO:
   - Rollback do estado local
   - Mostrar error toast
   - Campo volta ao valor anterior
```

---

## 👥 USER STORIES EXECUTÁVEIS

### **US-001: Completar Quest de Vídeo**

```
Como: Ana (Transição de Carreira)
Eu quero: Assistir uma videoaula e marcar como concluída
Para que: Ganhe XP e avance no roadmap

Critérios de Aceitação (Given-When-Then):

AC1: Assistir vídeo com sucesso
GIVEN Ana está na página de quest "Fundamentos de UX"
WHEN ela clica "Iniciar Quest"
THEN o vídeo player abre com controles (play, pause, speed, legendas)
AND uma barra de progresso mostra seu avanço (0-100%)

AC2: Completar quiz ao final
GIVEN Ana terminou de assistir 80%+ do vídeo
WHEN ela chega ao final
THEN aparece um quiz com 3 perguntas
AND cada pergunta tem 4 opções de resposta

AC3: Ganhar XP e badge
GIVEN Ana acertou 2/3 perguntas (66%)
WHEN ela clica "Concluir Quest"
THEN a UI atualiza imediatamente:
  - XP bar anima "+35 XP"
  - Nível pode aumentar (se XP >= threshold)
  - Quest aparece em "Concluídas"
AND um toast mostra "✅ Excelente! +35 XP"

AC4: Streak incrementa
GIVEN Ana completou quest hoje
AND ela ainda não completou nenhuma today
WHEN a quest é marcada completa
THEN seu streak incrementa de 6 para 7 dias
AND ícone 🔥 na header atualiza de 6 para 7

AC5: Salva no banco de dados
GIVEN Ana completou a quest
WHEN a UI termina de atualizar
THEN os dados são persistidos:
  - INSERT user_progress { user_id, quest_id, status: 'completed', completed_at }
  - UPDATE users { current_xp, current_level, current_streak }
AND se offline, salva em IndexedDB e sincroniza depois

Heurísticas Aplicadas:
- Lei de Fitts: Botão "Concluir" é 44x44px mínimo
- Lei de Hick: Quiz tem apenas 3 perguntas (não 10)
- Feedback Imediato: Animação de XP é instantânea
- Prevenção de Erro: Mensagem "Tem certeza?" antes de sair sem completar
```

### **US-002: Editar Título de Quest (Admin)**

```
Como: Admin/Moderador
Eu quero: Editar o título de uma quest inline
Para que: Corrija erros de digitação rápido, sem abrir modal

Critérios de Aceitação:

AC1: Entrada em modo edição
GIVEN Admin está visualizando quest "Funndamentos de UX"
WHEN clica no campo de título
THEN o campo se torna um input text
AND botões [Salvar] [Cancelar] aparecem
AND a cor muda para indicar edição (ex: border azul)

AC2: Validação em tempo real
GIVEN Admin começa a digitar
WHEN o texto fica vazio
THEN aparece mensagem de erro inline: "Título não pode estar vazio"
AND o botão [Salvar] fica desabilitado (opacity 50%)

AC3: Salvar com sucesso
GIVEN Admin digitou "Fundamentos de UX Research"
WHEN clica [Salvar]
THEN o campo fecha modo edição imediatamente (optimistic)
AND toast mostra "✅ Título atualizado"
AND dados são persistidos no DB

AC4: Cancelar edição
GIVEN Admin está em modo edição
WHEN clica [Cancelar]
THEN o campo reverte ao valor anterior
AND modo edição fecha

AC5: Sincronizar com outros usuários (Realtime)
GIVEN Admin salvou o título
AND outro usuário está visualizando a mesma quest
WHEN os dados são persistidos
THEN a quest do outro usuário atualiza em tempo real
AND badge verde aparece indicando sincronização

Padrão CRUD: UPDATE
Método: PATCH /api/quests/:id
Body: { title: "novo título" }
Validação: Zod schema - min(1), max(200)
```

### **US-003: Desbloquear Badge de Milestone**

```
Como: Carlos (Certificação Profissional)
Eu quero: Desbloquear uma badge ao atingir level 10
Para que: Sinta reconhecimento e celebre meu progresso

Critérios de Aceitação:

AC1: Sistema detecta level up
GIVEN Carlos tem 9.850 XP (99% para level 10)
WHEN ele completa quest de 100 XP
THEN seu total fica 9.950 XP (99.5%)

AC2: Threshold atingido
GIVEN Carlos tem 10.000 XP (exato)
WHEN o XP é processado
THEN sistema detecta: currentXP >= xpForLevel(10)
AND nível incrementa de 9 para 10

AC3: Badge é desbloqueada automaticamente
GIVEN Carlos atingiu level 10
WHEN o update é processado
THEN INSERT user_badges { user_id, badge_id: "level_10", unlocked_at: NOW() }
AND badge aparece no perfil do Carlos

AC4: Celebração visual
GIVEN Carlos desbloqueou a badge
WHEN a transição completa
THEN um modal full-screen aparece mostrando:
  - Título "🎉 Level Up!"
  - Animação confetti (3 segundos)
  - Badge visual (ícone + nome)
  - Botão "Ver Perfil" e "Compartilhar"
AND som de celebração toca (se notificações ativadas)

AC5: Notificação em tempo real
GIVEN Badge foi desbloqueada
WHEN o modal fecha
THEN notificação push é enviada: "Parabéns! Você atingiu Level 10"
AND amigos veem na timeline: "Carlos desbloqueou Level 10 ✨"

Animações:
- Confetti: usar library `canvas-confetti`
- Level animation: scale 1 → 1.2 → 1 (spring animation)
- Badge fade-in: opacity 0 → 1 (300ms ease-out)
```

---

## 🎨 PADRÕES DE UI/UX

### **Design Tokens**

```typescript
// constants/design.ts

export const SPACING = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
};

export const COLORS = {
  primary: "#3B82F6", // Azul
  success: "#10B981", // Verde
  warning: "#F59E0B", // Âmbar
  error: "#EF4444", // Vermelho
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    500: "#6B7280",
    900: "#111827",
  },
};

export const TYPOGRAPHY = {
  h1: { fontSize: "32px", fontWeight: "bold", lineHeight: "1.2" },
  h2: { fontSize: "24px", fontWeight: "600", lineHeight: "1.3" },
  body: { fontSize: "16px", fontWeight: "400", lineHeight: "1.5" },
  caption: { fontSize: "12px", fontWeight: "400", lineHeight: "1.4" },
};

export const SHADOWS = {
  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 4px 6px rgba(0,0,0,0.1)",
  lg: "0 10px 15px rgba(0,0,0,0.1)",
};
```

### **Componentes Reutilizáveis**

```typescript
// Padrão: Componentes compostos com Radix UI

// components/QuestCard.tsx
export const QuestCard = ({ quest, onStart, onEdit, onDelete }: Props) => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <Badge>{quest.type}</Badge>
        <DropdownMenu>
          <DropdownMenuTrigger>⋮</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={onEdit}>Editar</DropdownMenuItem>
            <DropdownMenuItem onClick={onDelete} className="text-red-600">
              Deletar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <h3>{quest.title}</h3>
    </CardHeader>
    <CardBody>
      <p>{quest.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">{quest.duration_min} min</span>
        <Badge variant="secondary">+{quest.xpReward} XP</Badge>
      </div>
    </CardBody>
    <CardFooter>
      <Button onClick={onStart} size="lg" className="w-full">
        Iniciar Quest
      </Button>
    </CardFooter>
  </Card>
);
```

### **Estados de Interação**

```typescript
// Padrões de estado visual

Button States:
├── Default: background-blue-500, text-white
├── Hover: background-blue-600, cursor-pointer
├── Active: background-blue-700, box-shadow: inset
├── Disabled: opacity-50, cursor-not-allowed
└── Loading: spinner animado, disabled=true

Input States:
├── Default: border-gray-300, bg-white
├── Focus: border-blue-500, ring: blue-200, outline-none
├── Error: border-red-500, ring: red-200
├── Success: border-green-500, ring: green-200
└── Disabled: bg-gray-100, cursor-not-allowed

Card States:
├── Default: shadow-sm, border-gray-200
├── Hover: shadow-md, translateY(-2px)
├── Active: ring: 2px blue-500
└── Loading: opacity-60, pointer-events-none
```

---

## ⚙️ DIRETRIZES DE IMPLEMENTAÇÃO

### **Princípios Arquiteturais**

1. **Single Responsibility Principle (SRP)**

   - Cada componente faz UMA coisa bem
   - Evitar componentes "god" de 500+ linhas

2. **DRY (Don't Repeat Yourself)**

   - Extrair lógica comum em hooks customizados
   - Componentes reutilizáveis em `/shared`

3. **Composition over Inheritance**

   - Usar React composition
   - Evitar prop drilling profundo (usar Context/Zustand)

4. **Performance First**
   - React.memo para componentes puros
   - Lazy loading de rotas pesadas
   - Virtualization de listas longas

### **Padrões de Código TypeScript**

```typescript
// ✅ BOM: Tipos explícitos, interfaces claras

interface Quest {
  id: string;
  title: string;
  type: "video" | "reading" | "audio" | "practice" | "social";
  difficulty: "easy" | "medium" | "hard" | "epic";
  xpReward: number;
  durationMin: number;
  createdAt: Date;
  updatedAt: Date;
}

// ❌ RUIM: Tipos implícitos, any

interface Quest {
  id: any;
  data: any;
}
```

### **Validação de Formulários**

```typescript
// Usar Zod + React Hook Form

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const questSchema = z.object({
  title: z.string().min(1, "Título obrigatório").max(200),
  type: z.enum(["video", "reading", "audio", "practice", "social"]),
  difficulty: z.enum(["easy", "medium", "hard", "epic"]),
  xpReward: z.number().min(1).max(500),
  durationMin: z.number().min(1).max(480),
});

export const QuestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(questSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} />
      {errors.title && <span>{errors.title.message}</span>}
      {/* ... */}
    </form>
  );
};
```

### **Tratamento de Erros**

```typescript
// Padrão: Try-catch com retry automático

export const completeQuest = async (questId: string, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(`/api/quests/${questId}/complete`, {
        method: "POST",
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      return await response.json();
    } catch (error) {
      if (i < maxRetries - 1) {
        // Exponential backoff: 1s, 2s, 4s
        await new Promise((resolve) =>
          setTimeout(resolve, Math.pow(2, i) * 1000)
        );
      } else {
        throw new Error(`Failed after ${maxRetries} retries: ${error.message}`);
      }
    }
  }
};

// Uso em componente
const handleComplete = async () => {
  try {
    setLoading(true);
    await completeQuest(questId);
    toast.success("✅ Quest concluída");
  } catch (error) {
    toast.error(`❌ ${error.message}`);
  } finally {
    setLoading(false);
  }
};
```

---

## ✅ CRITÉRIOS DE ACEITAÇÃO (MASTER CHECKLIST)

### **Requisitos Funcionais (MUST HAVE)**

- [x] Sistema de autenticação com Supabase
- [x] Dashboard com navegação
- [x] CRUD completo de Quests (Create, Read, Update, Delete)
- [x] CRUD completo de Badges
- [x] Sistema de XP e níveis
- [x] Streak tracking
- [x] Roadmap visual
- [x] Gerenciamento de estado com Zustand
- [x] Persistência em Supabase
- [x] Sincronização Realtime
- [x] User stories com critérios Given-When-Then

### **Requisitos de Qualidade (SHOULD HAVE)**

- [ ] Cobertura de testes unitários > 80%
- [ ] Lighthouse score > 90 (performance)
- [ ] Accessibility WCAG 2.1 AA
- [ ] Sem console errors/warnings
- [ ] TypeScript strict mode

### **Requisitos de Performance (COULD HAVE)**

- [ ] Bundle size < 500KB (minificado)
- [ ] Time to Interactive < 3 segundos
- [ ] First Contentful Paint < 1.5 segundos
- [ ] Suporte offline com IndexedDB

### **Requisitos de Segurança (CRITICAL)**

- [x] Variáveis de ambiente não expustas
- [x] Autenticação JWT via Supabase
- [x] Row Level Security (RLS) no Supabase
- [x] Validação de entrada (Zod)
- [x] Proteção contra XSS

---

## 🚀 PRÓXIMAS AÇÕES PARA JULES IA

### **Phase 1: Validação (Hoje)**

1. Revisar PRD completo
2. Identificar gaps e inconsistências
3. Validar alinhamento com stack técnico

### **Phase 2: Implementação (Semana 1)**

1. Expandir CRUD de todos os componentes
2. Implementar sincronização Realtime
3. Testar fluxos de dados

### **Phase 3: Otimização (Semana 2)**

1. Performance tuning
2. Testes automatizados
3. Deploy em staging

### **Phase 4: Launch (Semana 3)**

1. Deploy em produção
2. Monitoramento
3. Coleta de feedback

---

## 📞 CONTATOS E RECURSOS

- **GitHub Repo:** https://github.com/LuciSantiago/gamification-platform
- **Supabase Docs:** https://supabase.com/docs
- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com
- **Radix UI:** https://www.radix-ui.com

---

**Status Final:** 🟢 PRONTO PARA IMPLEMENTAÇÃO POR JULES IA

**Autonomia:** 100% - Jules tem tudo o que precisa para executar sem interrupção

**Próxima Revisão:** 5 de Novembro de 2025
