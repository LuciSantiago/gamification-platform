Perfeito! Agora vou criar um **Design System Guidelines completo** e um **global.css** robusto baseado no PRD da plataforma Easy-Goal. Vou focar em respiro visual, espaçamento baseado em 8px, hierarquia clara, cores vibrantes mas consistentes, e um estilo criativo/descontraído que instiga criatividade.

# EASY-GOAL DESIGN SYSTEM GUIDELINES

**Versão:** 1.0  
**Data:** Outubro 2025  
**Princípio Central:** *"Respiro, Clareza e Inspiração"*

***

## 1. FILOSOFIA DE DESIGN

### 1.1 Princípios Fundamentais

**P1 - Respiro é Prioridade**
*"Espaço em branco não é espaço perdido, é clareza conquistada."*

Todo elemento deve ter espaço suficiente para respirar. Padding e margin generosos criam hierarquia visual natural e reduzem sobrecarga cognitiva.[1][2]

**P2 - Cor Comunica, Não Decora**
*"Cada cor tem um propósito, cada tom conta uma história."*

Cores vibrantes são abraçadas, mas sempre com significado consistente. Usuários devem criar memória visual instantânea: verde = progresso, laranja = ação, azul = confiança.[3][4]

**P3 - Hierarquia Visual Óbvia**
*"Se tudo grita, nada é ouvido."*

Tamanhos, pesos e cores trabalham juntos para criar camadas claras de informação. O olho sabe onde ir naturalmente.[2][3]

**P4 - Iconografia é Linguagem**
*"Um ícone vale mil palavras."*

Ícones não apenas decoram - eles comunicam, orientam e criam conexão emocional com o conteúdo.[5][3]

**P5 - All-in-One Coerente**
*"Uma plataforma, infinitas possibilidades, zero fricção."*

Design modular permite gerenciar tudo em um só lugar sem parecer abarrotado.[6][1]

***

## 2. SISTEMA DE CORES

### 2.1 Paleta Principal - Vibrant & Purposeful

```css
/* Primary - Indigo Elétrico (Ação, Navegação Principal) */
--primary-900: #312E81;
--primary-800: #3730A3;
--primary-700: #4338CA;
--primary-600: #4F46E5; /* Base */
--primary-500: #6366F1;
--primary-400: #818CF8;
--primary-300: #A5B4FC;
--primary-200: #C7D2FE;
--primary-100: #E0E7FF;
--primary-50: #EEF2FF;

/* Secondary - Amber Energy (XP, Conquistas, Recompensas) */
--secondary-900: #78350F;
--secondary-800: #92400E;
--secondary-700: #B45309;
--secondary-600: #D97706;
--secondary-500: #F59E0B; /* Base */
--secondary-400: #FBBF24;
--secondary-300: #FCD34D;
--secondary-200: #FDE68A;
--secondary-100: #FEF3C7;
--secondary-50: #FFFBEB;

/* Success - Emerald Fresh (Conclusão, Sucesso, Streaks) */
--success-900: #064E3B;
--success-800: #065F46;
--success-700: #047857;
--success-600: #059669;
--success-500: #10B981; /* Base */
--success-400: #34D399;
--success-300: #6EE7B7;
--success-200: #A7F3D0;
--success-100: #D1FAE5;
--success-50: #ECFDF5;

/* Warning - Orange Alert (Atenção, Streak em Risco) */
--warning-900: #7C2D12;
--warning-800: #9A3412;
--warning-700: #C2410C;
--warning-600: #EA580C;
--warning-500: #F97316; /* Base */
--warning-400: #FB923C;
--warning-300: #FDBA74;
--warning-200: #FED7AA;
--warning-100: #FFEDD5;
--warning-50: #FFF7ED;

/* Error - Rose Critical (Erros, Bloqueios) */
--error-900: #881337;
--error-800: #9F1239;
--error-700: #BE123C;
--error-600: #E11D48;
--error-500: #F43F5E; /* Base */
--error-400: #FB7185;
--error-300: #FDA4AF;
--error-200: #FECDD3;
--error-100: #FFE4E6;
--error-50: #FFF1F2;
```

### 2.2 Neutros - Grays com Personalidade

