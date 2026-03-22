import { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "20px";
    glow.style.height = "20px";
    glow.style.borderRadius = "50%";
    glow.style.background = "rgba(99,102,241,0.6)";
    glow.style.pointerEvents = "none";

    // ✅ LOWER Z-INDEX (IMPORTANT)
    glow.style.zIndex = "0";

    glow.style.transform = "translate(-50%, -50%)";

    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    // ✅ CLEANUP (VERY IMPORTANT)
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(glow);
    };
  }, []);

  return null;
};

export default CursorGlow;