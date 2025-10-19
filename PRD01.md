<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Análise e Framework Escolhido

Para expandir e detalhar o PRD de gamificação, continuarei utilizando o **framework RACE** (Role, Action, Context, Execute), mas agora com **camadas profundas de especificação** inspiradas na metodologia Evidence-Based da auditoria UX/UI Trek Access. Esta abordagem combina:[^1]

- **Story Mapping** para estruturar jornadas e features[^2][^3]
- **Heurísticas de Nielsen + Leis de Psicologia UX** para fundamentar decisões de design[^1]
- **Critérios de Aceitação Given-When-Then** para especificações testáveis[^1]
- **Priorização MoSCoW** e splitting de user stories por qualidade (Bare Necessity → Capability → Safety → Usability)[^3]

Esta versão expandida transformará o PRD em um documento executável de 8.000+ palavras com todas as informações das anotações manuscritas detalhadamente especificadas.[^4][^5][^6][^7][^8][^9][^10][^1]

***

# Prompt Gerado

```markdown
# PROMPT MESTRE: PRD COMPLETO - PLATAFORMA DE GAMIFICAÇÃO PARA ALCANCE DE OBJETIVOS
## Framework: RACE Evidence-Based + User Story Mapping + Heurísticas UX

---

## ROLE (Papel)

Você é um **Product Manager Sênior especializado em Gamification Design e Behavioral Economics**, com 10+ anos de experiência em produtos digitais de aprendizado e desenvolvimento pessoal. Sua expertise combina:

- **Gamification Frameworks:** Octalysis (Yu-kai Chou), 6D Framework, MDA Framework, Progressive Disclosure[web:16][web:19][web:25]
- **User Story Mapping:** Metodologia Jeff Patton para backlog narrativo e priorização incremental[file:31][file:32]
- **UX Design Principles:** 10 Heurísticas de Nielsen + 12 Leis de Psicologia Aplicadas a UX (Fitts, Hick, Miller, Jakob, etc.)[attached_file:1]
- **Product Management:** PRD writing, roadmap planning, OKRs, North Star Metrics[web:15][web:18][web:21]
- **Evidence-Based Design:** Decisões fundamentadas em research, dados comportamentais e testes de usabilidade[attached_file:1]
- **Behavioral Design:** Habit formation (Hooked Model), motivation theory (Self-Determination Theory), flow state optimization

---

## ACTION (Ação Principal)

Crie um **PRD (Product Requirements Document) COMPLETO, EXECUTÁVEL E EVIDENCE-BASED** para uma plataforma de gamificação focada em **incentivar usuários a alcançarem objetivos de aprendizado, desenvolvimento profissional e crescimento pessoal**.

### DELIVERABLES OBRIGATÓRIOS:

**Documento principal deve incluir 15 seções detalhadas:**

1. **RESUMO EXECUTIVO** (500 palavras)
   - Problem Statement baseado em dados de mercado
   - Proposta de valor única (Unique Value Proposition)
   - Principais diferenciais competitivos
   - Visão de produto (Product Vision Statement)

2. **CONTEXTO DE MERCADO E OPORTUNIDADE** (800 palavras)
   - Análise de competidores (3-5 players com matriz comparativa)
   - Tamanho de mercado endereçável (TAM, SAM, SOM)
   - Tendências macro (gamificação em edtech, microlearning, skill-based hiring)
   - Job-to-be-Done framework aplicado

3. **OBJETIVOS DE PRODUTO (OKRs)** (600 palavras)
   - **Objetivos de Negócio:** 3-5 objetivos SMART com KPIs associados
     - Ex: "Atingir 10.000 usuários ativos mensais (MAU) em 6 meses"
     - Ex: "Alcançar taxa de conclusão de quest de 78% (vs. benchmark 45%)"
   - **Objetivos dos Usuários:** Outcomes esperados por persona
   - **North Star Metric:** Métrica única que reflete valor entregue
   - **Métricas de Input, Output e Outcome** (framework HEART do Google)

4. **PERSONAS DE USUÁRIO (3 personas detalhadas)** (1.200 palavras)
   
   **Template por persona:**
```


### Persona [X]: [Nome] - [Arquétipo]

**Perfil Demográfico:**

- Idade: [faixa etária]
- Ocupação: [cargo/situação profissional]
- Educação: [nível de escolaridade]
- Renda: [faixa salarial]
- Localização: [contexto geográfico]
- Dispositivos: [mobile-first, desktop, ambos]

**Psicografia:**

- Valores: [o que é importante para essa pessoa]
- Estilo de vida: [rotina, hábitos, contexto de uso]
- Maturidade digital: [iniciante, intermediário, avançado]
- Motivadores intrínsecos: [autonomia, maestria, propósito - SDT]
- Motivadores extrínsecos: [reconhecimento, recompensas, status]

**Objetivos e Aspirações:**

- **Objetivo primário:** [o que busca alcançar]
- **Objetivos secundários:** [3-5 objetivos relacionados]
- **Timeline:** [quando espera alcançar]
- **Indicadores de sucesso:** [como saberá que alcançou]

**Dores e Frustrações:**

- **Dor \#1:** [descrição] → **Impacto:** [consequência]
- **Dor \#2:** [descrição] → **Impacto:** [consequência]
- **Dor \#3:** [descrição] → **Impacto:** [consequência]
- **Barreiras:** [o que impede de alcançar objetivos]

**Comportamentos e Preferências:**

- **Momento de uso:** [quando usa o produto]
- **Contexto de uso:** [onde e como usa]
- **Frequência esperada:** [diária, 3x semana, etc.]
- **Duração de sessão:** [tempo disponível por sessão]
- **Tipo de conteúdo preferido:** [vídeo, leitura, áudio, prática]
- **Gatilhos de engajamento:** [o que faz voltar]
- **Gatilhos de abandono:** [o que faz desistir]

**Jornada Atual (As-Is):**

- [Descrever fluxo atual sem o produto: como tenta alcançar objetivos hoje]
- [Pain points em cada etapa]

**Jornada Desejada (To-Be):**

- [Como o produto transforma a jornada]
- [Outcomes em cada etapa]

**Citação Representativa:**
> "[Frase que essa persona diria descrevendo sua situação/frustração]"

