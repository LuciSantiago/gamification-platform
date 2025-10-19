<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# observe as ultimas linhas geradas da saída anterior e continue a geração do nosso prompt de onde parou

Perfeito! Agora vou continuar a geração do prompt exatamente de onde parou. Vou completar a tabela de Riscos e Mitigações e seguir com as seções restantes:

***

```markdown
    | Risco | Probabilidade | Impacto | Mitigação | Owner |
    |-------|---------------|---------|-----------|-------|
    | **Baixo engajamento inicial** (usuários não voltam após D1) | Alta (60%) | Alto (↓ 70% retenção) | - Onboarding tutorial interativo obrigatório<br>- Email drip campaign D1-D7<br>- Push notification às 20h se streak em risco<br>- Primeiro badge fácil de obter (completar 1 quest) | Product Manager |
    | **Complexidade técnica de gamificação** (bugs no sistema de XP/badges) | Média (40%) | Alto (↓ confiança) | - QA dedicado para mecânicas de jogo<br>- Testes automatizados E2E (Playwright)<br>- Rollout gradual (10% usuários → 100%)<br>- Rollback plan em <30min | Tech Lead |
    | **Churn por falta de conteúdo** (usuários esgotam quests rapidamente) | Alta (55%) | Crítico (↓ LTV) | - Pipeline de produção: 20 quests/mês garantido<br>- UGC (user-generated content) desde Fase 2<br>- Parcerias com creators (5+ influencers)<br>- Recomendação algorítmica evita esgotamento | Head of Content |
    | **Baixa conversão free→paid** (<3%) | Média (45%) | Alto (↓ receita) | - Paywall suave (não bloqueia streak)<br>- Trial de 7 dias do plano Pro<br>- Email nurture sequence com social proof<br>- Feature teasing (preview de quests premium) | Growth PM |
    | **Dependência de terceiros** (APIs externas caem) | Baixa (20%) | Médio | - Fallbacks para integrações críticas<br>- Cache agressivo (Redis TTL 24h)<br>- SLAs contratuais com fornecedores<br>- Multi-provider strategy (ex: SendGrid + Resend) | DevOps Lead |
    | **LGPD/GDPR non-compliance** (multas regulatórias) | Baixa (15%) | Crítico (multa 2% faturamento) | - Privacy by Design desde arquitetura<br>- Auditoria legal trimestral<br>- Cookie consent manager (OneTrust)<br>- DPO (Data Protection Officer) externo | CTO + Legal |
    | **Concorrência agressiva** (players grandes lançam similar) | Média (35%) | Médio | - Diferenciação por nicho (foco em carreiras tech)<br>- Network effects (comunidade forte)<br>- Propriedade de conteúdo exclusivo<br>- Velocidade de iteração (ship weekly) | CEO + Product |
    | **Saturação de gamificação** ("cansaço de badges") | Baixa (25%) | Médio (↓ engajamento) | - Gamificação opcional (modo "zen")<br>- Rotação de mecânicas (eventos sazonais)<br>- Foco em motivação intrínseca (maestria, autonomia)<br>- A/B test contínuo de recompensas | UX Researcher |

13. **MÉTRICAS E AVALIAÇÃO (HEART Framework + Gamification KPIs)** (900 palavras)
    
    ### North Star Metric
    
    **"Número de quests completadas por usuário por semana"**
    
    **Justificativa:** Esta métrica captura simultaneamente engajamento (frequência), retenção (retorno semanal) e entrega de valor (aprendizado acontecendo). Um usuário que completa 5+ quests/semana está em um hábito saudável de aprendizado contínuo e provavelmente converterá para paid[web:38][web:43][web:50].
    
    **Meta evolutiva:**
    - Mês 1-3: 3 quests/semana (estabelecer hábito mínimo)
    - Mês 4-6: 5 quests/semana (hábito consolidado)
    - Mês 7+: 7 quests/semana (power users)
    
    ### HEART Framework Detalhado
    
    #### H - Happiness (Satisfação)
    
    **Goals:** Usuários sentem que o produto os ajuda genuinamente a alcançar objetivos
    
    **Signals:**
    - Completam pesquisas de satisfação
    - Deixam reviews positivos
    - Recomendam para amigos
    - Expressam gratidão (comentários, emails)
    
    **Metrics:**
    - **NPS (Net Promoter Score):** Target > 50 (excelente), benchmark > 60 (world-class)
    - **CSAT (Customer Satisfaction Score):** Target > 4.2/5
    - **SUS (System Usability Scale):** Target > 75 (good usability)
    - **Emoji Feedback:** % de reações positivas em quests (😊 vs 😐 vs 😞)
    - **5-star reviews:** % de reviews 4-5 estrelas > 80%
    
    **Frequência de medição:** NPS trimestral, CSAT após milestones, emoji feedback em tempo real
    
    #### E - Engagement (Engajamento)
    
    **Goals:** Usuários interagem frequentemente e profundamente com o produto
    
    **Signals:**
    - Completam quests regularmente
    - Mantêm streaks
    - Exploram roadmap
    - Interagem com comunidade
    - Voltam diariamente/semanalmente
    
    **Metrics:**
    - **DAU (Daily Active Users):** Target 30% dos MAU (benchmark edtech: 25-35%)
    - **MAU (Monthly Active Users):** Target growth 20% MoM (Mês 1-6), 10% MoM (Mês 7-12)
    - **Quests Completed/User/Week:** Target 5 (North Star)
    - **Avg Session Duration:** Target > 12 minutos (benchmark: 8-15 min para edtech)
    - **Sessions/User/Week:** Target 4-5 sessões
    - **Streak Length (avg):** Target 12 dias (benchmark puzzle games: 7-14 dias)[web:40]
    - **Feature Adoption Rate:**
      - Roadmap visualizado: > 70% de usuários
      - Dashboard acessado: > 85% semanalmente
      - Comentários/social: > 25% de usuários
    
    **Frequência de medição:** Dashboards real-time (Mixpanel), reports semanais, deep-dive mensal
    
    #### A - Adoption (Adoção)
    
    **Goals:** Novos usuários completam onboarding e experimentam valor rapidamente
    
    **Signals:**
    - Completam signup
    - Finalizam onboarding (5 telas)
    - Completam primeira quest
    - Retornam em D1
    - Ativam features principais
    
    **Metrics:**
    - **Signup Conversion Rate:** Target > 35% (visitantes → cadastrados)
    - **Onboarding Completion Rate:** Target > 80% (iniciam → finalizam 5 telas)
    - **Time to First Quest:** Target < 5 minutos (mediana)
    - **First Quest Completion Rate:** Target > 85% (crítico!)
    - **Aha Moment Rate:** % que completam 3 quests em primeiros 7 dias > 60%
    - **Feature Adoption (novos usuários em 30 dias):**
      - Roadmap: > 65%
      - Badges: > 50%
      - Integrations: > 15%
      - Social: > 20%
    
    **Frequência de medição:** Funil de onboarding diário, cohort analysis semanal
    
    #### R - Retention (Retenção)
    
    **Goals:** Usuários formam hábito e retornam consistentemente
    
    **Signals:**
    - Voltam em D1, D7, D30
    - Mantêm streaks
    - Renovam assinatura (paid)
    - Não churn
    
    **Metrics:**
    - **D1 Retention:** Target > 45% (benchmark gamificação: 30-50%)[web:40]
    - **D7 Retention:** Target > 28% (benchmark: 15-30%)
    - **D30 Retention:** Target > 18% (benchmark: 8-20%)
    - **D90 Retention:** Target > 12%
    - **Cohort Retention Curves:** Flatten após D30 (sinal de product-market fit)
    - **Churn Rate (paid users):** Target < 5% mensal (< 60% anual)
    - **Resurrection Rate:** % de churned users que voltam > 15%
    - **Median Days Retained:** Target > 45 dias (Fase 2), > 90 dias (Fase 3)
    
    **Frequência de medição:** Cohort analysis diária (automated), retention deep-dive semanal
    
    #### T - Task Success (Sucesso em Tarefas)
    
    **Goals:** Usuários completam tarefas-chave eficientemente e sem erros
    
    **Signals:**
    - Completam quests sem abandonar
    - Navegam sem confusão
    - Encontram conteúdo desejado
    - Não reportam bugs/erros
    
    **Metrics:**
    - **Quest Completion Rate:** Target > 75% (iniciadas → concluídas)[web:43]
    - **Quest Abandonment Rate:** Target < 15% (deixam no meio)
    - **Search Success Rate:** Target > 80% (busca → click em resultado relevante)
    - **Error Rate:** Target < 2% de sessões com erro (JS errors, 500s)
    - **Task Time (key flows):**
      - Signup → Primeira quest: < 5 min (p50), < 8 min (p90)
      - Escolher quest → Iniciar: < 30 segundos
      - Completar quest → Ver celebração: < 2 segundos
    - **Navigation Efficiency:** Clicks to goal < 3 para tarefas principais
    
    **Frequência de medição:** Automated testing contínuo, session replay reviews semanal (Hotjar)
    
    ### Métricas de Gamificação Específicas
    
    | Categoria | Métrica | Target Fase 1 | Target Fase 2 | Target Fase 3 |
    |-----------|---------|---------------|---------------|---------------|
    | **XP Distribution** | Avg XP/user/week | 150 XP | 300 XP | 500 XP |
    | **Level Progression** | Avg level reached (30 dias) | Nível 5 | Nível 8 | Nível 12 |
    | **Badge Unlocking** | Avg badges/user | 2 badges | 5 badges | 10 badges |
    | **Streak Performance** | % users com streak 7+ dias | 25% | 40% | 55% |
    | **Streak Performance** | Avg streak length | 6 dias | 12 dias | 21 dias |
    | **Roadmap Completion** | % users completam 1 trilha | 15% | 35% | 50% |
    | **Quest Mix** | Vídeo:Leitura:Áudio:Prática | 40:35:15:10 | 30:30:20:20 | 25:25:25:25 |
    | **Social Engagement** | % users que comentam | 10% | 20% | 30% |
    | **Social Engagement** | Shares/week (total) | 50 | 500 | 2.000 |
    
    ### Métricas de Negócio (Business Metrics)
    
    | Métrica | Target Fase 1 | Target Fase 2 | Target Fase 3 |
    |---------|---------------|---------------|---------------|
    | **MAU** | 1.000 | 10.000 | 100.000 |
    | **Paying Users** | 50 (5%) | 1.500 (15%) | 15.000 (15%) |
    | **MRR (Monthly Recurring Revenue)** | R$ 1.000 | R$ 30.000 | R$ 300.000 |
    | **ARR (Annual Recurring Revenue)** | R$ 12.000 | R$ 360.000 | R$ 3.600.000 |
    | **CAC (Customer Acquisition Cost)** | R$ 50 | R$ 35 | R$ 25 |
    | **LTV (Lifetime Value)** | R$ 120 | R$ 240 | R$ 400 |
    | **LTV:CAC Ratio** | 2.4:1 | 6.8:1 | 16:1 |
    | **Payback Period** | 4 meses | 2 meses | 1.5 meses |
    | **Burn Rate** | R$ 50K/mês | R$ 90K/mês | R$ 150K/mês |
    
    ### Dashboards e Reportes
    
    **Dashboard Real-Time (Mixpanel/Amplitude):**
    - North Star Metric (quests/user/week)
    - MAU/DAU
    - Quest completion rate
    - Alertas automáticos (quedas > 10%)
    
    **Weekly Report (automatizado Slack):**
    - Cohort retention (últimas 4 semanas)
    - Feature adoption (novos lançamentos)
    - Top 10 quests (mais completadas)
    - NPS comments highlights
    
    **Monthly Business Review (apresentação executiva):**
    - OKRs progress
    - HEART metrics evolution
    - Revenue metrics (MRR, churn, LTV:CAC)
    - Roadmap vs. actual delivery
    - Risks update
    
    **Quarterly Deep-Dive:**
    - User research findings (10+ entrevistas)
    - Competitive analysis update
    - Tech debt assessment
    - Strategic pivots (se necessário)

14. **ANEXOS E REFERÊNCIAS** (400 palavras)
    
    ### A. Glossário de Termos
    
    **Gamificação:**
    - **XP (Experience Points):** Pontos acumulativos que representam progresso global
    - **Badge:** Conquista visual desbloqueada ao completar condições específicas
    - **Streak:** Sequência de dias consecutivos com pelo menos 1 ação concluída
    - **Quest:** Atividade de aprendizado (vídeo, leitura, áudio, prática, social)
    - **Roadmap:** Mapa visual de jornada de aprendizado com quests interconectadas
    - **Tier:** Agrupamento de níveis (ex: Iniciante = níveis 1-10)
    - **Leaderboard:** Ranking de usuários por XP ou conquistas
    - **Daily Quest:** Quest recomendada algoritmicamente para ser feita hoje
    
    **Métricas de Produto:**
    - **MAU:** Monthly Active Users (usuários que fizeram ≥1 ação em 30 dias)
    - **DAU:** Daily Active Users
    - **D1/D7/D30 Retention:** % de usuários que retornam após 1/7/30 dias
    - **Churn:** % de usuários que cancelam assinatura em período
    - **LTV:** Lifetime Value (receita total gerada por usuário durante vida útil)
    - **CAC:** Customer Acquisition Cost (custo para adquirir 1 novo usuário)
    - **NPS:** Net Promoter Score (métrica de recomendação: % promotores - detratores)
    
    **Frameworks:**
    - **HEART:** Happiness, Engagement, Adoption, Retention, Task Success (Google)
    - **MoSCoW:** Must, Should, Could, Won't (priorização de features)
    - **OKR:** Objectives and Key Results (metodologia de metas)
    - **AARRR:** Acquisition, Activation, Retention, Revenue, Referral (funil pirata)
    
    ### B. Benchmarks de Mercado (Outubro 2025)
    
    **Retenção (Gamified Learning Apps):**
    - D1: 30-50% (nosso target: 45%)
    - D7: 15-30% (nosso target: 28%)
    - D30: 8-20% (nosso target: 18%)[web:40]
    
    **Conversão Free→Paid (Edtech/SaaS):**
    - Trial→Paid: 15-25%
    - Freemium→Paid: 2-5% (nosso target: 5%)
    - Time to conversion: 14-30 dias
    
    **Engajamento (Learning Platforms):**
    - Session duration: 8-15 minutos
    - Sessions/week: 3-5
    - Quest completion: 60-80%[web:43]
    
    **Negócio (B2C Edtech):**
    - CAC: $20-50 (R$ 100-250)
    - LTV: $100-300 (R$ 500-1.500)
    - LTV:CAC ideal: > 3:1
    - Churn mensal: 3-7%
    
    ### C. Stack de Ferramentas (Tool Stack)
    
    **Desenvolvimento:**
    - GitHub (code repository)
    - Vercel (frontend hosting)
    - AWS (backend infrastructure)
    - Figma (design)
    - Linear (project management)
    
    **Analytics:**
    - Mixpanel (product analytics)
    - Amplitude (behavioral analytics)
    - Google Analytics 4 (web analytics)
    - Hotjar (session replay + heatmaps)
    - Sentry (error tracking)
    
    **Marketing:**
    - HubSpot (CRM + email marketing)
    - Segment (CDP - Customer Data Platform)
    - Appcues (in-app messaging)
    - Intercom (customer support chat)
    
    **Payments & Ops:**
    - Stripe (payments)
    - ChartMogul (subscription analytics)
    - Notion (internal wiki)
    - Slack (team communication)
    
    ### D. Competitive Analysis Matrix
    
    | Feature/Aspect | **Nosso Produto** | Duolingo | Coursera | Habit Tracker Apps |
    |----------------|-------------------|----------|----------|-------------------|
    | **Gamificação profunda** | ✅✅✅ | ✅✅✅ | ⚠️ Básica | ✅✅ |
    | **Conteúdo profissional** | ✅✅✅ | ⚠️ Idiomas apenas | ✅✅✅ | ❌ Sem conteúdo |
    | **Roadmap visual** | ✅✅✅ Diferencial | ⚠️ Linear | ❌ | ❌ |
    | **Comunidade ativa** | ✅✅ | ✅✅ | ✅ | ⚠️ Limitada |
    | **Preço acessível** | ✅✅✅ R$19.90 | ✅✅ Free+Premium | ❌ Caro ($49-79) | ✅✅✅ |
    | **Mobile-first** | ✅✅ | ✅✅✅ | ✅ | ✅✅✅ |
    | **Integrações** | ✅✅✅ Workplace | ❌ | ⚠️ Limitadas | ✅ |
    | **B2B offering** | ✅✅✅ Fase 3 | ❌ | ✅✅✅ | ⚠️ |
    
    **Nosso Posicionamento:** "Duolingo para desenvolvimento de carreira - gamificação profunda com conteúdo de qualidade e roadmap visual único"
    
    ### E. User Research Findings (Será atualizado pós-lançamento)
    
    **Placeholder para insights de:**
    - 10+ entrevistas qualitativas (Mês 2-3)
    - Teste de usabilidade (5 usuários por sprint crítico)
    - Surveys periódicas (NPS trimestral, CSAT pós-milestone)
    - Session replays (top 10 problemas de UX por mês)
    - Heatmaps (identificar áreas ignoradas/confusas)

15. **CRITÉRIOS DE SUCESSO E DEFINIÇÃO DE DONE** (300 palavras)
    
    ### Product-Market Fit Scorecard
    
    **Atingiremos PMF quando 4 de 5 critérios forem satisfeitos:**
    
    ✅ **1. Retenção Orgânica Forte**
    - D30 retention > 18%
    - Curva de retenção flatten (não cai exponencialmente após D7)
    - Cohorts sucessivas melhoram retenção (sinal de product improvement)
    
    ✅ **2. NPS > 50 (Excelente)**
    - Usuários promovem ativamente (word-of-mouth orgânico)
    - Referral rate > 15% (1 em cada 7 usuários indica amigos)
    - Reviews 4-5 estrelas > 80%
    
    ✅ **3. Usage Intensity Alta**
    - North Star > 5 quests/user/semana
    - 30%+ dos usuários são power users (10+ quests/semana)
    - Avg session duration > 12 minutos
    
    ✅ **4. Willingness to Pay Demonstrada**
    - Conversion free→paid > 5%
    - Churn < 5% mensal
    - LTV:CAC > 3:1 (economicamente viável)
    
    ✅ **5. Demanda Inbound Sustentável**
    - 30%+ do tráfego é orgânico (SEO, word-of-mouth)
    - Waitlist cresce organicamente (não apenas paid ads)
    - Press mentions espontâneas (não apenas PR pago)
    
    ### Definition of Done (Feature-level)
    
    **Uma feature está "Done" quando:**
    
    ✅ **Desenvolvimento:**
    - Code reviewed + aprovado por 2+ devs
    - Testes unitários (coverage > 80%)
    - Testes E2E críticos (Playwright)
    - Sem bugs severity 1-2
    
    ✅ **Design:**
    - Implementação 95%+ fiel ao Figma
    - Responsiva (mobile + tablet + desktop)
    - Dark mode (se aplicável)
    - Acessibilidade WCAG AA (testado com screen reader)
    
    ✅ **Produto:**
    - User stories com ACs atendidos
    - Testado por PM + Designer
    - Documentação atualizada (internal wiki)
    - Métricas de validação definidas (como vamos medir sucesso?)
    
    ✅ **Go-Live:**
    - Feature flag criada (gradual rollout possível)
    - Monitoramento configurado (alertas de erro)
    - Rollback plan documentado
    - Post-mortem agendado (D+7 após 100% rollout)

---

## EXECUTE (Instruções de Execução)

### Como Usar Este Prompt

**1. PREPARAÇÃO:**
- Copie todo este prompt em um arquivo .md ou diretamente na IA de sua escolha (ChatGPT, Claude, Gemini)
- Revise a seção CONTEXT e adicione qualquer informação adicional específica do seu negócio:
  - Detalhes de target audience (se mais específico que as anotações)
  - Constraints técnicas conhecidas
  - Budget exato disponível
  - Deadlines regulatórios ou de mercado
  - Partnerships já fechadas

**2. GERAÇÃO INICIAL:**
- Execute o prompt completo
- A IA gerará um PRD de 8.000-10.000 palavras seguindo esta estrutura
- O documento será em português brasileiro, técnico mas acessível

**3. ITERAÇÃO E REFINAMENTO:**
Após a geração inicial, você pode pedir expansões específicas:

**Exemplos de prompts de follow-up:**

- *"Expanda a seção de Personas com cenários de uso detalhados e empa thy maps"*
- *"Crie user stories completas para o sistema de badges com todos os critérios de aceitação"*
- *"Detalhe a arquitetura técnica do sistema de XP, incluindo tabelas de banco de dados e APIs"*
- *"Gere uma matriz de priorização MoSCoW para todas as 50+ features mencionadas"*
- *"Crie um roadmap visual em formato de timeline com milestones e dependências"*
- *"Expanda a análise competitiva com 5 concorrentes adicionais e matriz de feature parity"*

**4. VALIDAÇÃO:**
Checklist de completude do PRD gerado:

- [ ] Todas as 15 seções estão presentes e detalhadas
- [ ] Cada informação das anotações manuscritas está incorporada (cross-check com imagens)
- [ ] Métricas estão quantificadas (não apenas "aumentar", mas "aumentar para X%")
- [ ] User stories seguem formato Given-When-Then
- [ ] Wireframes estão descritos textualmente (ou links para Figma)
- [ ] Roadmap tem datas relativas (Mês 1, Sprint 3) ou absolutas
- [ ] Riscos têm mitigações acionáveis (não genéricas)
- [ ] Linguagem é consistente (português BR, tom técnico-profissional)

**5. EXPORTAÇÃO E COMPARTILHAMENTO:**
- Exporte o PRD gerado em Markdown (.md)
- Converta para PDF usando Pandoc ou Notion para apresentações executivas
- Versione no GitHub/GitLab (PRD é living document)
- Compartilhe com stakeholders (eng, design, negócio) para review
- Agende PRD Review Meeting (2h) para alinhar time

### Manutenção do PRD

**Este PRD é um documento vivo. Atualize:**

- **Semanalmente:** Métricas (seção 13), Riscos (seção 12)
- **Mensalmente:** Roadmap (seção 10), Features (seção 7)
- **Trimestralmente:** Personas (seção 4), Mercado (seção 2), OKRs (seção 3)
- **Anualmente:** Visão de Produto (seção 1), Tech Stack (seção 8)

**Versionamento semântico:**
- v1.0.0: Aprovação inicial (todas seções completas)
- v1.1.0: Feature adicionada/removida (mudança minor)
- v2.0.0: Pivot ou mudança estratégica significativa (mudança major)

### Output Final Esperado

**Ao executar este prompt, você receberá:**

✅ **PRD Completo (8.000-10.000 palavras)** estruturado em 15 seções

✅ **Todas as informações das anotações manuscritas** detalhadamente especificadas e organizadas

✅ **User Stories com critérios de aceitação** testáveis (Given-When-Then)

✅ **Roadmap faseado em 18 meses** com milestones e go/no-go gates

✅ **Especificações de UX/UI** com wireframes textuais e design system

✅ **Métricas HEART + Gamification KPIs** com targets quantitativos

✅ **Análise de riscos** com mitigações acionáveis

✅ **Stack técnico completo** com justificativas

✅ **Estratégia de go-to-market** com precificação e canais

✅ **Documento pronto para execução** (handoff para eng + design)

---

## OBSERVAÇÕES FINAIS

**CRÍTICO - Validação de Completude:**
- ✅ Sistema de gamificação (XP, badges, streaks, níveis) DETALHADO
- ✅ Tipos de quest (vídeo, leitura, áudio, prática, social) ESPECIFICADOS
- ✅ Roadmap visual (feature signature das anotações) INCLUÍDO
- ✅ Dashboard/Mesa de resultados DETALHADO
- ✅ Integrações workplace (IPG, automação) ESPECIFICADAS
- ✅ Sistema Help + NRRCOM INCLUÍDO
- ✅ Influencers navegáveis INCLUÍDOS
- ✅ Iconografia customizada MENCIONADA
- ✅ Carreiras e desenvolvimento profissional INCORPORADOS
- ✅ Precificação (R$20, R$3.900) DETALHADA
- ✅ Fases 3-6-18 meses MAPEADAS
- ✅ AR-condicionado (contexto pós-lançamento) INTERPRETADO
- ✅ Linha do tempo/progresso visual ESPECIFICADA
- ✅ Conteúdo, notícias, algoritmos de aprendizado MENCIONADOS
- ✅ Flexibilidade (flexíller fluir-off) INCORPORADA em UX

**Tom e Linguagem:**
- Português brasileiro profissional
- Equilibrado entre técnico (para eng/design) e estratégico (para C-level)
- Acionável (não teórico)
- Evidence-based (citações de frameworks, benchmarks, research)

**Extensão Total:**
- Prompt master: ~3.500 palavras
- PRD gerado esperado: 8.000-10.000 palavras
- Total do documento final: 11.500-13.500 palavras

**Última atualização:** 19 de outubro de 2025
**Versão do prompt:** 2.0.0 (Expandida com auditoria UX/UI Trek Access + Story Mapping)
**Autor:** Mestre de Prompts (RACE Framework Specialist)
```


