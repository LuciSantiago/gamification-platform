# ⚡ Quick Start Guide - Gamification Platform

## 🚀 Setup em 5 Minutos

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/LuciSantiago/gamification-platform.git
cd gamification-platform
```

### 2️⃣ Instale as Dependências
```bash
npm install
```

### 3️⃣ Configure o Ambiente
```bash
cp .env.example .env.local
```

**Edite `.env.local`:**
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
VITE_API_URL=http://localhost:3000
```

### 4️⃣ Inicie o Servidor
```bash
npm run dev
```

✅ Acesse: `http://localhost:5173`

---

## 📁 Explorar a Aplicação

### 🏠 Home
- Ver dashboard principal
- Acompanhar progresso
- Visualizar stats

### 🎯 Quests
- Aceitar novas missões
- Acompanhar progresso
- Completar desafios

### 🎖️ Badges
- Ver conquistas desbloqueadas
- Ver badges disponíveis
- Coletar recompensas

### 🗺️ Roadmap
- Visualizar mapa de progressão
- Navegar entre regiões
- Ver milestones

### 👤 Profile
- Editar dados pessoais
- Ver histórico de conquistas
- Gerenciar preferências

### ⚙️ Admin Panel
- CRUD de Quests
- CRUD de Badges
- CRUD de Regiões
- CRUD de Desafios

---

## 🧪 Testes

### Build de Produção
```bash
npm run build
npm run preview
```

### Verificar Tipos
```bash
npm run type-check
```

---

## 📚 Documentação Completa

- **[README.md](./README.md)** - Documentação principal
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Guia de deployment com Dokploy + Supabase
- **[CHECKLIST-FINALIZACAO.md](./CHECKLIST-FINALIZACAO.md)** - Checklist para produção

---

## 🛠️ Stack Técnico Rápido

| Categoria | Tecnologia |
|-----------|-----------|
| Frontend | React 18, TypeScript, Tailwind |
| UI Components | Radix UI |
| Animações | Motion/Framer Motion |
| Gráficos | Recharts |
| Forms | React Hook Form |
| Build | Vite |
| Backend | Supabase |
| Deployment | Dokploy |

---

## 🚀 Próximos Passos

1. **Configurar Supabase**
   - Criar projeto em supabase.com
   - Copiar credenciais para `.env.local`
   - Criar tabelas (ver [DEPLOYMENT.md](./DEPLOYMENT.md))

2. **Configurar Dokploy**
   - Setup VPS
   - Conectar repositório GitHub
   - Configurar variáveis de ambiente
   - Deploy automático

3. **Customizar**
   - Adicionar seu branding
   - Ajustar temas e cores
   - Criar suas quests e badges

---

## 💡 Dicas

- Use `npm run dev` para desenvolvimento com hot reload
- Components estão em `src/components/`
- Hooks customizados em `src/hooks/`
- Estilos globais em `src/styles/`
- Componentes UI em `src/components/ui/`

---

## 🆘 Problemas Comuns

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 em uso
```bash
npm run dev -- --port 3001
```

### Supabase não conecta
- Verificar `.env.local`
- Verificar URL e chave
- Verificar conexão de internet

### Build muito lento
```bash
npm run build -- --mode development
```

---

## 📱 Responsividade

A aplicação é 100% responsiva para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

---

## 🤝 Precisa de Ajuda?

- 📖 Leia a [documentação completa](./README.md)
- 🐛 Abra uma [issue no GitHub](https://github.com/LuciSantiago/gamification-platform/issues)
- 💬 Consulte a [guia de deployment](./DEPLOYMENT.md)

---

**Pronto para começar? Vá para [README.md](./README.md) para mais detalhes!** 🚀
