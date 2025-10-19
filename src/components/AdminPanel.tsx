import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Settings,
  Database,
  Target,
  Award,
  Map,
  TrendingUp,
  Upload,
  Download,
  Trash2,
  Plus,
  Save,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner@2.0.3";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { QuestType } from "./QuestCard";
import { QuestCrudModal } from "./QuestCrudModal";
import { BadgeCrudModal } from "./BadgeCrudModal";
import { RegionCrudModal } from "./RegionCrudModal";
import { ChallengeCrudModal } from "./ChallengeCrudModal";
import { UserProfileEditor } from "./UserProfileEditor";

export interface Quest {
  id: string;
  title: string;
  type: QuestType;
  duration: number;
  xp: number;
  completed: boolean;
  description?: string;
  category?: string;
  difficulty?: "easy" | "medium" | "hard";
  region?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  rarity?: "common" | "rare" | "epic" | "legendary";
  unlockedAt?: string;
}

export interface RoadmapRegion {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: "locked" | "in-progress" | "completed";
  illustration: string;
  totalQuests: number;
  completedQuests: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: number;
  daysRemaining: number;
  isActive: boolean;
  type: "weekly" | "monthly" | "special";
}

export interface UserProfile {
  name: string;
  email?: string;
  avatar?: string;
  goal?: string;
  interests?: string[];
  dailyGoalMinutes?: number;
}

interface AdminPanelProps {
  quests: Quest[];
  badges: Badge[];
  regions: RoadmapRegion[];
  challenges: Challenge[];
  userProfile: UserProfile;
  onUpdateQuests: (quests: Quest[]) => void;
  onUpdateBadges: (badges: Badge[]) => void;
  onUpdateRegions: (regions: RoadmapRegion[]) => void;
  onUpdateChallenges: (challenges: Challenge[]) => void;
  onUpdateUserProfile: (profile: UserProfile) => void;
  onResetAll: () => void;
}