**Anti-persona (quem NÃO é):**

- [Perfil de usuário que o produto NÃO serve]

```

5. **ARQUITETURA DE INFORMAÇÃO E SITEMAP** (700 palavras)
- Estrutura de navegação completa (IA tree)
- Menu principal e secundário
- Bottom navigation (mobile)
- Breadcrumbs e wayfinding
- Deep linking structure
- Information scent (como usuário encontra conteúdo)

6. **USER STORY MAP COMPLETO** (2.000 palavras)

**Estrutura:**
```

┌──────────────────────────────────────────────────────────────┐
│ ATIVIDADES DE USUÁRIO (User Activities - Backbone)          │
├──────────────────────────────────────────────────────────────┤
│ Descobrir → Onboarding → Definir Objetivos → Explorar       │
│ Quests → Realizar Atividades → Acompanhar Progresso →       │
│ Celebrar Conquistas → Compartilhar → Evoluir                │
└──────────────────────────────────────────────────────────────┘

TAREFAS (User Tasks por atividade):
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ -  Buscar    │ -  Configurar│ -  Filtrar   │ -  Começar   │
│ -  Avaliar   │ -  Personaliz│ -  Escolher  │ -  Pausar    │
│ -  Comparar  │ -  Pular     │ -  Ver detlh │ -  Completar │
└─────────────┴─────────────┴─────────────┴─────────────┘

