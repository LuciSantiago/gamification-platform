import { Video, BookOpen, Headphones, Code, Users, CheckCircle2, Clock, Eye } from "lucide-react";
import { motion } from "motion/react";

export type QuestType = "video" | "reading" | "audio" | "practice" | "social";

interface QuestCardProps {
  id: string;
  title: string;
  type: QuestType;
  duration: number;
  xp: number;
  completed: boolean;
  onComplete: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

const questIcons = {
  video: Video,
  reading: BookOpen,
  audio: Headphones,
  practice: Code,
  social: Users,
};

const questColors = {
  video: "quest-card--video",
  reading: "quest-card--reading",
  audio: "quest-card--audio",
  practice: "quest-card--practice",
  social: "quest-card--social",
};

export function QuestCard({
  id,
  title,
  type,
  duration,
  xp,
  completed,
  onComplete,
  onViewDetails,
}: QuestCardProps) {
  const Icon = questIcons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`quest-card ${questColors[type]} ${completed ? 'opacity-50' : ''}`}
    >
      <div className="flex items-start gap-4">
        <div className={`quest-card__icon ${questColors[type]} flex-shrink-0 text-white`}>
          <Icon size={20} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-[var(--gray-900)] mb-2 pr-4" style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600 }}>
            {title}
          </h3>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 text-[var(--gray-600)]" style={{ fontSize: '14px' }}>
              <Clock size={16} />
              <span>{duration} min</span>
            </div>
            <div className="badge badge--xp" style={{ fontSize: '11px', padding: '4px 12px' }}>
              +{xp} XP
            </div>
          </div>

          {completed ? (
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-2 text-[var(--success-600)]" style={{ fontSize: '14px', fontWeight: 600 }}>
                <CheckCircle2 size={20} />
                <span>Concluída!</span>
              </div>
              {onViewDetails && (
                <button
                  onClick={() => onViewDetails(id)}
                  className="btn-ghost text-sm"
                  style={{ fontSize: '13px', padding: '8px 16px' }}
                >
                  <Eye size={16} />
                  Ver Detalhes
                </button>
              )}
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => onComplete(id)}
                className="btn-primary flex-1 sm:flex-initial"
                style={{ fontSize: '14px', padding: '12px 24px' }}
              >
                Começar
              </button>
              {onViewDetails && (
                <button
                  onClick={() => onViewDetails(id)}
                  className="btn-secondary flex-1 sm:flex-initial"
                  style={{ fontSize: '14px', padding: '12px 24px' }}
                >
                  <Eye size={16} />
                  Detalhes
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
