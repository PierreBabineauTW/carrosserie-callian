"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#top", label: t.header.home },
    { href: "#services", label: t.header.services },
    { href: "#atelier", label: t.header.about },
    { href: "#avis", label: "Avis" },
    { href: "#conseils", label: t.header.blog },
    { href: "#contact", label: t.header.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black shadow-lg">
      <div className="container-default flex h-[76px] items-center justify-between gap-4">
        <a href="#top" aria-label="Carrosserie Callian — accueil" className="leading-none">
          <span className="block text-[22px] font-black uppercase leading-none tracking-wide text-white">
            Carrosserie <span className="text-[#5b8cff]">Callian</span>
          </span>
          <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
            Peinture · Vitrage · Sinistres
          </span>
        </a>
        <nav className="mt-1.5 hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-bold uppercase tracking-wide text-white/80 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex text-xs font-black uppercase" role="group" aria-label="Langue">
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-2.5 py-1.5 tracking-widest transition ${lang === l ? "bg-white text-black" : "text-white/60 hover:text-white"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <a href="#devis" className="btn btn-light btn-small">
            {t.header.quote}
          </a>
        </div>
        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Menu mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 text-base font-black uppercase tracking-wide text-white/85">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex border border-white/25 text-xs font-black uppercase">
              {(["fr", "en"] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`px-3 py-2 ${lang === l ? "bg-white text-black" : "text-white/70"}`}>
                  {l}
                </button>
              ))}
            </div>
            <a href="#devis" onClick={() => setOpen(false)} className="btn btn-light btn-small flex-1">
              {t.header.quote}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