USER STORIES (priorizadas verticalmente):
[MUST HAVE - MVP]
[SHOULD HAVE - Release 2]
[COULD HAVE - Release 3]
[WON'T HAVE - Backlog futuro]

```

**Para CADA atividade, documente:**

**Atividade [X]: [Nome da Atividade]**

**Objetivo do usuário:** [o que quer alcançar nesta etapa]

**Tarefas incluídas:** [lista de 5-8 tarefas]

**User Stories detalhadas (formato completo):**
```


### US-[número]: [Título curto]

**Need Statement:**
"[Persona específica] precisa de [capacidade] para [benefício/outcome]"

**User Story:**
Como um(a) [persona específica com contexto],
Eu quero [ação/feature],
Para que [objetivo/valor obtido].

**Critérios de Aceitação (Given-When-Then):**

**AC1: [Nome do critério]**

- GIVEN [estado inicial/contexto]
- WHEN [ação do usuário]
- THEN [resultado esperado]
- AND [condição adicional]
- AND [condição adicional]

**AC2: [Nome do critério]**

- GIVEN [...]
- WHEN [...]
- THEN [...]

**AC3: [Estados alternativos]**

- GIVEN [cenário de erro/exceção]
- WHEN [...]
- THEN [...]
- AND [mensagem de erro específica]

**Prioridade:** MUST / SHOULD / COULD / WON'T

**Splitting por qualidade (Kano Model):**

- **Bare Necessity (MVP):** [funcionalidade mínima demonstrável]
- **Capability \& Flexibility:** [adicionar opções, casos de uso alternativos]
- **Safety:** [validações, regras de negócio, prevenção de erros]
- **Usability \& Delight:** [micro-interações, polish, performance]

**Estimativa de Esforço:** [pontos Fibonacci: 1, 2, 3, 5, 8, 13]

**Dependências:** [outras user stories que devem ser feitas antes]

**Heurísticas UX aplicadas:** [citar leis/princípios relevantes]

- Ex: "Lei de Hick: limitar opções iniciais a 3-5 quests para reduzir paralisia de decisão"
- Ex: "Efeito von Restorff: destacar quest do dia com cor vibrante"

**Microcopy (texto interface):**

- Label do botão: "[texto exato]"
- Placeholder: "[texto exato]"
- Tooltip: "[texto exato]"
- Mensagem de sucesso: "[texto exato]"
- Mensagem de erro: "[texto exato]"
- Empty state: "[texto exato]"

**Wireframe conceitual (descrição textual):**
[Descrever layout, hierarquia, elementos principais]

**Métricas de validação:**

- **Eficácia:** [% de usuários que completam a tarefa]
- **Eficiência:** [tempo médio para completar]
- **Satisfação:** [SUS score, NPS]
- **Erro:** [taxa de erro, cliques errados]

```

7. **FEATURES E FUNCIONALIDADES DETALHADAS** (2.500 palavras)

**Organize por categorias:**

### A. SISTEMA DE GAMIFICAÇÃO (Motor de Engajamento)

**A1. Mecânicas de Jogo (Game Mechanics)**

**A1.1 Sistema de XP (Experience Points)**
- **Definição:** Pontuação acumulativa que representa progresso global do usuário
- **Ganho de XP:** 
  - Quest concluída: +35 XP (curta), +50 XP (média), +100 XP (longa)
  - Streak diário mantido: +10 XP bonus
  - Desafio semanal completado: +150 XP
  - Interação social (comentar, ajudar outro usuário): +5 XP
- **Uso de XP:**
  - Progressão de níveis (ver A1.2)
  - Ranking semanal/mensal
  - Desbloquear conteúdo premium (após nível 5)
- **Economia de XP:** [tabela de progressão exponencial]
- **Visualização:** Barra de progresso sempre visível no header
- **Feedback:** Animação de "+XP" ao completar ação (confetti micro-interaction)

**A1.2 Sistema de Níveis (Leveling)**
- **Estrutura:** 50 níveis totais, agrupados em 5 tiers (Iniciante, Intermediário, Avançado, Expert, Master)
- **Curva de progressão:** [fórmula XP necessário = 100 * nível^1.5]
- **Benefícios por tier:**
  - Tier 1 (níveis 1-10): Acesso a quests básicas
  - Tier 2 (níveis 11-20): Desbloqueia customização de avatar
  - Tier 3 (níveis 21-30): Acesso a trilhas avançadas
  - Tier 4 (níveis 31-40): Pode criar quests customizadas
  - Tier 5 (níveis 41-50): Status de mentor, pode orientar outros usuários
- **Celebração de level-up:** Modal full-screen com animação, novo título desbloqueado, compartilhamento social

**A1.3 Sistema de Badges (Conquistas)**
- **Categorias:**
  - **Streaks:** 7 dias, 30 dias, 100 dias consecutivos
  - **Maestria:** Completar todas quests de uma trilha
  - **Velocidade:** Completar 10 quests em 1 dia
  - **Sociais:** Ajudar 5 usuários, receber 10 agradecimentos
  - **Raros:** Easter eggs, conquistas secretas
- **Design:** Ícone + nome + descrição + % de usuários que possuem
- **Exibição:** Perfil público do usuário, grid de badges
- **Notificação:** Toast notification ao desbloquear

**A1.4 Sistema de Streaks (Hábitos)**
- **Definição:** Dias consecutivos com pelo menos 1 quest concluída
- **Visualização:** Ícone de fogo 🔥 com número de dias
- **Proteção de streak:** 
  - "Freeze" disponível 1x por mês (pular 1 dia sem perder streak)
  - Notificação às 20h se usuário ainda não completou quest do dia
- **Recompensas:** 
  - 7 dias: Badge Bronze + 50 XP
  - 30 dias: Badge Prata + 200 XP
  - 100 dias: Badge Ouro + 1.000 XP + menção no feed da comunidade

**A2. Dinâmicas Globais e Locais**
- **Dinâmicas Globais (GLOBAL.CSL conforme anotações):**
  - Ranking mensal de todos usuários
  - Desafios sazonais (ex: "Mês da Liderança" - completar 20 quests de liderança)
  - Eventos especiais (dobro de XP em finais de semana)
- **Dinâmicas Locais:**
  - Progresso individual (roadmap pessoal)
  - Metas semanais customizáveis
  - Comparação apenas com amigos (opt-in)

### B. SISTEMA DE QUESTS (Atividades de Aprendizado)

**B1. Tipos de Quest (conforme anotações manuscritas)**

**B1.1 Quest de Vídeo**
- **Ícone:** Gradiente Rosa (#EC4899 → #DB2777)
- **Duração típica:** 5-20 minutos
- **Formato:** Videoaula + quiz de 3 perguntas ao final
- **XP:** 35-50 XP
- **Player:** Embed com controles (play, pause, velocidade, legendas, PiP)
- **Progresso:** Barra linear que atualiza a cada 10% do vídeo assistido
- **Critério de conclusão:** Assistir 80%+ do vídeo + acertar 2/3 perguntas

**B1.2 Quest de Leitura**
- **Ícone:** Gradiente Roxo (#8B5CF6 → #7C3AED)
- **Duração típica:** 10-30 minutos
- **Formato:** Artigo estruturado com subtítulos, imagens, quotes
- **XP:** 40-60 XP
- **Leitor:** View otimizada (sans-serif 16px, line-height 1.6, max-width 680px)
- **Progresso:** Scroll tracking (ex: "Você está em 60% do artigo")
- **Critério de conclusão:** Rolar até o final + clicar "Marcar como concluído"

**B1.3 Quest de Áudio**
- **Ícone:** Gradiente Teal (#14B8A6 → #0F766E)
- **Duração típica:** 10-45 minutos
- **Formato:** Podcast episode ou audiobook chapter
- **XP:** 50-80 XP
- **Player:** Controles avançados (velocidade 0.5x-2x, sleep timer, bookmarks)
- **Progresso:** Timeline com marcadores de capítulos
- **Critério de conclusão:** Escutar 90%+ do áudio

**B1.4 Quest de Prática**
- **Ícone:** Gradiente Amber (#F59E0B → #D97706)
- **Duração típica:** 15-60 minutos
- **Formato:** Exercício hands-on, projeto prático, simulação
- **XP:** 100-200 XP (mais alto por exigir aplicação)
- **Interface:** Depende do tipo (code editor, canvas, form estruturado)
- **Progresso:** Checklist de etapas
- **Critério de conclusão:** Submissão avaliada (auto-avaliação ou peer review)

**B1.5 Quest Social**
- **Ícone:** Gradiente Azul (#3B82F6 → #2563EB)
- **Duração típica:** 5-15 minutos
- **Formato:** Discussão em grupo, feedback a peer, networking
- **XP:** 25-40 XP
- **Interface:** Thread de comentários ou sala de chat temporária
- **Progresso:** Participação mínima (postar 1 comentário de 50+ caracteres)
- **Critério de conclusão:** Engajamento genuíno (moderado por IA anti-spam)

**B2. Quest Card Component (UI Specification)**
```


### Component: Quest Card

**Estrutura (Auto Layout vertical):**

- Header:
    - Ícone tipo (40x40px, circular, gradiente específico)
    - Título H4 (Manrope Semibold 16px, gray-900)
    - Badge opcional ("Novo", "Trending", "Última chance")
- Metadata bar:
    - Tipo de conteúdo (Vídeo, Leitura, etc.)
    - Nível de dificuldade (🌟 Fácil, 🌟🌟 Médio, 🌟🌟🌟 Avançado)
    - Categoria/Tag (ex: "UX Research", "Liderança")
- Body:
    - Descrição (14px Inter Regular, gray-700, 2 linhas max com ellipsis)
- Footer:
    - Metadata: ⏱ [X min] | ⚡ +[Y XP] | 📚 [Módulo/Trilha]
    - CTA Button Primary: "Começar →" (ou "Continuar →" se in progress)
    - Button Ghost: Menu contextual "- - - " (Salvar, Pular, Detalhes)

**Dimensões:**

- Width: 320px (mobile), 380px (tablet), 420px (desktop)
- Height: auto (min 240px)
- Padding: 24px
- Border-radius: 24px
- Border: 2px solid gray-200
- Background: white

**5 Estados:**

1. **Default:**
    - Border gray-200
    - Cursor pointer
2. **Hover (desktop):**
    - Border primary-500 (\#4F46E5)
    - Transform translateY(-4px)
    - Box-shadow: 0 12px 32px rgba(79,70,229,0.16)
    - Transition: all 300ms ease-out
3. **In Progress:**
    - Border primary-300
    - Badge "Em andamento" (primary-100 bg, primary-700 text)
    - Progress bar (4px height, primary gradient) abaixo do header
    - Botão muda para "Continuar →"
4. **Completed:**
    - Border success-300 (\#10B981)
    - Background success-50
    - Opacity 0.8
    - Botão disabled: "Concluído ✓" (success-700)
    - Ícone checkmark no canto superior direito
5. **Locked:**
    - Opacity 0.5
    - Filter grayscale(100%)
    - Ícone cadeado 🔒 sobreposto no centro
    - Tooltip ao hover: "Complete '[Quest anterior]' para desbloquear"
    - Botão disabled: "Bloqueada"

**Acessibilidade:**

- Toda a card é clicável (não apenas o botão)
- Aria-label descritivo: "Quest de [tipo]: [título]. Duração [X] minutos. Ganhe [Y] XP"
- Focus visible (outline 3px primary-500, offset 2px)
- Keyboard navigation: Tab para focar, Enter para ativar

```

### C. SISTEMA DE PROGRESSO E ROADMAP

**C1. Roadmap Visual (Feature Signature conforme anotações)**
- **Metáfora:** Mapa de trilhas interconectadas (inspiração: skill trees de RPGs)
- **Estrutura:**
  - 4-6 regiões temáticas (ex: "Liderança", "Tecnologia", "Soft Skills", "Negócios")
  - Cada região tem 8-12 quests organizadas em camadas de profundidade
  - Conexões visuais mostram pré-requisitos
- **Navegação:**
  - Scroll horizontal (swipe em mobile)
  - Zoom in/out (pinch gesture ou botões +/-)
  - Minimap no canto para orientação
- **Estados visuais:**
  - Quest desbloqueada: colorida, pulsando
  - Quest bloqueada: grayscale, linha pontilhada até pré-requisito
  - Quest concluída: checkmark verde, linha sólida verde até próxima
- **Interação:**
  - Click em quest abre modal com detalhes
  - Botão "Começar" inicia quest diretamente
  - "Ver caminho sugerido" ilumina sequência recomendada

**C2. Dashboard de Progresso (Mesa de Resultados conforme anotações)**
```


### Tela: Painel de Progresso

**Layout (Grid 12 colunas):**

**Seção 1: Hero Stats (col-span-12)**

- **XP Total:** Grande número (72px) + barra de progresso até próximo nível
- **Nível Atual:** Badge com tier + título (ex: "Nível 12 - Explorador Dedicado")
- **Streak:** Ícone fogo + número de dias + mini-calendar dos últimos 30 dias

**Seção 2: Metas Semanais (col-span-4)**

- **Meta 1:** "Completar 5 quests" → 3/5 concluídas (progress bar)
- **Meta 2:** "Estudar 2 horas" → 1h 25min/2h (progress bar)
- **Meta 3:** "Interagir com comunidade" → 2/3 interações (progress bar)
- **Recompensa ao completar todas:** "+50 XP Bonus + Badge Semanal"

**Seção 3: Atividade Recente (col-span-8)**

- Timeline vertical com últimas 10 ações:
    - "Você completou '[Quest Nome]' há 2 horas" (+35 XP)
    - "Você subiu para Nível 12 há 1 dia" 🎉
    - "Você desbloqueou Badge 'Streak de 7 dias' há 3 dias"
- Filtros: Todas | Quests | Conquistas | Social

**Seção 4: Próximas Quests Sugeridas (col-span-12)**

- Algoritmo de recomendação baseado em:
    - Sequência do roadmap
    - Tempo disponível (usuário configura: 10min, 30min, 1h)
    - Tipo de conteúdo preferido (histórico de conclusões)
    - Gaps identificados (habilidades com menos progresso)
- Exibição: 3-5 Quest Cards em carrossel

**Seção 5: Estatísticas Detalhadas (col-span-12, collapsible)**

- **Tempo Total Investido:** Horas gastas em quests
- **Taxa de Conclusão:** % de quests iniciadas que foram finalizadas
- **Distribuição por Tipo:** Gráfico pizza (% vídeo vs leitura vs áudio vs prática)
- **Evolução de XP:** Gráfico de linha dos últimos 30 dias
- **Heatmap de Atividade:** Calendário estilo GitHub contributions

```

### D. ONBOARDING E SETUP INICIAL

**D1. Fluxo de Onboarding (5 telas conforme PRD anterior)**

**Tela 1: Welcome Splash**
- Ilustração hero (gamificação visual atrativa)
- Headline: "Transforme objetivos em conquistas diárias"
- Subhead: "Aprenda, evolua e celebre cada passo da jornada"
- CTA: "Começar Minha Jornada →"
- Link: "Já tenho conta | Entrar"

**Tela 2: Seleção de Objetivos (Obrigatório)**
- Pergunta: "O que você quer alcançar nos próximos 3 meses?"
- Opções (multi-select, mínimo 1, máximo 3):
  - 🎯 Mudar de carreira
  - 📜 Conquistar certificação profissional
  - 🚀 Desenvolver soft skills
  - 💼 Crescer na empresa atual
  - 🧠 Aprender nova tecnologia
  - 🌱 Desenvolvimento pessoal
  - Outro (campo livre)
- Botão: "Continuar →"
- Barra de progresso: 2/5

**Tela 3: Disponibilidade de Tempo**
- Pergunta: "Quanto tempo você tem para estudar por dia?"
- Opções (single-select):
  - ⚡ 10-15 minutos (Micro-hábito)
  - ⏰ 30 minutos (Ritmo moderado)
  - 🕐 1 hora (Dedicação alta)
  - 🚀 2+ horas (Imersão total)
- Info tooltip: "Usaremos isso para recomendar quests adequadas"
- Botão: "Continuar →"
- Barra de progresso: 3/5

**Tela 4: Preferências de Aprendizado**
- Pergunta: "Como você prefere aprender?"
- Opções (multi-select):
  - 🎥 Videoaulas
  - 📖 Artigos e leituras
  - 🎧 Podcasts e áudio
  - 💻 Exercícios práticos
  - 👥 Discussões em grupo
- Botão: "Continuar →"
- Barra de progresso: 4/5

**Tela 5: Criação de Conta**
- Formulário:
  - Nome completo (required)
  - Email (required, validação em tempo real)
  - Senha (required, strength meter, min 8 caracteres)
  - Checkbox: "Aceito os [Termos de Uso] e [Política de Privacidade]" (required)
  - Checkbox: "Quero receber dicas e novidades por email" (optional, unchecked default)
- CTA: "Criar Conta e Começar →"
- Alternativa: "Ou cadastre-se com:" [Google] [LinkedIn]
- Barra de progresso: 5/5

**Tela 6: Primeira Quest Guiada (Tutorial Interativo)**
- Modal overlay com tooltips:
  - "Estas são suas Daily Quests - escolha uma para começar"
  - "Veja aqui seu XP e progresso de nível"
  - "Mantenha seu streak completando pelo menos 1 quest por dia"
- Forçar conclusão de 1 quest curta (5 min) antes de liberar acesso completo
- Celebração: "Parabéns! 🎉 Você completou sua primeira quest (+35 XP)"

### E. INTEGRAÇÕES E AUTOMAÇÃO (conforme anotações)

**E1. Workplace/Produtividade (IPG Automation conforme anotações)**
- **Google Calendar:** Bloquear horários de estudo no calendário
- **Notion/Evernote:** Exportar notas de quests
- **Trello/Asana:** Criar tarefas a partir de quests práticas
- **Slack:** Notificações de streak e lembretes diários

**E2. Sistema Help + NRRCOM (conforme anotações)**
- **Help Center:** FAQs organizadas por categoria, busca full-text
- **Chatbot:** Responde dúvidas comuns, escalona para humano se necessário
- **Email Support:** Formulário de contato com SLA de 24h
- **Tutoriais in-app:** Hotspots e guided tours (Pendo/Appcues style)

**E3. Influencers e Parcerias (conforme anotações)**
- **Perfis de Influencers Navegáveis:**
  - Card com foto, bio, especialidade
  - Quests criadas por esse influencer
  - Link para redes sociais
- **Co-branded Quests:**
  - "Quest oficial [Nome Influencer]"
  - Badge especial ao completar trilha de influencer

### F. RECURSOS ADICIONAIS

**F1. Sistema de Comunidade**
- Feed de atividades (opt-in para compartilhar conquistas)
- Perfis públicos de usuários
- Sistema de follows/followers
- Comentários e reações em quests
- Grupos de estudo temáticos

**F2. Biblioteca de Recursos**
- Glossário de termos
- Templates e checklists downloadables
- Curadoria de conteúdo externo (artigos, vídeos, podcasts)
- Bookmarks/Favoritos

**F3. Configurações e Personalização**
- Notificações (push, email, SMS)
- Privacidade (perfil público/privado, compartilhamento)
- Aparência (dark mode, tamanho de fonte)
- Idioma
- Exportar dados (GDPR compliance)
- Deletar conta

8. **ESPECIFICAÇÕES TÉCNICAS** (1.000 palavras)

### Stack Tecnológico Recomendado

**Frontend:**
- **Framework:** Next.js 14 (React) com App Router
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + shadcn/ui components
- **State Management:** Zustand (global) + React Query (server state)
- **Forms:** React Hook Form + Zod validation
- **Animações:** Framer Motion
- **Charts:** Recharts ou Tremor
- **Icons:** Phosphor Icons ou Lucide

**Backend:**
- **Runtime:** Node.js 20 LTS
- **Framework:** Nest.js (arquitetura modular)
- **Linguagem:** TypeScript
- **API:** RESTful + GraphQL (Apollo Server)
- **Authentication:** NextAuth.js (OAuth + JWT)
- **Authorization:** RBAC (Role-Based Access Control)

**Database:**
- **Primary:** PostgreSQL 16 (dados relacionais: usuários, quests, progresso)
- **Cache:** Redis (sessões, rankings, rate limiting)
- **Search:** Elasticsearch (busca full-text de quests)
- **Analytics:** ClickHouse (event tracking em tempo real)

**Storage:**
- **Media:** AWS S3 + CloudFront CDN (vídeos, imagens, áudios)
- **Transcoding:** AWS MediaConvert (vídeos em múltiplas resoluções)

**Infrastructure:**
- **Hosting:** Vercel (frontend) + AWS ECS (backend)
- **CI/CD:** GitHub Actions
- **Monitoring:** Datadog ou New Relic
- **Error Tracking:** Sentry
- **Analytics:** Mixpanel + Amplitude

**Integrações:**
- **Payments:** Stripe
- **Email:** SendGrid ou Resend
- **SMS:** Twilio
- **Video Player:** Vidstack ou Plyr
- **Auth Providers:** Google OAuth, LinkedIn OAuth

### Requisitos Não-Funcionais

**Performance:**
- **FCP (First Contentful Paint):** < 1.2s
- **LCP (Largest Contentful Paint):** < 2.5s
- **TTI (Time to Interactive):** < 3.5s
- **CLS (Cumulative Layout Shift):** < 0.1
- **API Response Time (p95):** < 500ms
- **Lighthouse Score:** > 90 (Performance, Accessibility, Best Practices, SEO)

**Escalabilidade:**
- Suportar 10.000 usuários simultâneos (Mês 6)
- Suportar 100.000 MAU (Mês 12)
- Auto-scaling horizontal (backend pods)
- Database read replicas para queries pesadas

**Segurança:**
- HTTPS obrigatório (TLS 1.3)
- Headers de segurança (CSP, HSTS, X-Frame-Options)
- Rate limiting (100 requests/min por IP)
- Input sanitization (prevenir XSS, SQL injection)
- Hashing de senhas (bcrypt, cost factor 12)
- 2FA opcional (TOTP)
- GDPR e LGPD compliance

**Acessibilidade:**
- WCAG 2.1 nível AA
- Navegação completa por teclado
- Screen reader compatible (ARIA labels)
- Contraste mínimo 4.5:1
- Touch targets mínimo 44x44px
- Suporte a high contrast mode
- Legendas em todos os vídeos

**Confiabilidade:**
- Uptime SLA: 99.9% (downtime máximo 8.76h/ano)
- Backup diário automático (retenção 30 dias)
- Disaster recovery plan (RTO 4h, RPO 1h)
- Health checks e alertas

**Observabilidade:**
- Logs estruturados (JSON)
- Distributed tracing (OpenTelemetry)
- Custom dashboards (Grafana)
- Alertas proativos (PagerDuty)

9. **DESIGN E EXPERIÊNCIA DO USUÁRIO** (1.500 palavras)

### Princípios de Design (Design Principles)

1. **Progresso Transparente:** Usuário sempre sabe onde está, quanto faltou, e o que vem a seguir
2. **Celebração Genuína:** Cada conquista é reconhecida de forma proporcional (micro → macro)
3. **Fricção Zero:** Remover obstáculos desnecessários entre intenção e ação
4. **Escolha Guiada:** Oferecer opções, mas recomendar um caminho claro
5. **Feedback Imediato:** Toda ação gera resposta visual/tátil instantânea
6. **Humanização:** Tom conversacional, empático, motivador (nunca robótico)
7. **Acessibilidade First:** Design inclusivo desde o conceito, não como afterthought

### Design System (Foundations)

**Paleta de Cores:**
```

Primary (Indigo):

- 50: \#EEF2FF
- 100: \#E0E7FF
- 500: \#6366F1
- 600: \#4F46E5 (brand color principal)
- 700: \#4338CA
- 900: \#312E81

Success (Emerald):

- 300: \#6EE7B7
- 500: \#10B981
- 700: \#047857

Warning (Amber):

- 300: \#FCD34D
- 500: \#F59E0B
- 700: \#B45309

Error (Rose):

- 300: \#FDA4AF
- 500: \#F43F5E
- 700: \#BE123C

Neutrals (Slate):

- 50: \#F8FAFC (backgrounds)
- 100: \#F1F5F9
- 200: \#E2E8F0 (borders)
- 400: \#94A3B8
- 600: \#475569 (body text)
- 700: \#334155
- 900: \#0F172A (headings)

Gradients (para ícones de quest types):

- Video: linear-gradient(135deg, \#EC4899 → \#DB2777)
- Reading: linear-gradient(135deg, \#8B5CF6 → \#7C3AED)
- Audio: linear-gradient(135deg, \#14B8A6 → \#0F766E)
- Practice: linear-gradient(135deg, \#F59E0B → \#D97706)
- Social: linear-gradient(135deg, \#3B82F6 → \#2563EB)
- XP Badge: linear-gradient(135deg, \#FBBF24 → \#F59E0B)

```

**Tipografia:**
```

Display/Headings: Manrope (Google Fonts)

- H1: 48px / Bold / -0.02em
- H2: 36px / Bold / -0.01em
- H3: 28px / Semibold / -0.01em
- H4: 20px / Semibold / 0em
- H5: 16px / Semibold / 0em

Body: Inter (Google Fonts)

- Large: 18px / Regular / 1.6
- Base: 16px / Regular / 1.6
- Small: 14px / Regular / 1.5
- XSmall: 12px / Medium / 1.4

Monospace (para código): JetBrains Mono

- 14px / Regular / 1.5

```

**Espaçamento (Sistema 8px):**
```

--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px

```

**Border Radius:**
```

--radius-sm: 8px (inputs, small buttons)
--radius-md: 12px (inputs maiores)
--radius-lg: 16px (modais, dropdowns)
--radius-xl: 24px (cards, containers)
--radius-full: 9999px (botões pill, badges)

```

**Sombras (Elevação):**
```

--shadow-sm: 0 2px 4px rgba(0,0,0,0.06)
--shadow-md: 0 4px 12px rgba(0,0,0,0.08)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12)
--shadow-xl: 0 16px 48px rgba(0,0,0,0.16)
--shadow-primary: 0 8px 24px rgba(79,70,229,0.24) (botões primary hover)
--shadow-success: 0 8px 24px rgba(16,185,129,0.24)

```

### Fluxos Principais (User Flows)

**Fluxo 1: Completar Primeira Quest (Critical Path)**
```

Home → Quest Detail → Quest Player → Celebração → Dashboard

1. HOME
    - Ver 3-5 Daily Quests recomendadas
    - Streak visível no header
    - CTA: "Começar Quest →"
2. QUEST DETAIL (Modal ou Page)
    - Título + descrição completa
    - Metadata: tipo, duração, XP, dificuldade, categoria
    - Pré-requisitos (se houver)
    - Comentários de outros usuários (truncados)
    - CTA: "Começar Agora →"
3. QUEST PLAYER (Fullscreen ou Focus Mode)
    - Conteúdo (vídeo/texto/áudio)
    - Progress bar fixa no topo
    - Botão pausar/sair (confirmation modal)
    - Quiz ao final (se aplicável)
    - CTA: "Marcar como Concluída"
4. CELEBRAÇÃO (Modal Fullscreen)
    - Animação confetti (Lottie ou CSS)
    - "Parabéns! 🎉"
    - "+35 XP ganho"
    - Barra de progresso de nível atualiza com animação
    - "Streak de 7 dias mantido! 🔥"
    - Próxima quest sugerida
    - CTAs: "Ver Progresso" | "Continuar Aprendendo →"
5. DASHBOARD (Atualizado)
    - XP incrementado
    - Quest adicionada ao histórico
    - Metas semanais atualizadas
    - Notificação toast: "Faltam apenas 2 quests para badge semanal!"
```

**Fluxo 2: Explorar Roadmap e Definir Caminho**
```

Dashboard → Roadmap → Filtrar → Salvar Trilha → Home

1. DASHBOARD
    - Click em "Ver Roadmap Completo"
2. ROADMAP (Tela Dedicada)
    - Mapa visual de regiões/trilhas
    - Zoom e pan
    - Quests coloridas (desbloqueada) vs grayscale (bloqueada)
    - Tooltip ao hover: preview da quest
3. FILTRAR (Sidebar ou Modal)
    - Por categoria
    - Por duração
    - Por dificuldade
    - Por status (disponível, bloqueada, concluída)
    - Aplicar filtro: mapa atualiza em tempo real
4. SALVAR TRILHA (Ação)
    - Click em "Salvar esta trilha nos meus objetivos"
    - Confirmation toast: "Trilha '[Nome]' adicionada aos seus objetivos"
    - Quests dessa trilha agora aparecem priorizadas nas Daily Quests
5. HOME (Retorno)
    - Daily Quests agora refletem a trilha salva
```

### Wireframes Conceituais (Descrição Textual)

**Tela: Home (Desktop)**
```

┌────────────────────────────────────────────────────────┐
│ [Logo] [Explorar] [Meu Progresso] [Comunidade]  👤🔔 │ ← Header fixo
├────────────────────────────────────────────────────────┤
│                                                        │
│  Olá, Ana! 👋 Você tem 3 quests hoje                 │ ← Greeting
│  Complete 1 para manter streak de 7 dias 🔥           │
│                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐│
│  │ 🎥 Quest 1  │  │ 📖 Quest 2  │  │ 🎧 Quest 3  ││ ← Quest Cards
│  │ Título      │  │ Título      │  │ Título      ││
│  │ 10 min|+35XP│  │ 15 min|+50XP│  │ 20 min|+80XP││
│  │ [Começar →] │  │ [Começar →] │  │ [Começar →] ││
│  └──────────────┘  └──────────────┘  └──────────────┘│
│                                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                        │
│  SEU PROGRESSO ESTA SEMANA                            │ ← Stats Section
│                                                        │
│  ┌────────────────┐  ┌────────────────┐              │
│  │ Quests         │  │ Tempo Total    │              │
│  │ 8/15 ████████░ │  │ 2h 30min       │              │
│  │ Concluídas     │  │ Investido      │              │
│  └────────────────┘  └────────────────┘              │
│                                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                        │
│  CONTINUAR APRENDENDO                                 │ ← Recommendations
│  [Ver Roadmap Completo →]                            │
│                                                        │
│  [Quest Card] [Quest Card] [Quest Card] [Quest Card]  │
│                                                        │
└────────────────────────────────────────────────────────┘

```

**Tela: Quest Player (Mobile)**
```

┌──────────────────────┐
│ ← [X]          [- - - ] │ ← Header minimalista
├──────────────────────┤
│ ▓▓▓▓▓▓▓░░░░░░░ 60%  │ ← Progress bar
├──────────────────────┤
│                      │
│  ┌────────────────┐ │
│  │                │ │
│  │  VIDEO PLAYER  │ │ ← Conteúdo principal
│  │                │ │
│  │  [▶ Play]     │ │
│  └────────────────┘ │
│                      │
│  Fundamentos de UX   │
│  Research            │
│                      │
│  "Neste vídeo você   │
│  aprenderá..."       │
│                      │
├──────────────────────┤
│                      │
│ [Marcar Concluída ✓] │ ← CTA fixo no bottom
│                      │
└──────────────────────┘

```

10. **ROADMAP FASEADO (18 MESES)** (1.200 palavras)
 
 ### Estrutura Geral (3 Fases conforme anotações manuscritas)
 
 **FASE 1: MVP e Validação (Meses 1-3)**
 - Objetivo: Validar core loop de gamificação com early adopters
 - Budget: R$ 150.000
 - Time: 1 PM, 2 Designers, 3 Devs, 1 QA
 
 **FASE 2: Expansão e Otimização (Meses 4-6)**
 - Objetivo: Escalar para 10.000 MAU e validar modelo de negócio
 - Budget: R$ 350.000
 - Time: 1 PM, 1 UX Researcher, 3 Designers, 5 Devs, 2 QA, 1 DevOps
 
 **FASE 3: Maturidade e Escala (Meses 7-18)**
 - Objetivo: Atingir product-market fit e 100.000 MAU
 - Budget: R$ 900.000
 - Time: 2 PMs, 1 Data Analyst, 5 Designers, 10 Devs, 3 QA, 2 DevOps
 
 ### FASE 1 (Meses 1-3): MVP - Walking Skeleton
 
 **Sprint 1-2 (Semanas 1-4): Setup + Onboarding**
 - Setup de infraestrutura (repo, CI/CD, ambientes)
 - Design System básico (cores, tipografia, componentes primitivos)
 - Autenticação (email/senha + Google OAuth)
 - Onboarding (5 telas conforme especificado)
 - **Milestone:** Usuário consegue criar conta e completar onboarding
 - **Go/No-Go Gate:** 80% dos testadores completam onboarding sem ajuda
 
 **Sprint 3-4 (Semanas 5-8): Core Loop de Quest**
 - Quest Card component (5 estados)
 - Tela Home com 3 Daily Quests
 - Quest Detail modal
 - Quest Player básico (vídeo + texto)
 - Sistema de XP (ganho + exibição)
 - **Milestone:** Usuário consegue completar primeira quest e ganhar XP
 - **Go/No-Go Gate:** Tempo médio para primeira quest < 5 minutos
 
 **Sprint 5-6 (Semanas 9-12): Progresso e Celebração**
 - Dashboard de progresso (XP, nível, streak)
 - Sistema de streak (rastreamento + notificação)
 - Modal de celebração ao completar quest
 - Sistema de badges (3 badges iniciais)
 - Perfil de usuário básico
 - **Milestone:** Usuário vê progresso atualizar em tempo real
 - **Go/No-Go Gate:** Taxa de retorno D1 > 40%
 
 **Entregável Fase 1:**
 - MVP funcional com core loop completo
 - 50 quests curadas (10 vídeo, 20 leitura, 10 áudio, 10 prática)
 - 100 early adopters testando
 - Lighthouse score > 85
 
 **Critérios de Sucesso Fase 1:**
 - 70% dos usuários completam pelo menos 3 quests na primeira semana
 - Taxa de conclusão de quest: > 60%
 - NPS: > 40
 - Sem bugs críticos (severity 1)
 
 ### FASE 2 (Meses 4-6): Expansão e Otimização
 
 **Sprint 7-8 (Semanas 13-16): Roadmap Visual**
 - Feature signature: Roadmap interativo
 - 4 regiões temáticas implementadas
 - Sistema de pré-requisitos (unlock logic)
 - Animações e micro-interações (polish)
 - **Milestone:** Usuário consegue visualizar jornada completa
 
 **Sprint 9-10 (Semanas 17-20): Integrações e Automação**
 - Integração Google Calendar (agendamento de estudo)
 - Notificações push (web + mobile)
 - Sistema Help (FAQ + chatbot básico)
 - Exportar dados (compliance LGPD)
 - **Milestone:** Usuário consegue integrar com ferramentas externas
 
 **Sprint 11-12 (Semanas 21-24): Comunidade e Social**
 - Feed de atividades
 - Perfis públicos
 - Sistema de comentários
 - Compartilhamento social (LinkedIn, Twitter)
 - Grupos de estudo (MVP)
 - **Milestone:** Usuário consegue interagir com outros usuários
 
 **Entregável Fase 2:**
 - Plataforma completa com 15 features principais
 - 200 quests (50 vídeo, 80 leitura, 40 áudio, 30 prática)
 - 10.000 MAU
 - Mobile app (React Native) lançado
 
 **Critérios de Sucesso Fase 2:**
 - 10.000 MAU alcançados
 - Taxa de retenção D7: > 35%
 - Taxa de conversão free→paid: > 5%
 - Tempo médio de sessão: > 12 minutos
 - NPS: > 50
 
 ### FASE 3 (Meses 7-18): Maturidade e Escala
 
 **Trimestre 3 (Meses 7-9): Personalization & AI**
 - Algoritmo de recomendação (ML-based)
 - Quiz adaptativo (difficulty adjustment)
 - Trilhas personalizadas por objetivo
 - Insights de progresso (data viz avançado)
 
 **Trimestre 4 (Meses 10-12): B2B e Enterprise**
 - Workspace accounts (múltiplos usuários)
 - Admin dashboard (gestores RH)
 - Relatórios customizados
 - SSO (SAML)
 - White-label option
 
 **Trimestre 5-6 (Meses 13-18): Monetização e Growth**
 - Plano Premium features (conteúdo exclusivo, certificados)
 - Marketplace de quests (creators)
 - Programa de afiliados
 - Partnerships com empresas (B2B2C)
 - Influencer integrations
 
 **Entregável Fase 3:**
 - Plataforma madura com 30+ features
 - 1.000+ quests
 - 100.000 MAU
 - $500K ARR (Annual Recurring Revenue)
 
 **Critérios de Sucesso Fase 3:**
 - 100.000 MAU
 - Taxa de retenção D30: > 25%
 - 15.000 paying users (15% conversion)
 - NPS: > 60
 - Churn rate: < 5%

11. **ESTRATÉGIA DE GO-TO-MARKET** (800 palavras)
 
 ### Modelo de Precificação (conforme anotações: R$20 base, R$3.900 premium)
 
 **Tier 1: Free (Freemium)**
 - 0 usuários ilimitados
 - Acesso a 30% das quests (curadoria básica)
 - 3 Daily Quests por dia
 - Roadmap limitado (1 região desbloqueada)
 - XP e badges básicos
 - Sem integrações
 - Ads discretos (não intrusivos)
 
 **Tier 2: Pro - R$ 19,90/mês (ou R$ 199/ano com 17% desconto)**
 - Acesso ilimitado a todas as quests
 - Daily Quests personalizadas (5-8 por dia)
 - Roadmap completo (todas regiões)
 - Integrações (Calendar, Notion, Trello)
 - Sem ads
 - Badge especial "Pro Member"
 - Prioridade no suporte
 - Certificados de conclusão
 
 **Tier 3: Teams - R$ 49/usuário/mês (mínimo 5 usuários)**
 - Tudo do Pro +
 - Workspace colaborativo
 - Admin dashboard (métricas de time)
 - Trilhas customizadas por gestor
 - Relatórios de progresso
 - Onboarding dedicado
 - Account manager
 
 **Tier 4: Enterprise - R$ 3.900/mês (até 100 usuários) + custom pricing acima**
 - Tudo do Teams +
 - White-label option
 - SSO (SAML)
 - SLA de uptime 99.95%
 - Suporte 24/7
 - Customização de features
 - API access
 - Consultoria de implementação
 
 ### Canais de Aquisição
 
 **Fase 1 (Meses 1-3): Early Adopters**
 - Product Hunt launch (soft launch)
 - LinkedIn organic (posts + CEO personal branding)
 - Email para network pessoal (100 beta testers)
 - Comunidades nicho (Reddit r/productivity, Discord servidores)
 
 **Fase 2 (Meses 4-6): Growth Inicial**
 - Google Ads (keywords: "plataforma aprendizado", "gamificação estudos")
 - Facebook/Instagram Ads (lookalike audiences)
 - Parcerias com influencers (3-5 micro-influencers)
 - Content marketing (blog SEO-optimized)
 - YouTube (tutorials + cases de sucesso)
 
 **Fase 3 (Meses 7-18): Scaling**
 - Programa de afiliados (20% comissão recorrente)
 - Partnerships B2B (RH de empresas)
 - Eventos e palestras
 - Podcast tour (CEO em 10 podcasts relevantes)
 - PR (imprensa tech: TechCrunch, Exame, Época Negócios)
 
 ### Estratégia de Lançamento
 
 **Pré-lançamento (Mês 0):**
 - Landing page com waitlist
 - Meta: 500 emails capturados
 - Teaser campaign (LinkedIn + Instagram Stories)
 
 **Lançamento Soft (Mês 1):**
 - 100 early adopters invited
 - Desconto de 50% vitalício (early bird)
 - Coleta intensiva de feedback
 
 **Lançamento Público (Mês 3):**
 - Product Hunt launch (goal: Top 5 do dia)
 - Press kit distribuído
 - Webinar de lançamento (200+ attendees)
 - Promoção: 30 dias grátis do plano Pro
 
 **Post-lançamento (Meses 4-6):**
 - Case studies publicados (3-5 success stories)
 - Testimonials em vídeo
 - Referral program (ganhe 1 mês grátis a cada indicação)

12. **RISCOS E MITIGAÇÕES** (600 palavras)
 
 | Risco | Probabilidade | Impacto | Mitigação | Owner |
 |-------|---------------|---------|-----------|-------|
 | **Baixo engajamento inicial** (usuários não voltam após D1) | Alta (60%) | Alto (↓ 70% retenção) | - Onboarding tutorial interativo obrigatório<br>- Email drip campaign D1-D7<br>- Push
<span style="display:none">[^11]</span>

<div align="center">⁂</div>

[^1]: 1000544032.jpg
[^2]: 447817637-story-mapping-playbook.txt
[^3]: 131840033-User-Story-Mapping.txt
[^4]: 1000544037.jpg
[^5]: 1000544039.jpg
[^6]: 1000544036.jpg
[^7]: 1000544038.jpg
[^8]: 1000544035.jpg
[^9]: 1000544034.jpg
[^10]: 1000544033.jpg
[^11]: Prompt-Super-Completo_-Auditoria-UX_UI-Trek-Access.md```