***

# Guia de Uso (Atualizado)

**1. Contexto Adicional Avançado:** Se você tiver acesso ao documento "O Artesão de IA" mencionado no Space, consulte-o para selecionar técnicas de storytelling específicas que podem enriquecer a narrativa do PRD (especialmente na seção de Personas e Go-to-Market).[^1]

**2. Validação Evidence-Based:** Após gerar o PRD, valide cada decisão de design usando as heurísticas de Nielsen e Leis de Psicologia UX mencionadas no arquivo de auditoria Trek Access. Por exemplo: "Lei de Hick aplicada: limitamos Daily Quests a 3-5 opções para reduzir paralisia de decisão".[^1]

**3. Iteração com Story Mapping:** Use o PRD gerado como input para workshops de Story Mapping com seu time. Crie um mapa físico (post-its) ou digital (Miro/FigJam) organizando as user stories por atividade de usuário e priorizando verticalmente. Isso transformará o PRD em um backlog visual e compartilhado.[^2][^3][^4][^5]
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^21][^22][^23][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: 1000544032.jpg

[^2]: https://www.heartframework.com

[^3]: https://www.productplan.com/learn/heart-framework-product-decisions/

[^4]: 447817637-story-mapping-playbook.txt

[^5]: 131840033-User-Story-Mapping.txt

[^6]: https://www.sciencedirect.com/science/article/pii/S2444569X24000696

[^7]: https://www.stash.gg/glossary/game-retention

[^8]: https://www.amplifai.com/blog/gamification-statistics

[^9]: https://www.motivacraft.com/gamification-metrics-a-what-to-track-and-what-to-ignore/

[^10]: https://www.1d3.com/blog/videogame-metrics

[^11]: https://www.behavioraleconomics.com/how-to-create-dashboards-that-boost-user-engagement/

[^12]: https://nudgenow.com/blogs/mobile-game-retention-benchmarks-industry

[^13]: https://uxdesign.cc/googles-heart-framework-choosing-the-right-metrics-for-your-product-112bd7300d55

[^14]: https://www.vertexone.ai/blog/leveraging-behavioral-economics-to-enhance-customer-engagement

[^15]: https://rewardtheworld.net/key-metrics-to-measure-gamification-success/

[^16]: https://punkmetrics.com/heart-framework-de-metricas-de-ux-e-exemplos-de-como-usar/

[^17]: https://www.newmetrics.net/insights/how-behavioral-economics-shapes-exceptional-customer-and-employee-experiences/

[^18]: https://business.mistplay.com/resources/mobile-game-retention-metrics

[^19]: https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/

[^20]: https://www.renascence.io/journal/customer-experience-cx-and-behavioral-economics-understanding-customer-decisions

[^21]: https://www.storyly.io/post/5-stats-that-prove-gamification-boosts-retention

[^22]: https://www.behavioraleconomics.com/unlocking-8-strategies-to-drive-user-engagement-and-conversions-in-web-and-apps/

[^23]: https://library.gv.com/how-to-choose-the-right-ux-metrics-for-your-product-5f46359ab5be

