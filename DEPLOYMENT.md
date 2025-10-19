# 🚀 Guia de Deployment - Gamification Platform

## Visão Geral da Arquitetura

```
┌─────────────────┐
│  GitHub (main)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Dokploy (VPS)  │
│  - Build Docker │
│  - Deploy App   │
│  - SSL/HTTPS    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Supabase       │
│  - PostgreSQL   │
│  - Auth         │
│  - Storage      │
└─────────────────┘
```

## 📋 Pré-requisitos

- [x] Conta Dokploy configurada
- [x] VPS Linux (Ubuntu 20.04+)
- [x] Docker instalado no Dokploy
- [x] Projeto Supabase criado
- [x] Repositório GitHub público ou privado
- [x] Variáveis de ambiente configuradas

## 🔑 Passo 1: Preparar Variáveis de Ambiente

### No Dokploy, configure:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_API_URL=https://seu-dominio.com
VITE_ENV=production
```

## 🐳 Passo 2: Configurar Docker no Dokploy

### Opção A: Via Dokploy UI (Recomendado)

1. **Acesse o painel Dokploy**
   - URL: `https://seu-vps-ip:3000`
   - Faça login com suas credenciais

2. **Crie um novo projeto**
   - Clique em "New Project"
   - Nome: "Gamification Platform"
   - Descrição: "Plataforma de Gamificação com React + Supabase"

3. **Configure o repositório**
   - Conecte sua conta GitHub
   - Selecione: `LuciSantiago/gamification-platform`
   - Branch: `main`
   - Dockerfile: `/Dockerfile`

4. **Configure variáveis de ambiente**
   - Adicione as variáveis do `.env.example`
   - Salve as configurações

5. **Configure o domínio**
   - Adicione seu domínio customizado
   - Ative SSL/HTTPS automático

6. **Deploy**
   - Clique em "Deploy"
   - Acompanhe os logs de build

### Opção B: Via Docker Compose (Manual)

```yaml
version: '3.8'

services:
  gamification-app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      VITE_SUPABASE_URL: ${VITE_SUPABASE_URL}
      VITE_SUPABASE_ANON_KEY: ${VITE_SUPABASE_ANON_KEY}
      VITE_API_URL: ${VITE_API_URL}
      VITE_ENV: production
    restart: always
    networks:
      - gamification-network

networks:
  gamification-network:
    driver: bridge
```

**Para rodar:**
```bash
docker-compose up -d
```

## 🔗 Passo 3: Configurar Supabase

### 1. Criar Tabelas

```sql
-- Tabela de Usuários
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255) UNIQUE,
  level INTEGER DEFAULT 1,
  experience INTEGER DEFAULT 0,
  total_points INTEGER DEFAULT 0,
  profile_picture_url VARCHAR(500),
  bio TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Quests
CREATE TABLE quests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50),
  difficulty VARCHAR(50),
  reward_points INTEGER,
  reward_experience INTEGER,
  duration_days INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Badges
CREATE TABLE badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de User Progress
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  quest_id UUID REFERENCES quests(id) ON DELETE SET NULL,
  status VARCHAR(50),
  progress_percentage INTEGER DEFAULT 0,
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de User Badges
CREATE TABLE user_badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  badge_id UUID NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
  earned_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

-- Tabela de Challenges (Desafios Semanais)
CREATE TABLE challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  reward_points INTEGER,
  week_number INTEGER,
  year INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Roadmap Regions
CREATE TABLE roadmap_regions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon_url VARCHAR(500),
  position_order INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Criar índices para performance
CREATE INDEX idx_user_id ON user_progress(user_id);
CREATE INDEX idx_quest_id ON user_progress(quest_id);
CREATE INDEX idx_user_badges_user_id ON user_badges(user_id);
CREATE INDEX idx_user_email ON users(email);
```

### 2. Configurar Autenticação

1. Vá para **Authentication** > **Providers**
2. Ative os provedores desejados:
   - Email/Password
   - Google OAuth
   - GitHub OAuth

### 3. Configurar Políticas de Row Level Security (RLS)