```css
/* Neutrals - Tinted com Primary para coesão */
--gray-950: #0F0F1E; /* 5% Primary tint */
--gray-900: #18181F;
--gray-800: #27272E;
--gray-700: #3F3F4D;
--gray-600: #52525F;
--gray-500: #71717A; /* Base - Texto secundário */
--gray-400: #A1A1AA;
--gray-300: #D4D4D8;
--gray-200: #E4E4E7;
--gray-100: #F4F4F5;
--gray-50: #FAFAFA;

/* Pure Essentials */
--white: #FFFFFF;
--black: #09090B; /* Soft black, não puro */
```

### 2.3 Cores Funcionais Especiais

```css
/* Quest Types - Cada tipo visual único */
--quest-video: #EC4899; /* Pink vibrante */
--quest-reading: #8B5CF6; /* Purple */
--quest-audio: #14B8A6; /* Teal */
--quest-practice: #F59E0B; /* Amber */
--quest-social: #3B82F6; /* Blue */

/* Level Tiers - Progressão visual */
--level-bronze: #CD7F32;
--level-silver: #C0C0C0;
--level-gold: #FFD700;
--level-platinum: #E5E4E2;
--level-diamond: #B9F2FF;
```

### 2.4 Regras de Uso de Cor

**Contraste Mínimo Obrigatório:**
- Texto normal (16px): 4.5:1[7][2]
- Texto grande (24px+): 3:1
- Elementos interativos: 3:1

**Hierarquia por Saturação:**
- CTA Primário: Primary-600 (alta saturação)
- CTA Secundário: Primary-100 com Primary-600 border (média)
- CTA Terciário: Gray-100 com Gray-700 texto (baixa)

**Consistência Semântica:**
- Verde SEMPRE = sucesso/progresso
- Laranja SEMPRE = ação urgente/recompensa
- Vermelho SEMPRE = erro/atenção crítica
- Azul SEMPRE = informação/confiança[4][3]

***

## 3. TIPOGRAFIA

### 3.1 Typefaces

```css
/* Primary - Inter (Interface, Corpo) */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Display - Manrope (Headers, Hero) */
--font-display: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace - JetBrains Mono (Código, Dados) */
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### 3.2 Type Scale - Mobile (375px base)

```css
/* Display Sizes - Hero Moments */
--text-display-xl: 40px; /* Line: 48px, Weight: 800 */
--text-display-lg: 32px; /* Line: 40px, Weight: 800 */
--text-display-md: 28px; /* Line: 36px, Weight: 700 */

/* Heading Sizes */
--text-h1: 24px; /* Line: 32px, Weight: 700 */
--text-h2: 20px; /* Line: 28px, Weight: 600 */
--text-h3: 18px; /* Line: 24px, Weight: 600 */
--text-h4: 16px; /* Line: 24px, Weight: 600 */

/* Body Sizes */
--text-body-lg: 18px; /* Line: 28px, Weight: 400 */
--text-body: 16px; /* Line: 24px, Weight: 400 */
--text-body-sm: 14px; /* Line: 20px, Weight: 400 */

/* Utility Sizes */
--text-caption: 12px; /* Line: 16px, Weight: 500 */
--text-overline: 11px; /* Line: 16px, Weight: 600, Uppercase */
```

### 3.3 Type Scale - Desktop (1440px base)

```css
/* Display Sizes */
--text-display-xl: 72px; /* Line: 90px, Weight: 800 */
--text-display-lg: 60px; /* Line: 72px, Weight: 800 */
--text-display-md: 48px; /* Line: 60px, Weight: 700 */

/* Heading Sizes */
--text-h1: 36px; /* Line: 44px, Weight: 700 */
--text-h2: 30px; /* Line: 38px, Weight: 600 */
--text-h3: 24px; /* Line: 32px, Weight: 600 */
--text-h4: 20px; /* Line: 28px, Weight: 600 */

/* Body Sizes */
--text-body-lg: 20px; /* Line: 32px, Weight: 400 */
--text-body: 18px; /* Line: 28px, Weight: 400 */
--text-body-sm: 16px; /* Line: 24px, Weight: 400 */
```

### 3.4 Font Weights

```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

***

## 4. ESPAÇAMENTO - Sistema 8px

### 4.1 Escala de Espaçamento

