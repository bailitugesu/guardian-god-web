"use client";

import { useState } from "react";
import { Guardian } from "@/app/data/guardians";
import StarsBackground from "@/app/components/StarsBackground";
import QuizView from "@/app/components/QuizView";
import RevealView from "@/app/components/RevealView";

export default function Home() {
  const [result, setResult] = useState<Guardian | null>(null);

  return (
    <main className="min-h-screen bg-[#1a0a2e] relative flex flex-col items-center justify-start pt-8 pb-16">
      <StarsBackground />

      <div className="relative z-10 w-full">
        {result ? (
          <RevealView
            guardian={result}
            onRestart={() => setResult(null)}
          />
        ) : (
          <QuizView onResult={setResult} />
        )}
      </div>
    </main>
  );
}
