<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Agora quero que adicione e gere nossos prompts adicionais para o figma make, considerando o prompt como unica fonte de informação e o PRD presente no chat. Quero estruturar o prompt adicional para customizar e corrigir as funcionalidades de edição, CRUD funcional em todos os componentes, alterações e edit visiveis e facil de utilizar e com reatividade e gerenciamento de estado adequado e preencha nossos objetivos com informações reais abaixo:

```
# PROMPT PARA CRIAÇÃO DE PRD - PROJETO DE GAMIFICAÇÃO PARA ALCANCE DE OBJETIVOS
```

Perfeito! Vou criar um **PROMPT ADICIONAL SUPER DETALHADO** para o Figma Make focado em **FUNCIONALIDADES CRUD COMPLETAS**, **EDIÇÃO EM LINHA**, **REATIVIDADE** e **GERENCIAMENTO DE ESTADO ADEQUADO**, usando como única fonte de informação este prompt e o PRD presente no chat.[^1][^2][^3]

***

# PROMPT ADICIONAL PARA FIGMA MAKE - CRUD FUNCIONAL E GERENCIAMENTO DE ESTADO

**Versão:** 2.0 - Funcionalidades Avançadas de Edição e Estado
**Data:** 19 de Outubro de 2025
**Projeto:** Easy-Goal Gamification Platform
**Objetivo:** Implementar sistema completo de CRUD, edição inline, reatividade e gerenciamento de estado em todos os componentes da aplicação

***

## CONTEXTO ESTRATÉGICO

**IMPORTANTE:** Este prompt é a **ÚNICA FONTE DE INFORMAÇÃO** para implementação das funcionalidades de edição e gerenciamento de estado. Todas as especificações devem ser implementadas EXATAMENTE conforme descrito. Em caso de dúvida técnica, revisite o **PRD original** presente no chat (arquivos "PROMPT-PARA-CRIACAO-DE-PRD" e "Continuacao-do-PRD").[^2][^3][^1]

**Princípios de Design de Produto que Regem Este Prompt:**

> "Obsessão pelo Usuário: Cada elemento deve facilitar a vida do usuário"[^1]

> "Feedback Imediato: Toda ação merece resposta visual"[^1]

> "Menos Texto, Mais Ação: Mostre, não explique"[^1]

> "Prevenir Erros: Melhor que mensagens de erro é design que previne erros"[^1]

***

## PARTE 1: ARQUITETURA DE GERENCIAMENTO DE ESTADO

### 1.1 Conceito de Estado Reativo

**DEFINIÇÃO:**
Estado é qualquer dado que pode mudar durante o ciclo de vida da aplicação e que, quando alterado, deve disparar automaticamente atualizações visuais em todos os componentes que dependem dele.[^1]

**EXEMPLOS NO EASY-GOAL:**

- **User State:** XP atual, nível, streak, badges desbloqueados
- **Quest State:** Lista de quests, status (pendente, em progresso, concluída), progresso %
- **UI State:** Modal aberto/fechado, loading, erros, toast notifications

***

### 1.2 Estrutura de Estado Global (Single Source of Truth)

```javascript
// ESTRUTURA DE ESTADO COMPLETA - EASY-GOAL

const appState = {
  // USER STATE
  user: {
    id: "user_123",
    name: "Ana Silva",
    email: "ana@email.com",
    avatar: "https://...",
    
    // Progresso
    currentXP: 350,
    currentLevel: 5,
    xpToNextLevel: 500,
    totalXPEarned: 2450,
    
    // Streak
    currentStreak: 7,
    longestStreak: 12,
    streakLastUpdate: "2025-10-19T00:00:00Z",
    
    // Badges
    badges: [
      { id: "badge_1", name: "Week Warrior", unlockedAt: "2025-10-18" },
      { id: "badge_2", name: "Early Bird", unlockedAt: "2025-10-15" }
    ],
    
    // Settings
    settings: {
      notificationsEnabled: true,
      dailyGoal: 3, // quests per day
      theme: "light" // ou "dark"
    }
  },
  
  // QUEST STATE
  quests: {
    daily: [
      {
        id: "quest_1",
        title: "Assista: Fundamentos de UX Research",
        description: "Aprenda os princípios básicos de pesquisa...",
        type: "video", // video, reading, audio, practice, social
        duration: 10, // minutes
        xpReward: 35,
        difficulty: "easy", // easy, medium, hard
        module: 1,
        status: "pending", // pending, in_progress, completed, locked
        progress: 0, // 0-100
        lastPosition: null, // timestamp para retomar, ex: "4:32"
        completedAt: null
      },
      // ... mais 2-4 quests
    ],
    completed: [
      {
        id: "quest_5",
        title: "Leia: Laws of UX",
        completedAt: "2025-10-18T14:32:00Z",
        xpEarned: 45,
        timeSpent: 8 // minutes
      }
    ]
  },
  
  // ROADMAP STATE
  roadmap: {
    regions: [
      {
        id: "region_1",
        name: "Fundamentos",
        status: "completed", // completed, in_progress, locked
        progress: 100,
        questsCompleted: 12,
        questsTotal: 12
      },
      {
        id: "region_2",
        name: "Prática Inicial",
        status: "in_progress",
        progress: 60,
        questsCompleted: 7,
        questsTotal: 12
      }
      // ... mais regiões
    ]
  },
  
  // UI STATE (ephemeral - não persiste no backend)
  ui: {
    isLoading: false,
    currentModal: null, // "levelUp", "questDetail", "settings"
    toast: {
      visible: false,
      message: "",
      type: "success" // success, error, warning, info
    },
    editMode: {
      active: false,
      componentId: null, // qual componente está em modo de edição
      originalValue: null // valor antes da edição (para cancelamento)
    }
  }
};
```


