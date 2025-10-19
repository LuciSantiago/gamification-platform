import { Video, BookOpen, Headphones, Code, Users, CheckCircle2, Clock, Eye, MoreVertical, Star, BookMarked } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export type QuestType = "video" | "reading" | "audio" | "practice" | "social";
export type DifficultyLevel = "easy" | "medium" | "hard";
export type QuestStatus = "not-started" | "in-progress" | "completed" | "locked";

interface QuestCardEnhancedProps {
  id: string;
  title: string;
  description?: string;
  type: QuestType;
  duration: number;
  xp: number;
  difficulty?: DifficultyLevel;
  module?: string;
  category?: string;
  status?: QuestStatus;
  progress?: number;
  lastPosition?: string;
  onComplete: (id: string) => void;
  onViewDetails?: (id: string) => void;
  onStart?: (id: string) => void;
}

const questConfig = {
  video: {
    icon: Video,
    label: "Vídeo",
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
    label: "Podcast",
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
  easy: { label: "Fácil", color: "var(--success-600)", stars: 1 },
  medium: { label: "Médio", color: "var(--warning-600)", stars: 2 },
  hard: { label: "Difícil", color: "var(--error-600)", stars: 3 },
};

export function QuestCardEnhanced({
  id,
  title,
  description,
  type,
  duration,
  xp,
  difficulty = "medium",
  module,
  category,
  status = "not-started",
  progress = 0,
  lastPosition,
  onComplete,
  onViewDetails,
  onStart,
}: QuestCardEnhancedProps) {
  const [showMenu, setShowMenu] = useState(false);
  const config = questConfig[type];
  const Icon = config.icon;
  const diffConfig = difficultyConfig[difficulty];

  const getStatusConfig = () => {
    switch (status) {
      case "completed":
        return {
          borderColor: "var(--success-300)",
          bgColor: "var(--success-50)",
          buttonText: "Concluído ✓",
          buttonClass: "btn-success",
          buttonDisabled: true,
        };
      case "in-progress":
        return {
          borderColor: "var(--primary-300)",
          bgColor: "white",
          buttonText: "Continuar",
          buttonClass: "btn-primary",
          buttonDisabled: false,
        };
      case "locked":
        return {
          borderColor: "var(--gray-200)",
          bgColor: "var(--gray-100)",
          buttonText: "Bloqueado",
          buttonClass: "btn-ghost",
          buttonDisabled: true,
        };
      default:
        return {
          borderColor: "var(--gray-200)",
          bgColor: "white",
          buttonText: "Começar",
          buttonClass: "btn-primary",
          buttonDisabled: false,
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={status !== "locked" ? { y: -4, boxShadow: "0 12px 32px rgba(79, 70, 229, 0.12)" } : {}}
      transition={{ duration: 0.3 }}
      className="relative rounded-[24px] border-2 transition-all"
      style={{
        padding: "var(--space-6)",
        borderColor: statusConfig.borderColor,
        background: statusConfig.bgColor,
        opacity: status === "locked" ? 0.6 : 1,
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Type Icon */}
        <div
          className="flex-shrink-0 rounded-xl flex items-center justify-center text-white"
          style={{
            width: "48px",
            height: "48px",
            background: config.gradient,
          }}
        >
          <Icon size={24} />
        </div>

        {/* Title & Metadata */}
        <div className="flex-1 min-w-0">
          <h3
            className="text-[var(--gray-900)] mb-1.5"
            style={{ fontSize: "18px", lineHeight: "24px", fontWeight: 600 }}
          >
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-[var(--gray-600)]" style={{ fontSize: "12px" }}>
            <span>{config.label}</span>
            <span>•</span>
            <span>{diffConfig.label}</span>
            {category && (
              <>
                <span>•</span>
                <span>{category}</span>
              </>
            )}
          </div>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex-shrink-0 p-2 hover:bg-[var(--gray-100)] rounded-lg transition-colors relative"
        >
          <MoreVertical size={20} className="text-[var(--gray-600)]" />
          
          {/* Dropdown Menu */}
          {showMenu && (
            <div
              className="absolute right-0 top-full mt-2 bg-white rounded-xl border-2 border-[var(--gray-200)] overflow-hidden z-10"
              style={{
                minWidth: "180px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
              }}
            >
              <button
                onClick={() => {
                  setShowMenu(false);
                  onViewDetails?.(id);
                }}
                className="w-full text-left px-4 py-3 hover:bg-[var(--gray-50)] transition-colors text-[var(--gray-700)]"
                style={{ fontSize: "14px" }}
              >
                Ver Detalhes
              </button>
              <button
                className="w-full text-left px-4 py-3 hover:bg-[var(--gray-50)] transition-colors text-[var(--gray-700)]"
                style={{ fontSize: "14px" }}
              >
                Salvar para depois
              </button>
              <button
                onClick={() => {
                  setShowMenu(false);
                  onComplete(id);
                }}
                className="w-full text-left px-4 py-3 hover:bg-[var(--gray-50)] transition-colors text-[var(--gray-700)]"
                style={{ fontSize: "14px" }}
              >
                Marcar como concluída
              </button>
            </div>
          )}
        </button>
      </div>

      {/* Description */}
      {description && (
        <p
          className="text-[var(--gray-700)] mb-4"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      )}

      {/* Metadata Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-[var(--gray-600)]" style={{ fontSize: "14px" }}>
          <Clock size={16} />
          <span>{duration} min</span>
        </div>
        <div
          className="px-3 py-1.5 rounded-full"
          style={{
            background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
            fontSize: "12px",
            fontWeight: 700,
            color: "var(--gray-900)",
          }}
        >
          +{xp} XP
        </div>
        <div className="flex items-center gap-0.5" style={{ color: diffConfig.color }}>
          {[...Array(diffConfig.stars)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
        {module && (
          <div className="flex items-center gap-1.5 text-[var(--gray-600)]" style={{ fontSize: "13px" }}>
            <BookMarked size={14} />
            <span>{module}</span>
          </div>
        )}
      </div>

      {/* Progress Indicator (if in progress) */}
      {status === "in-progress" && progress > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[var(--gray-600)]" style={{ fontSize: "12px", fontWeight: 600 }}>
              Progresso
            </span>
            <span className="text-[var(--primary-600)]" style={{ fontSize: "12px", fontWeight: 700 }}>
              {progress}%
            </span>
          </div>
          <div className="bg-[var(--gray-200)] rounded-full overflow-hidden" style={{ height: "6px" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full rounded-full"
              style={{ background: config.gradient }}
            />
          </div>
          {lastPosition && (
            <p className="text-[var(--gray-600)] mt-1.5" style={{ fontSize: "12px" }}>
              Você parou em: {lastPosition}
            </p>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2">
        {status === "completed" ? (
          <>
            <div className="flex items-center gap-2 text-[var(--success-600)]" style={{ fontSize: "14px", fontWeight: 600 }}>
              <CheckCircle2 size={20} />
              <span>Concluída!</span>
            </div>
            {onViewDetails && (
              <button
                onClick={() => onViewDetails(id)}
                className="btn-ghost ml-auto"
                style={{ fontSize: "13px", padding: "8px 16px" }}
              >
                <Eye size={16} />
                Ver Detalhes
              </button>
            )}
          </>
        ) : (
          <>
            <button
              onClick={() => {
                if (status === "in-progress" && onStart) {
                  onStart(id);
                } else {
                  onComplete(id);
                }
              }}
              disabled={statusConfig.buttonDisabled}
              className={`${statusConfig.buttonClass} flex-1 sm:flex-initial`}
              style={{ fontSize: "14px", padding: "12px 24px" }}
            >
              {statusConfig.buttonText}
            </button>
            {onViewDetails && status !== "locked" && (
              <button
                onClick={() => onViewDetails(id)}
                className="btn-secondary flex-1 sm:flex-initial"
                style={{ fontSize: "14px", padding: "12px 24px" }}
              >
                <Eye size={16} />
                Detalhes
              </button>
            )}
          </>
        )}
      </div>

      {/* Locked Overlay */}
      {status === "locked" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-[24px]">
          <div className="text-center" style={{ padding: "var(--space-6)" }}>
            <div className="mb-2 text-4xl">🔒</div>
            <p className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 600 }}>
              Complete a quest anterior<br />para desbloquear
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
