import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, CheckCircle2, Lock, Play, BookOpen, Headphones, Code, Users, ArrowRight } from "lucide-react";

interface RoadmapRegionModalProps {
  isOpen: boolean;
  onClose: () => void;
  region: {
    id: string;
    title: string;
    description: string;
    progress: number;
    status: "completed" | "in-progress" | "locked";
    illustration: string;
    totalQuests: number;
    completedQuests: number;
    quests?: Array<{
      id: string;
      title: string;
      type: "video" | "reading" | "audio" | "practice" | "social";
      completed: boolean;
      xp: number;
    }>;
  };
  onStartRegion?: (regionId: string) => void;
  onNavigateToQuest?: (questId: string) => void;
}

const questTypeIcons = {
  video: Play,
  reading: BookOpen,
  audio: Headphones,
  practice: Code,
  social: Users,
};

const questTypeColors = {
  video: "#EC4899",
  reading: "#8B5CF6",
  audio: "#14B8A6",
  practice: "#F59E0B",
  social: "#3B82F6",
};

export function RoadmapRegionModal({
  isOpen,
  onClose,
  region,
  onStartRegion,
  onNavigateToQuest,
}: RoadmapRegionModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const defaultQuests = [
    { id: "1", title: "Introdução ao Design Thinking", type: "video" as const, completed: true, xp: 30 },
    { id: "2", title: "Fundamentos de UX/UI", type: "reading" as const, completed: true, xp: 20 },
    { id: "3", title: "Podcast: Carreira em UX", type: "audio" as const, completed: false, xp: 25 },
    { id: "4", title: "Exercício: Criar wireframe", type: "practice" as const, completed: false, xp: 50 },
    { id: "5", title: "Compartilhe seu progresso", type: "social" as const, completed: false, xp: 15 },
  ];

  const quests = region.quests || defaultQuests;

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
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-[32px] w-full max-w-3xl overflow-hidden"
            style={{ maxHeight: "90vh", display: "flex", flexDirection: "column" }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
            >
              <X size={20} className="text-[var(--gray-700)]" />
            </button>

            {/* Header */}
            <div
              className={`relative overflow-hidden ${
                region.status === "completed"
                  ? "bg-gradient-to-br from-[var(--success-50)] to-[var(--success-100)]"
                  : region.status === "in-progress"
                  ? "bg-gradient-to-br from-[var(--primary-50)] to-[var(--primary-100)]"
                  : "bg-gradient-to-br from-[var(--gray-100)] to-[var(--gray-200)]"
              }`}
              style={{ padding: "var(--space-10) var(--space-8)" }}
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  {region.status === "completed" && (
                    <div className="bg-[var(--success-500)] text-white px-4 py-2 rounded-full flex items-center gap-2 inline-flex">
                      <CheckCircle2 size={16} />
                      <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em" }}>
                        REGIÃO COMPLETA
                      </span>
                    </div>
                  )}
                  {region.status === "in-progress" && (
                    <div className="bg-[var(--primary-600)] text-white px-4 py-2 rounded-full flex items-center gap-2 inline-flex">
                      <MapPin size={16} />
                      <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em" }}>
                        REGIÃO ATIVA
                      </span>
                    </div>
                  )}
                  {region.status === "locked" && (
                    <div className="bg-[var(--gray-400)] text-white px-4 py-2 rounded-full flex items-center gap-2 inline-flex">
                      <Lock size={16} />
                      <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em" }}>
                        BLOQUEADA
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Illustration & Title */}
              <div className="flex items-center gap-6 mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className={`flex-shrink-0 rounded-3xl flex items-center justify-center ${
                    region.status === "locked" ? "opacity-40 grayscale" : ""
                  }`}
                  style={{
                    width: "100px",
                    height: "100px",
                    fontSize: "56px",
                    background:
                      region.status === "locked"
                        ? "var(--gray-300)"
                        : region.status === "completed"
                        ? "var(--success-500)"
                        : "var(--primary-500)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  {region.illustration}
                </motion.div>

                <div className="flex-1">
                  <h2
                    className="text-[var(--gray-900)] mb-2"
                    style={{ fontSize: "32px", fontWeight: 700, lineHeight: "40px" }}
                  >
                    {region.title}
                  </h2>
                  <p className="text-[var(--gray-700)]" style={{ fontSize: "16px", lineHeight: "24px" }}>
                    {region.description}
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 600 }}>
                    Progresso Geral
                  </span>
                  <span
                    className={
                      region.status === "completed"
                        ? "text-[var(--success-600)]"
                        : region.status === "in-progress"
                        ? "text-[var(--primary-600)]"
                        : "text-[var(--gray-600)]"
                    }
                    style={{ fontSize: "14px", fontWeight: 700 }}
                  >
                    {region.completedQuests}/{region.totalQuests} Quests
                  </span>
                </div>
                <div className="bg-white/60 rounded-full overflow-hidden" style={{ height: "12px" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${region.progress}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        region.status === "completed"
                          ? "linear-gradient(90deg, var(--success-500) 0%, var(--success-600) 100%)"
                          : region.status === "in-progress"
                          ? "linear-gradient(90deg, var(--primary-500) 0%, var(--primary-600) 100%)"
                          : "var(--gray-400)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Quests List */}
            <div
              className="flex-1 overflow-y-auto"
              style={{ padding: "var(--space-8)" }}
            >
              <h3 className="text-[var(--gray-900)] mb-6" style={{ fontSize: "20px", fontWeight: 600 }}>
                Quests desta Região
              </h3>

              <div className="space-y-3">
                {quests.map((quest, index) => {
                  const Icon = questTypeIcons[quest.type];
                  const color = questTypeColors[quest.type];
                  const isLocked = region.status === "locked";

                  return (
                    <motion.button
                      key={quest.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        if (!isLocked && onNavigateToQuest) {
                          onNavigateToQuest(quest.id);
                          onClose();
                        }
                      }}
                      disabled={isLocked}
                      className={`w-full bg-white rounded-2xl border-2 transition-all ${
                        isLocked
                          ? "border-[var(--gray-200)] opacity-50 cursor-not-allowed"
                          : quest.completed
                          ? "border-[var(--success-300)] hover:border-[var(--success-400)]"
                          : "border-[var(--gray-200)] hover:border-[var(--primary-300)] hover:-translate-y-1"
                      }`}
                      style={{
                        padding: "var(--space-5)",
                        boxShadow: !isLocked && !quest.completed ? "0 2px 8px rgba(0, 0, 0, 0.04)" : "none",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Quest Type Icon */}
                        <div
                          className={`flex-shrink-0 rounded-xl flex items-center justify-center ${
                            quest.completed ? "opacity-60" : ""
                          }`}
                          style={{
                            width: "48px",
                            height: "48px",
                            background: isLocked
                              ? "var(--gray-300)"
                              : `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
                          }}
                        >
                          <Icon size={24} className="text-white" />
                        </div>

                        {/* Quest Info */}
                        <div className="flex-1 text-left">
                          <h4
                            className={`mb-1 ${
                              quest.completed ? "text-[var(--gray-600)]" : "text-[var(--gray-900)]"
                            }`}
                            style={{ fontSize: "15px", fontWeight: 600, lineHeight: "20px" }}
                          >
                            {quest.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className="text-[var(--secondary-600)]" style={{ fontSize: "13px", fontWeight: 700 }}>
                              +{quest.xp} XP
                            </span>
                          </div>
                        </div>

                        {/* Status */}
                        {quest.completed ? (
                          <div className="flex-shrink-0 bg-[var(--success-100)] rounded-full p-2">
                            <CheckCircle2 size={20} className="text-[var(--success-600)]" />
                          </div>
                        ) : isLocked ? (
                          <div className="flex-shrink-0 bg-[var(--gray-200)] rounded-full p-2">
                            <Lock size={20} className="text-[var(--gray-500)]" />
                          </div>
                        ) : (
                          <div className="flex-shrink-0">
                            <ArrowRight size={20} className="text-[var(--gray-400)]" />
                          </div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Locked Message */}
              {region.status === "locked" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 bg-[var(--gray-100)] rounded-2xl"
                  style={{ padding: "var(--space-6)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 bg-[var(--gray-300)] rounded-full flex items-center justify-center"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <Lock size={24} className="text-[var(--gray-600)]" />
                    </div>
                    <div>
                      <h4
                        className="text-[var(--gray-900)] mb-2"
                        style={{ fontSize: "16px", fontWeight: 600 }}
                      >
                        Região Bloqueada
                      </h4>
                      <p className="text-[var(--gray-700)]" style={{ fontSize: "14px", lineHeight: "20px" }}>
                        Complete as quests da região anterior para desbloquear esta área e continuar sua jornada!
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div
              className="border-t-2 border-[var(--gray-100)] bg-[var(--gray-50)]"
              style={{ padding: "var(--space-6)" }}
            >
              <div className="flex gap-3">
                <button onClick={onClose} className="btn-ghost flex-1">
                  Fechar
                </button>
                {region.status === "in-progress" && onStartRegion && (
                  <button
                    onClick={() => {
                      onStartRegion(region.id);
                      onClose();
                    }}
                    className="btn-primary flex-1"
                  >
                    Continuar Jornada
                  </button>
                )}
                {region.status === "completed" && (
                  <button className="btn-success flex-1" disabled>
                    <CheckCircle2 size={20} />
                    Região Completa
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
