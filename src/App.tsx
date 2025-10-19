import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  Map,
  TrendingUp,
  User,
  Flame,
  Zap,
  Clock,
  Award,
  Target,
  Trophy,
  Star,
  Medal,
  Crown,
  CheckCircle2,
  Users,
  Settings,
} from "lucide-react";
import { QuestCard, QuestType } from "./components/QuestCard";
import { QuestCardEnhanced, DifficultyLevel, QuestStatus } from "./components/QuestCardEnhanced";
import { StatsCard } from "./components/StatsCard";
import { ProgressBar } from "./components/ProgressBar";
import { BadgeDisplay } from "./components/BadgeDisplay";
import { RoadmapNode } from "./components/RoadmapNode";
import { RoadmapHorizontal } from "./components/RoadmapHorizontal";
import { RoadmapVisualMVP, RoadmapRegion } from "./components/RoadmapVisualMVP";
import { LevelUpModal } from "./components/LevelUpModal";
import { Onboarding, OnboardingData } from "./components/Onboarding";
import { WeeklyChallengeCard } from "./components/WeeklyChallengeCard";
import { QuestDetailModal } from "./components/QuestDetailModal";
import { BadgeDetailModal } from "./components/BadgeDetailModal";
import { RoadmapRegionModal } from "./components/RoadmapRegionModal";
import { ProgressDetailsModal } from "./components/ProgressDetailsModal";
import { CompletedQuestsSection } from "./components/CompletedQuestsSection";
import { ContextualNotification, NotificationType } from "./components/ContextualNotification";
import { HeroSection } from "./components/HeroSection";
import { AdminPanel, Quest as AdminQuest, Badge as AdminBadge, RoadmapRegion as AdminRegion, Challenge as AdminChallenge, UserProfile } from "./components/AdminPanel";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { toast } from "sonner@2.0.3";
import { Toaster } from "./components/ui/sonner";

type View = "home" | "roadmap" | "stats" | "profile" | "challenges" | "admin";

interface Quest {
  id: string;
  title: string;
  type: QuestType;
  duration: number;
  xp: number;
  completed: boolean;
  description?: string;
  category?: string;
  difficulty?: "easy" | "medium" | "hard";
  region?: string;
}

