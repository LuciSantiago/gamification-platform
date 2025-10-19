import { motion } from "motion/react";
import { CheckCircle2, ExternalLink, Share2, ArrowRight } from "lucide-react";

interface CompletedQuest {
  id: string;
  title: string;
  xp: number;
  completedAt: string;
  type: "video" | "reading" | "audio" | "practice" | "social";
}

interface CompletedQuestsSectionProps {
  quests: CompletedQuest[];
  totalXPToday: number;
  onViewHistory?: () => void;
}

export function CompletedQuestsSection({
  quests,
  totalXPToday,
  onViewHistory,
}: CompletedQuestsSectionProps) {
  if (quests.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-[24px] border-2 border-[var(--gray-100)]"
        style={{ padding: "var(--space-8)" }}
      >
        <h3
          className="text-[var(--gray-900)] mb-4 flex items-center gap-2"
          style={{ fontSize: "20px", fontWeight: 600 }}
        >
          <CheckCircle2 size={24} className="text-[var(--success-600)]" />
          Concluídas Hoje
        </h3>

        <div className="text-center" style={{ padding: "var(--space-12) var(--space-4)" }}>
          <div className="mb-6 text-6xl">🚀</div>
          <h4 className="text-[var(--gray-900)] mb-2" style={{ fontSize: "18px", fontWeight: 600 }}>
            Nenhuma quest concluída ainda
          </h4>
          <p className="text-[var(--gray-600)] mb-6" style={{ fontSize: "14px" }}>
            Que tal começar agora? Cada pequeno passo conta!
          </p>
          <button className="btn-primary" style={{ fontSize: "14px", padding: "12px 24px" }}>
            Ver Quests Disponíveis
          </button>
        </div>
      </motion.div>
    );
  }

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const completed = new Date(timestamp);
    const diffMs = now.getTime() - completed.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor(diffMs / (1000 * 60));

    if (diffHours >= 1) {
      return `há ${diffHours} hora${diffHours > 1 ? "s" : ""}`;
    } else if (diffMins >= 1) {
      return `há ${diffMins} minuto${diffMins > 1 ? "s" : ""}`;
    } else {
      return "agora mesmo";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3
          className="text-[var(--gray-900)] flex items-center gap-2"
          style={{ fontSize: "20px", fontWeight: 600 }}
        >
          <CheckCircle2 size={24} className="text-[var(--success-600)]" />
          Concluídas Hoje
        </h3>
      </div>

      {/* Quest List */}
      <div className="space-y-3">
        {quests.map((quest, index) => (
          <motion.div
            key={quest.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-[var(--success-50)] to-white rounded-2xl border-2 border-[var(--success-200)] hover:border-[var(--success-300)] transition-all"
            style={{ padding: "var(--space-5)" }}
          >
            <div className="flex items-start gap-4">
              {/* Check Icon */}
              <div
                className="flex-shrink-0 bg-[var(--success-500)] rounded-full flex items-center justify-center"
                style={{ width: "40px", height: "40px" }}
              >
                <CheckCircle2 size={20} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4
                  className="text-[var(--gray-900)] mb-1"
                  style={{ fontSize: "15px", fontWeight: 600, lineHeight: "20px" }}
                >
                  {quest.title}
                </h4>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <p className="text-[var(--gray-600)]" style={{ fontSize: "13px" }}>
                    {getTimeAgo(quest.completedAt)}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[var(--secondary-600)]" style={{ fontSize: "13px", fontWeight: 700 }}>
                      +{quest.xp} XP ganho
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <button
                    className="text-[var(--primary-600)] hover:text-[var(--primary-700)] flex items-center gap-1.5 transition-colors"
                    style={{ fontSize: "13px", fontWeight: 600 }}
                  >
                    <ExternalLink size={14} />
                    Ver Certificado
                  </button>
                  <button
                    className="text-[var(--gray-600)] hover:text-[var(--gray-700)] flex items-center gap-1.5 transition-colors"
                    style={{ fontSize: "13px", fontWeight: 600 }}
                  >
                    <Share2 size={14} />
                    Compartilhar
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: quests.length * 0.1 + 0.2 }}
        className="bg-gradient-to-br from-[var(--secondary-50)] via-[var(--secondary-100)] to-[var(--secondary-50)] rounded-2xl border-2 border-[var(--secondary-300)]"
        style={{ padding: "var(--space-6)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[var(--secondary-700)] mb-1" style={{ fontSize: "14px", fontWeight: 600 }}>
              Total ganho hoje
            </p>
            <p className="text-[var(--secondary-900)]" style={{ fontSize: "28px", fontWeight: 700 }}>
              +{totalXPToday} XP 🎉
            </p>
          </div>
          <div
            className="bg-gradient-to-br from-[var(--secondary-500)] to-[var(--secondary-600)] rounded-2xl flex items-center justify-center"
            style={{ width: "56px", height: "56px" }}
          >
            <span className="text-white" style={{ fontSize: "32px" }}>
              ⚡
            </span>
          </div>
        </div>
      </motion.div>

      {/* View History Link */}
      {onViewHistory && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={onViewHistory}
          className="w-full text-center text-[var(--primary-600)] hover:text-[var(--primary-700)] transition-colors flex items-center justify-center gap-2"
          style={{ fontSize: "14px", fontWeight: 600, padding: "var(--space-3)" }}
        >
          Ver Histórico Completo
          <ArrowRight size={16} />
        </motion.button>
      )}
    </motion.div>
  );
}