***

### 1.3 Padrão de Atualização de Estado (Reativo)

**REGRA DE OURO:**
**NUNCA** manipule o DOM diretamente. **SEMPRE** atualize o estado e deixe o sistema reagir automaticamente.[^1]

**EXEMPLO ERRADO:**

```javascript
// ❌ NUNCA FAÇA ISSO
document.getElementById("xp-value").innerText = "385 XP";
```

**EXEMPLO CORRETO:**

```javascript
// ✅ SEMPRE FAÇA ISSO
updateState({ user: { currentXP: 385 } });
// Sistema automaticamente atualiza TODAS as partes da UI que exibem XP
```


***

### 1.4 Sistema de Persistência (LocalStorage + Backend Sync)

**ESTRATÉGIA HÍBRIDA:**

1. **LocalStorage (Imediato):** Salva estado localmente para resposta instantânea
2. **Backend Sync (Assíncrono):** Envia ao servidor em background, com retry em caso de falha
```javascript
// PSEUDO-CÓDIGO - Sistema de Persistência

function updateState(newState) {
  // 1. Merge com estado atual
  appState = deepMerge(appState, newState);
  
  // 2. Salva localmente (síncrono, < 10ms)
  localStorage.setItem("easy-goal-state", JSON.stringify(appState));
  
  // 3. Notifica componentes (reatividade)
  notifyStateChange(newState);
  
  // 4. Sync com backend (assíncrono, não bloqueia UI)
  syncToBackend(newState)
    .then(() => console.log("✅ Synced to backend"))
    .catch(err => {
      console.error("❌ Sync failed, will retry", err);
      scheduleRetry(newState);
    });
}

function syncToBackend(state) {
  return fetch("/api/user/state", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state)
  });
}
```


***

## PARTE 2: FUNCIONALIDADES CRUD COMPLETAS

### 2.1 CRUD - Quest Cards

#### **CREATE (Adicionar Nova Quest)**

**Contexto:** Admin cria nova quest ou usuário adiciona custom quest (Fase 2)

**Fluxo Visual:**

```
1. Botão "+ Nova Quest" (floating action button, bottom right)
   ↓
2. Modal "Criar Quest" com formulário
   ↓
3. Preenche dados + Preview em tempo real
   ↓
4. Clica "Criar" → Loading spinner → Toast "Quest criada! ✅" → Modal fecha → Nova quest aparece na lista com animação
```

**Formulário de Criação (Modal):**

```
┌─────────────────────────────────────────────────┐
│  Criar Nova Quest                          [X]  │
│  ═════════════════                              │
│                                                 │
│  Título *                                       │
│  [Input: "Digite o título da quest"]           │
│                                                 │
│  Descrição *                                    │
│  [Textarea: "Descreva o que o usuário vai     │
│   aprender..."] (2-3 linhas)                   │
│                                                 │
│  Tipo *                                         │
│  [Dropdown: Vídeo, Leitura, Áudio, Prática]    │
│                                                 │
│  Duração (minutos) *                            │
│  [Number input: min=1, max=120]                │
│                                                 │
│  XP Recompensa *                                │
│  [Number input: min=5, max=200]                │
│                                                 │
│  Dificuldade *                                  │
│  [Radio buttons: ⭐ Fácil  ⭐⭐ Médio  ⭐⭐⭐ Difícil] │
│                                                 │
│  Módulo                                         │
│  [Number input: opcional, default=1]           │
│                                                 │
│  ─────────────────────────────────────          │
│  Preview                                        │
│  [Quest Card renderizado em tempo real]        │
│                                                 │
│  [Cancelar]              [Criar Quest →]       │
└─────────────────────────────────────────────────┘
```

**ESPECIFICAÇÕES TÉCNICAS:**

**Validação em Tempo Real:**

- Campo "Título": min 10 chars, max 60 chars → Contador visual "45/60"
- Campo "Descrição": min 20 chars, max 150 chars
- Duração: se > 30 min, aviso: "⚠️ Quests longas têm menor taxa de conclusão"
- XP: Se não preencher, sistema sugere automaticamente: `XP = duração * 3.5` (ex: 10 min = 35 XP)

**Preview em Tempo Real:**

- Quest Card renderizado ao lado do formulário (ou abaixo em mobile)
- Atualiza instantaneamente a cada keystroke (debounce de 300ms)
- Mostra exatamente como ficará na lista de Daily Quests

**Estados do Botão "Criar Quest":**

- Default: Habilitado, primary-600
- Hover: primary-700, translateY(-2px)
- Loading: Spinner animado, texto "Criando...", desabilitado
- Success: Verde, ícone check, texto "Criado!" (2s) → Modal fecha
- Error: Vermelho, shake animation, texto "Erro. Tente novamente"

**Código de Estado (simplificado):**

