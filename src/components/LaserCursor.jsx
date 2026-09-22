import { useEffect, useRef } from "react";

// Draws a laser-pointer dot that tracks the pointer exactly, so the spot it
// lands on is the spot that gets clicked.
const LaserCursor = () => {
  const coreRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) {
      return undefined;
    }

    const core = coreRef.current;
    const root = document.documentElement;
    root.classList.add("laser-cursor-active");

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let frame = 0;

    const render = () => {
      core.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
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
    <div ref={coreRef} className="laser-cursor__core" aria-hidden="true" />
  );
};

export default LaserCursor;
