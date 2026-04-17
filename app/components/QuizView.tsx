"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { steps, getGuardian, Guardian } from "@/app/data/guardians";

interface QuizViewProps {
  onResult: (guardian: Guardian) => void;
}

export default function QuizView({ onResult }: QuizViewProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  function handleSelect(letter: string) {
    if (selected) return;
    setSelected(letter);

    setTimeout(() => {
      const newVotes = { ...votes, [letter]: (votes[letter] ?? 0) + 1 };

      if (currentStep < steps.length - 1) {
        setDirection(1);
        setVotes(newVotes);
        setSelected(null);
        setCurrentStep(s => s + 1);
      } else {
        const e = newVotes["E"] ?? 0, i = newVotes["I"] ?? 0;
        const n = newVotes["N"] ?? 0, s = newVotes["S"] ?? 0;
        const t = newVotes["T"] ?? 0, f = newVotes["F"] ?? 0;
        const j = newVotes["J"] ?? 0, p = newVotes["P"] ?? 0;
        const mbti =
          (e >= i ? "E" : "I") +
          (n >= s ? "N" : "S") +
          (t >= f ? "T" : "F") +
          (j >= p ? "J" : "P");
        const guardian = getGuardian(mbti)!;
        onResult(guardian);
      }
    }, 280);
  }

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto px-4">
      {/* title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-white mb-6 mt-2 text-center"
      >
        ✨ 发现你的守护神 ✨
      </motion.h1>

      {/* progress */}
      <div className="w-full mb-8">
        <div className="flex justify-between text-xs text-white/50 mb-2">
          <span>步骤 {currentStep + 1} / {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c40f, #e74c3c)",
            }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 60 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="w-full"
        >
          <div className="text-6xl text-center mb-5">{step.emoji}</div>
          <h2 className="text-xl font-semibold text-white text-center mb-8 leading-snug px-2">
            {step.question}
          </h2>

          <div className="flex flex-col gap-4">
            {[step.optionA, step.optionB].map((opt, idx) => {
              const isSelected = selected === opt.letter;
              return (
                <motion.button
                  key={opt.letter}
                  onClick={() => handleSelect(opt.letter)}
                  whileTap={{ scale: 0.97 }}
                  className="w-full text-left rounded-2xl px-5 py-4 transition-all duration-200 border"
                  style={{
                    background: isSelected
                      ? "rgba(241,196,15,0.15)"
                      : "rgba(255,255,255,0.06)",
                    borderColor: isSelected
                      ? "#f1c40f"
                      : "rgba(255,255,255,0.15)",
                    boxShadow: isSelected
                      ? "0 0 20px rgba(241,196,15,0.3)"
                      : "none",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex-shrink-0 transition-colors duration-200"
                      style={{
                        background: isSelected
                          ? "#f1c40f"
                          : "rgba(255,255,255,0.12)",
                      }}
                    />
                    <div>
                      <p
                        className="font-bold text-lg leading-tight transition-colors duration-200"
                        style={{ color: isSelected ? "#f1c40f" : "white" }}
                      >
                        {opt.label}
                      </p>
                      <p className="text-white/60 text-sm mt-1 leading-snug whitespace-pre-line">
                        {opt.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <p className="text-center text-white/30 text-sm mt-5">或</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