```javascript
function createQuest(formData) {
  // 1. Validação
  const errors = validateQuestForm(formData);
  if (errors.length > 0) {
    showValidationErrors(errors);
    return;
  }
  
  // 2. Otimistic Update (UI atualiza antes do backend responder)
  const tempId = `quest_temp_${Date.now()}`;
  const newQuest = {
    id: tempId,
    ...formData,
    status: "pending",
    progress: 0,
    completedAt: null,
    _isOptimistic: true // flag para identificar
  };
  
  updateState({
    quests: {
      daily: [...appState.quests.daily, newQuest]
    },
    ui: { isLoading: true }
  });
  
  // 3. Request ao Backend
  fetch("/api/quests", {
    method: "POST",
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(realQuest => {
      // Substitui quest temporária pela real (com ID do backend)
      updateState({
        quests: {
          daily: appState.quests.daily.map(q => 
            q.id === tempId ? { ...realQuest, _isOptimistic: false } : q
          )
        },
        ui: { 
          isLoading: false,
          toast: { visible: true, message: "Quest criada! ✅", type: "success" }
        }
      });
    })
    .catch(err => {
      // Rollback em caso de erro
      updateState({
        quests: {
          daily: appState.quests.daily.filter(q => q.id !== tempId)
        },
        ui: {
          isLoading: false,
          toast: { visible: true, message: "Erro ao criar quest ❌", type: "error" }
        }
      });
    });
}
```


***

#### **READ (Visualizar Quest)**

**Já Implementado:** Quest Cards na home exibem informações básicas

**ADICIONAR:** Quest Detail View (modal) ao clicar no card

```
┌─────────────────────────────────────────────────┐
│  [← Voltar]  Quest Detail            [♡ Salvar]│
│                                                 │
│  [Ícone 80x80px tipo Vídeo, gradiente Pink]    │
│  Fundamentos de UX Research                     │
│  Vídeo • 10 min • Nível Iniciante              │
│                                                 │
│  ⚡ +35 XP ao concluir                          │
│  🔥 Conta para streak diário                   │
│  📚 Módulo 1 de 5 - "Introdução ao UX"         │
│                                                 │
│  ─────────────────────────────────────          │
│  Sobre esta Quest                              │
│  ─────────────────────────────────────          │
│                                                 │
│  Aprenda os conceitos fundamentais de          │
│  pesquisa de usuários, incluindo:              │
│                                                 │
│  • Métodos qualitativos vs quantitativos      │
│  • Como conduzir entrevistas                   │
│  • Análise de dados de pesquisa               │
│  • Ferramentas mais usadas no mercado         │
│                                                 │
│  ─────────────────────────────────────          │
│  Pré-requisitos                                 │
│  ─────────────────────────────────────          │
│  Nenhum. Ideal para iniciantes!                │
│                                                 │
│  ─────────────────────────────────────          │
│  O que você vai ganhar                          │
│  ─────────────────────────────────────          │
│  ✓ Badge "UX Researcher" (ao completar        │
│    todos os 5 módulos)                         │
│  ✓ Certificado de conclusão                    │
│  ✓ 35 XP para progressão                       │
│                                                 │
│  ─────────────────────────────────────          │
│  Quests Relacionadas                            │
│  ─────────────────────────────────────          │
│  [Mini Card] Entrevistas com Usuários          │
│  [Mini Card] Testes de Usabilidade             │
│                                                 │
│  [ Começar Agora → ]                           │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Estado de Loading:**

Ao abrir modal, se dados completos não estão em cache:

```
┌─────────────────────────────────────────────────┐
│  [← Voltar]  Quest Detail                       │
│                                                 │
│  [Skeleton: Ícone pulsante 80x80px]            │
│  [Skeleton: Título 200x24px pulsante]          │
│  [Skeleton: Metadados 150x16px]                │
│                                                 │
│  [Skeleton: 3 linhas de texto pulsantes]       │
│  [Skeleton: 4 bullet points]                    │
│                                                 │
│  Carregando detalhes...                         │
└─────────────────────────────────────────────────┘
```

Skeletons pulsam com animação shimmer (gradiente branco semitransparente deslizando).[^1]

***

#### **UPDATE (Editar Quest)**

**Contexto:** Admin ou usuário com permissão edita quest existente

**Fluxo:**

```
1. Clique em "•••" (menu) no Quest Card
   ↓
2. Dropdown: [Salvar para depois] [Pular] [✏️ Editar] [🗑️ Deletar]
   ↓
3. Clica "Editar" → Modal abre igual ao CREATE, mas pré-preenchido
   ↓
4. Edita campos → Preview atualiza em tempo real
   ↓
5. Clica "Salvar Alterações" → Loading → Toast "Quest atualizada! ✅"
```

**MODO DE EDIÇÃO INLINE (Alternativa para Admin):**

Para edição rápida sem abrir modal:

```
1. Quest Card em estado DEFAULT
   ↓
2. Long press (mobile) ou Hover + Click ícone lápis (desktop)
   ↓
3. Card entra em "Edit Mode":
      - Border vira primary-500 (2px)
      - Background vira primary-50
      - Título vira Input editável
      - Descrição vira Textarea editável
      - Botões: [✓ Salvar] [✕ Cancelar]
   ↓
4. Edita in-place
   ↓
5. Clica "Salvar" → Card volta ao estado DEFAULT com novo conteúdo
   OU
6. Clica "Cancelar" → Card volta ao estado original (sem mudanças)
```

**ESPECIFICAÇÕES DO EDIT MODE:**

```javascript
function enterEditMode(questId) {
  // 1. Salva valor original para possível cancelamento
  const quest = appState.quests.daily.find(q => q.id === questId);
  
  updateState({
    ui: {
      editMode: {
        active: true,
        componentId: questId,
        originalValue: { ...quest } // clone deep
      }
    }
  });
  
  // 2. UI automaticamente reage mostrando inputs editáveis
}

