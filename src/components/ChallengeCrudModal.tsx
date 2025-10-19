import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Challenge } from "./AdminPanel";
import { AlertCircle } from "lucide-react";

interface ChallengeCrudModalProps {
  isOpen: boolean;
  onClose: () => void;
  challenge?: Challenge | null;
  onCreate: (challenge: Omit<Challenge, "id">) => void;
  onUpdate: (id: string, challenge: Partial<Challenge>) => void;
}

export function ChallengeCrudModal({
  isOpen,
  onClose,
  challenge,
  onCreate,
  onUpdate,
}: ChallengeCrudModalProps) {
  const [formData, setFormData] = useState<Omit<Challenge, "id">>({
    title: "",
    description: "",
    progress: 0,
    total: 10,
    reward: 100,
    daysRemaining: 7,
    isActive: false,
    type: "weekly",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (challenge) {
      setFormData({
        title: challenge.title,
        description: challenge.description,
        progress: challenge.progress,
        total: challenge.total,
        reward: challenge.reward,
        daysRemaining: challenge.daysRemaining,
        isActive: challenge.isActive,
        type: challenge.type,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        progress: 0,
        total: 10,
        reward: 100,
        daysRemaining: 7,
        isActive: false,
        type: "weekly",
      });
    }
    setErrors({});
  }, [challenge, isOpen]);

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

    if (formData.total <= 0) {
      newErrors.total = "Meta deve ser maior que 0";
    }

    if (formData.progress < 0) {
      newErrors.progress = "Progresso não pode ser negativo";
    }

    if (formData.progress > formData.total) {
      newErrors.progress = "Progresso não pode ser maior que a meta";
    }

    if (formData.reward <= 0) {
      newErrors.reward = "Recompensa deve ser maior que 0";
    }

    if (formData.daysRemaining < 0) {
      newErrors.daysRemaining = "Dias restantes não pode ser negativo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (challenge) {
      onUpdate(challenge.id, formData);
    } else {
      onCreate(formData);
    }

    onClose();
  };

  const progressPercentage = formData.total > 0 
    ? (formData.progress / formData.total) * 100 
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle style={{ fontSize: "24px", fontWeight: 700 }}>
            {challenge ? "Editar Desafio" : "Novo Desafio"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Preview */}
          <div 
            className={`bg-white rounded-[16px] border-2 transition-all ${
              formData.isActive ? "border-[var(--primary-300)]" : "border-[var(--gray-200)]"
            }`}
            style={{ padding: "var(--space-6)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[var(--gray-900)] flex-1" style={{ fontSize: "18px", fontWeight: 600 }}>
                {formData.title || "Título do Desafio"}
              </h4>
              {formData.isActive && (
                <span className="badge badge--primary">Ativo</span>
              )}
            </div>
            <p className="text-[var(--gray-600)] mb-4" style={{ fontSize: "14px" }}>
              {formData.description || "Descrição do desafio"}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 500 }}>
                    Progresso
                  </span>
                  <span className="text-[var(--gray-700)]" style={{ fontSize: "14px", fontWeight: 600 }}>
                    {formData.progress}/{formData.total}
                  </span>
                </div>
                <div className="bg-[var(--gray-200)] rounded-full overflow-hidden" style={{ height: "8px" }}>
                  <div
                    className="bg-gradient-to-r from-[var(--success-500)] to-[var(--success-600)] h-full transition-all"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
              <div className="text-right">
                <p className="text-[var(--gray-600)] mb-1" style={{ fontSize: "12px" }}>
                  Recompensa
                </p>
                <p className="text-[var(--secondary-500)]" style={{ fontSize: "20px", fontWeight: 700 }}>
                  +{formData.reward} XP
                </p>
              </div>
              <div className="text-right">
                <p className="text-[var(--gray-600)] mb-1" style={{ fontSize: "12px" }}>
                  Tempo Restante
                </p>
                <p className="text-[var(--gray-900)]" style={{ fontSize: "20px", fontWeight: 700 }}>
                  {formData.daysRemaining}d
                </p>
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
              placeholder="Ex: Audio Master"
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
              placeholder="Descreva o objetivo do desafio..."
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

          {/* Type & Active Status */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type" style={{ fontSize: "14px", fontWeight: 600 }}>
                Tipo de Desafio *
              </Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value as any })}
              >
                <SelectTrigger id="type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">📅 Semanal</SelectItem>
                  <SelectItem value="monthly">🗓️ Mensal</SelectItem>
                  <SelectItem value="special">⭐ Especial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="daysRemaining" style={{ fontSize: "14px", fontWeight: 600 }}>
                Dias Restantes *
              </Label>
              <Input
                id="daysRemaining"
                type="number"
                min="0"
                max="365"
                value={formData.daysRemaining}
                onChange={(e) => setFormData({ ...formData, daysRemaining: parseInt(e.target.value) || 0 })}
                style={{ fontSize: "16px" }}
              />
              {errors.daysRemaining && (
                <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                  <AlertCircle size={16} />
                  {errors.daysRemaining}
                </p>
              )}
            </div>
          </div>

          {/* Progress & Total */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="progress" style={{ fontSize: "14px", fontWeight: 600 }}>
                Progresso Atual *
              </Label>
              <Input
                id="progress"
                type="number"
                min="0"
                max={formData.total}
                value={formData.progress}
                onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) || 0 })}
                style={{ fontSize: "16px" }}
              />
              {errors.progress && (
                <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                  <AlertCircle size={16} />
                  {errors.progress}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="total" style={{ fontSize: "14px", fontWeight: 600 }}>
                Meta Total *
              </Label>
              <Input
                id="total"
                type="number"
                min="1"
                max="1000"
                value={formData.total}
                onChange={(e) => setFormData({ ...formData, total: parseInt(e.target.value) || 0 })}
                style={{ fontSize: "16px" }}
              />
              {errors.total && (
                <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                  <AlertCircle size={16} />
                  {errors.total}
                </p>
              )}
            </div>
          </div>

          {/* Reward */}
          <div className="space-y-2">
            <Label htmlFor="reward" style={{ fontSize: "14px", fontWeight: 600 }}>
              Recompensa em XP *
            </Label>
            <Input
              id="reward"
              type="number"
              min="1"
              max="10000"
              value={formData.reward}
              onChange={(e) => setFormData({ ...formData, reward: parseInt(e.target.value) || 0 })}
              style={{ fontSize: "16px" }}
            />
            {errors.reward && (
              <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                <AlertCircle size={16} />
                {errors.reward}
              </p>
            )}
          </div>

          {/* Active Status */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="w-5 h-5 rounded border-2 border-[var(--gray-300)]"
            />
            <Label htmlFor="isActive" style={{ fontSize: "14px", fontWeight: 600 }}>
              Desafio ativo (visível para usuários)
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
              {challenge ? "Salvar Alterações" : "Criar Desafio"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
