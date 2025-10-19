import { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { UserProfile } from "./AdminPanel";
import { AlertCircle, Save, User, Mail, Target, Clock } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface UserProfileEditorProps {
  profile: UserProfile;
  onUpdate: (profile: UserProfile) => void;
}

const INTEREST_OPTIONS = [
  "UX Research",
  "UI Design",
  "Product Design",
  "Design Systems",
  "Prototipagem",
  "Acessibilidade",
  "Usabilidade",
  "Design Thinking",
  "Figma",
  "Adobe XD",
  "Front-end",
  "HTML/CSS",
];

export function UserProfileEditor({ profile, onUpdate }: UserProfileEditorProps) {
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  useEffect(() => {
    const changed = JSON.stringify(formData) !== JSON.stringify(profile);
    setHasChanges(changed);
  }, [formData, profile]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.length < 3) {
      newErrors.name = "Nome deve ter no mínimo 3 caracteres";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (formData.dailyGoalMinutes && formData.dailyGoalMinutes < 5) {
      newErrors.dailyGoalMinutes = "Meta diária mínima é 5 minutos";
    }

    if (formData.dailyGoalMinutes && formData.dailyGoalMinutes > 480) {
      newErrors.dailyGoalMinutes = "Meta diária máxima é 480 minutos (8 horas)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Corrija os erros no formulário", {
        description: "Alguns campos contêm valores inválidos",
      });
      return;
    }

    onUpdate(formData);
    toast.success("Perfil atualizado com sucesso! 🎉");
    setHasChanges(false);
  };

  const handleInterestToggle = (interest: string) => {
    const currentInterests = formData.interests || [];
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter((i) => i !== interest)
      : [...currentInterests, interest];
    setFormData({ ...formData, interests: newInterests });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Profile Preview */}
      <div 
        className="bg-gradient-to-br from-[var(--primary-50)] to-[var(--primary-100)] rounded-[16px] border-2 border-[var(--primary-200)]" 
        style={{ padding: "var(--space-8)" }}
      >
        <div className="flex items-center gap-6">
          <div 
            className="bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] rounded-full flex items-center justify-center text-white"
            style={{ width: "80px", height: "80px", fontSize: "36px" }}
          >
            {formData.avatar || "👤"}
          </div>
          <div className="flex-1">
            <h3 className="text-[var(--gray-900)] mb-1" style={{ fontSize: "24px", fontWeight: 700 }}>
              {formData.name || "Seu Nome"}
            </h3>
            {formData.email && (
              <p className="text-[var(--gray-700)] mb-2" style={{ fontSize: "14px" }}>
                {formData.email}
              </p>
            )}
            {formData.goal && (
              <p className="text-[var(--gray-700)]" style={{ fontSize: "14px" }}>
                🎯 {formData.goal}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="space-y-4">
        <h4 className="text-[var(--gray-900)]" style={{ fontSize: "18px", fontWeight: 600 }}>
          Informações Básicas
        </h4>

        <div className="space-y-2">
          <Label htmlFor="name" style={{ fontSize: "14px", fontWeight: 600 }}>
            <User size={16} className="inline-block mr-2" />
            Nome *
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Digite seu nome"
            style={{ fontSize: "16px" }}
          />
          {errors.name && (
            <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
              <AlertCircle size={16} />
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" style={{ fontSize: "14px", fontWeight: 600 }}>
            <Mail size={16} className="inline-block mr-2" />
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email || ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu@email.com"
            style={{ fontSize: "16px" }}
          />
          {errors.email && (
            <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
              <AlertCircle size={16} />
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="avatar" style={{ fontSize: "14px", fontWeight: 600 }}>
            Avatar (Emoji)
          </Label>
          <div className="flex gap-2">
            <Input
              id="avatar"
              value={formData.avatar || ""}
              onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
              placeholder="👤"
              maxLength={2}
              style={{ fontSize: "16px", maxWidth: "80px" }}
            />
            <div className="flex gap-2 flex-wrap">
              {["👤", "👨", "👩", "🧑", "😊", "🎯", "🚀", "⭐"].map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setFormData({ ...formData, avatar: emoji })}
                  className="w-10 h-10 rounded-lg border-2 border-[var(--gray-200)] hover:border-[var(--primary-500)] transition-colors"
                  style={{ fontSize: "20px" }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Goals & Preferences */}
      <div className="space-y-4">
        <h4 className="text-[var(--gray-900)]" style={{ fontSize: "18px", fontWeight: 600 }}>
          Objetivos & Preferências
        </h4>

        <div className="space-y-2">
          <Label htmlFor="goal" style={{ fontSize: "14px", fontWeight: 600 }}>
            <Target size={16} className="inline-block mr-2" />
            Objetivo Principal
          </Label>
          <Textarea
            id="goal"
            value={formData.goal || ""}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            placeholder="Ex: Transição de carreira para UX Designer"
            rows={2}
            style={{ fontSize: "16px" }}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dailyGoalMinutes" style={{ fontSize: "14px", fontWeight: 600 }}>
            <Clock size={16} className="inline-block mr-2" />
            Meta Diária (minutos)
          </Label>
          <Input
            id="dailyGoalMinutes"
            type="number"
            min="5"
            max="480"
            value={formData.dailyGoalMinutes || ""}
            onChange={(e) => setFormData({ ...formData, dailyGoalMinutes: parseInt(e.target.value) || undefined })}
            placeholder="30"
            style={{ fontSize: "16px" }}
          />
          {errors.dailyGoalMinutes && (
            <p className="text-[var(--error-500)] flex items-center gap-2" style={{ fontSize: "14px" }}>
              <AlertCircle size={16} />
              {errors.dailyGoalMinutes}
            </p>
          )}
          <p className="text-[var(--gray-600)]" style={{ fontSize: "12px" }}>
            Recomendamos 30 minutos/dia para progresso consistente
          </p>
        </div>

        <div className="space-y-3">
          <Label style={{ fontSize: "14px", fontWeight: 600 }}>
            Interesses (selecione todos que aplicam)
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {INTEREST_OPTIONS.map((interest) => {
              const isSelected = formData.interests?.includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`rounded-full border-2 transition-all ${
                    isSelected
                      ? "bg-[var(--primary-500)] border-[var(--primary-500)] text-white"
                      : "bg-white border-[var(--gray-300)] text-[var(--gray-700)] hover:border-[var(--primary-300)]"
                  }`}
                  style={{ padding: "8px 16px", fontSize: "14px", fontWeight: 500 }}
                >
                  {interest}
                </button>
              );
            })}
          </div>
          <p className="text-[var(--gray-600)]" style={{ fontSize: "12px" }}>
            {formData.interests?.length || 0} {formData.interests?.length === 1 ? "interesse selecionado" : "interesses selecionados"}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-6 border-t-2 border-[var(--gray-100)]">
        <button
          type="button"
          onClick={() => {
            setFormData(profile);
            setHasChanges(false);
            toast.info("Alterações descartadas");
          }}
          className="btn-secondary"
          style={{ padding: "12px 24px" }}
          disabled={!hasChanges}
        >
          Descartar Alterações
        </button>
        <button
          type="submit"
          className={`flex-1 flex items-center justify-center gap-2 ${
            hasChanges ? "btn-primary" : "btn-secondary"
          }`}
          style={{ padding: "12px 24px" }}
          disabled={!hasChanges}
        >
          <Save size={20} />
          <span>{hasChanges ? "Salvar Perfil" : "Sem Alterações"}</span>
        </button>
      </div>

      {hasChanges && (
        <div className="bg-[var(--warning-50)] rounded-lg border-2 border-[var(--warning-200)]" style={{ padding: "var(--space-4)" }}>
          <p className="text-[var(--warning-700)] flex items-center gap-2" style={{ fontSize: "14px" }}>
            <AlertCircle size={16} />
            Você tem alterações não salvas
          </p>
        </div>
      )}
    </form>
  );
}
