"use client";

import { useState } from "react";
import { Guardian } from "@/app/data/guardians";
import StarsBackground from "@/app/components/StarsBackground";
import LandingView from "@/app/components/LandingView";
import QuizView from "@/app/components/QuizView";
import RevealView from "@/app/components/RevealView";

type Phase = "landing" | "quiz" | "result";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("landing");
  const [result, setResult] = useState<Guardian | null>(null);

  return (
    <main className="min-h-screen bg-[#1a0a2e] relative flex flex-col items-center justify-start">
      <StarsBackground />

      <div className="relative z-10 w-full max-w-lg mx-auto">
        {phase === "landing" && (
          <LandingView onStart={() => setPhase("quiz")} />
        )}
        {phase === "quiz" && (
          <div className="pt-8 pb-16 px-0">
            <QuizView onResult={(g) => { setResult(g); setPhase("result"); }} />
          </div>
        )}
        {phase === "result" && result && (
          <RevealView
            guardian={result}
            onRestart={() => { setResult(null); setPhase("landing"); }}
          />
        )}
      </div>
    </main>
  );
}
