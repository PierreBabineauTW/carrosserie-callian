"use client";

import { useRef, type ReactNode } from "react";

export function SliderRow({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const step = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const w = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };
  return (
    <div>
      <div ref={ref} className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2">
        {children}
      </div>
      <div className="mt-8 flex gap-3" role="group" aria-label={label}>
        <button
          onClick={() => step(-1)}
          aria-label="Précédent"
          className="grid h-[52px] w-[52px] place-items-center border-[1.5px] border-black text-xl font-black transition hover:bg-black hover:text-white"
        >
          ←
        </button>
        <button
          onClick={() => step(1)}
          aria-label="Suivant"
          className="grid h-[52px] w-[52px] place-items-center border-[1.5px] border-black text-xl font-black transition hover:bg-black hover:text-white"
        >
          →
        </button>
      </div>
    </div>
  );
}