function saveEdit(questId, newData) {
  updateState({
    quests: {
      daily: appState.quests.daily.map(q => 
        q.id === questId ? { ...q, ...newData } : q
      )
    },
    ui: {
      editMode: { active: false, componentId: null, originalValue: null },
      toast: { visible: true, message: "Alterações salvas ✅", type: "success" }
    }
  });
  
  // Sync assíncrono ao backend
  syncToBackend({ quests: { [questId]: newData } });
}

function cancelEdit() {
  updateState({
    ui: {
      editMode: { active: false, componentId: null, originalValue: null }
    }
  });
  // Estado volta automaticamente ao valor antes da edição
}
```

**VALIDAÇÃO DURANTE EDIÇÃO:**

- Se campo obrigatório fica vazio, mostra erro inline: "❌ Campo obrigatório"
- Botão "Salvar" só habilita se todas validações passarem
- Se tenta sair do edit mode sem salvar, confirma: "Descartar alterações?"[^1]

***

#### **DELETE (Deletar Quest)**

**Fluxo:**

```
1. Clique em "•••" → "🗑️ Deletar"
   ↓
2. Modal de confirmação (OBRIGATÓRIO para evitar deleção acidental):
   
   ┌─────────────────────────────────────────┐
   │  Deletar Quest?                          │
   │                                          │
   │  Tem certeza que deseja deletar         │
   │  "Fundamentos de UX Research"?          │
   │                                          │
   │  ⚠️ Esta ação não pode ser desfeita.    │
   │                                          │
   │  [Cancelar]       [Deletar]             │
   └─────────────────────────────────────────┘
   
   ↓
3. Clica "Deletar" → Quest desaparece com animação (fade out + scale down, 300ms)
   ↓
4. Toast: "Quest deletada. [Desfazer]" (5 segundos para desfazer)
   ↓
5. Se NÃO clica "Desfazer" em 5s → Deletado permanentemente
   OU
   Se clica "Desfazer" → Quest reaparece com animação reversa
```

**IMPLEMENTAÇÃO COM UNDO:**

```javascript
let deleteTimeout = null;

function deleteQuest(questId) {
  // 1. Remove visualmente (soft delete)
  const deletedQuest = appState.quests.daily.find(q => q.id === questId);
  
  updateState({
    quests: {
      daily: appState.quests.daily.filter(q => q.id !== questId)
    },
    ui: {
      toast: {
        visible: true,
        message: "Quest deletada. [Desfazer]",
        type: "warning",
        action: () => undoDelete(questId, deletedQuest)
      }
    }
  });
  
  // 2. Agenda deleção permanente para 5s depois
  deleteTimeout = setTimeout(() => {
    permanentlyDeleteQuest(questId);
  }, 5000);
}

function undoDelete(questId, deletedQuest) {
  // Cancela deleção permanente
  clearTimeout(deleteTimeout);
  
  // Restaura quest
  updateState({
    quests: {
      daily: [...appState.quests.daily, deletedQuest]
    },
    ui: {
      toast: { visible: true, message: "Quest restaurada ✅", type: "success" }
    }
  });
}

function permanentlyDeleteQuest(questId) {
  // Request ao backend para deletar de vez
  fetch(`/api/quests/${questId}`, { method: "DELETE" })
    .then(() => console.log("✅ Quest deletada permanentemente"))
    .catch(err => console.error("❌ Falha ao deletar", err));
}
```


***

### 2.2 CRUD - User Profile (Perfil e Configurações)

#### **READ (Visualizar Perfil)**

**Tela de Perfil (acessível via bottom nav):**

```
┌─────────────────────────────────────────────────┐
│  [← Voltar]  Meu Perfil                   [⚙️] │
│                                                 │
│         [Avatar 120x120px]                      │
│         Ana Silva                               │
│         ana@email.com                           │
│         [✏️ Editar Perfil]                      │
│                                                 │
│  ─────────────────────────────────────          │
│  Estatísticas                                   │
│  ─────────────────────────────────────          │
│                                                 │
│  Nível Atual        XP Total        Streak      │
│     5              2.450 XP           7 dias    │
│  [Gráfico]         [Gráfico]      [Gráfico]     │
│                                                 │
│  Quests Concluídas     Taxa de Conclusão        │
│        48                  82%                  │
│                                                 │
│  ─────────────────────────────────────          │
│  Conquistas (12/50)                             │
│  ─────────────────────────────────────          │
│                                                 │
│  [Badge]  [Badge]  [Badge]  [Badge]             │
│  Week     Early    Fast     First               │
│  Warrior  Bird     Learner  Steps               │
│                                                 │
│  [Ver Todas Conquistas →]                       │
│                                                 │
│  ─────────────────────────────────────          │
│  Atividade Recente                              │
│  ─────────────────────────────────────          │
│                                                 │
│  Hoje • 2 quests concluídas                     │
│  Ontem • 3 quests concluídas                    │
│  16 Out • 1 quest concluída                     │
│                                                 │
└─────────────────────────────────────────────────┘
```


***

#### **UPDATE (Editar Perfil)**

**Fluxo:**

```
1. Clica "✏️ Editar Perfil"
   ↓
