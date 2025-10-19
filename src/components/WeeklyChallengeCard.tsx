import { motion } from "motion/react";
import { Target, Trophy, Clock, Zap } from "lucide-react";

interface WeeklyChallengeCardProps {
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: number;
  daysRemaining: number;
  isActive?: boolean;
}

export function WeeklyChallengeCard({
  title,
  description,
  progress,
  total,
  reward,
  daysRemaining,
  isActive = true,
}: WeeklyChallengeCardProps) {
  const percentage = (progress / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-[24px] border-2 transition-all duration-300 ${
        isActive
          ? "border-[var(--secondary-300)] bg-gradient-to-br from-white to-[var(--secondary-50)] hover:shadow-lg"
          : "border-[var(--gray-200)] bg-white opacity-70"
      }`}
      style={{ padding: "var(--space-6)" }}
    >
      {/* Badge de "Ativo" */}
      {isActive && (
        <div className="absolute top-4 right-4">
          <div
            className="bg-gradient-to-r from-[var(--secondary-500)] to-[var(--secondary-600)] text-white px-3 py-1 rounded-full"
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em" }}
          >
            ATIVO
          </div>
        </div>
      )}

      <div className="flex items-start gap-4 mb-6">
        <div
          className={`rounded-xl flex items-center justify-center flex-shrink-0 ${
            isActive
              ? "bg-gradient-to-br from-[var(--secondary-500)] to-[var(--secondary-600)] text-white"
              : "bg-[var(--gray-200)] text-[var(--gray-500)]"
          }`}
          style={{ width: "56px", height: "56px" }}
        >
          <Trophy size={28} />
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className="text-[var(--gray-900)] mb-2"
            style={{ fontSize: "20px", lineHeight: "28px", fontWeight: 600 }}
          >
            {title}
          </h3>
          <p className="text-[var(--gray-600)]" style={{ fontSize: "14px", lineHeight: "20px" }}>
            {description}
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 600 }}>
            Progresso
          </span>
          <span
            className={isActive ? "text-[var(--secondary-600)]" : "text-[var(--gray-600)]"}
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            {progress} / {total}
          </span>
        </div>

        <div className="relative">
          <div className="w-full bg-[var(--gray-200)] rounded-full overflow-hidden" style={{ height: "12px" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{
                background: isActive
                  ? "linear-gradient(90deg, var(--secondary-500) 0%, var(--secondary-600) 100%)"
                  : "var(--gray-400)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-[var(--gray-500)]" />
          <span className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 500 }}>
            {daysRemaining} {daysRemaining === 1 ? "dia restante" : "dias restantes"}
          </span>
        </div>

        <div className="flex items-center gap-2 badge badge--xp" style={{ fontSize: "12px" }}>
          <Zap size={14} />
          <span>+{reward} XP</span>
        </div>
      </div>

      {/* Decorative Elements */}
      {isActive && (
        <>
          <div
            className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, var(--secondary-500) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, var(--secondary-600) 0%, transparent 70%)",
            }}
          />
        </>
      )}
    </motion.div>
  );
}
