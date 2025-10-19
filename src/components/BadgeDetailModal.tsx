import { motion, AnimatePresence } from "motion/react";
import { X, Trophy, Lock, CheckCircle2, Target, Calendar, Zap } from "lucide-react";

interface BadgeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  badge: {
    id: string;
    name: string;
    description: string;
    icon: string;
    unlocked: boolean;
    unlockedAt?: string;
    rarity?: "common" | "rare" | "epic" | "legendary";
    requirement?: string;
    progress?: number;
    total?: number;
    reward?: number;
  };
}

const rarityConfig = {
  common: {
    label: "Comum",
    color: "var(--gray-600)",
    bg: "linear-gradient(135deg, #71717A 0%, #52525F 100%)",
    border: "var(--gray-400)",
  },
  rare: {
    label: "Raro",
    color: "var(--primary-600)",
    bg: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
    border: "var(--primary-400)",
  },
  epic: {
    label: "Épico",
    color: "var(--secondary-600)",
    bg: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    border: "var(--secondary-400)",
  },
  legendary: {
    label: "Lendário",
    color: "var(--error-600)",
    bg: "linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)",
    border: "var(--error-400)",
  },
};

export function BadgeDetailModal({ isOpen, onClose, badge }: BadgeDetailModalProps) {
  if (!isOpen) return null;

  const rarity = badge.rarity || "common";
  const rarityConf = rarityConfig[rarity];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60"
            style={{ backdropFilter: "blur(8px)" }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative bg-white rounded-[32px] w-full max-w-lg overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X size={20} className="text-[var(--gray-700)]" />
            </button>

            {/* Header */}
            <div
              className="relative overflow-hidden text-center"
              style={{
                background: badge.unlocked ? rarityConf.bg : "var(--gray-300)",
                padding: "var(--space-12) var(--space-8)",
              }}
            >
              {/* Badge Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.2, duration: 0.8 }}
                className="relative inline-block mb-6"
              >
                <div
                  className={`bg-white rounded-full flex items-center justify-center ${
                    badge.unlocked ? "" : "opacity-40 grayscale"
                  }`}
                  style={{
                    width: "120px",
                    height: "120px",
                    fontSize: "56px",
                    boxShadow: badge.unlocked
                      ? "0 16px 48px rgba(0, 0, 0, 0.24)"
                      : "0 8px 24px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  {badge.unlocked ? badge.icon : "🔒"}
                </div>

                {/* Unlock Sparkles */}
                {badge.unlocked && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          x: [0, Math.cos((i * Math.PI * 2) / 6) * 80],
                          y: [0, Math.sin((i * Math.PI * 2) / 6) * 80],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 0.4 + i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                        className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full"
                      />
                    ))}
                  </>
                )}
              </motion.div>

              {/* Rarity Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block mb-3"
              >
                <div
                  className="px-4 py-1.5 rounded-full uppercase tracking-wider"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(8px)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {rarityConf.label}
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white mb-2"
                style={{ fontSize: "28px", fontWeight: 700, lineHeight: "36px" }}
              >
                {badge.name}
              </motion.h2>

              {/* Status */}
              {badge.unlocked ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2 text-white"
                >
                  <CheckCircle2 size={18} />
                  <span style={{ fontSize: "14px", fontWeight: 600 }}>
                    Desbloqueado {badge.unlockedAt || "recentemente"}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2"
                  style={{ color: "var(--gray-700)" }}
                >
                  <Lock size={18} />
                  <span style={{ fontSize: "14px", fontWeight: 600 }}>Bloqueado</span>
                </motion.div>
              )}

              {/* Decorative glow */}
              {badge.unlocked && (
                <div
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full opacity-40 blur-3xl"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div style={{ padding: "var(--space-8)" }}>
              {/* Description */}
              <div className="mb-6">
                <p
                  className="text-center text-[var(--gray-700)]"
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                >
                  {badge.description}
                </p>
              </div>

              {/* Requirement */}
              {badge.requirement && (
                <div
                  className="bg-[var(--gray-50)] rounded-2xl mb-6"
                  style={{ padding: "var(--space-5)" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 bg-[var(--primary-100)] rounded-xl flex items-center justify-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <Target size={20} className="text-[var(--primary-600)]" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-[var(--gray-900)] mb-1"
                        style={{ fontSize: "14px", fontWeight: 600 }}
                      >
                        Requisito
                      </h4>
                      <p className="text-[var(--gray-700)]" style={{ fontSize: "14px" }}>
                        {badge.requirement}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {!badge.unlocked && badge.progress !== undefined && badge.total !== undefined && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[var(--gray-700)]" style={{ fontSize: "12px", fontWeight: 600 }}>
                          Progresso
                        </span>
                        <span className="text-[var(--primary-600)]" style={{ fontSize: "12px", fontWeight: 700 }}>
                          {badge.progress}/{badge.total}
                        </span>
                      </div>
                      <div
                        className="bg-[var(--gray-200)] rounded-full overflow-hidden"
                        style={{ height: "8px" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(badge.progress / badge.total) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full rounded-full"
                          style={{ background: rarityConf.bg }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Reward */}
              {badge.reward && (
                <div
                  className="bg-gradient-to-br from-[var(--secondary-50)] to-[var(--secondary-100)] rounded-2xl border-2 border-[var(--secondary-200)]"
                  style={{ padding: "var(--space-5)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 rounded-xl flex items-center justify-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
                      }}
                    >
                      <Zap size={20} className="text-white" />
                    </div>
                    <div>
                      <h4
                        className="text-[var(--secondary-900)] mb-1"
                        style={{ fontSize: "14px", fontWeight: 600 }}
                      >
                        Recompensa
                      </h4>
                      <p className="text-[var(--secondary-700)]" style={{ fontSize: "16px", fontWeight: 700 }}>
                        +{badge.reward} XP
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tips */}
              {!badge.unlocked && (
                <div className="mt-6">
                  <h4
                    className="text-[var(--gray-900)] mb-3"
                    style={{ fontSize: "14px", fontWeight: 600 }}
                  >
                    💡 Dica
                  </h4>
                  <p className="text-[var(--gray-600)]" style={{ fontSize: "14px", lineHeight: "20px" }}>
                    Continue completando suas quests diárias e mantenha seu streak para desbloquear esta conquista!
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              className="border-t-2 border-[var(--gray-100)] bg-[var(--gray-50)]"
              style={{ padding: "var(--space-6)" }}
            >
              <button onClick={onClose} className="btn-primary w-full">
                {badge.unlocked ? "Fechar" : "Entendi"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
