"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { guardians } from "@/app/data/guardians";

interface LandingViewProps {
  onStart: () => void;
}

// 展示8个有代表性的神明
const FEATURED = ["INTJ","ENFP","INFJ","ESTP","ENTJ","ISFP","ENFJ","ISTP"];

export default function LandingView({ onStart }: LandingViewProps) {
  const featured = guardians.filter(g => FEATURED.includes(g.mbti));

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 overflow-hidden">

      {/* 顶部标签 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-white/40 text-sm tracking-widest uppercase"
      >
        MBTI × 中国神明
      </motion.div>

      {/* 主标题区 */}
      <div className="flex flex-col items-center text-center mt-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-5xl font-bold text-white leading-tight mb-3"
        >
          发现你的<br />
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            守护神
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/60 text-base max-w-xs leading-relaxed"
        >
          10道题，测出专属你的中国神明守护者
        </motion.p>

        {/* 神明头像网格 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-4 gap-3 my-8"
        >
          {featured.map((g, i) => (
            <motion.div
              key={g.mbti}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.06, type: "spring", stiffness: 260 }}
              className="relative"
            >
              <div
                className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10"
                style={{ background: `${g.primaryColor}` }}
              >
                <Image
                  src={`/guardian_${g.mbti}.webp`}
                  alt={g.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-white/50 text-[10px] text-center mt-1">{g.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 数据亮点 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 mb-8"
        >
          {[
            { num: "16", label: "位神明" },
            { num: "10", label: "道题目" },
            { num: "1min", label: "即可完成" },
          ].map(item => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-bold text-white">{item.num}</p>
              <p className="text-white/40 text-xs">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 底部按钮 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, type: "spring" }}
        className="w-full max-w-sm"
      >
        <motion.button
          onClick={onStart}
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.02 }}
          className="w-full py-4 rounded-2xl font-bold text-xl text-black relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #f1c40f, #e74c3c)",
            boxShadow: "0 8px 32px rgba(241,196,15,0.4)",
          }}
        >
          ✨ 开始测试
        </motion.button>
        <p className="text-center text-white/30 text-xs mt-3">免费 · 无需注册 · 1分钟完成</p>
      </motion.div>
    </div>
  );
}
