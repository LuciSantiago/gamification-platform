import { motion } from "motion/react";
import { MapPin, CheckCircle2, Lock, ArrowRight } from "lucide-react";

interface RoadmapRegion {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: "completed" | "in-progress" | "locked";
  illustration: string;
  totalQuests: number;
  completedQuests: number;
}

interface RoadmapHorizontalProps {
  regions: RoadmapRegion[];
  onRegionClick?: (regionId: string) => void;
}

export function RoadmapHorizontal({ regions, onRegionClick }: RoadmapHorizontalProps) {
  return (
    <div className="relative">
      {/* Horizontal Scroll Container */}
      <div
        className="overflow-x-auto overflow-y-hidden pb-8 hide-scrollbar"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="inline-flex gap-8 px-4 sm:px-6 lg:px-8" style={{ minWidth: "100%" }}>
          {regions.map((region, index) => (
            <div key={region.id} className="inline-flex items-center gap-8">
              {/* Region Card */}
              <motion.button
                onClick={() => onRegionClick && onRegionClick(region.id)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: onRegionClick ? 1.02 : 1, y: -4 }}
                whileTap={{ scale: onRegionClick ? 0.98 : 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative overflow-hidden rounded-[32px] border-2 transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  region.status === "completed"
                    ? "border-[var(--success-300)] bg-gradient-to-br from-white to-[var(--success-50)]"
                    : region.status === "in-progress"
                    ? "border-[var(--primary-300)] bg-gradient-to-br from-white to-[var(--primary-50)] shadow-xl"
                    : "border-[var(--gray-200)] bg-white opacity-60"
                }`}
                style={{
                  width: "280px",
                  minWidth: "280px",
                  height: "380px",
                }}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  {region.status === "completed" && (
                    <div
                      className="bg-[var(--success-500)] text-white px-3 py-1.5 rounded-full flex items-center gap-2"
                      style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em" }}
                    >
                      <CheckCircle2 size={14} />
                      <span>COMPLETO</span>
                    </div>
                  )}
                  {region.status === "in-progress" && (
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(79, 70, 229, 0.4)",
                          "0 0 0 8px rgba(79, 70, 229, 0)",
                          "0 0 0 0 rgba(79, 70, 229, 0.4)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-[var(--primary-600)] text-white px-3 py-1.5 rounded-full flex items-center gap-2"
                      style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em" }}
                    >
                      <MapPin size={14} />
                      <span>ATIVO</span>
                    </motion.div>
                  )}
                  {region.status === "locked" && (
                    <div
                      className="bg-[var(--gray-300)] text-[var(--gray-700)] px-3 py-1.5 rounded-full flex items-center gap-2"
                      style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em" }}
                    >
                      <Lock size={14} />
                      <span>BLOQUEADO</span>
                    </div>
                  )}
                </div>

                {/* Illustration */}
                <div
                  className="flex items-center justify-center overflow-hidden"
                  style={{
                    height: "200px",
                    padding: "var(--space-8) var(--space-6) var(--space-4)",
                  }}
                >
                  <div
                    className={`text-6xl transition-all duration-300 ${
                      region.status === "locked" ? "grayscale opacity-40" : ""
                    }`}
                  >
                    {region.illustration}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "var(--space-6)" }} className="space-y-4">
                  <div>
                    <h3
                      className={`mb-2 ${
                        region.status === "locked" ? "text-[var(--gray-500)]" : "text-[var(--gray-900)]"
                      }`}
                      style={{ fontSize: "20px", lineHeight: "28px", fontWeight: 600 }}
                    >
                      {region.title}
                    </h3>
                    <p
                      className="text-[var(--gray-600)]"
                      style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                      {region.description}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[var(--gray-700)]"
                        style={{ fontSize: "12px", fontWeight: 600 }}
                      >
                        Progresso
                      </span>
                      <span
                        className={
                          region.status === "in-progress"
                            ? "text-[var(--primary-600)]"
                            : region.status === "completed"
                            ? "text-[var(--success-600)]"
                            : "text-[var(--gray-500)]"
                        }
                        style={{ fontSize: "12px", fontWeight: 700 }}
                      >
                        {region.completedQuests}/{region.totalQuests}
                      </span>
                    </div>

                    {/* Progress Circle */}
                    <div className="relative w-20 h-20 mx-auto">
                      <svg width="80" height="80" viewBox="0 0 80 80" className="transform -rotate-90">
                        {/* Background Circle */}
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          fill="none"
                          stroke="var(--gray-200)"
                          strokeWidth="6"
                        />
                        {/* Progress Circle */}
                        <motion.circle
                          cx="40"
                          cy="40"
                          r="34"
                          fill="none"
                          stroke={
                            region.status === "completed"
                              ? "var(--success-500)"
                              : region.status === "in-progress"
                              ? "var(--primary-600)"
                              : "var(--gray-400)"
                          }
                          strokeWidth="6"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "214", strokeDashoffset: 214 }}
                          animate={{
                            strokeDashoffset: 214 - (214 * region.progress) / 100,
                          }}
                          transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className={
                            region.status === "completed"
                              ? "text-[var(--success-600)]"
                              : region.status === "in-progress"
                              ? "text-[var(--primary-600)]"
                              : "text-[var(--gray-500)]"
                          }
                          style={{ fontSize: "18px", fontWeight: 700 }}
                        >
                          {region.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Glow */}
                {region.status === "in-progress" && (
                  <div
                    className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, var(--primary-500) 0%, transparent 70%)",
                    }}
                  />
                )}
              </motion.button>

              {/* Connector Arrow */}
              {index < regions.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="flex-shrink-0"
                >
                  <ArrowRight
                    size={32}
                    className={
                      region.status === "completed"
                        ? "text-[var(--success-400)]"
                        : "text-[var(--gray-300)]"
                    }
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-[var(--gray-500)]" style={{ fontSize: "12px", fontWeight: 500 }}>
          ← Deslize para ver mais →
        </p>
      </motion.div>

      {/* Custom Scrollbar Hide */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