2. Modal com formulário pré-preenchido:
   
   ┌─────────────────────────────────────────┐
   │  Editar Perfil                     [X]  │
   │  ══════════════                          │
   │                                          │
   │  [Avatar 80x80px]  [Alterar Foto]       │
   │                                          │
   │  Nome *                                  │
   │  [Input pré-preenchido: "Ana Silva"]    │
   │                                          │
   │  Email *                                 │
   │  [Input pré-preenchido: "ana@email.com"]│
   │  (desabilitado - não pode mudar)        │
   │                                          │
   │  Bio (opcional)                          │
   │  [Textarea: "Conte um pouco sobre você"]│
   │  Max 150 caracteres (45/150)            │
   │                                          │
   │  Objetivo Principal                      │
   │  [Dropdown pré-selecionado:             │
   │   "Transição de Carreira"]              │
   │                                          │
   │  [Cancelar]          [Salvar →]         │
   └─────────────────────────────────────────┘
   
   ↓
3. Edita campos → Preview do avatar ao lado (se alterar foto)
   ↓
4. Clica "Salvar" → Loading → Toast "Perfil atualizado! ✅" → Modal fecha
```

**Upload de Avatar (sub-fluxo):**

```
1. Clica "Alterar Foto"
   ↓
2. Opções:
   - 📸 Tirar Foto (mobile)
   - 📁 Escolher da Galeria
   - 🎨 Avatar Gerado por IA (Fase 2)
   ↓
3. Escolhe imagem → Preview com crop circular
   
   ┌───────────────────────────┐
   │  Ajustar Foto             │
   │                           │
   │   [Imagem com crop tool]  │
   │   Arraste para reposicionar│
   │   Pinça para zoom         │
   │                           │
   │  [Cancelar]  [Aplicar]    │
   └───────────────────────────┘
   
   ↓
4. Clica "Aplicar" → Upload assíncrono (progress bar) → Avatar atualizado
```

**Código de Upload com Progress:**

```javascript
function uploadAvatar(file) {
  const formData = new FormData();
  formData.append("avatar", file);
  
  // 1. Mostra preview local imediatamente (otimistic)
  const localURL = URL.createObjectURL(file);
  updateState({
    user: { avatar: localURL, _isUploading: true },
    ui: { isLoading: true }
  });
  
  // 2. Upload com progress tracking
  const xhr = new XMLHttpRequest();
  
  xhr.upload.addEventListener("progress", (e) => {
    const percent = (e.loaded / e.total) * 100;
    updateState({ ui: { uploadProgress: percent } });
  });
  
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    updateState({
      user: { avatar: response.url, _isUploading: false },
      ui: { 
        isLoading: false,
        uploadProgress: 0,
        toast: { visible: true, message: "Foto atualizada! ✅", type: "success" }
      }
    });
  });
  
  xhr.open("POST", "/api/user/avatar");
  xhr.send(formData);
}
```


***

#### **UPDATE (Configurações)**

**Tela de Settings (acessível via ícone ⚙️ no perfil):**

```
┌─────────────────────────────────────────────────┐
│  [← Voltar]  Configurações                      │
│                                                 │
│  Notificações                                   │
│  ─────────────────────────────────────          │
│                                                 │
│  Ativar notificações     [Toggle ON]           │
│  Lembrete diário         [Toggle ON]  14:00    │
│  Streak em risco         [Toggle ON]           │
│  Conquistas desbloqueadas [Toggle OFF]         │
│                                                 │
│  Progresso                                      │
│  ─────────────────────────────────────          │
│                                                 │
│  Meta diária de quests   [Stepper: 3]          │
│  Preferência de conteúdo [Multi-select]        │
│    ☑ Vídeos  ☑ Leitura  ☐ Áudio  ☑ Prática    │
│                                                 │
│  Aparência                                      │
│  ─────────────────────────────────────          │
│                                                 │
│  Tema                    [Radio: ◉ Claro ○ Escuro]│
│                                                 │
│  Conta                                          │
│  ─────────────────────────────────────          │
│                                                 │
│  [Alterar Senha]                                │
│  [Exportar Dados]                               │
│  [Deletar Conta]  (vermelho)                    │
│                                                 │
│  [ Salvar Alterações ]                          │
└─────────────────────────────────────────────────┘
```

**REATIVIDADE EM SETTINGS:**

Todas alterações de toggle/select atualizam estado imediatamente (sem precisar clicar "Salvar"). Botão "Salvar Alterações" só aparece se houver mudanças não salvas.[^1]

**Toggle de Notificação (exemplo):**

```javascript
function toggleNotifications(enabled) {
  updateState({
    user: {
      settings: {
        notificationsEnabled: enabled
      }
    }
  });
  
  // Feedback visual imediato
  if (enabled) {
    showToast("Notificações ativadas ✅", "success");
    // Registra token push no backend
    registerPushToken();
  } else {
    showToast("Notificações desativadas", "info");
  }
}
```


***

### 2.3 CRUD - Daily Quests List (Lista Completa)

#### **REORDER (Reordenar Quests por Drag \& Drop)**

**Contexto:** Usuário quer priorizar quests manualmente

**Fluxo:**

```
1. Long press (mobile) ou Hover em Quest Card
   ↓
2. Card entra em "Drag Mode":
      - Elevação aumenta (shadow mais profunda)
      - Leve zoom (scale 1.05)
      - Opacity 0.8
      - Cursor vira "move" (4 setas)
   ↓
3. Arrasta card para cima ou baixo
   ↓
4. Outros cards se reorganizam em tempo real (animação smooth)
   ↓
5. Solta card → Fixa na nova posição → Toast: "Ordem salva ✅"
```

**Código de Drag \& Drop (simplificado):**

```javascript
let draggedQuestId = null;
let dragOverIndex = null;

