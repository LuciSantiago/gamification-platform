# 🤖 PROMPTS OTIMIZADOS PARA JULES IA - MAKE + FIGMA INTEGRAÇÃO

**Documento:** Instruções de Autonomia Completa para Jules IA
**Data:** 19 de Outubro de 2025
**Objetivo:** Jules execute todas as tarefas sem necessidade de intervenção humana

---

## 📋 ÍNDICE

1. [Missão de Jules IA](#missão-de-jules-ia)
2. [Prompts de Validação](#prompts-de-validação)
3. [Prompts de Implementação](#prompts-de-implementação)
4. [Prompts de Integração Make](#prompts-de-integração-make)
5. [Prompts de Testes](#prompts-de-testes)
6. [Prompts de Documentação](#prompts-de-documentação)
7. [Matriz de Decisão](#matriz-de-decisão)
8. [Escalation Automática](#escalation-automática)

---

## 🎯 MISSÃO DE JULES IA

### Definição Executiva

```
MISSÃO: Revisar, validar, expandir e finalizar a Gamification Platform
        garantindo 100% de qualidade técnica e funcional.

AUTONOMIA: Jules tem poder de decisão em:
  ✅ Escolher abordagem técnica (entre opções validadas)
  ✅ Refatorar código para melhor qualidade
  ✅ Sugerir melhorias no design
  ✅ Priorizar tarefas por impacto
  ✅ Implementar de forma progressiva
  ✅ Validar e testar autonomamente

RESTRIÇÕES: Jules consultará antes de:
  ❌ Mudar escopo do produto (fora das personas/OKRs)
  ❌ Alterar preço ou modelo de negócio
  ❌ Remover features críticas
  ❌ Pivoting de stack técnico

COMUNICAÇÃO: Jules reporta progresso via:
  ✅ Commits frequentes no GitHub
  ✅ Pull requests com descrições detalhadas
  ✅ Comments no código explicando decisões
  ✅ README atualizado com mudanças
  ✅ Status em CHECKLIST-FINALIZACAO.md
```

---

## ✅ PROMPTS DE VALIDAÇÃO

### **PROMPT #1: Validar Completude do PRD**

```
TAREFA: Validar que todos os elementos do PRD foram implementados corretamente

INSTRUÇÕES:
1. Leia CONTEXTO-JULES-IA.md completamente
2. Compare com implementação atual em src/App.tsx e componentes
3. Para cada seção do PRD, verifique:

   ✅ Personas (3): Ana, Carlos, Marina
      - Perfis demográficos completos?
      - Jornadas esperadas claras?
      - Dores e motivações explícitas?

   ✅ Mecânicas de Jogo:
      - Sistema de XP implementado?
      - Níveis com progressão exponencial?
      - Badges em todas as categorias?
      - Streaks com freeze feature?

   ✅ Tipos de Quest:
      - Vídeo + quiz?
      - Leitura com progresso?
      - Áudio com controles?
      - Prática com validação?
      - Social com comunidade?

   ✅ Roadmap Visual:
      - Regiões (temas)?
      - Nós com tipos diferentes?
      - Conexões e caminhos?
      - Indicador de progresso?

4. CRIAR TABELA DE VALIDAÇÃO:

| Componente | Esperado | Implementado | Gap | Prioridade |
|-----------|----------|--------------|-----|------------|
| Personas | 3 detalhadas | ? | ? | ? |
| XP System | Completo | ? | ? | ? |
| Badges | 5+ categorias | ? | ? | ? |
| Quest Types | 5 tipos | ? | ? | ? |
| Roadmap | Visual interativo | ? | ? | ? |

5. SAÍDA: Criar arquivo VALIDACAO-PRD.md com:
   - Tabela de completude
   - Gaps identificados
   - Recomendações de priorização
   - Plano de ação sequencial
```

### **PROMPT #2: Validar Arquitetura Técnica**

```
TAREFA: Revisar stack técnico vs. requisitos

CHECKLIST:
- [ ] React 18.3.1 está sendo usado?
- [ ] TypeScript em strict mode?
- [ ] Tailwind CSS configurado corretamente?
- [ ] Radix UI componentes sendo utilizados?
- [ ] Zustand para state management?
- [ ] React Hook Form + Zod para validação?
- [ ] TanStack Query para cache?
- [ ] Supabase Auth integrado?
- [ ] Supabase Realtime funcionando?
- [ ] Docker + .env configurado?

AÇÃO: Se algum item está faltando:
1. Verificar package.json
2. Se dependência não instalada: npm install [package]
3. Criar exemplo de uso do componente/hook
4. Adicionar ao arquivo: STACK-VALIDACAO.md
```

---

## 🚀 PROMPTS DE IMPLEMENTAÇÃO

### **PROMPT #3: Implementar CRUD Completo para Entidade**

```
TAREFA: Implementar CRUD funcional para [ENTIDADE]

VARIÁVEIS:
- [ENTIDADE] = Quest, Badge, User, Challenge, Roadmap
- [ENDPOINT] = /api/[entidade]s
- [SCHEMA] = Zod schema validação

STEPS:

1. CRIAR TIPOS TYPESCRIPT
   Arquivo: src/types/[entity].ts
   Incluir: interface, tipos de estado, enums

2. CRIAR VALIDAÇÃO ZOD
   Arquivo: src/lib/schemas/[entity].ts
   Incluir: schema create, update, filters

3. CRIAR HOOKS DE DADOS
   Arquivo: src/hooks/use[Entity].ts
   Implementar:
   - useCreate[Entity](data) → POST /api/[entity]s
   - useRead[Entity](filters) → GET /api/[entity]s
   - useUpdate[Entity](id, data) → PATCH /api/[entity]s/:id
   - useDelete[Entity](id) → DELETE /api/[entity]s/:id

4. CRIAR COMPONENTES UI
   - [Entity]Card.tsx (visualização)
   - [Entity]Form.tsx (criação/edição)
   - [Entity]List.tsx (lista com paginação)
   - [Entity]Detail.tsx (modal/sidebar de detalhe)

5. INTEGRAR COM ZUSTAND STORE
   - Adicionar estado do [entity] no store
   - Criar actions: add, update, delete
   - Adicionar selectors para performance

6. ADICIONAR REALTIME SYNC
   - useEffect subscribe to Supabase channel
   - Update store quando dados mudam
   - Toast notification: "✅ [Entity] atualizado por outro usuário"

7. TESTES
   - Testar cada operação CRUD
   - Testar validações
   - Testar sincronização Realtime
   - Testar tratamento de erros

SAÍDA: Fazer PR com todos os arquivos e descrição detalhada
```

### **PROMPT #4: Implementar Feature Específica**

```
TAREFA: Implementar [FEATURE]

TEMPLATE:

---
FEATURE: [Nome Descritivo]
TIPO: [Bugfix / Enhancement / New Feature]
COMPLEXIDADE: [Simple / Medium / Complex]
ESTIMATIVA: [em horas]

CONTEXTO:
[Por que essa feature é importante?]
[Qual persona se beneficia?]
[Qual métrica de sucesso?]

REQUISITOS TÉCNICOS:
- [Requisito 1]
- [Requisito 2]
- [Requisito 3]

WIREFRAME/DESCRIÇÃO VISUAL:
[ASCII art ou descrição textual do layout]

CRITÉRIOS DE ACEITAÇÃO:
[ ] AC1: [Given-When-Then]
[ ] AC2: [Given-When-Then]
[ ] AC3: [Given-When-Then]

ARQUIVOS A MODIFICAR:
- src/components/[Componente].tsx
- src/types/[Type].ts
- src/lib/schemas/[Schema].ts

NOTAS:
- [Decisão de design importante]
- [Possível trade-off]
- [Constraint técnico]

---

EXECUÇÃO:
1. Criar branch: git checkout -b feature/[nome]
2. Implementar feature
3. Testar manualmente
4. Fazer PR com descrição acima
```

---

## 🔌 PROMPTS DE INTEGRAÇÃO MAKE

### **PROMPT #5: Criar Automação Make para Notificações**

````
TAREFA: Integrar Make (Zapier alternativa) para enviar notificações

FLUXO ESPERADO:

Trigger:
  - Evento Supabase: INSERT em user_badges
  - Event data: { user_id, badge_id, unlocked_at }

Actions:
  1. Buscar dados do usuário (nome, email)
  2. Buscar dados da badge (nome, descrição)
  3. Enviar email:
     To: {{ user.email }}
     Subject: "🎉 Parabéns! Você desbloqueou a badge {{ badge.name }}"
     Body:
       ```
       Olá {{ user.name }},

       Você acaba de desbloquear a badge "{{ badge.name }}"!

       {{ badge.description }}

       Próxima meta: {{ nextBadge.name }}

       Compartilhe no LinkedIn: [Link]
       ```
  4. Send push notification (via OneSignal)
  5. Log no airtable (analytics)

IMPLEMENTAÇÃO:
1. Criar conta em Make.com
2. Criar novo cenário (scenario)
3. Setup webhook Supabase → Make
4. Configurar ações conforme acima
5. Testar com dados de teste
6. Documentar webhook URL em .env

ARQUIVO: docs/MAKE-INTEGRATIONS.md
````

### **PROMPT #6: Criar Automação para Streak Reminder**

```
TAREFA: Enviar push notification se usuário não completou quest do dia

FLUXO:

Trigger:
  - Cron: Todos os dias às 20:00 (UTC-3)

Actions:
  1. Query: SELECT users WHERE current_streak > 0
  2. Para cada user:
     a. Buscar quest recomendada do dia
     b. Se user NÃO completou hoje:
        - Enviar push: "🔥 Seu streak de 7 dias está em risco!"
        - CTA: "Completar quest agora"
        - Link: myapp.com/quests/[suggested-quest-id]
     c. Log em analytics

ARQUIVO: docs/CRON-JOBS.md
```

---

## 🧪 PROMPTS DE TESTES

### **PROMPT #7: Criar Testes Unitários**

```
TAREFA: Implementar cobertura de testes para [componente/hook]

FRAMEWORK: Vitest + React Testing Library

TEMPLATE:

// src/__tests__/components/QuestCard.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { QuestCard } from '@/components/QuestCard';
import { describe, it, expect, vi } from 'vitest';

describe('QuestCard', () => {
  const mockQuest = {
    id: 'quest_1',
    title: 'Test Quest',
    type: 'video',
    xpReward: 35,
    duration_min: 10,
  };

  it('renders quest title', () => {
    render(<QuestCard quest={mockQuest} />);
    expect(screen.getByText('Test Quest')).toBeInTheDocument();
  });

  it('displays XP reward', () => {
    render(<QuestCard quest={mockQuest} />);
    expect(screen.getByText('+35 XP')).toBeInTheDocument();
  });

  it('calls onStart when button clicked', () => {
    const handleStart = vi.fn();
    render(<QuestCard quest={mockQuest} onStart={handleStart} />);
    fireEvent.click(screen.getByText('Iniciar Quest'));
    expect(handleStart).toHaveBeenCalledWith('quest_1');
  });

  it('disables start button if prerequisite not met', () => {
    const questLocked = { ...mockQuest, isLocked: true };
    render(<QuestCard quest={questLocked} />);
    expect(screen.getByText('Iniciar Quest')).toBeDisabled();
  });
});

EXECUÇÃO:
1. npm install vitest @testing-library/react --save-dev
2. Configurar vitest.config.ts
3. Rodar: npm run test
4. Gerar coverage: npm run test:coverage
5. Target: >80% coverage
```

### **PROMPT #8: Teste de Integração - Fluxo Completo**

```
TAREFA: Testar fluxo completo: Login → Fazer Quest → Ganhar XP

ARQUIVO: src/__tests__/flows/complete-quest.e2e.test.ts

STEPS:
1. Mock de usuário autenticado
2. Render App com Supabase mock
3. Navegar para Daily Quests
4. Clicar em quest
5. Simular conclusão (progresso 100%)
6. Verificar:
   - XP incrementou?
   - Level mudou?
   - Streak incrementou?
   - Store atualizado?
   - Dados persistidos no DB?
7. Validar UI feedback (toast, animações)

FERRAMENTA: Playwright (opcional para E2E real)
```

---

## 📚 PROMPTS DE DOCUMENTAÇÃO

### **PROMPT #9: Gerar Documentação Automática**

```
TAREFA: Criar documentação para novo componente/hook

TEMPLATE OBRIGATÓRIO:

---
# [Nome do Componente]

## Descrição
[Descrição breve do que faz]

## Props
| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| [prop] | [type] | Sim/Não | [descrição] |

## Estados
- [estado 1]: [descrição]
- [estado 2]: [descrição]

## Exemplos de Uso
\`\`\`tsx
<[Componente]
  prop1="valor"
  prop2={value}
/>
\`\`\`

## Eventos
- [evento]: quando dispara?

## Acessibilidade
- ARIA labels: [sim/não] - [descrição]
- Keyboard nav: [sim/não] - [descrição]

## Performance
- Memo aplicado? [sim/não]
- Lazy loading? [sim/não]

## Testes
- Teste unitário? [sim/não]
- Coverage: [%]

---

Gerar em: src/components/[COMPONENT]/README.md
```

---

## 🎯 MATRIZ DE DECISÃO

### **Como Jules Decide Entre Opções**

```
DECISÃO: [Descrição da escolha]

OPÇÕES:
1. Opção A
   Pros: [benefício 1], [benefício 2]
   Cons: [desvantagem 1], [desvantagem 2]
   Esforço: [estimativa]
   Impacto: [alto/médio/baixo]

2. Opção B
   Pros: [...]
   Cons: [...]
   Esforço: [...]
   Impacto: [...]

CRITÉRIOS DE SELEÇÃO (em ordem de prioridade):
1. Alinhamento com OKRs
2. Impacto em métricas (North Star)
3. Experiência do usuário
4. Mantenibilidade técnica
5. Esforço de implementação

DECISÃO: [Opção selecionada] porque [justificativa]

TRADE-OFFS: [O que estamos deixando de fazer?]
```

### **Exemplos de Decisões Comuns**

```
DECISÃO 1: Implementar Realtime sync com Supabase?
OPÇÃO A: Supabase Realtime (recomendado)
  - Pro: Nativo, menos código
  - Con: Custo escala com conexões
  - Esforço: 2h
  - Impacto: Alto (UX melhora muito)

DECISÃO: Sim, implementar Realtime
TRADE-OFF: Aumenta custo Supabase, mas UX é crítico

---

DECISÃO 2: Usar Zustand vs Redux?
OPÇÃO A: Zustand (recomendado para esse projeto)
  - Pro: Simples, menos boilerplate, adequado para escala
  - Con: Menos maduro que Redux
  - Esforço: 1h setup
  - Impacto: Desenvolvimento mais rápido

DECISÃO: Zustand
TRADE-OFF: Menos tooling de debugging que Redux
```

---

## 🚨 ESCALATION AUTOMÁTICA

### **Quando Jules Escalaciona para Humano**

```
SITUAÇÃO 1: Mudança de Escopo
└─ IF: Feature fora do PRD original
└─ THEN: Criar GitHub issue + comentar com contexto
└─ STATUS: "waiting-approval" na checklist

SITUAÇÃO 2: Impasse Técnico
└─ IF: 2+ abordagens viáveis, sem resposta clara
└─ THEN: Documentar opções, trade-offs, recomendação
└─ STATUS: "decision-needed"

SITUAÇÃO 3: Performance Crítica
└─ IF: Bundle > 800KB ou LightHouse < 70
└─ THEN: Investigar, sugerir otimizações, implementar
└─ STATUS: "performance-issue"

SITUAÇÃO 4: Bug Complexo
└─ IF: Não consegue reproduzir após 3 tentativas
└─ THEN: Documentar steps, criar minimal reproduction
└─ STATUS: "help-needed"

SITUAÇÃO 5: Decisão de Produto
└─ IF: Afeta UX/fluxo de usuário
└─ THEN: Documentar opções, impacto, recomendação
└─ STATUS: "product-decision"

COMUNICAÇÃO: Jules cria Pull Request com explicação detalhada
e label: "escalation" ou "decision-needed"
```

---

## 📊 CHECKLIST DE EXECUÇÃO PARA JULES

```
FASE 1: VALIDAÇÃO (Dia 1)
- [ ] Ler CONTEXTO-JULES-IA.md completamente
- [ ] Ler README.md, DEPLOYMENT.md, CHECKLIST-FINALIZACAO.md
- [ ] Rodar `npm install && npm run dev`
- [ ] Testar fluxo de login
- [ ] Testar fluxo de quest
- [ ] Executar PROMPT #1 (Validar Completude)
- [ ] Criar VALIDACAO-PRD.md com gaps

FASE 2: IMPLEMENTAÇÃO (Dias 2-5)
- [ ] Implementar CRUD completo para cada entidade
- [ ] Integrar Zustand store
- [ ] Configurar Supabase Realtime
- [ ] Implementar validações Zod
- [ ] Criar componentes de erro/loading

FASE 3: TESTES (Dias 6-7)
- [ ] Cobertura de testes > 80%
- [ ] Teste E2E de fluxo completo
- [ ] Performance testing (Lighthouse)
- [ ] Manual testing em mobile
- [ ] Validar acessibilidade WCAG AA

FASE 4: DEPLOY (Dia 8)
- [ ] Fazer build: npm run build
- [ ] Testar preview: npm run preview
- [ ] Criar Docker image
- [ ] Deploy em staging via Dokploy
- [ ] Testes em produção
- [ ] Monitoramento ativado

SUCESSO: Todas as checkboxes marcadas ✅
```

---

## 🎓 REFERÊNCIAS RÁPIDAS

### **Recursos Sempre Disponíveis**

- GitHub Repo: https://github.com/LuciSantiago/gamification-platform
- PRD Original: CONTEXTO-JULES-IA.md
- Stack Docs: README.md
- Deployment: DEPLOYMENT.md
- Checklist: CHECKLIST-FINALIZACAO.md

### **Contatos de Suporte (Se Escalação Necessária)**

- Lucia (Product Owner): [email/contato]
- GitHub Issues: Para bugs/features
- Code Review: Pull Requests

---

## ✨ FILOSOFIA DE EXECUÇÃO

```
"Mais rápido é melhor que perfeito.
Mais simples é melhor que complexo.
Feedback do usuário é melhor que assunções.
Pequenos passos são melhores que grandes saltos."

- Jules IA Design Principles
```

---

**Documento Criado:** 19 de Outubro de 2025
**Versão:** 2.0
**Status:** Pronto para execução por Jules IA
**Autonomia:** 100%