function App() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useLocalStorage('easy-goal-onboarding', false);
  const [showOnboarding, setShowOnboarding] = useState(!hasSeenOnboarding);
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);
  const [showQuestDetailModal, setShowQuestDetailModal] = useState(false);
  const [selectedQuestId, setSelectedQuestId] = useState<string | null>(null);
  const [showBadgeDetailModal, setShowBadgeDetailModal] = useState(false);
  const [selectedBadgeId, setSelectedBadgeId] = useState<string | null>(null);
  const [showRegionDetailModal, setShowRegionDetailModal] = useState(false);
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [showProgressDetailsModal, setShowProgressDetailsModal] = useState(false);
  const [activeNotification, setActiveNotification] = useState<NotificationType | null>(null);
  const [currentView, setCurrentView] = useState<View>("home");
  const [userLevel, setUserLevel] = useLocalStorage('easy-goal-level', 4);
  const [currentXP, setCurrentXP] = useLocalStorage('easy-goal-current-xp', 350);
  const [nextLevelXP] = useState(500);
  const [streak, setStreak] = useLocalStorage('easy-goal-streak', 7);
  const [totalXP, setTotalXP] = useLocalStorage('easy-goal-total-xp', 1450);
  const [completedQuests, setCompletedQuests] = useLocalStorage('easy-goal-completed-quests', 42);
  
  const [quests, setQuests] = useLocalStorage<Quest[]>('easy-goal-quests', [
    {
      id: "1",
      title: "Assista: Fundamentos de UX Research",
      type: "video",
      duration: 10,
      xp: 35,
      completed: false,
    },
    {
      id: "2",
      title: "Leia: Laws of UX - Lei de Hick",
      type: "reading",
      duration: 5,
      xp: 20,
      completed: false,
    },
    {
      id: "3",
      title: "Pratique: Crie um user flow simples",
      type: "practice",
      duration: 20,
      xp: 50,
      completed: false,
    },
    {
      id: "4",
      title: "Ouça: UX Podcast - Entrevistas com Usuários",
      type: "audio",
      duration: 15,
      xp: 30,
      completed: false,
    },
    {
      id: "5",
      title: "Compartilhe: Seu Progresso na Comunidade",
      type: "social",
      duration: 5,
      xp: 15,
      completed: false,
    },
  ]);

  // Mock de quests concluídas hoje (simulando atividade)
  const [completedQuestsToday, setCompletedQuestsToday] = useLocalStorage<Array<{
    id: string;
    title: string;
    xp: number;
    completedAt: string;
    type: QuestType;
  }>>('easy-goal-completed-today', []);

  // Admin data - stored in localStorage
  const [badges, setBadges] = useLocalStorage<AdminBadge[]>('easy-goal-badges', [
    {
      id: "1",
      name: "First Steps",
      description: "Complete seu primeiro dia",
      icon: "target",
      unlocked: true,
      rarity: "common",
    },
    {
      id: "2",
      name: "Week Warrior",
      description: "Streak de 7 dias",
      icon: "flame",
      unlocked: true,
      rarity: "rare",
    },
    {
      id: "3",
      name: "Quick Learner",
      description: "50 atividades de leitura",
      icon: "star",
      unlocked: true,
      rarity: "rare",
    },
    {
      id: "4",
      name: "Audio Buff",
      description: "50 atividades de áudio",
      icon: "award",
      unlocked: false,
      rarity: "epic",
    },
    {
      id: "5",
      name: "Centurion",
      description: "Alcance nível 10",
      icon: "medal",
      unlocked: false,
      rarity: "epic",
    },
    {
      id: "6",
      name: "Unstoppable",
      description: "Streak de 30 dias",
      icon: "crown",
      unlocked: false,
      rarity: "legendary",
    },
  ]);

  const [roadmapRegions, setRoadmapRegions] = useLocalStorage<AdminRegion[]>('easy-goal-regions', [
    {
      id: "1",
      title: "Fundamentos de UX/UI",
      description: "Princípios essenciais de design",
      progress: 100,
      status: "completed" as const,
      illustration: "🎨",
      totalQuests: 12,
      completedQuests: 12,
    },
    {
      id: "2",
      title: "Pesquisa de Usuários",
      description: "Métodos de pesquisa e análise",
      progress: 60,
      status: "in-progress" as const,
      illustration: "🔍",
      totalQuests: 15,
      completedQuests: 9,
    },
    {
      id: "3",
      title: "Design de Interface",
      description: "Criação de interfaces eficazes",
      progress: 0,
      status: "locked" as const,
      illustration: "💎",
      totalQuests: 18,
      completedQuests: 0,
    },
    {
      id: "4",
      title: "Portfolio & Carreira",
      description: "Construa seu futuro profissional",
      progress: 0,
      status: "locked" as const,
      illustration: "🚀",
      totalQuests: 10,
      completedQuests: 0,
    },
  ]);

  const [challenges, setChallenges] = useLocalStorage<AdminChallenge[]>('easy-goal-challenges', [
    {
      id: "1",
      title: "Audio Master",
      description: "Complete 10 atividades de áudio esta semana",
      progress: 7,
      total: 10,
      reward: 500,
      daysRemaining: 3,
      isActive: true,
      type: "weekly",
    },
    {
      id: "2",
      title: "Early Bird",
      description: "Complete atividades antes das 7h (5 vezes)",
      progress: 0,
      total: 5,
      reward: 300,
      daysRemaining: 7,
      isActive: false,
      type: "weekly",
    },
    {
      id: "3",
      title: "Perfectionist",
      description: "Tenha 7 dias perfeitos seguidos",
      progress: 0,
      total: 7,
      reward: 1000,
      daysRemaining: 7,
      isActive: false,
      type: "weekly",
    },
  ]);

  const [userProfile, setUserProfile] = useLocalStorage<UserProfile>('easy-goal-profile', {
    name: "Ana",
    email: "ana@exemplo.com",
    avatar: "👩",
    goal: "Transição de carreira para UX Designer",
    interests: ["UX Research", "UI Design", "Figma"],
    dailyGoalMinutes: 30,
  });

  const roadmapNodes = [
    { title: "Fundamentos de UX/UI", progress: 100, status: "completed" as const },
    { title: "Pesquisa de Usuários", progress: 60, status: "current" as const },
    { title: "Design de Interface", progress: 0, status: "locked" as const },
    { title: "Portfolio & Carreira", progress: 0, status: "locked" as const },
  ];

  const handleCompleteQuest = (questId: string) => {
    const quest = quests.find((q) => q.id === questId);
    if (!quest || quest.completed) return;

    // Update quest status
    setQuests((prev) =>
      prev.map((q) => (q.id === questId ? { ...q, completed: true } : q))
    );

    // Add to completed today
    setCompletedQuestsToday((prev) => [
      ...prev,
      {
        id: quest.id,
        title: quest.title,
        xp: quest.xp,
        completedAt: new Date().toISOString(),
        type: quest.type,
      },
    ]);

    // Update XP and level
    const newXP = currentXP + quest.xp;
    const newTotalXP = totalXP + quest.xp;
    
    // Feedback visual com toast
    toast.success(`Quest concluída! +${quest.xp} XP ganho 🎉`, {
      duration: 3000,
      position: "top-center",
    });

    if (newXP >= nextLevelXP) {
      setUserLevel((prev) => prev + 1);
      setCurrentXP(newXP - nextLevelXP);
      setTotalXP(newTotalXP);
      // Show level up modal
      setTimeout(() => setShowLevelUpModal(true), 500);
    } else {
      setCurrentXP(newXP);
      setTotalXP(newTotalXP);

      // Check if close to level up and show notification
      const xpNeeded = nextLevelXP - newXP;
      if (xpNeeded <= 100) {
        setTimeout(() => setActiveNotification("level-up-soon"), 1000);
      }
    }

    setCompletedQuests((prev) => prev + 1);

    // Update streak logic (simplified - in real app would check dates)
    setStreak((prev) => prev + 1);
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    console.log("Onboarding completed with data:", data);
    setHasSeenOnboarding(true);
    setShowOnboarding(false);
    // Aqui você poderia usar os dados do onboarding para personalizar a experiência
  };

  // Reset progress (for testing)
  const handleResetProgress = () => {
    if (window.confirm("Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  // Quest Detail Modal Handlers
  const handleViewQuestDetails = (questId: string) => {
    setSelectedQuestId(questId);
    setShowQuestDetailModal(true);
  };

  const handleStartQuest = (questId: string) => {
    console.log("Starting quest:", questId);
    // Future: Navigate to quest content or start timer
  };

  // Badge Detail Modal Handlers
  const handleViewBadgeDetails = (badgeId: string) => {
    setSelectedBadgeId(badgeId);
    setShowBadgeDetailModal(true);
  };

  // Region Detail Modal Handlers
  const handleViewRegionDetails = (regionId: string) => {
    setSelectedRegionId(regionId);
    setShowRegionDetailModal(true);
  };

  const handleStartRegion = (regionId: string) => {
    console.log("Starting region:", regionId);
    setCurrentView("home");
    // Future: Filter quests by region
  };

  const handleNavigateToQuestFromRegion = (questId: string) => {
    setSelectedQuestId(questId);
    setShowQuestDetailModal(true);
    // Keep region modal open in background
  };

  // Calculate stats for Hero Section
  const completedCount = quests.filter((q) => q.completed).length;
  const totalCount = quests.length;
  const completedXP = completedQuestsToday.reduce((sum, q) => sum + q.xp, 0);
  const pendingXP = quests.filter((q) => !q.completed).reduce((sum, q) => sum + q.xp, 0);
  const lockedCount = 0; // Simplified - no locked quests in current implementation

  // Get selected data for modals
  const selectedQuest = quests.find((q) => q.id === selectedQuestId);
  const selectedBadge = badges.find((b) => b.id === selectedBadgeId);
  const selectedRegion = roadmapRegions.find((r) => r.id === selectedRegionId);

  // Progress Details Data for Modal
  const progressStats = {
    today: {
      completed: completedCount,
      total: totalCount,
      xpGained: completedXP,
      timeSpent: completedQuestsToday.reduce((sum, q) => {
        const quest = quests.find(qi => qi.id === q.id);
        return sum + (quest?.duration || 0);
      }, 0),
      completionRate: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0,
    },
    weekly: {
      days: [
        { day: "Segunda", quests: 3, xp: 105 },
        { day: "Terça", quests: 5, xp: 180 },
        { day: "Quarta", quests: 4, xp: 140 },
        { day: "Quinta", quests: 2, xp: 70 },
        { day: "Sexta", quests: 0, xp: 0 },
        { day: "Sábado", quests: 0, xp: 0 },
        { day: "Domingo", quests: 0, xp: 0 },
      ],
    },
    streak: {
      current: streak,
      record: 12,
    },
    milestones: [
      {
        id: "1",
        title: `${nextLevelXP - currentXP} XP → Nível ${userLevel + 1}`,
        progress: currentXP,
        total: nextLevelXP,
        description: "Faltam 3-4 quests",
      },
      {
        id: "2",
        title: "10 dias streak → Badge 'Unstoppable'",
        progress: streak,
        total: 10,
        description: `Faltam ${Math.max(0, 10 - streak)} dias`,
      },
      {
        id: "3",
        title: "50 quests totais → Badge 'Centurion'",
        progress: completedQuests,
        total: 50,
        description: `Faltam ${Math.max(0, 50 - completedQuests)} quests`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--gray-50)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-[var(--gray-100)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ padding: 'var(--space-4) var(--space-6)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] rounded-xl flex items-center justify-center text-white"
                style={{ width: '40px', height: '40px' }}
              >
                <Target size={24} />
              </div>
              <h1
                className="text-[var(--gray-900)] hidden sm:block"
                style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 700 }}
              >
                Easy-Goal
              </h1>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="badge badge--streak animate-streak-pulse" style={{ fontSize: '12px', padding: '6px 12px' }}>
                <Flame size={16} className="text-[var(--error-600)]" />
                <span>{streak} dias</span>
              </div>

              <div
                className="bg-[var(--primary-50)] rounded-full px-4 py-2 border-2 border-[var(--primary-200)]"
                style={{ fontSize: '14px' }}
              >
                <span className="font-semibold text-[var(--primary-700)]">Nível {userLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <AnimatePresence mode="wait">
          {currentView === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Contextual Notifications */}
              {activeNotification && (
                <div className="mb-6">
                  <ContextualNotification
                    type={activeNotification}
                    isVisible={true}
                    onDismiss={() => setActiveNotification(null)}
                    onAction={() => {
                      if (activeNotification === "level-up-soon") {
                        // Scroll to quests section
                        document.getElementById("daily-quests")?.scrollIntoView({ behavior: "smooth" });
                      }
                      setActiveNotification(null);
                    }}
                    data={{
                      streakDays: streak,
                      xpNeeded: nextLevelXP - currentXP,
                      questsNeeded: "3-4 quests",
                    }}
                  />
                </div>
              )}

              {/* Hero Section - NOVO */}
              <HeroSection
                userName="Ana"
                completedQuests={completedCount}
                totalQuests={totalCount}
                completedXP={completedXP}
                pendingXP={pendingXP}
                lockedQuests={lockedCount}
                streakDays={streak}
                currentXP={currentXP}
                nextLevelXP={nextLevelXP}
                currentLevel={userLevel}
                onViewDetails={() => setShowProgressDetailsModal(true)}
                hasNotifications={false}
              />

              {/* Daily Quests */}
              <div id="daily-quests" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[var(--gray-900)]" style={{ fontSize: '20px', fontWeight: 600 }}>
                    Suas Missões Diárias
                  </h3>
                  {completedCount === totalCount && totalCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-gradient-to-r from-[var(--success-500)] to-[var(--success-600)] text-white px-4 py-2 rounded-full"
                      style={{ fontSize: '14px', fontWeight: 600 }}
                    >
                      🎉 Perfect Day!
                    </motion.div>
                  )}
                </div>

                <div className="grid gap-4">
                  {quests.filter(q => !q.completed).map((quest, index) => (
                    <motion.div
                      key={quest.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <QuestCard 
                        {...quest} 
                        onComplete={handleCompleteQuest}
                        onViewDetails={handleViewQuestDetails}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Completed Quests Today - NOVO */}
              {completedQuestsToday.length > 0 && (
                <CompletedQuestsSection
                  quests={completedQuestsToday}
                  totalXPToday={completedXP}
                  onViewHistory={() => setCurrentView("stats")}
                />
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard icon={Zap} label="Total XP" value={totalXP} color="secondary" delay={0.5} />
                <StatsCard icon={Trophy} label="Nível" value={userLevel} color="primary" delay={0.55} />
                <StatsCard icon={CheckCircle2} label="Concluídas" value={completedQuests} color="success" delay={0.6} />
                <StatsCard icon={Flame} label="Streak Atual" value={`${streak} dias`} color="warning" delay={0.65} />
              </div>
            </motion.div>
          )}

          {currentView === "roadmap" && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[var(--gray-900)] mb-2" style={{ fontSize: '28px', lineHeight: '36px', fontWeight: 700 }}>
                  Sua Jornada de UX Designer
                </h2>
                <p className="text-[var(--gray-600)]" style={{ fontSize: '16px', lineHeight: '24px' }}>
                  Acompanhe seu progresso através das regiões de aprendizado
                </p>
              </div>

              {/* Roadmap Visual MVP - NOVO */}
              <RoadmapVisualMVP 
                regions={roadmapRegions}
                onRegionClick={handleViewRegionDetails}
              />

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-[var(--primary-50)] to-[var(--primary-100)] rounded-[24px] border-2 border-[var(--primary-200)]"
                style={{ padding: 'var(--space-8)' }}
              >
                <div className="text-center max-w-md mx-auto">
                  <div className="mb-4">
                    <Map size={48} className="text-[var(--primary-600)] mx-auto" />
                  </div>
                  <h3 className="text-[var(--gray-900)] mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                    Continue sua jornada!
                  </h3>
                  <p className="text-[var(--gray-700)] mb-6" style={{ fontSize: '16px' }}>
                    Complete suas missões diárias para desbloquear novas regiões e conquistas
                  </p>
                  <button
                    onClick={() => setCurrentView("home")}
                    className="btn-primary"
                  >
                    Ver Missões Diárias
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {currentView === "stats" && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[var(--gray-900)] mb-2" style={{ fontSize: '28px', lineHeight: '36px', fontWeight: 700 }}>
                  Estatísticas
                </h2>
                <p className="text-[var(--gray-600)]" style={{ fontSize: '16px', lineHeight: '24px' }}>
                  Acompanhe sua evolução e conquistas
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard icon={Zap} label="Total XP Ganho" value={totalXP} color="secondary" />
                <StatsCard icon={Trophy} label="Nível Atual" value={userLevel} color="primary" delay={0.05} />
                <StatsCard icon={Flame} label="Streak Atual" value={`${streak} dias`} color="warning" delay={0.1} />
                <StatsCard icon={CheckCircle2} label="Quests Concluídas" value={completedQuests} color="success" delay={0.15} />
              </div>

              {/* Badges Section */}
              <div className="space-y-4">
                <h3 className="text-[var(--gray-900)]" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Suas Conquistas
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {badges.map((badge, index) => (
                    <BadgeDisplay 
                      key={badge.id} 
                      badge={badge} 
                      index={index}
                      onClick={() => handleViewBadgeDetails(badge.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Weekly Activity Heatmap Placeholder */}
              <div className="bg-white rounded-[24px] border-2 border-[var(--gray-100)]" style={{ padding: 'var(--space-8)' }}>
                <h3 className="text-[var(--gray-900)] mb-6" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Atividade Semanal
                </h3>

                <div className="grid grid-cols-7 gap-2">
                  {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day, index) => (
                    <div key={day} className="text-center">
                      <p className="text-[var(--gray-600)] mb-2" style={{ fontSize: '12px' }}>
                        {day}
                      </p>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className={`rounded-lg mx-auto ${
                          index < 7
                            ? 'bg-[var(--success-500)]'
                            : 'bg-[var(--gray-200)]'
                        }`}
                        style={{ width: '100%', paddingBottom: '100%', maxWidth: '60px' }}
                      />
                      <p className="text-[var(--gray-700)] mt-2" style={{ fontSize: '14px', fontWeight: 600 }}>
                        {index < 7 ? '3' : '0'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {currentView === "challenges" && (
            <motion.div
              key="challenges"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[var(--gray-900)] mb-2" style={{ fontSize: '28px', lineHeight: '36px', fontWeight: 700 }}>
                  Desafios Semanais
                </h2>
                <p className="text-[var(--gray-600)]" style={{ fontSize: '16px', lineHeight: '24px' }}>
                  Complete desafios especiais e ganhe recompensas exclusivas
                </p>
              </div>

              {/* Active Challenges */}
              {challenges.filter(c => c.isActive).length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-[var(--gray-900)]" style={{ fontSize: '20px', fontWeight: 600 }}>
                    {challenges.filter(c => c.isActive).length === 1 ? 'Desafio Ativo' : 'Desafios Ativos'}
                  </h3>
                  <div className="grid gap-4">
                    {challenges.filter(c => c.isActive).map((challenge) => (
                      <WeeklyChallengeCard
                        key={challenge.id}
                        title={challenge.title}
                        description={challenge.description}
                        progress={challenge.progress}
                        total={challenge.total}
                        reward={challenge.reward}
                        daysRemaining={challenge.daysRemaining}
                        isActive={challenge.isActive}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Upcoming Challenges */}
              {challenges.filter(c => !c.isActive).length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-[var(--gray-900)]" style={{ fontSize: '20px', fontWeight: 600 }}>
                    Próximos Desafios
                  </h3>
                  <div className="grid gap-4">
                    {challenges.filter(c => !c.isActive).map((challenge) => (
                      <WeeklyChallengeCard
                        key={challenge.id}
                        title={challenge.title}
                        description={challenge.description}
                        progress={challenge.progress}
                        total={challenge.total}
                        reward={challenge.reward}
                        daysRemaining={challenge.daysRemaining}
                        isActive={challenge.isActive}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* No Challenges Message */}
              {challenges.length === 0 && (
                <div className="bg-[var(--gray-50)] rounded-[24px] border-2 border-dashed border-[var(--gray-300)] text-center" style={{ padding: 'var(--space-12)' }}>
                  <Trophy size={48} className="text-[var(--gray-400)] mx-auto mb-4" />
                  <h3 className="text-[var(--gray-900)] mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                    Nenhum desafio disponível
                  </h3>
                  <p className="text-[var(--gray-600)] mb-6" style={{ fontSize: '16px' }}>
                    Crie novos desafios na área de Administração
                  </p>
                  <button
                    onClick={() => setCurrentView("admin")}
                    className="btn-primary"
                  >
                    Ir para Admin
                  </button>
                </div>
              )}

              {/* Info Card */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-[var(--primary-50)] to-[var(--primary-100)] rounded-[24px] border-2 border-[var(--primary-200)]"
                style={{ padding: 'var(--space-8)' }}
              >
                <div className="text-center max-w-md mx-auto">
                  <div className="mb-4">
                    <Trophy size={48} className="text-[var(--primary-600)] mx-auto" />
                  </div>
                  <h3 className="text-[var(--gray-900)] mb-2" style={{ fontSize: '20px', fontWeight: 600 }}>
                    Novos desafios toda segunda!
                  </h3>
                  <p className="text-[var(--gray-700)]" style={{ fontSize: '16px' }}>
                    Fique de olho para não perder badges exclusivos e XP bônus
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {currentView === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] rounded-full mx-auto mb-4 flex items-center justify-center text-white"
                  style={{ width: '96px', height: '96px', fontSize: '40px' }}
                >
                  👤
                </motion.div>

                <h2 className="text-[var(--gray-900)] mb-2" style={{ fontSize: '28px', lineHeight: '36px', fontWeight: 700 }}>
                  Ana Silva
                </h2>
                <p className="text-[var(--gray-600)] mb-4" style={{ fontSize: '16px', lineHeight: '24px' }}>
                  Em transição para UX Designer
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="badge badge--level" style={{ fontSize: '12px' }}>
                    Nível {userLevel}
                  </div>
                  <div className="badge badge--xp" style={{ fontSize: '12px' }}>
                    {totalXP} XP Total
                  </div>
                </div>
              </div>

              {/* Profile Stats */}
              <div className="grid grid-cols-2 gap-4">
                <StatsCard icon={Target} label="Taxa de Conclusão" value="87%" color="success" />
                <StatsCard icon={Clock} label="Tempo Total" value="48h" color="primary" delay={0.05} />
                <StatsCard icon={Award} label="Badges Desbloqueados" value={`${badges.filter(b => b.unlocked).length}/${badges.length}`} color="secondary" delay={0.1} />
                <StatsCard icon={Star} label="Streak Recorde" value="14 dias" color="warning" delay={0.15} />
              </div>

              {/* Bio Section */}
              <div className="bg-white rounded-[24px] border-2 border-[var(--gray-100)]" style={{ padding: 'var(--space-8)' }}>
                <h3 className="text-[var(--gray-900)] mb-4" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Sobre Mim
                </h3>
                <p className="text-[var(--gray-700)]" style={{ fontSize: '16px', lineHeight: '24px' }}>
                  Analista de Marketing buscando transição para UX Design. Apaixonada por criar experiências que fazem diferença na vida das pessoas. Dedicando 2h por dia para alcançar meu objetivo de conseguir meu primeiro job em UX em 12 meses!
                </p>
              </div>

              {/* Settings Placeholder */}
              <div className="bg-white rounded-[24px] border-2 border-[var(--gray-100)]" style={{ padding: 'var(--space-8)' }}>
                <h3 className="text-[var(--gray-900)] mb-6" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Configurações
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-[var(--gray-100)]">
                    <span className="text-[var(--gray-700)]" style={{ fontSize: '16px' }}>
                      Notificações
                    </span>
                    <div className="bg-[var(--primary-500)] rounded-full p-0.5 w-12">
                      <div className="bg-white rounded-full w-5 h-5 ml-auto" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-[var(--gray-100)]">
                    <span className="text-[var(--gray-700)]" style={{ fontSize: '16px' }}>
                      Modo Escuro
                    </span>
                    <div className="bg-[var(--gray-200)] rounded-full p-0.5 w-12">
                      <div className="bg-white rounded-full w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="text-[var(--gray-700)]" style={{ fontSize: '16px' }}>
                      Sons
                    </span>
                    <div className="bg-[var(--primary-500)] rounded-full p-0.5 w-12">
                      <div className="bg-white rounded-full w-5 h-5 ml-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === "admin" && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AdminPanel
                quests={quests as AdminQuest[]}
                badges={badges}
                regions={roadmapRegions}
                challenges={challenges}
                userProfile={userProfile}
                onUpdateQuests={(newQuests) => setQuests(newQuests as Quest[])}
                onUpdateBadges={setBadges}
                onUpdateRegions={setRoadmapRegions}
                onUpdateChallenges={setChallenges}
                onUpdateUserProfile={setUserProfile}
                onResetAll={handleResetProgress}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[var(--gray-100)] z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-6 gap-1" style={{ padding: 'var(--space-3) 0' }}>
            <button
              onClick={() => setCurrentView("home")}
              className={`flex flex-col items-center gap-1 py-2 px-2 rounded-lg transition-all duration-200 ${
                currentView === "home"
                  ? 'bg-[var(--primary-50)] text-[var(--primary-600)]'
                  : 'text-[var(--gray-600)] hover:bg-[var(--gray-50)]'
              }`}
            >
              <Home size={20} />
              <span style={{ fontSize: '11px', fontWeight: 600 }}>Início</span>
            </button>

            <button
              onClick={() => setCurrentView("roadmap")}
              className={`flex flex-col items-center gap-1 py-2 px-2 rounded-lg transition-all duration-200 ${
                currentView === "roadmap"
                  ? 'bg-[var(--primary-50)] text-[var(--primary-600)]'
                  : 'text-[var(--gray-600)] hover:bg-[var(--gray-50)]'
              }`}
            >
              <Map size={20} />
              <span style={{ fontSize: '11px', fontWeight: 600 }}>Jornada</span>
            </button>

            <button
              onClick={() => setCurrentView("challenges")}
              className={`flex flex-col items-center gap-1 py-2 px-2 rounded-lg transition-all duration-200 ${
                currentView === "challenges"
                  ? 'bg-[var(--primary-50)] text-[var(--primary-600)]'
                  : 'text-[var(--gray-600)] hover:bg-[var(--gray-50)]'
              }`}
            >
              <Trophy size={20} />
              <span style={{ fontSize: '11px', fontWeight: 600 }}>Desafios</span>
            </button>

            <button
              onClick={() => setCurrentView("stats")}
              className={`flex flex-col items-center gap-1 py-2 px-2 rounded-lg transition-all duration-200 ${
                currentView === "stats"
                  ? 'bg-[var(--primary-50)] text-[var(--primary-600)]'
                  : 'text-[var(--gray-600)] hover:bg-[var(--gray-50)]'
              }`}
            >
              <TrendingUp size={20} />
              <span style={{ fontSize: '11px', fontWeight: 600 }}>Stats</span>
            </button>

            <button
              onClick={() => setCurrentView("profile")}
              className={`flex flex-col items-center gap-1 py-2 px-2 rounded-lg transition-all duration-200 ${
                currentView === "profile"
                  ? 'bg-[var(--primary-50)] text-[var(--primary-600)]'
                  : 'text-[var(--gray-600)] hover:bg-[var(--gray-50)]'
              }`}
            >
              <User size={20} />
              <span style={{ fontSize: '11px', fontWeight: 600 }}>Perfil</span>
            </button>

            <button
              onClick={() => setCurrentView("admin")}
              className={`flex flex-col items-center gap-1 py-2 px-2 rounded-lg transition-all duration-200 ${
                currentView === "admin"
                  ? 'bg-[var(--secondary-50)] text-[var(--secondary-600)]'
                  : 'text-[var(--gray-600)] hover:bg-[var(--gray-50)]'
              }`}
            >
              <Settings size={20} />
              <span style={{ fontSize: '11px', fontWeight: 600 }}>Admin</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom padding to prevent content from being hidden by nav */}
      <div style={{ height: '80px' }} />

      {/* Level Up Modal */}
      <LevelUpModal
        isOpen={showLevelUpModal}
        onClose={() => setShowLevelUpModal(false)}
        newLevel={userLevel}
        unlockedFeatures={[
          "Novos desafios semanais desbloqueados",
          "Acesso a comunidade avançada",
          "Estatísticas detalhadas disponíveis",
        ]}
      />

      {/* Onboarding */}
      {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}

      {/* Quest Detail Modal */}
      {showQuestDetailModal && selectedQuest && (
        <QuestDetailModal
          isOpen={showQuestDetailModal}
          onClose={() => setShowQuestDetailModal(false)}
          quest={{
            id: selectedQuest.id,
            title: selectedQuest.title,
            description: "Aprenda os conceitos fundamentais necessários para sua jornada em UX Design.",
            type: selectedQuest.type,
            duration: selectedQuest.duration,
            xp: selectedQuest.xp,
            difficulty: "medium",
            deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            objectives: [
              "Compreender os princípios básicos de UX Research",
              "Identificar métodos de pesquisa apropriados",
              "Analisar dados qualitativos e quantitativos",
              "Aplicar insights em projetos reais",
            ],
            resources: [
              { title: "Documentação Oficial", url: "#" },
              { title: "Exercícios Práticos", url: "#" },
            ],
            completed: selectedQuest.completed,
          }}
          onStart={handleStartQuest}
          onMarkComplete={handleCompleteQuest}
        />
      )}

      {/* Badge Detail Modal */}
      {showBadgeDetailModal && selectedBadge && (
        <BadgeDetailModal
          isOpen={showBadgeDetailModal}
          onClose={() => setShowBadgeDetailModal(false)}
          badge={{
            id: selectedBadge.id,
            name: selectedBadge.name,
            description: selectedBadge.description,
            icon: selectedBadge.icon as "target" | "flame" | "star" | "award" | "medal" | "crown",
            unlocked: selectedBadge.unlocked,
            unlockedAt: selectedBadge.unlocked ? new Date().toISOString() : undefined,
            rarity: "rare",
            requirements: "Complete 7 dias consecutivos de atividades",
            progress: selectedBadge.unlocked ? 100 : streak * 14,
            total: 100,
            reward: "+50 XP bonus",
          }}
        />
      )}

      {/* Roadmap Region Modal */}
      {showRegionDetailModal && selectedRegion && (
        <RoadmapRegionModal
          isOpen={showRegionDetailModal}
          onClose={() => setShowRegionDetailModal(false)}
          region={{
            id: selectedRegion.id,
            title: selectedRegion.title,
            description: selectedRegion.description,
            illustration: selectedRegion.illustration,
            progress: selectedRegion.progress,
            status: selectedRegion.status,
            totalQuests: selectedRegion.totalQuests,
            completedQuests: selectedRegion.completedQuests,
            quests: quests.slice(0, 3).map(q => ({
              id: q.id,
              title: q.title,
              type: q.type,
              duration: q.duration,
              xp: q.xp,
              completed: q.completed,
            })),
            reward: {
              xp: 500,
              badge: "Region Master",
            },
          }}
          onStartRegion={handleStartRegion}
          onNavigateToQuest={handleNavigateToQuestFromRegion}
        />
      )}

      {/* Progress Details Modal */}
      <ProgressDetailsModal
        isOpen={showProgressDetailsModal}
        onClose={() => setShowProgressDetailsModal(false)}
        stats={progressStats}
      />

      {/* Toast Notifications */}
      <Toaster position="top-center" />

      {/* Debug Buttons - Remove in production */}
      <div className="fixed bottom-24 right-4 flex flex-col gap-2 z-40">
        <button
          onClick={() => setShowOnboarding(true)}
          className="bg-[var(--gray-900)] text-white px-4 py-2 rounded-full text-sm hover:bg-[var(--gray-800)] transition-colors shadow-lg"
        >
          Ver Onboarding
        </button>
        <button
          onClick={handleResetProgress}
          className="bg-[var(--error-600)] text-white px-4 py-2 rounded-full text-sm hover:bg-[var(--error-700)] transition-colors shadow-lg"
        >
          Resetar Progresso
        </button>
        <button
          onClick={() => setActiveNotification("level-up-soon")}
          className="bg-[var(--secondary-600)] text-white px-4 py-2 rounded-full text-sm hover:bg-[var(--secondary-700)] transition-colors shadow-lg"
        >
          Test Notification
        </button>
      </div>
    </div>
  );
}

export default App;