function handleDragStart(questId) {
  draggedQuestId = questId;
  
  updateState({
    ui: {
      dragMode: { active: true, itemId: questId }
    }
  });
}

function handleDragOver(index) {
  if (dragOverIndex !== index) {
    dragOverIndex = index;
    
    // Reordena array visualmente (otimistic)
    const quests = [...appState.quests.daily];
    const draggedIndex = quests.findIndex(q => q.id === draggedQuestId);
    const [removed] = quests.splice(draggedIndex, 1);
    quests.splice(index, 0, removed);
    
    updateState({
      quests: { daily: quests }
    });
  }
}

function handleDragEnd() {
  updateState({
    ui: {
      dragMode: { active: false, itemId: null },
      toast: { visible: true, message: "Ordem salva ✅", type: "success" }
    }
  });
  
  // Persiste nova ordem no backend
  syncQuestOrder(appState.quests.daily.map(q => q.id));
}
```


***

#### **FILTER (Filtrar Quests)**

**Contexto:** Usuário quer focar em tipo específico de quest

**UI de Filtros (acima da lista):**

```
┌─────────────────────────────────────────────────┐
│  Daily Quests (5)               [⚙️ Filtros]    │
│                                                 │
│  [Pills horizontais, scroll se necessário]      │
│  [○ Todas (5)]  [○ Vídeo (2)]  [○ Leitura (1)] │
│  [○ Prática (1)]  [○ Áudio (1)]                │
│                                                 │
│  [Quest Card 1]                                 │
│  [Quest Card 2]                                 │
│  [Quest Card 3]                                 │
└─────────────────────────────────────────────────┘
```

**Ao clicar em filtro:**

- Pill selecionada muda para filled (background primary-600, texto branco)
- Lista filtra instantaneamente com animação (cards não correspondentes fade out)
- Contador atualiza: "Daily Quests (2)" se selecionou "Vídeo"

**Código de Filtro:**

```javascript
function filterQuests(type) {
  updateState({
    ui: {
      questFilter: type // "all", "video", "reading", "audio", "practice", "social"
    }
  });
  
  // Componente de lista automaticamente reage e renderiza apenas quests do tipo
}

// No componente de renderização
function getFilteredQuests() {
  const filter = appState.ui.questFilter || "all";
  
  if (filter === "all") {
    return appState.quests.daily;
  }
  
  return appState.quests.daily.filter(q => q.type === filter);
}
```


***

#### **SORT (Ordenar Quests)**

**Opções de Ordenação:**

- **Recomendado (padrão):** Algoritmo considera dificuldade, energia, tempo disponível
- **Duração (crescente):** Quests mais curtas primeiro
- **XP (decrescente):** Quests que dão mais XP primeiro
- **Dificuldade (crescente):** Fácil → Difícil

**UI:**

```
[Dropdown "Ordenar por"]
  ● Recomendado
  ○ Duração (menor → maior)
  ○ XP (maior → menor)
  ○ Dificuldade (fácil → difícil)
```

**Código:**

```javascript
function sortQuests(sortType) {
  let sorted = [...appState.quests.daily];
  
  switch(sortType) {
    case "duration":
      sorted.sort((a, b) => a.duration - b.duration);
      break;
    case "xp":
      sorted.sort((a, b) => b.xpReward - a.xpReward);
      break;
    case "difficulty":
      const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
      sorted.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
      break;
    default: // "recommended"
      // Mantém ordem do algoritmo backend
  }
  
  updateState({
    quests: { daily: sorted },
    ui: { questSort: sortType }
  });
}
```


***

## PARTE 3: ANIMAÇÕES E TRANSIÇÕES REATIVAS

### 3.1 Princípios de Animação[^1]

> "Feedback Imediato: Toda ação merece resposta visual"[^1]

**TODAS as interações devem ter feedback animado:**

- Cliques em botões: Scale down (0.95) + shadow menor
- Hover em cards: TranslateY(-4px) + shadow maior
- Toggle switches: Slide smooth (300ms ease-out)
- Modals: Fade in backdrop + scale up modal (entrada dramática)
- Toast notifications: Slide in from top + auto-dismiss após 3s

***

### 3.2 Biblioteca de Animações (Reutilizáveis)

```javascript
// ANIMAÇÕES PRÉ-DEFINIDAS

const animations = {
  // Entrada de elementos
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 300,
    easing: "ease-out"
  },
  
  slideInUp: {
    from: { transform: "translateY(20px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    duration: 400,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)" // smooth spring
  },
  
  scaleUp: {
    from: { transform: "scale(0.9)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    duration: 300,
    easing: "ease-out"
  },
  
  // Saída de elementos
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
    duration: 200,
    easing: "ease-in"
  },
  
  // Feedback de ação
  pulse: {
    keyframes: [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: "scale(1)" }
    ],
    duration: 400,
    easing: "ease-in-out"
  },
  
  shake: {
    keyframes: [
      { transform: "translateX(0)" },
      { transform: "translateX(-10px)" },
      { transform: "translateX(10px)" },
      { transform: "translateX(-10px)" },
      { transform: "translateX(0)" }
    ],
    duration: 400
  },
  
  // Celebração
  confetti: {
    // Partículas caindo do topo
    // Implementação complexa, usar biblioteca: canvas-confetti
  }
};

// Função helper para aplicar animação
function animate(element, animationName) {
  const anim = animations[animationName];
  element.animate(anim.keyframes || [anim.from, anim.to], {
    duration: anim.duration,
    easing: anim.easing
  });
}
```


***

### 3.3 Animações Contextuais

#### **Quest Completa (Celebração)**

```
1. Usuário clica "Concluir Quest"
   ↓
