import { motion } from "motion/react";
import { Lock, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

export type RegionStatus = "completed" | "in-progress" | "locked";

export interface RoadmapRegion {
  id: string;
  title: string;
  description: string;
  illustration: string;
  progress: number;
  status: RegionStatus;
  totalQuests: number;
  completedQuests: number;
}

interface RoadmapVisualMVPProps {
  regions: RoadmapRegion[];
  onRegionClick: (regionId: string) => void;
}

export function RoadmapVisualMVP({ regions, onRegionClick }: RoadmapVisualMVPProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const getStatusConfig = (status: RegionStatus) => {
    switch (status) {
      case "completed":
        return {
          bgColor: "var(--success-50)",
          borderColor: "var(--success-300)",
          iconColor: "var(--success-600)",
          opacity: 1,
          saturation: "100%",
        };
      case "in-progress":
        return {
          bgColor: "var(--primary-50)",
          borderColor: "var(--primary-300)",
          iconColor: "var(--primary-600)",
          opacity: 1,
          saturation: "100%",
        };
      case "locked":
        return {
          bgColor: "var(--gray-100)",
          borderColor: "var(--gray-200)",
          iconColor: "var(--gray-400)",
          opacity: 0.4,
          saturation: "20%",
        };
    }
  };

  return (
    <div className="w-full overflow-x-auto py-8">
      {/* Gradient Background */}
      <div
        className="min-w-max flex items-center gap-6 px-6"
        style={{
          background: "linear-gradient(135deg, var(--gray-50) 0%, var(--primary-50) 100%)",
          borderRadius: "24px",
          padding: "32px",
        }}
      >
        {regions.map((region, index) => {
          const config = getStatusConfig(region.status);
          const isHovered = hoveredRegion === region.id;
          const canInteract = region.status !== "locked";

          return (
            <div key={region.id} className="flex items-center">
              {/* Region Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={canInteract ? { y: -8, scale: 1.02 } : {}}
                onClick={() => canInteract && onRegionClick(region.id)}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                className="relative rounded-[24px] border-2 transition-all cursor-pointer"
                style={{
                  width: "280px",
                  minHeight: "320px",
                  background: config.bgColor,
                  borderColor: isHovered && canInteract ? config.iconColor : config.borderColor,
                  opacity: config.opacity,
                  filter: `saturate(${config.saturation})`,
                  boxShadow: isHovered && canInteract
                    ? "0 12px 32px rgba(79, 70, 229, 0.16)"
                    : "0 4px 12px rgba(0, 0, 0, 0.08)",
                  padding: "24px",
                }}
              >
                {/* Illustration */}
                <div
                  className="flex items-center justify-center mb-4 rounded-2xl"
                  style={{
                    height: "200px",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
                    fontSize: "80px",
                  }}
                >
                  {region.illustration}
                </div>

                {/* Title */}
                <h3
                  className="text-[var(--gray-900)] mb-2"
                  style={{ fontSize: "18px", fontWeight: 700, lineHeight: "24px" }}
                >
                  {region.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[var(--gray-600)] mb-4"
                  style={{ fontSize: "14px", lineHeight: "20px" }}
                >
                  {region.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-[var(--gray-200)] mb-4" />

                {/* Progress Section */}
                <div>
                  {region.status === "completed" && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={20} style={{ color: config.iconColor }} />
                      <p style={{ fontSize: "14px", fontWeight: 600, color: config.iconColor }}>
                        100% Completo ✓
                      </p>
                    </div>
                  )}

                  {region.status === "in-progress" && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[var(--gray-700)]" style={{ fontSize: "13px", fontWeight: 600 }}>
                          Progresso
                        </p>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: config.iconColor }}>
                          {region.progress}%
                        </p>
                      </div>
                      {/* Progress Bar */}
                      <div className="bg-[var(--gray-200)] rounded-full overflow-hidden mb-2" style={{ height: "6px" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: config.iconColor }}
                          initial={{ width: 0 }}
                          animate={{ width: `${region.progress}%` }}
                          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                        />
                      </div>
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "12px" }}>
                        {region.completedQuests}/{region.totalQuests} quests concluídas
                      </p>

                      {/* Pulsing Animation */}
                      <motion.div
                        className="absolute top-4 right-4"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles size={24} style={{ color: config.iconColor }} />
                      </motion.div>
                    </div>
                  )}

                  {region.status === "locked" && (
                    <div className="flex flex-col items-center text-center">
                      <Lock size={32} style={{ color: config.iconColor }} className="mb-2" />
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "13px", fontWeight: 600 }}>
                        Bloqueado
                      </p>
                      <p className="text-[var(--gray-500)]" style={{ fontSize: "11px" }}>
                        Complete a região anterior
                      </p>
                    </div>
                  )}
                </div>

                {/* Tooltip on Hover for Locked */}
                {region.status === "locked" && isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[var(--gray-900)] text-white rounded-lg whitespace-nowrap"
                    style={{ padding: "8px 12px", fontSize: "12px" }}
                  >
                    Complete "{regions[index - 1]?.title}" para desbloquear
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent"
                      style={{ borderTopColor: "var(--gray-900)" }}
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* Connector Line */}
              {index < regions.length - 1 && (
                <div className="flex items-center justify-center" style={{ width: "48px" }}>
                  <svg width="48" height="4" viewBox="0 0 48 4">
                    <line
                      x1="0"
                      y1="2"
                      x2="48"
                      y2="2"
                      stroke="var(--gray-300)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Scroll Indicator (mobile) */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:hidden">
        <p className="text-[var(--gray-500)]" style={{ fontSize: "12px" }}>
          ← Role para ver todas as regiões →
        </p>
      </div>
    </div>
  );
}