```sql
-- Habilitar RLS na tabela users
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Criar política para usuários lerem seus próprios dados
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  USING (auth.uid() = auth_id);

-- Criar política para usuários atualizarem seus próprios dados
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  USING (auth.uid() = auth_id);

-- Política para leitura pública de quests
ALTER TABLE quests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access on quests"
  ON quests
  FOR SELECT
  USING (true);

-- Habilitar RLS na tabela user_progress
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own progress"
  ON user_progress
  FOR SELECT
  USING (auth.uid() IN (
    SELECT auth_id FROM users WHERE id = user_id
  ));
```

### 4. Configurar Storage

1. Vá para **Storage**
2. Crie dois buckets:

**Bucket 1: badges**
- Policies:
  ```
  SELECT: Public (leitura pública)
  INSERT: Autenticado (somente admin)
  ```

**Bucket 2: avatars**
- Policies:
  ```
  SELECT: Public
  INSERT: Autenticado (usuário pode fazer upload do próprio avatar)
  ```

## 🌐 Passo 4: Configurar SSL/HTTPS

### Via Dokploy:
1. Vá para **Settings** > **Domain**
2. Adicione seu domínio customizado
3. Ative "Auto SSL Certificate" (Let's Encrypt)
4. Aponte seu DNS para o IP da VPS

## 🔄 Passo 5: Configurar Auto-Deploy

### No Dokploy:
1. Vá para **Project Settings**
2. Em **Auto Deploy**:
   - Ative "Auto Deploy on Push"
   - Selecione branch: `main`
3. Salve

Agora, sempre que você fazer push na branch `main`, o Dokploy irá:
1. Clonar o repositório
2. Instalar dependências
3. Fazer build do Docker
4. Deploy automaticamente
5. Verificar saúde da aplicação

## 🛠️ Passo 6: Configurar CI/CD (GitHub Actions)

### Criar arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Dokploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Deploy to Dokploy
        run: |
          curl -X POST \
            -H "Authorization: Bearer ${{ secrets.DOKPLOY_TOKEN }}" \
            -H "Content-Type: application/json" \
            -d '{"branch":"main"}' \
            https://seu-vps-ip/api/deploy/gamification-platform

      - name: Health Check
        run: |
          curl -f https://seu-dominio.com/health || exit 1
```

## 📊 Monitoramento

### Verificar Status da Aplicação

```bash
# Via SSH na VPS
ssh root@seu-vps-ip

# Verificar containers
docker ps

# Ver logs
docker logs -f container-id

# Verificar espaço em disco
df -h

# Verificar memória
free -h
```

### Configurar Alertas

1. No Dokploy, vá para **Monitoring**
2. Configure alertas para:
   - CPU > 80%
   - Memória > 80%
   - Disco > 90%
   - Falha de deploy

## 🔒 Segurança

### 1. Backup Automático do Supabase
```sql
-- Ativar backup no Supabase Dashboard
-- Settings > Backup > Enable Daily Backups
```

### 2. Variáveis de Ambiente Seguras
- Nunca commite `.env.local`
- Use `.gitignore` (já configurado)
- Configure secrets no Dokploy

### 3. Certificados SSL
- Renovação automática via Let's Encrypt
- Válido por 90 dias
- Dokploy renova automaticamente

### 4. Atualizações de Segurança
```bash
# Na VPS, execute regularmente:
sudo apt update && sudo apt upgrade -y
docker pull node:18-alpine
```

## 🚨 Troubleshooting

### Problema: "Connection refused"
```bash
# Verificar se porta 3000 está aberta
sudo ufw allow 3000

# Verificar firewall
sudo ufw status
```

### Problema: "Build failed"
```bash
# Verificar logs do Docker
docker logs container-id

# Limpar cache do build
docker system prune -a
```

### Problema: "Variáveis de ambiente não funcionam"
```bash
# Verificar no Dokploy UI
# Settings > Environment Variables

# Fazer rebuild
docker-compose up --build
```

## 📈 Performance

### Otimizações Recomendadas

1. **CDN para Assets Estáticos**
   - Configurar Cloudflare
   - Cachear imagens e CSS

2. **Compressão**
   - Nginx/Apache com gzip
   - Minificação de assets

3. **Caching**
   - Redis para sessões
   - Browser caching headers

## 📞 Suporte

- Documentação Dokploy: https://dokploy.com
- Documentação Supabase: https://supabase.com/docs
- Issues: https://github.com/LuciSantiago/gamification-platform/issues

---

**Última atualização**: Outubro 2025
**Versão**: 1.0.0
