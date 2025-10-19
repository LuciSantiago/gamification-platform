import { Lock, CheckCircle2, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface RoadmapNodeProps {
  title: string;
  progress: number;
  status: "completed" | "current" | "locked";
  index: number;
}

export function RoadmapNode({ title, progress, status, index }: RoadmapNodeProps) {
  const isCompleted = status === "completed";
  const isCurrent = status === "current";
  const isLocked = status === "locked";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative"
    >
      <div
        className={`relative bg-white rounded-[20px] border-2 overflow-hidden transition-all duration-300 ${
          isCompleted
            ? 'border-[var(--success-300)] bg-gradient-to-br from-white to-[var(--success-50)]'
            : isCurrent
            ? 'border-[var(--primary-300)] shadow-lg'
            : 'border-[var(--gray-200)] opacity-70'
        }`}
        style={{ padding: 'var(--space-6)' }}
      >
        <div className="flex items-start gap-4">
          <div
            className={`rounded-xl flex items-center justify-center flex-shrink-0 ${
              isCompleted
                ? 'bg-[var(--success-500)] text-white'
                : isCurrent
                ? 'bg-[var(--primary-500)] text-white'
                : 'bg-[var(--gray-300)] text-[var(--gray-500)]'
            }`}
            style={{ width: '48px', height: '48px' }}
          >
            {isCompleted ? (
              <CheckCircle2 size={24} />
            ) : isCurrent ? (
              <MapPin size={24} />
            ) : (
              <Lock size={24} />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h4
              className={`mb-2 ${
                isLocked ? 'text-[var(--gray-500)]' : 'text-[var(--gray-900)]'
              }`}
              style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 600 }}
            >
              {title}
            </h4>

            {!isLocked && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--gray-600)]" style={{ fontSize: '14px' }}>
                    Progresso
                  </span>
                  <span
                    className={isCompleted ? 'text-[var(--success-600)]' : 'text-[var(--primary-600)]'}
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    {progress}%
                  </span>
                </div>

                <div className="w-full bg-[var(--gray-100)] rounded-full overflow-hidden" style={{ height: '8px' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    className="h-full rounded-full"
                    style={{
                      background: isCompleted
                        ? 'linear-gradient(90deg, var(--success-400) 0%, var(--success-500) 100%)'
                        : 'linear-gradient(90deg, var(--primary-400) 0%, var(--primary-500) 100%)',
                    }}
                  />
                </div>
              </div>
            )}

            {isLocked && (
              <p className="text-[var(--gray-500)]" style={{ fontSize: '14px' }}>
                Bloqueado - Complete a região anterior
              </p>
            )}
          </div>
        </div>

        {isCurrent && (
          <div className="absolute -top-1 -right-1">
            <div className="bg-[var(--secondary-500)] text-white px-3 py-1 rounded-full" style={{ fontSize: '11px', fontWeight: 600 }}>
              ATUAL
            </div>
          </div>
        )}
      </div>

      {/* Connector line for non-last items */}
      {index < 3 && (
        <div
          className={`absolute left-[30px] w-0.5 ${
            isCompleted ? 'bg-[var(--success-300)]' : 'bg-[var(--gray-200)]'
          }`}
          style={{ height: 'var(--space-6)', top: '100%' }}
        />
      )}
    </motion.div>
  );
}