export function AdminPanel({
  quests,
  badges,
  regions,
  challenges,
  userProfile,
  onUpdateQuests,
  onUpdateBadges,
  onUpdateRegions,
  onUpdateChallenges,
  onUpdateUserProfile,
  onResetAll,
}: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState("quests");
  const [showQuestModal, setShowQuestModal] = useState(false);
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [showRegionModal, setShowRegionModal] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Export Data
  const handleExportData = () => {
    const data = {
      quests,
      badges,
      regions,
      challenges,
      userProfile,
      exportedAt: new Date().toISOString(),
      version: "1.0",
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `easy-goal-backup-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Dados exportados com sucesso! 📦", {
      description: "Arquivo salvo na pasta de downloads",
    });
  };

  // Import Data
  const handleImportData = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result as string);

          // Validate data structure
          if (!data.quests || !data.badges || !data.regions) {
            throw new Error("Formato de arquivo inválido");
          }

          // Import data
          if (data.quests) onUpdateQuests(data.quests);
          if (data.badges) onUpdateBadges(data.badges);
          if (data.regions) onUpdateRegions(data.regions);
          if (data.challenges) onUpdateChallenges(data.challenges);
          if (data.userProfile) onUpdateUserProfile(data.userProfile);

          toast.success("Dados importados com sucesso! 🎉", {
            description: `${data.quests.length} quests, ${data.badges.length} badges importados`,
          });
        } catch (error) {
          toast.error("Erro ao importar dados", {
            description: "Verifique se o arquivo é válido",
          });
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // Quest CRUD handlers
  const handleCreateQuest = (quest: Omit<Quest, "id">) => {
    const newQuest = {
      ...quest,
      id: `quest-${Date.now()}`,
    };
    onUpdateQuests([...quests, newQuest]);
    toast.success("Quest criada com sucesso! 🎯");
  };

  const handleUpdateQuest = (id: string, updatedQuest: Partial<Quest>) => {
    onUpdateQuests(
      quests.map((q) => (q.id === id ? { ...q, ...updatedQuest } : q))
    );
    toast.success("Quest atualizada! ✅");
  };

  const handleDeleteQuest = (id: string) => {
    if (window.confirm("Tem certeza que deseja deletar esta quest?")) {
      onUpdateQuests(quests.filter((q) => q.id !== id));
      toast.success("Quest deletada");
    }
  };

  // Badge CRUD handlers
  const handleCreateBadge = (badge: Omit<Badge, "id">) => {
    const newBadge = {
      ...badge,
      id: `badge-${Date.now()}`,
    };
    onUpdateBadges([...badges, newBadge]);
    toast.success("Badge criado com sucesso! 🏆");
  };

  const handleUpdateBadge = (id: string, updatedBadge: Partial<Badge>) => {
    onUpdateBadges(
      badges.map((b) => (b.id === id ? { ...b, ...updatedBadge } : b))
    );
    toast.success("Badge atualizado! ✅");
  };

  const handleDeleteBadge = (id: string) => {
    if (window.confirm("Tem certeza que deseja deletar este badge?")) {
      onUpdateBadges(badges.filter((b) => b.id !== id));
      toast.success("Badge deletado");
    }
  };

  // Region CRUD handlers
  const handleCreateRegion = (region: Omit<RoadmapRegion, "id">) => {
    const newRegion = {
      ...region,
      id: `region-${Date.now()}`,
    };
    onUpdateRegions([...regions, newRegion]);
    toast.success("Região criada com sucesso! 🗺️");
  };

  const handleUpdateRegion = (
    id: string,
    updatedRegion: Partial<RoadmapRegion>
  ) => {
    onUpdateRegions(
      regions.map((r) => (r.id === id ? { ...r, ...updatedRegion } : r))
    );
    toast.success("Região atualizada! ✅");
  };

  const handleDeleteRegion = (id: string) => {
    if (window.confirm("Tem certeza que deseja deletar esta região?")) {
      onUpdateRegions(regions.filter((r) => r.id !== id));
      toast.success("Região deletada");
    }
  };

  // Challenge CRUD handlers
  const handleCreateChallenge = (challenge: Omit<Challenge, "id">) => {
    const newChallenge = {
      ...challenge,
      id: `challenge-${Date.now()}`,
    };
    onUpdateChallenges([...challenges, newChallenge]);
    toast.success("Desafio criado com sucesso! 🎯");
  };

  const handleUpdateChallenge = (
    id: string,
    updatedChallenge: Partial<Challenge>
  ) => {
    onUpdateChallenges(
      challenges.map((c) => (c.id === id ? { ...c, ...updatedChallenge } : c))
    );
    toast.success("Desafio atualizado! ✅");
  };

  const handleDeleteChallenge = (id: string) => {
    if (window.confirm("Tem certeza que deseja deletar este desafio?")) {
      onUpdateChallenges(challenges.filter((c) => c.id !== id));
      toast.success("Desafio deletado");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2
            className="text-[var(--gray-900)] mb-2"
            style={{ fontSize: "28px", lineHeight: "36px", fontWeight: 700 }}
          >
            <Settings className="inline-block mr-3" size={32} />
            Administração & Configurações
          </h2>
          <p
            className="text-[var(--gray-600)]"
            style={{ fontSize: "16px", lineHeight: "24px" }}
          >
            Gerencie quests, badges, regiões e desafios da plataforma
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleImportData}
            className="btn-secondary flex items-center gap-2"
            style={{ padding: "12px 20px" }}
          >
            <Upload size={20} />
            <span>Importar</span>
          </button>
          <button
            onClick={handleExportData}
            className="btn-secondary flex items-center gap-2"
            style={{ padding: "12px 20px" }}
          >
            <Download size={20} />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className="bg-white rounded-[16px] border-2 border-[var(--gray-100)]"
          style={{ padding: "var(--space-6)" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Target size={24} className="text-[var(--quest-video)]" />
            <span
              className="text-[var(--gray-700)]"
              style={{ fontSize: "14px" }}
            >
              Quests
            </span>
          </div>
          <p
            className="text-[var(--gray-900)]"
            style={{ fontSize: "32px", fontWeight: 700 }}
          >
            {quests.length}
          </p>
        </div>

        <div
          className="bg-white rounded-[16px] border-2 border-[var(--gray-100)]"
          style={{ padding: "var(--space-6)" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Award size={24} className="text-[var(--secondary-500)]" />
            <span
              className="text-[var(--gray-700)]"
              style={{ fontSize: "14px" }}
            >
              Badges
            </span>
          </div>
          <p
            className="text-[var(--gray-900)]"
            style={{ fontSize: "32px", fontWeight: 700 }}
          >
            {badges.length}
          </p>
        </div>

        <div
          className="bg-white rounded-[16px] border-2 border-[var(--gray-100)]"
          style={{ padding: "var(--space-6)" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Map size={24} className="text-[var(--primary-500)]" />
            <span
              className="text-[var(--gray-700)]"
              style={{ fontSize: "14px" }}
            >
              Regiões
            </span>
          </div>
          <p
            className="text-[var(--gray-900)]"
            style={{ fontSize: "32px", fontWeight: 700 }}
          >
            {regions.length}
          </p>
        </div>

        <div
          className="bg-white rounded-[16px] border-2 border-[var(--gray-100)]"
          style={{ padding: "var(--space-6)" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp size={24} className="text-[var(--success-500)]" />
            <span
              className="text-[var(--gray-700)]"
              style={{ fontSize: "14px" }}
            >
              Desafios
            </span>
          </div>
          <p
            className="text-[var(--gray-900)]"
            style={{ fontSize: "32px", fontWeight: 700 }}
          >
            {challenges.length}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="quests">Quests</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="regions">Regiões</TabsTrigger>
          <TabsTrigger value="challenges">Desafios</TabsTrigger>
          <TabsTrigger value="profile">Perfil</TabsTrigger>
        </TabsList>

        {/* Quests Tab */}
        <TabsContent value="quests" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3
              className="text-[var(--gray-900)]"
              style={{ fontSize: "20px", fontWeight: 600 }}
            >
              Gerenciar Quests ({quests.length})
            </h3>
            <button
              onClick={() => {
                setEditingItem(null);
                setShowQuestModal(true);
              }}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              <span>Nova Quest</span>
            </button>
          </div>

          <div className="grid gap-3">
            {quests.map((quest) => (
              <div
                key={quest.id}
                className="bg-white rounded-[16px] border-2 border-[var(--gray-100)] hover:border-[var(--primary-300)] transition-all"
                style={{ padding: "var(--space-4)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`rounded-lg flex items-center justify-center quest-icon--${quest.type}`}
                      style={{ width: "40px", height: "40px" }}
                    >
                      {quest.type === "video" && "📹"}
                      {quest.type === "reading" && "📖"}
                      {quest.type === "audio" && "🎧"}
                      {quest.type === "practice" && "✍️"}
                      {quest.type === "social" && "💬"}
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-[var(--gray-900)]"
                        style={{ fontSize: "16px", fontWeight: 600 }}
                      >
                        {quest.title}
                      </h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span
                          className="text-[var(--gray-600)]"
                          style={{ fontSize: "14px" }}
                        >
                          ⏱ {quest.duration} min
                        </span>
                        <span
                          className="text-[var(--gray-600)]"
                          style={{ fontSize: "14px" }}
                        >
                          ⚡ {quest.xp} XP
                        </span>
                        {quest.completed && (
                          <span className="badge badge--success">
                            <CheckCircle2 size={14} />
                            Concluída
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingItem(quest);
                        setShowQuestModal(true);
                      }}
                      className="btn-secondary"
                      style={{ padding: "8px 16px", fontSize: "14px" }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteQuest(quest.id)}
                      className="text-[var(--error-500)] hover:text-[var(--error-700)] transition-colors"
                      style={{ padding: "8px" }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {quests.length === 0 && (
              <div
                className="bg-[var(--gray-50)] rounded-[16px] border-2 border-dashed border-[var(--gray-300)] text-center"
                style={{ padding: "var(--space-12)" }}
              >
                <Target size={48} className="text-[var(--gray-400)] mx-auto mb-4" />
                <p
                  className="text-[var(--gray-600)] mb-4"
                  style={{ fontSize: "16px" }}
                >
                  Nenhuma quest cadastrada
                </p>
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setShowQuestModal(true);
                  }}
                  className="btn-primary"
                >
                  Criar primeira quest
                </button>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Badges Tab */}
        <TabsContent value="badges" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3
              className="text-[var(--gray-900)]"
              style={{ fontSize: "20px", fontWeight: 600 }}
            >
              Gerenciar Badges ({badges.length})
            </h3>
            <button
              onClick={() => {
                setEditingItem(null);
                setShowBadgeModal(true);
              }}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              <span>Novo Badge</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`bg-white rounded-[16px] border-2 transition-all ${
                  badge.unlocked
                    ? "border-[var(--secondary-300)]"
                    : "border-[var(--gray-200)] opacity-60"
                }`}
                style={{ padding: "var(--space-6)" }}
              >
                <div className="text-center mb-4">
                  <div
                    className={`mx-auto rounded-full flex items-center justify-center mb-3 ${
                      badge.unlocked
                        ? "bg-gradient-to-br from-[var(--secondary-400)] to-[var(--secondary-500)]"
                        : "bg-[var(--gray-300)]"
                    }`}
                    style={{ width: "64px", height: "64px", fontSize: "32px" }}
                  >
                    {badge.icon === "target" && "🎯"}
                    {badge.icon === "flame" && "🔥"}
                    {badge.icon === "star" && "⭐"}
                    {badge.icon === "award" && "🏆"}
                    {badge.icon === "medal" && "🥇"}
                    {badge.icon === "crown" && "👑"}
                  </div>
                  <h4
                    className="text-[var(--gray-900)] mb-1"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    {badge.name}
                  </h4>
                  <p
                    className="text-[var(--gray-600)]"
                    style={{ fontSize: "14px" }}
                  >
                    {badge.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingItem(badge);
                      setShowBadgeModal(true);
                    }}
                    className="btn-secondary flex-1"
                    style={{ padding: "6px 12px", fontSize: "12px" }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteBadge(badge.id)}
                    className="text-[var(--error-500)] hover:text-[var(--error-700)] transition-colors"
                    style={{ padding: "6px" }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            {badges.length === 0 && (
              <div
                className="col-span-full bg-[var(--gray-50)] rounded-[16px] border-2 border-dashed border-[var(--gray-300)] text-center"
                style={{ padding: "var(--space-12)" }}
              >
                <Award size={48} className="text-[var(--gray-400)] mx-auto mb-4" />
                <p
                  className="text-[var(--gray-600)] mb-4"
                  style={{ fontSize: "16px" }}
                >
                  Nenhum badge cadastrado
                </p>
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setShowBadgeModal(true);
                  }}
                  className="btn-primary"
                >
                  Criar primeiro badge
                </button>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Regions Tab */}
        <TabsContent value="regions" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3
              className="text-[var(--gray-900)]"
              style={{ fontSize: "20px", fontWeight: 600 }}
            >
              Gerenciar Regiões ({regions.length})
            </h3>
            <button
              onClick={() => {
                setEditingItem(null);
                setShowRegionModal(true);
              }}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              <span>Nova Região</span>
            </button>
          </div>

          <div className="grid gap-4">
            {regions.map((region) => (
              <div
                key={region.id}
                className="bg-white rounded-[16px] border-2 border-[var(--gray-100)] hover:border-[var(--primary-300)] transition-all"
                style={{ padding: "var(--space-6)" }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className="text-4xl"
                      style={{ fontSize: "48px", lineHeight: 1 }}
                    >
                      {region.illustration}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4
                          className="text-[var(--gray-900)]"
                          style={{ fontSize: "18px", fontWeight: 600 }}
                        >
                          {region.title}
                        </h4>
                        <span
                          className={`badge ${
                            region.status === "completed"
                              ? "badge--success"
                              : region.status === "in-progress"
                              ? "badge--primary"
                              : "badge--gray"
                          }`}
                        >
                          {region.status === "completed" && "Concluída"}
                          {region.status === "in-progress" && "Em Progresso"}
                          {region.status === "locked" && "Bloqueada"}
                        </span>
                      </div>
                      <p
                        className="text-[var(--gray-600)] mb-3"
                        style={{ fontSize: "14px" }}
                      >
                        {region.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <span
                          className="text-[var(--gray-700)]"
                          style={{ fontSize: "14px", fontWeight: 500 }}
                        >
                          {region.completedQuests}/{region.totalQuests} quests
                        </span>
                        <div className="flex-1 max-w-xs">
                          <div
                            className="bg-[var(--gray-200)] rounded-full overflow-hidden"
                            style={{ height: "8px" }}
                          >
                            <div
                              className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] h-full transition-all"
                              style={{ width: `${region.progress}%` }}
                            />
                          </div>
                        </div>
                        <span
                          className="text-[var(--gray-700)]"
                          style={{ fontSize: "14px", fontWeight: 600 }}
                        >
                          {region.progress}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingItem(region);
                        setShowRegionModal(true);
                      }}
                      className="btn-secondary"
                      style={{ padding: "8px 16px", fontSize: "14px" }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteRegion(region.id)}
                      className="text-[var(--error-500)] hover:text-[var(--error-700)] transition-colors"
                      style={{ padding: "8px" }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {regions.length === 0 && (
              <div
                className="bg-[var(--gray-50)] rounded-[16px] border-2 border-dashed border-[var(--gray-300)] text-center"
                style={{ padding: "var(--space-12)" }}
              >
                <Map size={48} className="text-[var(--gray-400)] mx-auto mb-4" />
                <p
                  className="text-[var(--gray-600)] mb-4"
                  style={{ fontSize: "16px" }}
                >
                  Nenhuma região cadastrada
                </p>
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setShowRegionModal(true);
                  }}
                  className="btn-primary"
                >
                  Criar primeira região
                </button>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Challenges Tab */}
        <TabsContent value="challenges" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3
              className="text-[var(--gray-900)]"
              style={{ fontSize: "20px", fontWeight: 600 }}
            >
              Gerenciar Desafios ({challenges.length})
            </h3>
            <button
              onClick={() => {
                setEditingItem(null);
                setShowChallengeModal(true);
              }}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              <span>Novo Desafio</span>
            </button>
          </div>

          <div className="grid gap-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`bg-white rounded-[16px] border-2 transition-all ${
                  challenge.isActive
                    ? "border-[var(--primary-300)]"
                    : "border-[var(--gray-100)]"
                }`}
                style={{ padding: "var(--space-6)" }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4
                        className="text-[var(--gray-900)]"
                        style={{ fontSize: "18px", fontWeight: 600 }}
                      >
                        {challenge.title}
                      </h4>
                      {challenge.isActive && (
                        <span className="badge badge--primary">Ativo</span>
                      )}
                    </div>
                    <p
                      className="text-[var(--gray-600)] mb-3"
                      style={{ fontSize: "14px" }}
                    >
                      {challenge.description}
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex-1 max-w-sm">
                        <div className="flex justify-between mb-2">
                          <span
                            className="text-[var(--gray-700)]"
                            style={{ fontSize: "14px", fontWeight: 500 }}
                          >
                            Progresso
                          </span>
                          <span
                            className="text-[var(--gray-700)]"
                            style={{ fontSize: "14px", fontWeight: 600 }}
                          >
                            {challenge.progress}/{challenge.total}
                          </span>
                        </div>
                        <div
                          className="bg-[var(--gray-200)] rounded-full overflow-hidden"
                          style={{ height: "8px" }}
                        >
                          <div
                            className="bg-gradient-to-r from-[var(--success-500)] to-[var(--success-600)] h-full transition-all"
                            style={{
                              width: `${
                                (challenge.progress / challenge.total) * 100
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-[var(--gray-600)] mb-1"
                          style={{ fontSize: "12px" }}
                        >
                          Recompensa
                        </p>
                        <p
                          className="text-[var(--secondary-500)]"
                          style={{ fontSize: "20px", fontWeight: 700 }}
                        >
                          +{challenge.reward} XP
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-[var(--gray-600)] mb-1"
                          style={{ fontSize: "12px" }}
                        >
                          Tempo Restante
                        </p>
                        <p
                          className="text-[var(--gray-900)]"
                          style={{ fontSize: "20px", fontWeight: 700 }}
                        >
                          {challenge.daysRemaining}d
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => {
                        setEditingItem(challenge);
                        setShowChallengeModal(true);
                      }}
                      className="btn-secondary"
                      style={{ padding: "8px 16px", fontSize: "14px" }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteChallenge(challenge.id)}
                      className="text-[var(--error-500)] hover:text-[var(--error-700)] transition-colors"
                      style={{ padding: "8px" }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {challenges.length === 0 && (
              <div
                className="bg-[var(--gray-50)] rounded-[16px] border-2 border-dashed border-[var(--gray-300)] text-center"
                style={{ padding: "var(--space-12)" }}
              >
                <TrendingUp size={48} className="text-[var(--gray-400)} mx-auto mb-4" />
                <p
                  className="text-[var(--gray-600)] mb-4"
                  style={{ fontSize: "16px" }}
                >
                  Nenhum desafio cadastrado
                </p>
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setShowChallengeModal(true);
                  }}
                  className="btn-primary"
                >
                  Criar primeiro desafio
                </button>
              </div>
            )}
          </div>
        </TabsContent>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <UserProfileEditor
            profile={userProfile}
            onUpdate={onUpdateUserProfile}
          />
        </TabsContent>
      </Tabs>

      {/* Danger Zone */}
      <div
        className="bg-[var(--error-50)] rounded-[16px] border-2 border-[var(--error-200)]"
        style={{ padding: "var(--space-6)" }}
      >
        <div className="flex items-start gap-4">
          <AlertCircle size={24} className="text-[var(--error-600)] mt-1" />
          <div className="flex-1">
            <h4
              className="text-[var(--error-900)] mb-2"
              style={{ fontSize: "16px", fontWeight: 600 }}
            >
              Zona de Perigo
            </h4>
            <p
              className="text-[var(--error-700)] mb-4"
              style={{ fontSize: "14px" }}
            >
              Resetar todos os dados irá deletar permanentemente quests, badges,
              regiões, desafios e todo o progresso do usuário. Esta ação não
              pode ser desfeita.
            </p>
            <button
              onClick={onResetAll}
              className="bg-[var(--error-500)] hover:bg-[var(--error-600)] text-white rounded-full transition-colors"
              style={{ padding: "10px 20px", fontSize: "14px", fontWeight: 600 }}
            >
              <Trash2 size={16} className="inline-block mr-2" />
              Resetar Todos os Dados
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <QuestCrudModal
        isOpen={showQuestModal}
        onClose={() => {
          setShowQuestModal(false);
          setEditingItem(null);
        }}
        quest={editingItem}
        onCreate={handleCreateQuest}
        onUpdate={handleUpdateQuest}
      />

      <BadgeCrudModal
        isOpen={showBadgeModal}
        onClose={() => {
          setShowBadgeModal(false);
          setEditingItem(null);
        }}
        badge={editingItem}
        onCreate={handleCreateBadge}
        onUpdate={handleUpdateBadge}
      />

      <RegionCrudModal
        isOpen={showRegionModal}
        onClose={() => {
          setShowRegionModal(false);
          setEditingItem(null);
        }}
        region={editingItem}
        onCreate={handleCreateRegion}
        onUpdate={handleUpdateRegion}
      />

      <ChallengeCrudModal
        isOpen={showChallengeModal}
        onClose={() => {
          setShowChallengeModal(false);
          setEditingItem(null);
        }}
        challenge={editingItem}
        onCreate={handleCreateChallenge}
        onUpdate={handleUpdateChallenge}
      />
    </div>
  );
}
