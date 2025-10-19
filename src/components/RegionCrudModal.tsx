import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { RoadmapRegion } from "./AdminPanel";
import { AlertCircle } from "lucide-react";

interface RegionCrudModalProps {
  isOpen: boolean;
  onClose: () => void;
  region?: RoadmapRegion | null;
  onCreate: (region: Omit<RoadmapRegion, "id">) => void;
  onUpdate: (id: string, region: Partial<RoadmapRegion>) => void;
}

const EMOJI_OPTIONS = [
  { value: "🎨", label: "🎨 Arte" },
  { value: "🔍", label: "🔍 Pesquisa" },
  { value: "💎", label: "💎 Diamante" },
  { value: "🚀", label: "🚀 Foguete" },
  { value: "📚", label: "📚 Livros" },
  { value: "💡", label: "💡 Lâmpada" },
  { value: "🎯", label: "🎯 Alvo" },
  { value: "⚡", label: "⚡ Raio" },
  { value: "🌟", label: "🌟 Estrela" },
  { value: "🏆", label: "🏆 Troféu" },
];

export function RegionCrudModal({
  isOpen,
  onClose,
  region,
  onCreate,
  onUpdate,
}: RegionCrudModalProps) {
  const [formData, setFormData] = useState<Omit<RoadmapRegion, "id">>({
    title: "",
    description: "",
    progress: 0,
    status: "locked",
    illustration: "🎨",
    totalQuests: 10,
    completedQuests: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (region) {
      setFormData({
        title: region.title,
        description: region.description,
        progress: region.progress,
        status: region.status,
        illustration: region.illustration,
        totalQuests: region.totalQuests,
        completedQuests: region.completedQuests,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        progress: 0,
        status: "locked",
        illustration: "🎨",
        totalQuests: 10,
        completedQuests: 0,
      });
    }
    setErrors({});
  }, [region, isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Título é obrigatório";
    } else if (formData.title.length < 5) {
      newErrors.title = "Título deve ter no mínimo 5 caracteres";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descrição é obrigatória";
    } else if (formData.description.length < 10) {
      newErrors.description = "Descrição deve ter no mínimo 10 caracteres";
    }

    if (formData.totalQuests <= 0) {
      newErrors.totalQuests = "Total de quests deve ser maior que 0";
    }

    if (formData.completedQuests < 0) {
      newErrors.completedQuests = "Quests concluídas não pode ser negativo";
    }

    if (formData.completedQuests > formData.totalQuests) {
      newErrors.completedQuests = "Quests concluídas não pode ser maior que o total";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Calculate progress
    const calculatedProgress = formData.totalQuests > 0
      ? Math.round((formData.completedQuests / formData.totalQuests) * 100)
      : 0;

    const dataToSave = {
      ...formData,
      progress: calculatedProgress,
    };

    if (region) {
      onUpdate(region.id, dataToSave);
    } else {
      onCreate(dataToSave);
    }

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle style={{ fontSize: "24px", fontWeight: 700 }}>
            {region ? "Editar Região" : "Nova Região"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Preview */}
          <div 
            className="bg-white rounded-[16px] border-2 border-[var(--gray-200)]" 
            style={{ padding: "var(--space-6)" }}
          >
            <div className="flex items-start gap-4">
              <div style={{ fontSize: "48px", lineHeight: 1 }}>
                {formData.illustration}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-[var(--gray-900)]" style={{ fontSize: "18px", fontWeight: 600 }}>
                    {formData.title || "Título da Região"}
                  </h4>
                  <span className={`badge badge--${
                    formData.status === "completed" ? "success" :
                    formData.status === "in-progress" ? "primary" : "gray"
                  }`}>
                    {formData.status === "completed" && "Concluída"}
                    {formData.status === "in-progress" && "Em Progresso"}
                    {formData.status === "locked" && "Bloqueada"}
                  </span>
                </div>
                <p className="text-[var(--gray-600)] mb-3" style={{ fontSize: "14px" }}>
                  {formData.description || "Descrição da região"}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 500 }}>
                    {formData.completedQuests}/{formData.totalQuests} quests
                  </span>
                  <div className="flex-1 max-w-xs">
                    <div className="bg-[var(--gray-200)] rounded-full overflow-hidden" style={{ height: "8px" }}>
                      <div
                        className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] h-full transition-all"
                        style={{ width: `${formData.totalQuests > 0 ? (formData.completedQuests / formData.totalQuests) * 100 : 0}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 600 }}>
                    {formData.totalQuests > 0 ? Math.round((formData.completedQuests / formData.totalQuests) * 100) : 0}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" style={{ fontSize: "14px", fontWeight: 600 }}>
              Título *
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Ex: Fundamentos de UX/UI"
              style={{ fontSize: "16px" }}
            />
            {errors.title && (
              <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                <AlertCircle size={16} />
                {errors.title}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" style={{ fontSize: "14px", fontWeight: 600 }}>
              Descrição *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Descreva o que será aprendido nesta região..."
              rows={3}
              style={{ fontSize: "16px" }}
            />
            {errors.description && (
              <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                <AlertCircle size={16} />
                {errors.description}
              </p>
            )}
          </div>

          {/* Illustration & Status */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="illustration" style={{ fontSize: "14px", fontWeight: 600 }}>
                Ilustração (Emoji) *
              </Label>
              <Select
                value={formData.illustration}
                onValueChange={(value) => setFormData({ ...formData, illustration: value })}
              >
                <SelectTrigger id="illustration">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {EMOJI_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status" style={{ fontSize: "14px", fontWeight: 600 }}>
                Status *
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value as any })}
              >
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="locked">🔒 Bloqueada</SelectItem>
                  <SelectItem value="in-progress">⏳ Em Progresso</SelectItem>
                  <SelectItem value="completed">✅ Concluída</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Total Quests & Completed Quests */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="totalQuests" style={{ fontSize: "14px", fontWeight: 600 }}>
                Total de Quests *
              </Label>
              <Input
                id="totalQuests"
                type="number"
                min="1"
                max="100"
                value={formData.totalQuests}
                onChange={(e) => setFormData({ ...formData, totalQuests: parseInt(e.target.value) || 0 })}
                style={{ fontSize: "16px" }}
              />
              {errors.totalQuests && (
                <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                  <AlertCircle size={16} />
                  {errors.totalQuests}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="completedQuests" style={{ fontSize: "14px", fontWeight: 600 }}>
                Quests Concluídas *
              </Label>
              <Input
                id="completedQuests"
                type="number"
                min="0"
                max={formData.totalQuests}
                value={formData.completedQuests}
                onChange={(e) => setFormData({ ...formData, completedQuests: parseInt(e.target.value) || 0 })}
                style={{ fontSize: "16px" }}
              />
              {errors.completedQuests && (
                <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                  <AlertCircle size={16} />
                  {errors.completedQuests}
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t-2 border-[var(--gray-100)]">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
              style={{ padding: "12px 24px" }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-primary flex-1"
              style={{ padding: "12px 24px" }}
            >
              {region ? "Salvar Alterações" : "Criar Região"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
