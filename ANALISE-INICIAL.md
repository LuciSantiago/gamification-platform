# ANALISE-INICIAL.md

## Tabela de Validação de Componentes

| Componente | Esperado (do PRD) | Implementado (em `src/components`) | Gap | Prioridade |
|---|---|---|---|---|
| Personas | 3 detalhadas (Ana, Carlos, Marina) | Não aplicável (conceitual) | - | - |
| Sistema de XP | Lógica de cálculo e UI | `ProgressBar.tsx`, `LevelUpModal.tsx` | Parcialmente implementado. Lógica de negócio no frontend não é visível. | Alta |
| Sistema de Badges | CRUD e exibição | `BadgeCrudModal.tsx`, `BadgeDetailModal.tsx`, `BadgeDisplay.tsx` | Parece bem coberto em termos de UI, mas a lógica de atribuição está faltando. | Média |
| Tipos de Quest | 5 tipos (Vídeo, Leitura, Áudio, Prática, Social) | `QuestCard.tsx`, `QuestCrudModal.tsx`, `QuestDetailModal.tsx` | Apenas a estrutura base do Quest parece estar implementada, sem diferenciação por tipo. | Alta |
| Roadmap Visual | Interativo, com nós e regiões | `RoadmapHorizontal.tsx`, `RoadmapNode.tsx`, `RoadmapRegionModal.tsx` | Componentes existem, mas a interatividade e a lógica de progressão não estão claras. | Alta |
| Admin Panel | Dashboard e gerenciamento | `AdminPanel.tsx` | Componente existe, mas a funcionalidade completa precisa ser verificada. | Média |

## Gaps Identificados

1.  **Estrutura de Diretórios:** O diretório `src/types` está ausente, o que é crucial para um projeto TypeScript.
2.  **Dependências do Projeto:** As seguintes dependências chave, especificadas no `CONTEXTO-JULES-IA.md`, não estão no `package.json`:
    *   `tailwindcss`
    *   `zod`
    *   `@tanstack/react-query`
    *   `zustand`
3.  **Scripts de Teste:** Não há um script `test` no `package.json`, o que impede a execução de testes automatizados.

## Recomendações de Priorização

1.  **Alta:** Configurar o ambiente de desenvolvimento para corresponder à arquitetura definida (instalar dependências, criar diretório de tipos).
2.  **Alta:** Implementar a lógica de negócios para os sistemas de XP e Quests, que são o núcleo da plataforma de gamificação.
3.  **Média:** Concluir a implementação do CRUD de Badges e do Painel de Administração.
4.  **Baixa:** Otimizar o tamanho do bundle (aviso durante o build).

## Plano de Ação Sequencial

1.  **Configuração do Ambiente:**
    *   Instalar `tailwindcss`, `zod`, `@tanstack/react-query`, e `zustand`.
    *   Criar o diretório `src/types` e definir as interfaces iniciais para `Quest`, `Badge`, `User`, etc.
    *   Configurar o `vitest` e adicionar um script `test` ao `package.json`.
2.  **Implementação do Núcleo:**
    *   Começar com o módulo de Quests, implementando a lógica para os diferentes tipos de quests e o sistema de XP.
    *   Implementar o gerenciamento de estado com Zustand para `user` e `quests`.
3.  **Desenvolvimento de Módulos Adicionais:**
    *   Concluir o CRUD de Badges, incluindo a lógica para desbloqueá-las.
    *   Desenvolver as funcionalidades do Painel de Administração.
4.  **Testes e Otimização:**
    *   Escrever testes unitários para os componentes e hooks criados.
    *   Investigar e aplicar técnicas de code-splitting para reduzir o tamanho do bundle.