2. Quest Card pulsa (animation: pulse)
   ↓
3. XP Badge explode em partículas douradas (confetti amarelo/dourado)
   ↓
4. Progress bar de XP anima de 350 → 385 (count-up animation, 1s)
   ↓
5. Se subiu de nível → Modal "LEVEL UP!" aparece com animação dramática
   ↓
6. Quest Card faz fade out + translateY(-20px) e sai da lista
   ↓
7. Quest seguinte desliza suavemente para cima (slideInUp)
```

**Código:**

```javascript
async function completeQuest(questId) {
  const quest = appState.quests.daily.find(q => q.id === questId);
  
  // 1. Animação do card
  const card = document.querySelector(`[data-quest-id="${questId}"]`);
  animate(card, "pulse");
  
  await delay(400);
  
  // 2. Confetti
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#FBBF24", "#F59E0B", "#FEF3C7"]
  });
  
  // 3. Atualiza estado (XP, quest status)
  const newXP = appState.user.currentXP + quest.xpReward;
  const leveledUp = newXP >= appState.user.xpToNextLevel;
  
  updateState({
    user: {
      currentXP: newXP,
      currentLevel: leveledUp ? appState.user.currentLevel + 1 : appState.user.currentLevel
    },
    quests: {
      daily: appState.quests.daily.map(q => 
        q.id === questId ? { ...q, status: "completed", completedAt: new Date().toISOString() } : q
      ),
      completed: [...appState.quests.completed, { ...quest, completedAt: new Date().toISOString() }]
    }
  });
  
  // 4. Count-up animation de XP
  animateCountUp("xp-display", appState.user.currentXP - quest.xpReward, newXP, 1000);
  
  // 5. Level up modal
  if (leveledUp) {
    await delay(1000);
    showLevelUpModal(appState.user.currentLevel);
  }
  
  // 6. Remove card com animação
  await animate(card, "fadeOut");
  card.style.display = "none";
  
  // 7. Toast
  showToast(`+${quest.xpReward} XP ganho! 🎉`, "success");
}

