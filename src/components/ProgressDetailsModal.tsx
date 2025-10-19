import { motion, AnimatePresence } from "motion/react";
import { X, Zap, CheckCircle2, Clock, TrendingUp, Flame, Trophy, Target } from "lucide-react";

interface ProgressDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    today: {
      completed: number;
      total: number;
      xpGained: number;
      timeSpent: number;
      completionRate: number;
    };
    weekly: {
      days: Array<{ day: string; quests: number; xp: number }>;
    };
    streak: {
      current: number;
      record: number;
    };
    milestones: Array<{
      id: string;
      title: string;
      progress: number;
      total: number;
      description: string;
    }>;
  };
}

export function ProgressDetailsModal({ isOpen, onClose, stats }: ProgressDetailsModalProps) {
  if (!isOpen) return null;

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
            className="absolute inset-0 bg-black/60"
            style={{ backdropFilter: "blur(8px)" }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-[32px] w-full max-w-2xl overflow-hidden"
            style={{ maxHeight: "90vh", display: "flex", flexDirection: "column" }}
          >
            {/* Header */}
            <div
              className="relative bg-gradient-to-br from-[var(--primary-50)] to-[var(--primary-100)] border-b-2 border-[var(--primary-200)]"
              style={{ padding: "var(--space-8)" }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X size={20} className="text-[var(--gray-700)]" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div
                  className="bg-[var(--primary-600)] rounded-2xl flex items-center justify-center"
                  style={{ width: "48px", height: "48px" }}
                >
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h2 className="text-[var(--gray-900)]" style={{ fontSize: "24px", fontWeight: 700 }}>
                  Seu Progresso Detalhado
                </h2>
              </div>
              <p className="text-[var(--gray-600)]" style={{ fontSize: "14px" }}>
                Acompanhe seu desempenho e evolução
              </p>
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-1" style={{ padding: "var(--space-8)" }}>
              {/* Estatísticas de Hoje */}
              <section className="mb-8">
                <h3
                  className="text-[var(--gray-900)] mb-4 flex items-center gap-2"
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  📊 Estatísticas de Hoje
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="bg-[var(--gray-50)] rounded-2xl"
                    style={{ padding: "var(--space-4)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={20} className="text-[var(--success-600)]" />
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "12px", fontWeight: 600 }}>
                        Quests Concluídas
                      </p>
                    </div>
                    <p className="text-[var(--gray-900)]" style={{ fontSize: "24px", fontWeight: 700 }}>
                      {stats.today.completed}/{stats.today.total}
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-br from-[var(--secondary-50)] to-[var(--secondary-100)] rounded-2xl"
                    style={{ padding: "var(--space-4)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={20} className="text-[var(--secondary-600)]" />
                      <p className="text-[var(--secondary-700)]" style={{ fontSize: "12px", fontWeight: 600 }}>
                        XP Ganho
                      </p>
                    </div>
                    <p className="text-[var(--secondary-900)]" style={{ fontSize: "24px", fontWeight: 700 }}>
                      {stats.today.xpGained} XP
                    </p>
                  </div>

                  <div
                    className="bg-[var(--gray-50)] rounded-2xl"
                    style={{ padding: "var(--space-4)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={20} className="text-[var(--primary-600)]" />
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "12px", fontWeight: 600 }}>
                        Tempo Investido
                      </p>
                    </div>
                    <p className="text-[var(--gray-900)]" style={{ fontSize: "24px", fontWeight: 700 }}>
                      {stats.today.timeSpent} min
                    </p>
                  </div>

                  <div
                    className="bg-[var(--gray-50)] rounded-2xl"
                    style={{ padding: "var(--space-4)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={20} className="text-[var(--success-600)]" />
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "12px", fontWeight: 600 }}>
                        Taxa de Conclusão
                      </p>
                    </div>
                    <p className="text-[var(--gray-900)]" style={{ fontSize: "24px", fontWeight: 700 }}>
                      {stats.today.completionRate}%
                    </p>
                  </div>
                </div>
              </section>

              {/* Progresso Semanal */}
              <section className="mb-8">
                <h3
                  className="text-[var(--gray-900)] mb-4 flex items-center gap-2"
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  🎯 Progresso Semanal
                </h3>
                <div className="flex items-end justify-between gap-2" style={{ height: "120px" }}>
                  {stats.weekly.days.map((day, index) => {
                    const maxQuests = Math.max(...stats.weekly.days.map((d) => d.quests));
                    const height = maxQuests > 0 ? (day.quests / maxQuests) * 100 : 0;

                    return (
                      <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="w-full bg-gradient-to-t from-[var(--primary-600)] to-[var(--primary-500)] rounded-t-lg min-h-[4px] relative group cursor-pointer"
                        >
                          {/* Tooltip on hover */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div
                              className="bg-[var(--gray-900)] text-white rounded-lg whitespace-nowrap"
                              style={{ padding: "var(--space-2) var(--space-3)", fontSize: "12px" }}
                            >
                              {day.day}: {day.quests} quests
                              <br />
                              {day.xp} XP
                            </div>
                          </div>
                        </motion.div>
                        <p
                          className="text-[var(--gray-600)] text-center"
                          style={{ fontSize: "11px", fontWeight: 600 }}
                        >
                          {day.day.substring(0, 3)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Streak & Conquistas */}
              <section className="mb-8">
                <h3
                  className="text-[var(--gray-900)] mb-4 flex items-center gap-2"
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  🔥 Streak & Conquistas
                </h3>

                <div
                  className="bg-gradient-to-br from-[var(--error-50)] to-[var(--error-100)] rounded-2xl border-2 border-[var(--error-300)] mb-4"
                  style={{ padding: "var(--space-5)" }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[var(--error-700)] mb-1" style={{ fontSize: "14px", fontWeight: 600 }}>
                        Streak atual
                      </p>
                      <p className="text-[var(--error-900)]" style={{ fontSize: "32px", fontWeight: 700 }}>
                        {stats.streak.current} dias 🔥
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[var(--error-600)]" style={{ fontSize: "12px", fontWeight: 600 }}>
                        Seu recorde
                      </p>
                      <p className="text-[var(--error-800)]" style={{ fontSize: "20px", fontWeight: 700 }}>
                        {stats.streak.record} dias
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recent Achievements */}
                <div className="space-y-3">
                  <div
                    className="bg-[var(--gray-50)] rounded-2xl flex items-center gap-4"
                    style={{ padding: "var(--space-4)" }}
                  >
                    <div
                      className="bg-gradient-to-br from-[var(--secondary-500)] to-[var(--secondary-600)] rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <Trophy size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[var(--gray-900)]" style={{ fontSize: "14px", fontWeight: 600 }}>
                        🏆 Week Warrior
                      </p>
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "12px" }}>
                        7 dias consecutivos - desbloqueado hoje!
                      </p>
                    </div>
                  </div>

                  <div
                    className="bg-[var(--gray-50)] rounded-2xl flex items-center gap-4"
                    style={{ padding: "var(--space-4)" }}
                  >
                    <div
                      className="bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <Target size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[var(--gray-900)]" style={{ fontSize: "14px", fontWeight: 600 }}>
                        ⭐ Early Bird
                      </p>
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "12px" }}>
                        5 quests antes das 9h - há 2 dias
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Próximos Marcos */}
              <section>
                <h3
                  className="text-[var(--gray-900)] mb-4 flex items-center gap-2"
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  📈 Próximos Marcos
                </h3>
                <div className="space-y-4">
                  {stats.milestones.map((milestone) => (
                    <div key={milestone.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-[var(--gray-900)]" style={{ fontSize: "14px", fontWeight: 600 }}>
                          {milestone.title}
                        </p>
                        <p className="text-[var(--primary-600)]" style={{ fontSize: "13px", fontWeight: 700 }}>
                          {milestone.progress}/{milestone.total}
                        </p>
                      </div>
                      <div className="bg-[var(--gray-200)] rounded-full overflow-hidden" style={{ height: "8px" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(milestone.progress / milestone.total) * 100}%` }}
                          transition={{ duration: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)]"
                        />
                      </div>
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "12px" }}>
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <div
              className="border-t-2 border-[var(--gray-100)] bg-[var(--gray-50)]"
              style={{ padding: "var(--space-6)" }}
            >
              <button onClick={onClose} className="btn-primary w-full">
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
