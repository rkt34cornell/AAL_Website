import { useEffect, useRef } from "react";

// Draws a laser-pointer dot that follows the pointer. The core tracks the
// pointer exactly so clicks stay predictable; the glow trails slightly behind.
const LaserCursor = () => {
  const coreRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) {
      return undefined;
    }

    const core = coreRef.current;
    const glow = glowRef.current;
    const root = document.documentElement;
    root.classList.add("laser-cursor-active");

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let glowX = pointerX;
    let glowY = pointerY;
    let frame = 0;

    const render = () => {
      // Ease the glow toward the pointer so fast movement smears the beam.
      glowX += (pointerX - glowX) * 0.18;
      glowY += (pointerY - glowY) * 0.18;
      core.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(render);
    };
    frame = window.requestAnimationFrame(render);

    const interactiveSelector = 'a, button, [role="button"], .cursor-pointer, input, select, textarea';

    const handleMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      root.classList.remove("laser-cursor-hidden");
      const overInteractive = Boolean(event.target?.closest?.(interactiveSelector));
      root.classList.toggle("laser-cursor-hot", overInteractive);
    };
    const handleLeave = () => root.classList.add("laser-cursor-hidden");
    const handleDown = () => root.classList.add("laser-cursor-firing");
    const handleUp = () => root.classList.remove("laser-cursor-firing");

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    window.addEventListener("blur", handleLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
      root.classList.remove(
        "laser-cursor-active",
        "laser-cursor-hot",
        "laser-cursor-firing",
        "laser-cursor-hidden"
      );
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div ref={glowRef} className="laser-cursor__glow" />
      <div ref={coreRef} className="laser-cursor__core" />
    </div>
  );
};

export default LaserCursor;
