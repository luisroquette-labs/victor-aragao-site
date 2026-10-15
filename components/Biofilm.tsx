"use client";

import { useEffect, useRef } from "react";

/**
 * Biofilm — rede viva de colônias (nós) ligadas pela matriz (linhas), reativa
 * ao cursor. É a assinatura do hero: a própria pesquisa do Victor (S. sanguinis,
 * biofilme, rede bacteriana) virando o fundo da página.
 *
 * Algoritmo de rede de partículas adaptado de "Constellation Field"
 * (MengTo/threeui, MIT) — recolorido e recortado para a identidade do site
 * (teal de cultura + crimson de coloração), sem dependências nem iframe.
 */
export default function Biofilm() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const TEAL = "18,104,94"; // #12685E — colônia viável
    const STAIN = "192,66,106"; // #C0426A — colônia "corada" (Gram stain)
    const LINK = 150;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; stain: boolean };
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    const pointer = { x: -9999, y: -9999 };
    let raf = 0;

    function build() {
      const n = w < 768 ? 30 : 64;
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 2.2 + 1.6,
        stain: Math.random() < 0.12,
      }));
    }

    function resize() {
      const rect = parent!.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function draw(animate: boolean) {
      ctx!.clearRect(0, 0, w, h);
      // matriz do biofilme
      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const alpha = 0.05 + (1 - d / LINK) * 0.16;
            ctx!.strokeStyle = `rgba(${TEAL},${alpha.toFixed(3)})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      const t = Date.now() * 0.001;
      for (const node of nodes) {
        if (animate) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > w) node.vx *= -1;
          if (node.y < 0 || node.y > h) node.vy *= -1;
          const pd = Math.hypot(node.x - pointer.x, node.y - pointer.y);
          if (pd < 200) {
            node.x -= (node.x - pointer.x) * 0.006;
            node.y -= (node.y - pointer.y) * 0.006;
          }
        }
        const col = node.stain ? STAIN : TEAL;
        const pulse = animate ? 0.7 + Math.sin(t + node.x) * 0.3 : 0.85;
        ctx!.fillStyle = `rgba(${col},${(pulse * 0.12).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.r * 2.6, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = `rgba(${col},${(pulse * 0.85).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop() {
      draw(true);
      raf = requestAnimationFrame(loop);
    }

    const onMove = (e: PointerEvent) => {
      const rect = parent!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

    if (reduce) {
      draw(false);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="biofilm-canvas" />;
}
