import { Trophy, Target, Zap, Award, Flame, Star, Medal, Crown } from "lucide-react";
import { motion } from "motion/react";

interface BadgeData {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

interface BadgeDisplayProps {
  badge: BadgeData;
  index?: number;
  onClick?: () => void;
}

const iconMap: { [key: string]: any } = {
  trophy: Trophy,
  target: Target,
  zap: Zap,
  award: Award,
  flame: Flame,
  star: Star,
  medal: Medal,
  crown: Crown,
};

export function BadgeDisplay({ badge, index = 0, onClick }: BadgeDisplayProps) {
  const Icon = iconMap[badge.icon] || Trophy;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: onClick ? 1.05 : 1 }}
      whileTap={{ scale: onClick ? 0.95 : 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`relative bg-white rounded-[16px] border-2 overflow-hidden transition-all duration-300 w-full ${
        badge.unlocked
          ? 'border-[var(--primary-200)] hover:border-[var(--primary-300)] hover:shadow-md cursor-pointer'
          : 'border-[var(--gray-200)] opacity-60 cursor-pointer'
      }`}
      style={{ padding: 'var(--space-4)' }}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div
          className={`rounded-xl flex items-center justify-center ${
            badge.unlocked
              ? 'bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] text-white'
              : 'bg-[var(--gray-200)] text-[var(--gray-500)]'
          }`}
          style={{ width: '56px', height: '56px' }}
        >
          <Icon size={28} />
        </div>

        <div>
          <p
            className={badge.unlocked ? 'text-[var(--gray-900)]' : 'text-[var(--gray-500)]'}
            style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 600 }}
          >
            {badge.name}
          </p>
          <p
            className="text-[var(--gray-500)] mt-1"
            style={{ fontSize: '12px', lineHeight: '16px' }}
          >
            {badge.description}
          </p>
        </div>

        {badge.unlocked && (
          <div className="absolute top-2 right-2">
            <div className="bg-[var(--success-500)] rounded-full p-1">
              <Zap size={12} className="text-white fill-white" />
            </div>
          </div>
        )}
      </div>
    </motion.button>
  );
}
