import { motion } from "motion/react";
import { Bell, ChevronDown, Flame, Trophy } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  userName: string;
  completedQuests: number;
  totalQuests: number;
  completedXP: number;
  pendingXP: number;
  lockedQuests: number;
  streakDays: number;
  currentXP: number;
  nextLevelXP: number;
  currentLevel: number;
  onViewDetails: () => void;
  hasNotifications?: boolean;
}

export function HeroSection({
  userName,
  completedQuests,
  totalQuests,
  completedXP,
  pendingXP,
  lockedQuests,
  streakDays,
  currentXP,
  nextLevelXP,
  currentLevel,
  onViewDetails,
  hasNotifications = false,
}: HeroSectionProps) {
  const totalXPAvailable = completedXP + pendingXP;
  const xpNeeded = nextLevelXP - currentXP;
  const progressPercentage = (currentXP / nextLevelXP) * 100;
  const pendingQuests = totalQuests - completedQuests - lockedQuests;

  // Mensagem motivacional baseada no streak
  const getStreakMessage = () => {
    if (streakDays === 0) return "Comece sua jornada hoje!";
    if (streakDays < 7) return "Continue assim!";
    if (streakDays === 7) return "Badge 'Week Warrior' desbloqueado! 🏆";
    if (streakDays >= 14) return "Incrível! Você está no fogo! 🔥";
    return "Continue assim para ganhar Badge 'Week Warrior'!";
  };

  // Calcular quests estimadas para próximo nível
  const getQuestsEstimate = () => {
    const avgXPPerQuest = 35; // Média estimada
    const questsNeeded = Math.ceil(xpNeeded / avgXPPerQuest);
    if (questsNeeded === 1) return "1 quest";
    if (questsNeeded <= 4) return `${questsNeeded} quests`;
    return "3-4 quests";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[var(--primary-50)] to-[var(--primary-100)] rounded-[24px] border-2 border-[var(--primary-200)]"
      style={{ padding: "24px" }}
    >
      {/* Header: Avatar + Saudação + Notificação */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] rounded-full flex items-center justify-center text-white"
            style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: 700 }}
          >
            {userName.charAt(0).toUpperCase()}
          </div>
          {/* Saudação */}
          <div>
            <h2 className="text-[var(--gray-900)]" style={{ fontSize: "20px", fontWeight: 700 }}>
              Bom dia, {userName}! 👋
            </h2>
            <p className="text-[var(--gray-600)]" style={{ fontSize: "14px" }}>
              {new Date().toLocaleDateString("pt-BR", { 
                weekday: "long", 
                day: "numeric", 
                month: "long" 
              })}
            </p>
          </div>
        </div>
        {/* Notificação */}
        <button className="relative p-2 hover:bg-white/60 rounded-lg transition-colors">
          <Bell size={24} className="text-[var(--gray-700)]" />
          {hasNotifications && (
            <span
              className="absolute top-1 right-1 bg-[var(--error-500)] rounded-full"
              style={{ width: "8px", height: "8px" }}
            />
          )}
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--primary-200)] mb-6" />

      {/* Título Seção */}
      <h3
        className="text-[var(--gray-900)] mb-4"
        style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "0.02em" }}
      >
        Suas Missões de Hoje
      </h3>

      {/* Progress Circle + Breakdown */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
        {/* Progress Circle */}
        <div className="relative flex-shrink-0">
          <svg width="120" height="120" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="var(--gray-200)"
              strokeWidth="12"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="var(--primary-600)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 54}`}
              strokeDashoffset={`${2 * Math.PI * 54 * (1 - completedQuests / totalQuests)}`}
              transform="rotate(-90 60 60)"
              initial={{ strokeDashoffset: 2 * Math.PI * 54 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 54 * (1 - completedQuests / totalQuests) }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          {/* Text in Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[var(--gray-900)]" style={{ fontSize: "36px", fontWeight: 700 }}>
              {completedQuests}/{totalQuests}
            </span>
            <span className="text-[var(--gray-600)]" style={{ fontSize: "12px", fontWeight: 500 }}>
              quests
            </span>
          </div>
        </div>

        {/* Breakdown de Status */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 600 }}>
              Total: <span className="text-[var(--secondary-600)]">{totalXPAvailable} XP</span> disponível hoje
            </p>
          </div>

          {/* Lista de Status */}
          <div className="space-y-2">
            {/* Concluídas */}
            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center rounded-md"
                style={{ width: "20px", height: "20px", background: "var(--success-100)" }}
              >
                <span className="text-[var(--success-600)]" style={{ fontSize: "14px" }}>
                  ✓
                </span>
              </div>
              <p className="text-[var(--gray-700)]" style={{ fontSize: "14px" }}>
                <span className="font-semibold text-[var(--success-600)]">{completedQuests} concluídas</span>
                {completedXP > 0 && (
                  <span className="text-[var(--gray-600)]"> (+{completedXP} XP)</span>
                )}
              </p>
            </div>

            {/* Pendentes */}
            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center rounded-md"
                style={{ width: "20px", height: "20px", background: "var(--warning-100)" }}
              >
                <span className="text-[var(--warning-600)]" style={{ fontSize: "14px" }}>
                  ⏱
                </span>
              </div>
              <p className="text-[var(--gray-700)]" style={{ fontSize: "14px" }}>
                <span className="font-semibold text-[var(--warning-600)]">{pendingQuests} pendentes</span>
                {pendingXP > 0 && (
                  <span className="text-[var(--gray-600)]"> (+{pendingXP} XP restante)</span>
                )}
              </p>
            </div>

            {/* Bloqueadas */}
            {lockedQuests > 0 && (
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center rounded-md"
                  style={{ width: "20px", height: "20px", background: "var(--gray-100)" }}
                >
                  <span className="text-[var(--gray-400)]" style={{ fontSize: "14px" }}>
                    🔒
                  </span>
                </div>
                <p className="text-[var(--gray-700)]" style={{ fontSize: "14px" }}>
                  <span className="font-semibold text-[var(--gray-500)]">{lockedQuests} bloqueadas</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Streak Counter */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="bg-gradient-to-r from-[var(--error-50)] to-[var(--error-100)] rounded-2xl border-2 border-[var(--error-300)] mb-6"
        style={{ padding: "16px" }}
      >
        <div className="flex items-center gap-3 mb-2">
          <Flame size={24} className="text-[var(--error-600)]" />
          <p className="text-[var(--error-700)]" style={{ fontSize: "14px", fontWeight: 600 }}>
            Streak: <span style={{ fontSize: "18px", fontWeight: 700 }}>{streakDays} dias consecutivos</span>
          </p>
        </div>
        <p className="text-[var(--error-700)]" style={{ fontSize: "13px" }}>
          {getStreakMessage()}
        </p>
      </motion.div>

      {/* XP Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 600 }}>
            XP para Próximo Nível
          </p>
          <p className="text-[var(--gray-600)]" style={{ fontSize: "13px" }}>
            {currentXP}/{nextLevelXP} XP ({Math.round(progressPercentage)}%)
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-[var(--gray-200)] rounded-full overflow-hidden" style={{ height: "12px" }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--secondary-500) 0%, var(--secondary-600) 100%)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        {/* Mensagem Motivacional */}
        <div className="flex items-center gap-2 mt-2">
          <Trophy size={16} className="text-[var(--primary-700)]" />
          <p className="text-[var(--primary-700)]" style={{ fontSize: "14px", fontWeight: 500 }}>
            Faltam apenas <span style={{ fontWeight: 700 }}>{xpNeeded} XP</span> para Nível {currentLevel + 1}! ≈ {getQuestsEstimate()}
          </p>
        </div>
      </div>

      {/* Link Expansível */}
      <button
        onClick={onViewDetails}
        className="w-full flex items-center justify-center gap-2 text-[var(--primary-600)] hover:text-[var(--primary-700)] hover:underline transition-all"
        style={{ fontSize: "14px", fontWeight: 600, padding: "8px" }}
      >
        Ver Detalhes Completos
        <ChevronDown size={16} />
      </button>
    </motion.div>
  );
}
