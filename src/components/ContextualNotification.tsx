import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, Trophy, Sparkles, X, ArrowRight } from "lucide-react";

export type NotificationType = "streak-risk" | "level-up-soon" | "achievement-unlocked";

interface ContextualNotificationProps {
  type: NotificationType;
  isVisible: boolean;
  onDismiss: () => void;
  onAction?: () => void;
  data?: {
    streakDays?: number;
    xpNeeded?: number;
    questsNeeded?: string;
    achievementName?: string;
    achievementIcon?: string;
  };
}

export function ContextualNotification({
  type,
  isVisible,
  onDismiss,
  onAction,
  data = {},
}: ContextualNotificationProps) {
  const getNotificationConfig = () => {
    switch (type) {
      case "streak-risk":
        return {
          icon: AlertTriangle,
          title: "⚠️ Seu streak está em risco!",
          message: `Complete pelo menos 1 quest hoje para manter seus ${data.streakDays || 0} dias. 🔥`,
          actionText: "Ver Quests Rápidas (5-10min)",
          bgGradient: "from-[var(--warning-50)] to-[var(--warning-100)]",
          borderColor: "var(--warning-300)",
          iconColor: "text-[var(--warning-600)]",
        };
      case "level-up-soon":
        return {
          icon: Trophy,
          title: "🏆 Você está quase lá!",
          message: `Faltam apenas ${data.xpNeeded || 0} XP para o próximo nível = ${
            data.questsNeeded || "1-2 quests"
          }`,
          actionText: "Ver Quests Disponíveis",
          bgGradient: "from-[var(--secondary-50)] via-[var(--secondary-100)] to-[var(--secondary-50)]",
          borderColor: "var(--secondary-300)",
          iconColor: "text-[var(--secondary-600)]",
        };
      case "achievement-unlocked":
        return {
          icon: Sparkles,
          title: "🎉 Parabéns!",
          message: `Você desbloqueou: ${data.achievementIcon || "🏆"} ${data.achievementName || "Nova Conquista"}`,
          actionText: "Ver Todas Conquistas",
          bgGradient: "from-[var(--success-50)] via-[var(--primary-50)] to-[var(--success-50)]",
          borderColor: "var(--success-300)",
          iconColor: "text-[var(--success-600)]",
        };
      default:
        return {
          icon: Sparkles,
          title: "Notificação",
          message: "Você tem uma nova notificação",
          actionText: "Ver Mais",
          bgGradient: "from-[var(--gray-50)] to-[var(--gray-100)]",
          borderColor: "var(--gray-300)",
          iconColor: "text-[var(--gray-600)]",
        };
    }
  };

  const config = getNotificationConfig();
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={`relative bg-gradient-to-br ${config.bgGradient} rounded-2xl border-2 overflow-hidden`}
          style={{
            padding: "var(--space-5)",
            borderColor: config.borderColor,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onDismiss}
            className="absolute top-3 right-3 bg-white/60 backdrop-blur-sm rounded-full p-1.5 hover:bg-white/80 transition-colors"
          >
            <X size={16} className="text-[var(--gray-700)]" />
          </button>

          {/* Content */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`flex-shrink-0 rounded-xl flex items-center justify-center ${config.iconColor}`}
              style={{ width: "48px", height: "48px", background: "rgba(255, 255, 255, 0.6)" }}
            >
              <Icon size={24} />
            </div>

            <div className="flex-1 min-w-0 pr-6">
              <h4 className="text-[var(--gray-900)] mb-1" style={{ fontSize: "16px", fontWeight: 700 }}>
                {config.title}
              </h4>
              <p className="text-[var(--gray-700)]" style={{ fontSize: "14px", lineHeight: "20px" }}>
                {config.message}
              </p>
            </div>
          </div>

          {/* Action Button */}
          {onAction && (
            <button
              onClick={onAction}
              className="w-full bg-white hover:bg-[var(--gray-50)] transition-colors rounded-xl flex items-center justify-between"
              style={{ padding: "var(--space-3) var(--space-4)" }}
            >
              <span
                className="text-[var(--primary-600)]"
                style={{ fontSize: "14px", fontWeight: 600 }}
              >
                {config.actionText}
              </span>
              <ArrowRight size={16} className="text-[var(--primary-600)]" />
            </button>
          )}

          {/* Decorative Glow */}
          <div
            className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl pointer-events-none"
            style={{
              background:
                type === "streak-risk"
                  ? "var(--warning-500)"
                  : type === "level-up-soon"
                  ? "var(--secondary-500)"
                  : "var(--success-500)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