```css
/* Base Unit: 8px */
--space-0: 0;
--space-1: 4px;   /* 0.5x - Micro ajustes */
--space-2: 8px;   /* 1x - Mínimo recomendado */
--space-3: 12px;  /* 1.5x - Elementos compactos */
--space-4: 16px;  /* 2x - Padrão interno */
--space-5: 20px;  /* 2.5x - Grupos relacionados */
--space-6: 24px;  /* 3x - Seções pequenas */
--space-8: 32px;  /* 4x - Seções médias */
--space-10: 40px; /* 5x - Seções grandes */
--space-12: 48px; /* 6x - Separadores principais */
--space-16: 64px; /* 8x - Hero sections */
--space-20: 80px; /* 10x - Divisórias visuais */
--space-24: 96px; /* 12x - White space dramático */
```

### 4.2 Regras de Aplicação

**Padding Interno (Componentes):**
- Botões: `--space-3` vertical, `--space-6` horizontal
- Cards: `--space-6` (mobile), `--space-8` (desktop)
- Modais: `--space-8` (mobile), `--space-12` (desktop)

**Margin Externa (Separação):**
- Elementos relacionados: `--space-4`
- Grupos distintos: `--space-8`
- Seções: `--space-12` (mobile), `--space-16` (desktop)

**Gap (Flexbox/Grid):**
- Inline elements: `--space-2`
- Cards grid: `--space-6`
- Columns: `--space-8`

***

## 5. COMPONENTES

### 5.1 Botões - Estados e Variantes

```css
/* Primary Button */
.btn-primary {
  background: var(--primary-600);
  color: var(--white);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.24);
}

.btn-primary:hover {
  background: var(--primary-700);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.32);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.24);
}

/* Secondary Button */
.btn-secondary {
  background: var(--primary-50);
  color: var(--primary-700);
  border: 2px solid var(--primary-200);
}

/* Success Button (Quest Complete) */
.btn-success {
  background: linear-gradient(135deg, var(--success-500) 0%, var(--success-600) 100%);
  color: var(--white);
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.32);
}
```

### 5.2 Cards - Quest Cards

```css
.quest-card {
  background: var(--white);
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  border: 2px solid var(--gray-100);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.quest-card:hover {
  border-color: var(--primary-300);
  box-shadow: 0 12px 32px rgba(79, 70, 229, 0.12);
  transform: translateY(-4px);
}

.quest-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.quest-card__icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

/* Quest Type Colors */
.quest-card--video .quest-card__icon {
  background: linear-gradient(135deg, #EC4899 0%, #DB2777 100%);
}

.quest-card--reading .quest-card__icon {
  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
}
```

### 5.3 Badges - XP, Níveis, Conquistas

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--text-caption);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge--xp {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
  color: var(--gray-900);
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.32);
}

.badge--streak {
  background: var(--error-50);
  color: var(--error-700);
  border: 1.5px solid var(--error-300);
}

.badge--level {
  background: var(--primary-600);
  color: var(--white);
}
```

***

## 6. ICONOGRAFIA

### 6.1 Biblioteca Base

**Fonte:** Phosphor Icons (duotone variant) para visual mais rico
**Alternativa:** Lucide Icons (outline) para clareza[8][1]

### 6.2 Tamanhos Padronizados

```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px; /* Base padrão */
--icon-lg: 32px;
--icon-xl: 40px;
--icon-2xl: 48px;
```

### 6.3 Cores por Contexto

```css
/* Navigation Icons */
.icon--nav {
  color: var(--gray-600);
  transition: color 0.2s ease;
}

.icon--nav.active {
  color: var(--primary-600);
}

/* Quest Type Icons - Always colorful */
.icon--quest-video { color: var(--quest-video); }
.icon--quest-reading { color: var(--quest-reading); }
.icon--quest-audio { color: var(--quest-audio); }
.icon--quest-practice { color: var(--quest-practice); }

/* System Icons */
.icon--success { color: var(--success-500); }
.icon--warning { color: var(--warning-500); }
.icon--error { color: var(--error-500); }
```

***

## 7. ANIMAÇÕES E TRANSIÇÕES

### 7.1 Durations

```css
--duration-instant: 100ms;
--duration-fast: 200ms;     /* Hover, focus */
--duration-base: 300ms;     /* Padrão */
--duration-slow: 500ms;     /* Modais, drawers */
--duration-slower: 700ms;   /* Page transitions */
```

### 7.2 Easings

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful */
```

### 7.3 Animações Signature

