"use client";

import { useEffect, useRef, useState } from "react";

interface DanmakuProps {
  messages: string[];
  accentColor: string;
}

interface DanmakuItem {
  id: number;
  text: string;
  top: number;
  duration: number;
  delay: number;
  color: string;
}

const COLORS = ["#ffffff", "#ffe066", "#ffb3de", "#a8edea", "#fed6e3"];

let idCounter = 0;

export default function Danmaku({ messages, accentColor }: DanmakuProps) {
  const [items, setItems] = useState<DanmakuItem[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const msgIndexRef = useRef(0);

  useEffect(() => {
    // seed initial batch
    const initial: DanmakuItem[] = messages.slice(0, 4).map((text, i) => ({
      id: idCounter++,
      text,
      top: 10 + i * 20,
      duration: 8 + (i % 3),
      delay: i * 1.2,
      color: i === 0 ? accentColor : COLORS[i % COLORS.length],
    }));
    setItems(initial);
    msgIndexRef.current = 4;

    intervalRef.current = setInterval(() => {
      const idx = msgIndexRef.current % messages.length;
      msgIndexRef.current++;
      setItems(prev => {
        const newItem: DanmakuItem = {
          id: idCounter++,
          text: messages[idx],
          top: 5 + Math.floor(Math.random() * 85),
          duration: 7 + Math.random() * 4,
          delay: 0,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
        // keep max 8 items
        return [...prev.slice(-7), newItem];
      });
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [messages, accentColor]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map(item => (
        <div
          key={item.id}
          className="absolute whitespace-nowrap text-sm font-medium px-3 py-1 rounded-full"
          style={{
            top: `${item.top}%`,
            right: "-100%",
            color: item.color,
            backgroundColor: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(4px)",
            border: `1px solid ${item.color}40`,
            animation: `danmaku-scroll ${item.duration}s ${item.delay}s linear forwards`,
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
