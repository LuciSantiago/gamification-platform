import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color?: "primary" | "success" | "warning" | "secondary";
  delay?: number;
}

const colorClasses = {
  primary: "bg-[var(--primary-50)] text-[var(--primary-600)]",
  success: "bg-[var(--success-50)] text-[var(--success-600)]",
  warning: "bg-[var(--warning-50)] text-[var(--warning-600)]",
  secondary: "bg-[var(--secondary-50)] text-[var(--secondary-600)]",
};

export function StatsCard({ icon: Icon, label, value, color = "primary", delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className="bg-white rounded-[24px] border-2 border-[var(--gray-100)] overflow-hidden hover:border-[var(--primary-200)] transition-all duration-300"
      style={{ padding: 'var(--space-6)' }}
    >
      <div className="flex items-center gap-4">
        <div
          className={`${colorClasses[color]} rounded-xl flex items-center justify-center flex-shrink-0`}
          style={{ width: '48px', height: '48px' }}
        >
          <Icon size={24} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[var(--gray-600)] mb-1" style={{ fontSize: '14px', lineHeight: '20px' }}>
            {label}
          </p>
          <p className="text-[var(--gray-900)]" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 700 }}>
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
