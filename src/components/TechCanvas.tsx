import React, { useEffect, useRef } from 'react';

export const TechCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 360);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Nodes representing actual layered software architecture
    const nodes = [
      { x: 0.18, y: 0.28, label: "UI_COMPONENT", type: "primary" },
      { x: 0.50, y: 0.22, label: "DOMAIN_LOGIC", type: "active" },
      { x: 0.82, y: 0.36, label: "REPOSITORY", type: "storage" },
      { x: 0.32, y: 0.68, label: "STATE_ENGINE", type: "active" },
      { x: 0.68, y: 0.76, label: "DATA_STORE", type: "storage" },
    ];

    const connections = [
      [0, 1], [1, 2], [0, 3], [3, 4], [1, 3], [4, 2]
    ];

    let pulseProgress = 0;

    const render = () => {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, width, height);

      // Grid colors
      const gridColor = isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(24, 24, 27, 0.04)";
      const lineDashColor = isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(24, 24, 27, 0.12)";
      const textColor = isDark ? "#a3a39c" : "#52525b";
      const nodeFill = isDark ? "#111215" : "#ffffff";
      const nodeStroke = isDark ? "#3d3e46" : "rgba(24, 24, 27, 0.2)";
      const accentColor = isDark ? "#f25100" : "#c83d00";

      // Draw subtle background grid
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      const gridSize = 32;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connections
      connections.forEach(([i, j]) => {
        const source = { x: nodes[i].x * width, y: nodes[i].y * height };
        const target = { x: nodes[j].x * width, y: nodes[j].y * height };

        ctx.strokeStyle = lineDashColor;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Animated pulse [0 -> 1 -> 2]
      pulseProgress = (pulseProgress + 0.006) % 1;
      const srcNode = { x: nodes[0].x * width, y: nodes[0].y * height };
      const tgtNode = { x: nodes[1].x * width, y: nodes[1].y * height };
      const pulseX = srcNode.x + (tgtNode.x - srcNode.x) * pulseProgress;
      const pulseY = srcNode.y + (tgtNode.y - srcNode.y) * pulseProgress;

      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
      ctx.fill();

      // Render Nodes
      nodes.forEach((n) => {
        const nx = n.x * width;
        const ny = n.y * height;

        ctx.fillStyle = nodeFill;
        ctx.strokeStyle = n.type === "active" ? accentColor : nodeStroke;
        ctx.lineWidth = n.type === "active" ? 2 : 1;
        ctx.beginPath();
        ctx.arc(nx, ny, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if (n.type === "active" || n.type === "primary") {
          ctx.fillStyle = accentColor;
          ctx.beginPath();
          ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node label
        ctx.font = "10px 'JetBrains Mono', monospace";
        ctx.fillStyle = textColor;
        ctx.fillText(n.label, nx + 10, ny + 3.5);
      });

      // HUD footer status
      ctx.font = "9px 'JetBrains Mono', monospace";
      ctx.fillStyle = isDark ? "#73736c" : "#71717a";
      ctx.fillText("ARCHITECTURE // DECOUPLED", 14, height - 12);
      ctx.fillText("STATUS // VERIFIED", width - 130, height - 12);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] border border-border-light rounded-xl bg-canvas-card overflow-hidden shadow-subtle flex items-center justify-center">
      {/* Top bar HUD */}
      <div className="absolute top-0 left-0 right-0 h-8 border-b border-border-light bg-canvas-subtle/70 px-3.5 flex items-center justify-between text-[11px] font-mono text-primary-subtle">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-semibold text-primary">SYSTEM_ARCHITECTURE</span>
        </div>
        <span className="hidden sm:inline">STATE: DETERMINISTIC</span>
      </div>

      <canvas ref={canvasRef} className="w-full h-full pt-8" />
    </div>
  );
};
