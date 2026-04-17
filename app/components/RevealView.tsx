"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Guardian } from "@/app/data/guardians";
import Danmaku from "./Danmaku";

interface RevealViewProps {
  guardian: Guardian;
  onRestart: () => void;
}

export default function RevealView({ guardian, onRestart }: RevealViewProps) {
  const [phase, setPhase] = useState<"burst" | "settle">("burst");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPhase("settle"), 1600);
    return () => clearTimeout(t);
  }, []);

  async function handleShare() {
    const text = `${guardian.shareText} https://guardian-god.vercel.app`;
    if (navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // fallthrough
      }
    }
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${guardian.primaryColor} 0%, #0a0a1a 60%)` }}
    >
      {/* danmaku layer */}
      <Danmaku messages={guardian.danmaku} accentColor={guardian.accentColor} />

      {/* rays */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-[38%] origin-bottom"
            style={{
              width: 2,
              height: "55vh",
              background: `linear-gradient(to top, ${guardian.accentColor}60, transparent)`,
              rotate: `${i * 30}deg`,
              translateX: "-50%",
              translateY: "-100%",
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0.6, 0], scaleY: [0, 1, 1] }}
            transition={{ duration: 2, delay: 0.1 + i * 0.05, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* image */}
      <div className="relative flex justify-center" style={{ height: "44vh" }}>
        <AnimatePresence>
          <motion.div
            key="img"
            className="absolute"
            initial={{ scale: 0, y: 60, opacity: 0 }}
            animate={
              phase === "burst"
                ? { scale: 1.15, y: 0, opacity: 1 }
                : { scale: 0.9, y: -20, opacity: 1 }
            }
            transition={
              phase === "burst"
                ? { type: "spring", stiffness: 260, damping: 20, duration: 0.6 }
                : { type: "spring", stiffness: 120, damping: 18, duration: 0.8 }
            }
            style={{ top: "10%", height: "80%" }}
          >
            <Image
              src={`/guardian_${guardian.mbti}.png`}
              alt={guardian.name}
              width={220}
              height={320}
              className="object-contain h-full w-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* text area */}
      <motion.div
        className="flex-1 overflow-y-auto px-6 pb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        {/* name */}
        <div className="text-center mb-4">
          <p className="text-white/60 text-sm mb-1">{guardian.mbti} · {guardian.nameEn}</p>
          <h1 className="text-4xl font-bold text-white">{guardian.name}</h1>
          <p
            className="text-sm font-medium mt-1 px-3 py-1 rounded-full inline-block"
            style={{ color: guardian.accentColor, background: `${guardian.accentColor}20` }}
          >
            {guardian.keyword}
          </p>
        </div>

        {/* blessing */}
        <div
          className="rounded-2xl p-4 mb-4 text-center"
          style={{ background: `${guardian.accentColor}15`, border: `1px solid ${guardian.accentColor}30` }}
        >
          <p className="text-xl font-bold text-white leading-snug">{guardian.blessing}</p>
        </div>

        {/* subtitle */}
        <p className="text-white/70 text-sm text-center leading-relaxed mb-6 px-2">
          {guardian.subtitle}
        </p>

        {/* buttons */}
        <div className="flex flex-col gap-3">
          <motion.button
            onClick={handleShare}
            whileTap={{ scale: 0.96 }}
            className="w-full py-4 rounded-2xl font-bold text-lg text-black"
            style={{ background: guardian.accentColor }}
          >
            {copied ? "✅ 已复制到剪贴板" : "🔮 分享给朋友"}
          </motion.button>
          <motion.button
            onClick={onRestart}
            whileTap={{ scale: 0.96 }}
            className="w-full py-3 rounded-2xl font-medium text-white/70 border border-white/20"
          >
            再测一次
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