function animateCountUp(elementId, from, to, duration) {
  const element = document.getElementById(elementId);
  const range = to - from;
  const increment = range / (duration / 16); // 60fps
  let current = from;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= to) {
      current = to;
      clearInterval(timer);
    }
    element.textContent = Math.round(current);
  }, 16);
}
```


***

#### **Loading States (Skeleton Screens)**

**NUNCA use spinners genéricos.** SEMPRE use skeleton screens que mantêm layout.[^1]

```
┌─────────────────────────────────────────────────┐
│  [Skeleton: Card pulsante 320x240px]            │
│  [Skeleton: Card pulsante 320x240px]            │
│  [Skeleton: Card pulsante 320x240px]            │
└─────────────────────────────────────────────────┘
```

**Skeleton tem:**

- Background: gray-200
- Animação shimmer: Gradiente branco semitransparente deslizando da esquerda para direita, loop infinito
- Mesmas dimensões do conteúdo real

**CSS:**

```css
.skeleton {
  background: linear-gradient(
    90deg,
    #E5E7EB 0%,
    #F3F4F6 50%,
    #E5E7EB 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 24px;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```


***

## PARTE 4: TRATAMENTO DE ERROS E ESTADOS EDGE

### 4.1 Hierarquia de Estados

```
1. Loading (carregando)
   ↓
2. Success (sucesso) → Exibe dados
   OU
3. Error (erro) → Exibe mensagem de erro
   OU
4. Empty (vazio) → Exibe empty state
```


***

### 4.2 Empty States (Estados Vazios)

**NUNCA deixe tela em branco.** SEMPRE exiba empty state orientativo.[^1]

**Exemplo: Nenhuma Quest Disponível**

```
┌─────────────────────────────────────────────────┐
│  Daily Quests                                   │
│                                                 │
│      [Ilustração: Foguete pronto para decolar] │
│                                                 │
│         Nenhuma quest disponível hoje          │
│      Você completou tudo! Que tal explorar     │
│           quests extras ou descansar?          │
│                                                 │
│  [Explorar Quests Extras]  [Ver Roadmap]       │
└─────────────────────────────────────────────────┘
```

**Especificações:**

- Ilustração: 200x200px, estilo flat, colorida
- Título: H3, gray-900
- Descrição: Body, gray-600, max 2 linhas
- CTAs: 2 botões, primary e ghost

***

### 4.3 Error States (Estados de Erro)

**Princípio:** Mensagens de erro devem ser **claras, humanas e acionáveis**.[^1]

**Exemplo: Erro ao Carregar Quests**

```
┌─────────────────────────────────────────────────┐
│  Daily Quests                                   │
│                                                 │
│       [Ilustração: Wifi com X vermelho]        │
│                                                 │
│       Ops! Não conseguimos carregar            │
│           suas quests                           │
│                                                 │
│  Verifique sua conexão e tente novamente       │
│                                                 │
│  [Tentar Novamente]                             │
│                                                 │
│  Se o problema persistir, [Fale Conosco]       │
└─────────────────────────────────────────────────┘
```

**❌ NUNCA:**

- "Error 500: Internal Server Error"
- "Failed to fetch data"
- "Ocorreu um erro"

**✅ SEMPRE:**

- "Ops! Não conseguimos carregar suas quests"
- "Verifique sua conexão e tente novamente"
- "Algo deu errado. Estamos trabalhando para resolver"

***

### 4.4 Validação de Formulários

**Validação em Tempo Real (inline):**

```
┌─────────────────────────────────────────┐
│  Título *                                │
│  [Input: "Fund"]                         │
│  ❌ Mínimo 10 caracteres (4/10)         │
│                                          │
│  Duração *                               │
│  [Input: "150"]                          │
│  ⚠️ Quests longas têm menor taxa de      │
│     conclusão. Recomendamos max 60 min   │
│                                          │
│  XP Recompensa *                         │
│  [Input vazio]                           │
│  💡 Sugerimos 35 XP para 10 min          │
└─────────────────────────────────────────┘
```

**Estados de Validação:**

- **Default:** Border gray-300
- **Focus:** Border primary-500, shadow ring
- **Error:** Border error-500, ícone ❌, mensagem vermelha abaixo
- **Warning:** Border warning-500, ícone ⚠️, mensagem laranja
- **Success:** Border success-500, ícone ✓, mensagem verde

***

## PARTE 5: PERFORMANCE E OTIMIZAÇÕES

### 5.1 Debouncing de Inputs

**Problema:** Atualizar estado a cada keystroke em campos de busca/filtro é custoso.

**Solução:** Debounce de 300-500ms.

```javascript
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Uso
const searchQuests = debounce((query) => {
  updateState({ ui: { searchQuery: query } });
  // Dispara busca no backend
  fetch(`/api/quests/search?q=${query}`);
}, 300);

// Em input
<input onInput={(e) => searchQuests(e.target.value)} />
```


***

### 5.2 Virtualization de Listas Longas

Se lista de quests > 50 items, usar virtualização (renderizar apenas items visíveis).

**Biblioteca:** react-window ou similar

**Conceito:** Renderiza apenas ~10 items visíveis + buffer, não todos os 1000.

***

### 5.3 Lazy Loading de Imagens

```html
<img 
  src="placeholder.jpg" 
  data-src="real-image.jpg" 
  loading="lazy" 
  onload="this.src=this.dataset.src"
/>
```

Imagens só carregam quando entram no viewport (economiza banda).

***

## PARTE 6: TESTING E VALIDAÇÃO

### 6.1 Checklist de Testes Manuais

Antes de considerar funcionalidade completa, testar:

- [ ] CREATE funciona (form valida, toast aparece, item aparece na lista)
- [ ] READ funciona (detalhes carregam, skeleton aparece durante loading)
- [ ] UPDATE funciona (edit mode ativa, salva corretamente, cancelamento restaura)
- [ ] DELETE funciona (confirmação aparece, undo funciona, toast aparece)
- [ ] Reatividade funciona (mudar estado em um lugar atualiza todos os lugares)
- [ ] Animações suaves (sem jank, 60fps)
- [ ] Loading states corretos (skeleton, não spinner)
- [ ] Error states orientativos (mensagem clara + ação)
- [ ] Empty states implementados
- [ ] Persistência funciona (LocalStorage salva, backend sync acontece)
- [ ] Offline resilience (funciona sem conexão, sync ao reconectar)

***

### 6.2 Testes de Edge Cases

- [ ] Texto muito longo em título (deve truncar com ellipsis)
- [ ] Lista vazia (empty state aparece)
- [ ] Conexão lenta (loading persiste, não trava)
- [ ] Conexão perdida durante ação (retry automático ou mensagem)
- [ ] Campos obrigatórios vazios (validação bloqueia submit)
- [ ] Upload de imagem > 10MB (validação rejeita)
- [ ] Caracteres especiais em inputs (não quebra)

***

## CONCLUSÃO E PRÓXIMOS PASSOS

Este prompt detalha **TODAS as funcionalidades de CRUD, edição, reatividade e gerenciamento de estado** necessárias para a plataforma Easy-Goal. A implementação deve seguir RIGOROSAMENTE estas especificações, usando como referência adicional o **PRD completo** presente no chat.[^3][^2][^1]

**Prioridades de Implementação:**

**Sprint 1 (CRÍTICO):**

1. Sistema de gerenciamento de estado global (Parte 1)
2. CRUD completo de Quest Cards (Parte 2.1)
3. Loading states e skeleton screens (Parte 3.3)

**Sprint 2 (IMPORTANTE):**
4. CRUD de User Profile (Parte 2.2)
5. Animações e transições (Parte 3)
6. Error e empty states (Parte 4)

**Sprint 3 (REFINAMENTO):**
7. Otimizações de performance (Parte 5)
8. Testes e validação completa (Parte 6)

**Referências para Consulta:**

- PRD Original:[^2][^3]
- Design de Produto (Josias Oliveira):[^1]
- Princípios de UX: Feedback imediato, obsessão pelo usuário, prevenir erros[^1]

***

**Versão do Prompt:** 2.0 - CRUD e Estado Completo
**Data:** 19 de Outubro de 2025
**Última Atualização:** Adicionado sistema completo de reatividade e gerenciamento de estado
<span style="display:none">[^4][^5]</span>

<div align="center">⁂</div>

[^1]: 787961352-Design-de-Produto-Uma-visao-Product-Led-sobre-design-de-produtos-digitais-Josias-Olive.txt

[^2]: image.jpg

[^3]: 756392621-100-casos-de-uso-de-IA-Generativa.txt

[^4]: PROMPT-PARA-CRIACAO-DE-PRD-PROJETO-DE-GAMIFICA.md

[^5]: Continuacao-do-PRD-Secao-8.2-em-diante.md

