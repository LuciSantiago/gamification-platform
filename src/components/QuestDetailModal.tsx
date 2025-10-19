import { motion, AnimatePresence } from "motion/react";
import { X, Play, BookOpen, Headphones, Code, Users, Clock, Zap, CheckCircle2, Calendar, Target } from "lucide-react";
import { QuestType } from "./QuestCard";

interface QuestDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  quest: {
    id: string;
    title: string;
    type: QuestType;
    duration: number;
    xp: number;
    completed: boolean;
    description?: string;
    difficulty?: "easy" | "medium" | "hard";
    deadline?: string;
    resources?: { title: string; url: string }[];
  };
  onComplete: (questId: string) => void;
  onStartQuest?: (questId: string) => void;
}

const questTypeConfig = {
  video: {
    icon: Play,
    label: "Vídeo Aula",
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
  },
  reading: {
    icon: BookOpen,
    label: "Leitura",
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
  },
  audio: {
    icon: Headphones,
    label: "Podcast/Áudio",
    color: "#14B8A6",
    gradient: "linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)",
  },
  practice: {
    icon: Code,
    label: "Prática",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  },
  social: {
    icon: Users,
    label: "Social",
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
  },
};

const difficultyConfig = {
  easy: { label: "Fácil", color: "var(--success-500)", bg: "var(--success-50)" },
  medium: { label: "Médio", color: "var(--warning-500)", bg: "var(--warning-50)" },
  hard: { label: "Difícil", color: "var(--error-500)", bg: "var(--error-50)" },
};

export function QuestDetailModal({
  isOpen,
  onClose,
  quest,
  onComplete,
  onStartQuest,
}: QuestDetailModalProps) {
  if (!isOpen) return null;

  const config = questTypeConfig[quest.type];
  const Icon = config.icon;
  const difficulty = quest.difficulty || "medium";
  const diffConfig = difficultyConfig[difficulty];

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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-[32px] w-full max-w-2xl overflow-hidden"
            style={{ maxHeight: "90vh", display: "flex", flexDirection: "column" }}
          >
            {/* Header with Type Color */}
            <div
              className="relative overflow-hidden"
              style={{
                background: config.gradient,
                padding: "var(--space-8)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Type Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  style={{ width: "64px", height: "64px" }}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <div>
                  <p className="text-white/80 mb-1" style={{ fontSize: "14px", fontWeight: 600 }}>
                    {config.label}
                  </p>
                  <h2 className="text-white" style={{ fontSize: "24px", fontWeight: 700, lineHeight: "32px" }}>
                    {quest.title}
                  </h2>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Clock size={16} className="text-white" />
                  <span className="text-white" style={{ fontSize: "14px", fontWeight: 600 }}>
                    {quest.duration} min
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Zap size={16} className="text-white" />
                  <span className="text-white" style={{ fontSize: "14px", fontWeight: 600 }}>
                    +{quest.xp} XP
                  </span>
                </div>
                <div
                  className="px-4 py-2 rounded-full flex items-center gap-2"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Target size={16} className="text-white" />
                  <span className="text-white" style={{ fontSize: "14px", fontWeight: 600 }}>
                    {diffConfig.label}
                  </span>
                </div>
                {quest.deadline && (
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <Calendar size={16} className="text-white" />
                    <span className="text-white" style={{ fontSize: "14px", fontWeight: 600 }}>
                      {quest.deadline}
                    </span>
                  </div>
                )}
              </div>

              {/* Decorative glow */}
              <div
                className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-30 blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Content */}
            <div
              className="overflow-y-auto"
              style={{
                padding: "var(--space-8)",
                flex: 1,
              }}
            >
              {/* Description */}
              <div className="mb-8">
                <h3
                  className="text-[var(--gray-900)] mb-3"
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Sobre esta Quest
                </h3>
                <p
                  className="text-[var(--gray-700)]"
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                >
                  {quest.description ||
                    "Aprenda conceitos fundamentais que vão impulsionar sua jornada profissional. Esta atividade foi cuidadosamente selecionada para você desenvolver habilidades práticas e aplicáveis no mercado."}
                </p>
              </div>

              {/* Learning Objectives */}
              <div className="mb-8">
                <h3
                  className="text-[var(--gray-900)] mb-4"
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  O que você vai aprender
                </h3>
                <div className="space-y-3">
                  {[
                    "Fundamentos teóricos e conceitos chave",
                    "Aplicação prática em projetos reais",
                    "Best practices da indústria",
                    "Dicas de profissionais experientes",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="flex-shrink-0 rounded-full flex items-center justify-center"
                        style={{
                          width: "24px",
                          height: "24px",
                          background: config.gradient,
                        }}
                      >
                        <CheckCircle2 size={16} className="text-white" />
                      </div>
                      <p className="text-[var(--gray-700)]" style={{ fontSize: "15px", lineHeight: "24px" }}>
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              {quest.resources && quest.resources.length > 0 && (
                <div className="mb-8">
                  <h3
                    className="text-[var(--gray-900)] mb-4"
                    style={{ fontSize: "18px", fontWeight: 600 }}
                  >
                    Recursos
                  </h3>
                  <div className="space-y-2">
                    {quest.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-[var(--gray-50)] hover:bg-[var(--gray-100)] rounded-2xl transition-colors"
                        style={{ padding: "var(--space-4)" }}
                      >
                        <p
                          className="text-[var(--primary-600)]"
                          style={{ fontSize: "15px", fontWeight: 600 }}
                        >
                          {resource.title} →
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Completion Status */}
              {quest.completed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-[var(--success-50)] to-[var(--success-100)] rounded-2xl border-2 border-[var(--success-300)]"
                  style={{ padding: "var(--space-6)" }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-[var(--success-500)] rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <CheckCircle2 size={28} className="text-white" />
                    </div>
                    <div>
                      <h4
                        className="text-[var(--success-900)] mb-1"
                        style={{ fontSize: "16px", fontWeight: 700 }}
                      >
                        Quest Concluída! 🎉
                      </h4>
                      <p className="text-[var(--success-700)]" style={{ fontSize: "14px" }}>
                        Você ganhou +{quest.xp} XP
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer Actions */}
            <div
              className="border-t-2 border-[var(--gray-100)] bg-[var(--gray-50)]"
              style={{ padding: "var(--space-6)" }}
            >
              <div className="flex gap-3">
                <button onClick={onClose} className="btn-ghost flex-1">
                  Fechar
                </button>
                {!quest.completed ? (
                  <>
                    {onStartQuest && (
                      <button
                        onClick={() => {
                          onStartQuest(quest.id);
                          onClose();
                        }}
                        className="btn-secondary flex-1"
                      >
                        Começar Agora
                      </button>
                    )}
                    <button
                      onClick={() => {
                        onComplete(quest.id);
                        setTimeout(onClose, 1000);
                      }}
                      className="btn-success flex-1"
                    >
                      <CheckCircle2 size={20} />
                      Marcar como Concluída
                    </button>
                  </>
                ) : (
                  <button className="btn-primary flex-1" disabled>
                    Concluída ✓
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