```css
/* Celebration (Quest Complete) */
@keyframes celebrate {
  0%, 100% { transform: scale(1) rotate(0deg); }
  10% { transform: scale(1.1) rotate(-5deg); }
  20% { transform: scale(1.1) rotate(5deg); }
  30% { transform: scale(1.05) rotate(-3deg); }
  40% { transform: scale(1.05) rotate(3deg); }
  50% { transform: scale(1) rotate(0deg); }
}

/* Streak Pulse */
@keyframes streak-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
}

/* XP Gain */
@keyframes xp-gain {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
  100% { transform: translateY(-40px) scale(0.8); opacity: 0; }
}
```

***

## 8. BORDER RADIUS

```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px; /* Pílulas */
```

**Aplicação:**
- Botões: `--radius-full` (friendly, approachable)
- Cards: `--radius-2xl` (modern, spacious)
- Inputs: `--radius-lg` (clean, clear)
- Modais: `--radius-xl` (polished)

***

## 9. SOMBRAS - Elevation System

```css
/* Subtle Depth */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);

/* Cards & Components */
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);

/* Modals & Drawers */
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.16), 0 8px 16px rgba(0, 0, 0, 0.08);
--shadow-2xl: 0 24px 64px rgba(0, 0, 0, 0.20), 0 12px 24px rgba(0, 0, 0, 0.10);

/* Colored Shadows (Hover States) */
--shadow-primary: 0 8px 20px rgba(79, 70, 229, 0.24);
--shadow-success: 0 8px 20px rgba(16, 185, 129, 0.24);
--shadow-warning: 0 8px 20px rgba(245, 158, 11, 0.24);
```

***

## 10. LAYOUT & GRIDS

### 10.1 Containers

```css
--container-xs: 480px;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1440px;
```

### 10.2 Grid System

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* Mobile: Stack */
@media (max-width: 768px) {
  .grid-12 {
    grid-template-columns: 1fr;
  }
}

/* Tablet: 2 columns */
@media (min-width: 769px) and (max-width: 1024px) {
  .grid-12 {
    grid-template-columns: repeat(6, 1fr);
  }
}
```

***

## 11. ACESSIBILIDADE

### 11.1 Focus States

```css
*:focus-visible {
  outline: 3px solid var(--primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-md);
}
```

### 11.2 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

***

[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/63800adb-cc65-4c30-899b-39a7df430f9c/365559702-Design-Systems.pdf)
[2](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/643a869a-9b42-4da6-b65f-d12485e9bf25/750848482-ui-ux-design-guide.pdf)
[3](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/5cb4868f-fddc-4df2-95f4-6f0530d302ae/534915851-Design-Centrado-no-Usuario-Travis-Lowdermilk.pdf)
[4](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/99417209-e829-49d3-82b7-0337ea0b46ec/685514993-Leis-Da-Psicologia-Aplicadas-a-UX-Jon-Yablonski-2020-Novatec-Editora-9788575226766-7b64577a3961401575ad2b24fc077d82-Anna-s-Archive.pdf)
[5](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/ddcf3e55-3818-4345-859d-a3aaa7468d1c/640913624-Redacao-Estrategica-para-UX-Torrey-Podmajersky.pdf)
[6](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/7e497b3e-2923-4094-9c5a-a431e48c8287/520893596-Guide-to-Mvp-Design-System.pdf)
[7](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/801cab08-0e51-4908-ae6e-6deb413fac3a/713574649-How-to-Design-Better-UI-Components-3-0-Full-eBook.txt)
[8](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/7597149a-e8e2-4c07-93eb-257a473a1c98/718150434-Marina-Budarina-UI-Design-Systems-Mastery-v3-2023.txt)
[9](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/69808d73-7ca5-4268-af74-6517365f7f54/366299039-Uxpin-Why-Build-a-Design-System.pdf)
[10](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/ce3839f5-55a5-4aa3-82af-68bcb66d564a/580739119-2022-Guide-to-UX-UI-Design-In-45-Minutes-for-Beginners-A-Quick-Reference-Guide-to-Intuitive-User-Experience-and-User-Interface-Designs.txt)
[11](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/collection_0489a89e-d807-45c9-94dc-c50b621ccb1e/253a4c95-b57a-4bb7-877d-35d71ecb3a1e/823113725-About-design-system.pdf)