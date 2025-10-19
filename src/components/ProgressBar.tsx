import { motion } from "motion/react";

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
}

export function ProgressBar({ current, total, label, showPercentage = true }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="text-[var(--gray-700)]" style={{ fontSize: '14px', fontWeight: 600 }}>
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-[var(--gray-600)]" style={{ fontSize: '14px', fontWeight: 600 }}>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div className="w-full bg-[var(--gray-100)] rounded-full overflow-hidden" style={{ height: '12px' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-600) 100%)',
          }}
        />
      </div>

      {label && (
        <div className="flex items-center justify-between mt-1">
          <span className="text-[var(--gray-500)]" style={{ fontSize: '12px' }}>
            {current} / {total}
          </span>
        </div>
      )}
    </div>
  );
}
