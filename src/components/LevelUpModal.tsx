import { motion, AnimatePresence } from "motion/react";
import { Trophy, Sparkles, X, Zap } from "lucide-react";

interface LevelUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  newLevel: number;
  unlockedFeatures?: string[];
}

export function LevelUpModal({ isOpen, onClose, newLevel, unlockedFeatures = [] }: LevelUpModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(8px)",
            }}
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-[32px] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
                padding: "var(--space-8)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white"
              >
                <X size={20} />
              </button>

              {/* Confetti Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      x: "50%",
                      y: -20,
                      rotate: 0,
                      opacity: 1,
                    }}
                    animate={{
                      x: `${Math.random() * 100}%`,
                      y: "120%",
                      rotate: Math.random() * 360,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      delay: Math.random() * 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background: ["#FBBF24", "#F59E0B", "#EC4899", "#8B5CF6", "#3B82F6"][i % 5],
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative text-center space-y-6">
                {/* Trophy Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", duration: 0.8 }}
                  className="mx-auto w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Trophy size={48} className="text-white" />
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <h2
                    className="text-white"
                    style={{
                      fontSize: "48px",
                      lineHeight: "56px",
                      fontWeight: 800,
                      textShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                  >
                    NÍVEL {newLevel}!
                  </h2>
                  <p
                    className="text-white/90"
                    style={{ fontSize: "18px", lineHeight: "28px", fontWeight: 600 }}
                  >
                    Novo conteúdo desbloqueado
                  </p>
                </motion.div>

                {/* Unlocked Features */}
                {unlockedFeatures.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/10 backdrop-blur-sm rounded-[24px]"
                    style={{ padding: "var(--space-6)" }}
                  >
                    <div className="space-y-3">
                      {unlockedFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-center gap-3 text-left"
                        >
                          <div className="w-8 h-8 rounded-full bg-[var(--success-500)] flex items-center justify-center flex-shrink-0">
                            <Sparkles size={16} className="text-white" />
                          </div>
                          <p className="text-white" style={{ fontSize: "16px", lineHeight: "24px" }}>
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  onClick={onClose}
                  className="w-full bg-white text-[var(--primary-600)] rounded-full flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                  style={{
                    padding: "16px 32px",
                    fontSize: "18px",
                    fontWeight: 700,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  }}
                >
                  <Zap size={20} />
                  <span>Explorar Novidades</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
