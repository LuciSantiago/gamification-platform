import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Target, Briefcase, GraduationCap, Heart, Trophy } from "lucide-react";

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
}

export interface OnboardingData {
  goal: string;
  timeAvailable: string;
  learningFormats: string[];
  skillLevel: number;
}

const goals = [
  { id: "career-transition", label: "Transição de carreira", icon: Briefcase, description: "Mudar para nova área" },
  { id: "new-skill", label: "Aprender nova skill", icon: GraduationCap, description: "Dominar nova habilidade" },
  { id: "personal-dev", label: "Desenvolvimento pessoal", icon: Heart, description: "Crescimento contínuo" },
  { id: "certification", label: "Preparar certificação", icon: Trophy, description: "Conquistar certificado" },
];

const timeOptions = [
  { value: "15min", label: "15 min", description: "Quick wins diários" },
  { value: "30min", label: "30 min", description: "Sessões focadas" },
  { value: "1h", label: "1 hora", description: "Aprendizado profundo" },
  { value: "2h+", label: "2+ horas", description: "Imersão completa" },
];

const formats = [
  { id: "video", label: "📹 Vídeos", description: "Visual e dinâmico" },
  { id: "reading", label: "📖 Leitura", description: "Artigos e textos" },
  { id: "audio", label: "🎧 Áudio", description: "Podcasts e narração" },
  { id: "practice", label: "⚙️ Prática", description: "Exercícios hands-on" },
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState(50);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Final step - submit
      setIsLoading(true);
      setTimeout(() => {
        onComplete({
          goal: selectedGoal,
          timeAvailable: selectedTime,
          learningFormats: selectedFormats,
          skillLevel,
        });
      }, 2000);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const toggleFormat = (formatId: string) => {
    if (selectedFormats.includes(formatId)) {
      setSelectedFormats(selectedFormats.filter((f) => f !== formatId));
    } else {
      setSelectedFormats([...selectedFormats, formatId]);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedGoal !== "";
      case 2:
        return selectedTime !== "";
      case 3:
        return selectedFormats.length > 0;
      case 4:
        return true;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary-50)] to-[var(--primary-100)] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === step
                    ? "w-8 bg-[var(--primary-600)]"
                    : i < step
                    ? "w-2 bg-[var(--primary-400)]"
                    : "w-2 bg-[var(--gray-300)]"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-[var(--gray-600)]" style={{ fontSize: "14px" }}>
            Etapa {step + 1} de 5
          </p>
        </div>

        {/* Content */}
        <motion.div
          className="bg-white rounded-[32px] overflow-hidden"
          style={{ padding: "var(--space-12)" }}
        >
          <AnimatePresence mode="wait">
            {/* Step 0 - Welcome */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] flex items-center justify-center"
                  >
                    <Target size={48} className="text-white" />
                  </motion.div>

                  <h1
                    className="text-[var(--gray-900)]"
                    style={{ fontSize: "36px", lineHeight: "44px", fontWeight: 700 }}
                  >
                    Transforme seus objetivos em conquistas
                  </h1>

                  <p
                    className="text-[var(--gray-600)] max-w-md mx-auto"
                    style={{ fontSize: "18px", lineHeight: "28px" }}
                  >
                    Em apenas 5 passos, vamos criar sua jornada personalizada de aprendizado com gamificação envolvente
                  </p>
                </div>

                <button onClick={handleNext} className="btn-primary" style={{ fontSize: "18px" }}>
                  Começar
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            )}

            {/* Step 1 - Goal Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <h2
                    className="text-[var(--gray-900)]"
                    style={{ fontSize: "30px", lineHeight: "38px", fontWeight: 600 }}
                  >
                    Qual seu principal objetivo?
                  </h2>
                  <p className="text-[var(--gray-600)]" style={{ fontSize: "16px" }}>
                    Escolha o que mais representa sua meta atual
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {goals.map((goal) => {
                    const Icon = goal.icon;
                    return (
                      <button
                        key={goal.id}
                        onClick={() => setSelectedGoal(goal.id)}
                        className={`text-left rounded-[20px] border-2 transition-all duration-300 ${
                          selectedGoal === goal.id
                            ? "border-[var(--primary-600)] bg-[var(--primary-50)] shadow-lg"
                            : "border-[var(--gray-200)] bg-white hover:border-[var(--primary-300)]"
                        }`}
                        style={{ padding: "var(--space-6)" }}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`rounded-xl flex items-center justify-center ${
                              selectedGoal === goal.id
                                ? "bg-[var(--primary-600)] text-white"
                                : "bg-[var(--gray-100)] text-[var(--gray-600)]"
                            }`}
                            style={{ width: "48px", height: "48px" }}
                          >
                            <Icon size={24} />
                          </div>

                          <div className="flex-1">
                            <p
                              className="text-[var(--gray-900)] mb-1"
                              style={{ fontSize: "16px", fontWeight: 600 }}
                            >
                              {goal.label}
                            </p>
                            <p className="text-[var(--gray-600)]" style={{ fontSize: "14px" }}>
                              {goal.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2 - Time Available */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <h2
                    className="text-[var(--gray-900)]"
                    style={{ fontSize: "30px", lineHeight: "38px", fontWeight: 600 }}
                  >
                    Quanto tempo você tem por dia?
                  </h2>
                  <p className="text-[var(--gray-600)]" style={{ fontSize: "16px" }}>
                    Vamos adaptar as atividades à sua disponibilidade
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {timeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedTime(option.value)}
                      className={`rounded-[20px] border-2 transition-all duration-300 ${
                        selectedTime === option.value
                          ? "border-[var(--primary-600)] bg-[var(--primary-50)] shadow-lg"
                          : "border-[var(--gray-200)] bg-white hover:border-[var(--primary-300)]"
                      }`}
                      style={{ padding: "var(--space-6)" }}
                    >
                      <p
                        className={`mb-2 ${
                          selectedTime === option.value ? "text-[var(--primary-600)]" : "text-[var(--gray-900)]"
                        }`}
                        style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 700 }}
                      >
                        {option.label}
                      </p>
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "14px" }}>
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3 - Learning Formats */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <h2
                    className="text-[var(--gray-900)]"
                    style={{ fontSize: "30px", lineHeight: "38px", fontWeight: 600 }}
                  >
                    Como você prefere aprender?
                  </h2>
                  <p className="text-[var(--gray-600)]" style={{ fontSize: "16px" }}>
                    Pode escolher vários formatos
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {formats.map((format) => (
                    <button
                      key={format.id}
                      onClick={() => toggleFormat(format.id)}
                      className={`text-left rounded-[20px] border-2 transition-all duration-300 ${
                        selectedFormats.includes(format.id)
                          ? "border-[var(--primary-600)] bg-[var(--primary-50)] shadow-lg"
                          : "border-[var(--gray-200)] bg-white hover:border-[var(--primary-300)]"
                      }`}
                      style={{ padding: "var(--space-6)" }}
                    >
                      <p
                        className={`mb-2 ${
                          selectedFormats.includes(format.id)
                            ? "text-[var(--primary-600)]"
                            : "text-[var(--gray-900)]"
                        }`}
                        style={{ fontSize: "20px", lineHeight: "28px", fontWeight: 600 }}
                      >
                        {format.label}
                      </p>
                      <p className="text-[var(--gray-600)]" style={{ fontSize: "14px" }}>
                        {format.description}
                      </p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4 - Skill Level */}
            {step === 4 && !isLoading && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-8"
              >
                <div className="text-center space-y-2">
                  <h2
                    className="text-[var(--gray-900)]"
                    style={{ fontSize: "30px", lineHeight: "38px", fontWeight: 600 }}
                  >
                    Qual seu nível atual?
                  </h2>
                  <p className="text-[var(--gray-600)]" style={{ fontSize: "16px" }}>
                    Ajuste o controle para indicar sua experiência
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <p
                      className="text-[var(--primary-600)] mb-4"
                      style={{ fontSize: "48px", lineHeight: "56px", fontWeight: 700 }}
                    >
                      {skillLevel < 33 ? "Iniciante" : skillLevel < 66 ? "Intermediário" : "Avançado"}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skillLevel}
                      onChange={(e) => setSkillLevel(parseInt(e.target.value))}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, var(--primary-600) 0%, var(--primary-600) ${skillLevel}%, var(--gray-200) ${skillLevel}%, var(--gray-200) 100%)`,
                      }}
                    />

                    <div className="flex justify-between text-[var(--gray-600)]" style={{ fontSize: "14px" }}>
                      <span>Iniciante</span>
                      <span>Intermediário</span>
                      <span>Avançado</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Loading State */}
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-8 py-12"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 mx-auto"
                >
                  <div
                    className="w-full h-full rounded-full border-8 border-[var(--gray-200)]"
                    style={{ borderTopColor: "var(--primary-600)" }}
                  />
                </motion.div>

                <div className="space-y-2">
                  <h3
                    className="text-[var(--gray-900)]"
                    style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 600 }}
                  >
                    Criando sua jornada personalizada...
                  </h3>
                  <p className="text-[var(--gray-600)]" style={{ fontSize: "16px" }}>
                    Preparando conteúdos e desafios especialmente para você
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {!isLoading && (
            <div className="flex items-center justify-between mt-8 pt-8 border-t-2 border-[var(--gray-100)]">
              {step > 0 && (
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[var(--gray-700)] hover:bg-[var(--gray-50)] transition-colors"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  <ChevronLeft size={20} />
                  Voltar
                </button>
              )}

              {step === 0 ? (
                <div />
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all ml-auto ${
                    canProceed()
                      ? "btn-primary"
                      : "bg-[var(--gray-200)] text-[var(--gray-500)] cursor-not-allowed"
                  }`}
                  style={{ fontSize: "16px" }}
                >
                  {step === 4 ? "Finalizar" : "Continuar"}
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
