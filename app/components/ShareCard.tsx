"use client";

import { useEffect, useRef, useState } from "react";
import { Guardian } from "@/app/data/guardians";

interface ShareCardProps {
  guardian: Guardian;
  onClose: () => void;
}

const CARD_W = 750;
const CARD_H = 1334;
const SITE_URL = "https://guardian-god.vercel.app"; // 占位，部署后替换

export default function ShareCard({ guardian, onClose }: ShareCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    renderCard();
  }, []);

  async function renderCard() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = CARD_W;
    canvas.height = CARD_H;

    // ── 背景渐变 ──
    const bg = ctx.createLinearGradient(0, 0, 0, CARD_H);
    bg.addColorStop(0, guardian.primaryColor);
    bg.addColorStop(0.6, "#0a0a1a");
    bg.addColorStop(1, "#000000");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // ── 星星 ──
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    for (let i = 0; i < 80; i++) {
      const x = ((i * 2654435761) % 10000) / 10000 * CARD_W;
      const y = ((i * 2246822519) % 10000) / 10000 * CARD_H * 0.7;
      const r = ((i * 1234567891) % 100) / 100 * 2 + 0.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // ── 射线光芒 ──
    ctx.save();
    ctx.translate(CARD_W / 2, CARD_H * 0.38);
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const grad = ctx.createLinearGradient(0, 0,
        Math.cos(angle) * 400, Math.sin(angle) * 400);
      grad.addColorStop(0, guardian.accentColor + "50");
      grad.addColorStop(1, "transparent");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angle) * 400, Math.sin(angle) * 400);
      ctx.stroke();
    }
    ctx.restore();

    // ── 布局常量（从下往上锁定） ──
    const BOTTOM_URL_Y = CARD_H - 36;       // 网站URL
    const BOTTOM_QR_LABEL_Y = CARD_H - 64;  // 二维码说明
    const QR_SIZE = 110;
    const QR_Y = BOTTOM_QR_LABEL_Y - QR_SIZE - 12;  // 二维码顶部
    const DIV_Y = QR_Y - 28;                // 分割线
    const TEXT_BOTTOM = DIV_Y - 20;         // 文字区底部边界

    // ── 神明图片（上半区） ──
    const IMG_TOP = 50;
    const IMG_H = 480;
    await new Promise<void>((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const imgW = IMG_H * (img.width / img.height);
        ctx.drawImage(img, (CARD_W - imgW) / 2, IMG_TOP, imgW, IMG_H);
        resolve();
      };
      img.onerror = () => resolve();
      img.src = `/guardian_${guardian.mbti}.webp`;
    });

    // ── 文字区（从图片底部开始，到 TEXT_BOTTOM 结束） ──
    let curY = IMG_TOP + IMG_H + 28;

    // MBTI 标签
    ctx.font = "bold 30px Arial";
    ctx.textAlign = "center";
    const tagText = `${guardian.mbti} · ${guardian.nameEn}`;
    const tagW = ctx.measureText(tagText).width + 44;
    const tagH = 48;
    roundRect(ctx, (CARD_W - tagW) / 2, curY, tagW, tagH, 24,
      guardian.accentColor + "30", guardian.accentColor + "80");
    ctx.fillStyle = guardian.accentColor;
    ctx.fillText(tagText, CARD_W / 2, curY + 32);
    curY += tagH + 24;

    // 神明名字
    ctx.font = "bold 80px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(guardian.name, CARD_W / 2, curY + 66);
    curY += 80 + 16;

    // 关键词
    ctx.font = "34px Arial";
    ctx.fillStyle = guardian.accentColor;
    ctx.fillText(guardian.keyword, CARD_W / 2, curY);
    curY += 44;

    // 祝福语
    ctx.font = "bold 38px Arial";
    ctx.fillStyle = "#ffffff";
    const blessingLines = wrapText(ctx, guardian.blessing, CARD_W - 120);
    const blessingH = blessingLines.length * 52;
    if (curY + blessingH < TEXT_BOTTOM - 60) {
      blessingLines.forEach((line) => {
        ctx.fillText(line, CARD_W / 2, curY + 38);
        curY += 52;
      });
      curY += 12;
    }

    // 副标题（剩余空间能放几行就放几行）
    ctx.font = "26px Arial";
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    const subtitleLines = wrapText(ctx, guardian.subtitle, CARD_W - 160);
    for (const line of subtitleLines) {
      if (curY + 36 > TEXT_BOTTOM) break;
      ctx.fillText(line, CARD_W / 2, curY + 28);
      curY += 38;
    }

    // ── 分割线 ──
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(60, DIV_Y);
    ctx.lineTo(CARD_W - 60, DIV_Y);
    ctx.stroke();

    // ── 二维码占位 ──
    const qrX = CARD_W / 2 - QR_SIZE / 2;
    roundRect(ctx, qrX, QR_Y, QR_SIZE, QR_SIZE, 10, "rgba(255,255,255,0.08)", "rgba(255,255,255,0.15)");
    // 占位文字居中
    ctx.font = "22px Arial";
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.fillText("QR", CARD_W / 2, QR_Y + QR_SIZE / 2 + 8);

    ctx.font = "22px Arial";
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.fillText("扫码测你的守护神", CARD_W / 2, BOTTOM_QR_LABEL_Y);

    // ── 网站 URL ──
    ctx.font = "22px Arial";
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.fillText(SITE_URL, CARD_W / 2, CARD_H - 40);

    setReady(true);
  }

  async function handleDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `守护神_${guardian.name}_${guardian.mbti}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  }

  async function handleShare() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (navigator.share && navigator.canShare) {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], `守护神_${guardian.name}.png`, { type: "image/png" });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            text: guardian.shareText,
          });
          return;
        }
        fallbackCopy();
      }, "image/png");
    } else {
      fallbackCopy();
    }
  }

  async function fallbackCopy() {
    await navigator.clipboard.writeText(`${guardian.shareText} ${SITE_URL}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-black/80 backdrop-blur-sm overflow-y-auto pt-4 pb-8">
      {/* 关闭 */}
      <button
        onClick={onClose}
        className="self-end mr-4 mb-3 text-white/50 text-sm"
      >
        ✕ 关闭
      </button>

      {/* Canvas 预览 */}
      <canvas
        ref={canvasRef}
        className="rounded-2xl shadow-2xl"
        style={{ width: "min(375px, 90vw)", height: "auto" }}
      />

      {/* 按钮 */}
      {ready && (
        <div className="flex gap-3 mt-5 w-full max-w-sm px-4">
          <button
            onClick={handleDownload}
            className="flex-1 py-3 rounded-2xl font-bold text-black text-base"
            style={{ background: guardian.accentColor }}
          >
            ⬇ 保存图片
          </button>
          <button
            onClick={handleShare}
            className="flex-1 py-3 rounded-2xl font-bold text-white text-base border border-white/20"
          >
            {copied ? "✅ 已复制" : "🔗 分享链接"}
          </button>
        </div>
      )}

      <p className="text-white/30 text-xs mt-3">长按图片可直接保存到相册</p>
    </div>
  );
}

// 工具函数
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const char of text) {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number,
  fill?: string, stroke?: string
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke(); }
}
