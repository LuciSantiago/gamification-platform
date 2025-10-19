import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { QuestType } from "./QuestCard";
import { Quest } from "./AdminPanel";
import { AlertCircle } from "lucide-react";

interface QuestCrudModalProps {
  isOpen: boolean;
  onClose: () => void;
  quest?: Quest | null;
  onCreate: (quest: Omit<Quest, "id">) => void;
  onUpdate: (id: string, quest: Partial<Quest>) => void;
}

export function QuestCrudModal({
  isOpen,
  onClose,
  quest,
  onCreate,
  onUpdate,
}: QuestCrudModalProps) {
  const [formData, setFormData] = useState<Omit<Quest, "id">>({
    title: "",
    type: "video",
    duration: 10,
    xp: 20,
    completed: false,
    description: "",
    category: "",
    difficulty: "easy",
    region: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (quest) {
      setFormData({
        title: quest.title,
        type: quest.type,
        duration: quest.duration,
        xp: quest.xp,
        completed: quest.completed,
        description: quest.description || "",
        category: quest.category || "",
        difficulty: quest.difficulty || "easy",
        region: quest.region || "",
      });
    } else {
      // Reset form
      setFormData({
        title: "",
        type: "video",
        duration: 10,
        xp: 20,
        completed: false,
        description: "",
        category: "",
        difficulty: "easy",
        region: "",
      });
    }
    setErrors({});
  }, [quest, isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Título é obrigatório";
    } else if (formData.title.length < 5) {
      newErrors.title = "Título deve ter no mínimo 5 caracteres";
    }

    if (formData.duration <= 0) {
      newErrors.duration = "Duração deve ser maior que 0";
    } else if (formData.duration > 180) {
      newErrors.duration = "Duração máxima é 180 minutos";
    }

    if (formData.xp <= 0) {
      newErrors.xp = "XP deve ser maior que 0";
    } else if (formData.xp > 1000) {
      newErrors.xp = "XP máximo é 1000";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (quest) {
      onUpdate(quest.id, formData);
    } else {
      onCreate(formData);
    }

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle style={{ fontSize: "24px", fontWeight: 700 }}>
            {quest ? "Editar Quest" : "Nova Quest"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" style={{ fontSize: "14px", fontWeight: 600 }}>
              Título *
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Ex: Assista: Fundamentos de UX Research"
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
              Descrição
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Descreva o conteúdo e objetivos desta quest..."
              rows={3}
              style={{ fontSize: "16px" }}
            />
          </div>

          {/* Type & Difficulty */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type" style={{ fontSize: "14px", fontWeight: 600 }}>
                Tipo *
              </Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value as QuestType })}
              >
                <SelectTrigger id="type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">📹 Vídeo</SelectItem>
                  <SelectItem value="reading">📖 Leitura</SelectItem>
                  <SelectItem value="audio">🎧 Áudio</SelectItem>
                  <SelectItem value="practice">✍️ Prática</SelectItem>
                  <SelectItem value="social">💬 Social</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty" style={{ fontSize: "14px", fontWeight: 600 }}>
                Dificuldade
              </Label>
              <Select
                value={formData.difficulty}
                onValueChange={(value) => setFormData({ ...formData, difficulty: value as any })}
              >
                <SelectTrigger id="difficulty">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">⭐ Fácil</SelectItem>
                  <SelectItem value="medium">⭐⭐ Médio</SelectItem>
                  <SelectItem value="hard">⭐⭐⭐ Difícil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Duration & XP */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" style={{ fontSize: "14px", fontWeight: 600 }}>
                Duração (minutos) *
              </Label>
              <Input
                id="duration"
                type="number"
                min="1"
                max="180"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 0 })}
                style={{ fontSize: "16px" }}
              />
              {errors.duration && (
                <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                  <AlertCircle size={16} />
                  {errors.duration}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="xp" style={{ fontSize: "14px", fontWeight: 600 }}>
                XP Recompensa *
              </Label>
              <Input
                id="xp"
                type="number"
                min="1"
                max="1000"
                value={formData.xp}
                onChange={(e) => setFormData({ ...formData, xp: parseInt(e.target.value) || 0 })}
                style={{ fontSize: "16px" }}
              />
              {errors.xp && (
                <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
                  <AlertCircle size={16} />
                  {errors.xp}
                </p>
              )}
            </div>
          </div>

          {/* Category & Region */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category" style={{ fontSize: "14px", fontWeight: 600 }}>
                Categoria
              </Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="Ex: UX Research"
                style={{ fontSize: "16px" }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="region" style={{ fontSize: "14px", fontWeight: 600 }}>
                Região
              </Label>
              <Input
                id="region"
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                placeholder="Ex: Fundamentos de UX/UI"
                style={{ fontSize: "16px" }}
              />
            </div>
          </div>

          {/* Completed Status (only for editing) */}
          {quest && (
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="completed"
                checked={formData.completed}
                onChange={(e) => setFormData({ ...formData, completed: e.target.checked })}
                className="w-5 h-5 rounded border-2 border-[var(--gray-300)]"
              />
              <Label htmlFor="completed" style={{ fontSize: "14px", fontWeight: 600 }}>
                Marcar como concluída
              </Label>
            </div>
          )}

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
              {quest ? "Salvar Alterações" : "Criar Quest"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
