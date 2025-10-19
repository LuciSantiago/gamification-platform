import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./AdminPanel";
import { AlertCircle } from "lucide-react";

interface BadgeCrudModalProps {
  isOpen: boolean;
  onClose: () => void;
  badge?: Badge | null;
  onCreate: (badge: Omit<Badge, "id">) => void;
  onUpdate: (id: string, badge: Partial<Badge>) => void;
}

const ICON_OPTIONS = [
  { value: "target", label: "🎯 Target", emoji: "🎯" },
  { value: "flame", label: "🔥 Flame", emoji: "🔥" },
  { value: "star", label: "⭐ Star", emoji: "⭐" },
  { value: "award", label: "🏆 Award", emoji: "🏆" },
  { value: "medal", label: "🥇 Medal", emoji: "🥇" },
  { value: "crown", label: "👑 Crown", emoji: "👑" },
  { value: "trophy", label: "🏅 Trophy", emoji: "🏅" },
  { value: "gem", label: "💎 Gem", emoji: "💎" },
  { value: "rocket", label: "🚀 Rocket", emoji: "🚀" },
  { value: "lightning", label: "⚡ Lightning", emoji: "⚡" },
];

export function BadgeCrudModal({
  isOpen,
  onClose,
  badge,
  onCreate,
  onUpdate,
}: BadgeCrudModalProps) {
  const [formData, setFormData] = useState<Omit<Badge, "id">>({
    name: "",
    description: "",
    icon: "target",
    unlocked: false,
    rarity: "common",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (badge) {
      setFormData({
        name: badge.name,
        description: badge.description,
        icon: badge.icon,
        unlocked: badge.unlocked,
        rarity: badge.rarity || "common",
        unlockedAt: badge.unlockedAt,
      });
    } else {
      setFormData({
        name: "",
        description: "",
        icon: "target",
        unlocked: false,
        rarity: "common",
      });
    }
    setErrors({});
  }, [badge, isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.length < 3) {
      newErrors.name = "Nome deve ter no mínimo 3 caracteres";
    } else if (formData.name.length > 30) {
      newErrors.name = "Nome deve ter no máximo 30 caracteres";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descrição é obrigatória";
    } else if (formData.description.length < 10) {
      newErrors.description = "Descrição deve ter no mínimo 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const dataToSave = {
      ...formData,
      unlockedAt: formData.unlocked && !formData.unlockedAt 
        ? new Date().toISOString() 
        : formData.unlockedAt,
    };

    if (badge) {
      onUpdate(badge.id, dataToSave);
    } else {
      onCreate(dataToSave);
    }

    onClose();
  };

  const selectedIcon = ICON_OPTIONS.find(opt => opt.value === formData.icon);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle style={{ fontSize: "24px", fontWeight: 700 }}>
            {badge ? "Editar Badge" : "Novo Badge"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Preview */}
          <div className="bg-[var(--gray-50)] rounded-[16px] border-2 border-[var(--gray-200)] text-center" style={{ padding: "var(--space-6)" }}>
            <div
              className={`mx-auto rounded-full flex items-center justify-center mb-3 ${
                formData.unlocked
                  ? "bg-gradient-to-br from-[var(--secondary-400)] to-[var(--secondary-500)]"
                  : "bg-[var(--gray-300)]"
              }`}
              style={{ width: "80px", height: "80px", fontSize: "40px" }}
            >
              {selectedIcon?.emoji || "🎯"}
            </div>
            <h4 className="text-[var(--gray-900)] mb-1" style={{ fontSize: "18px", fontWeight: 600 }}>
              {formData.name || "Nome do Badge"}
            </h4>
            <p className="text-[var(--gray-600)]" style={{ fontSize: "14px" }}>
              {formData.description || "Descrição do badge"}
            </p>
            {formData.rarity && (
              <span className={`badge badge--${formData.rarity} mt-3 inline-block`}>
                {formData.rarity === "common" && "Comum"}
                {formData.rarity === "rare" && "Raro"}
                {formData.rarity === "epic" && "Épico"}
                {formData.rarity === "legendary" && "Lendário"}
              </span>
            )}
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" style={{ fontSize: "14px", fontWeight: 600 }}>
              Nome do Badge *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Week Warrior"
              style={{ fontSize: "16px" }}
            />
            {errors.name && (
              <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                <AlertCircle size={16} />
                {errors.name}
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
              placeholder="Como desbloquear este badge?"
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

          {/* Icon & Rarity */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="icon" style={{ fontSize: "14px", fontWeight: 600 }}>
                Ícone *
              </Label>
              <Select
                value={formData.icon}
                onValueChange={(value) => setFormData({ ...formData, icon: value })}
              >
                <SelectTrigger id="icon">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ICON_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rarity" style={{ fontSize: "14px", fontWeight: 600 }}>
                Raridade
              </Label>
              <Select
                value={formData.rarity}
                onValueChange={(value) => setFormData({ ...formData, rarity: value as any })}
              >
                <SelectTrigger id="rarity">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="common">Comum</SelectItem>
                  <SelectItem value="rare">Raro</SelectItem>
                  <SelectItem value="epic">Épico</SelectItem>
                  <SelectItem value="legendary">Lendário</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Unlocked Status */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="unlocked"
              checked={formData.unlocked}
              onChange={(e) => setFormData({ ...formData, unlocked: e.target.checked })}
              className="w-5 h-5 rounded border-2 border-[var(--gray-300)]"
            />
            <Label htmlFor="unlocked" style={{ fontSize: "14px", fontWeight: 600 }}>
              Badge desbloqueado
            </Label>
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
              {badge ? "Salvar Alterações" : "Criar Badge"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
