"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { business } from "@/i18n/dictionaries";

export function StickyMobileCta() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/15 bg-black/95 backdrop-blur md:hidden">
      <a href={business.phoneHref} className="flex items-center justify-center gap-2 px-4 py-4 text-[15px] font-black uppercase tracking-wide text-white">
        <span aria-hidden>📞</span> {lang === "fr" ? "Appeler" : "Call"}
      </a>
      <a href="/#devis" className="flex items-center justify-center gap-2 bg-[#1557ff] px-4 py-4 text-[15px] font-black uppercase tracking-wide text-white">
        {lang === "fr" ? "Devis gratuit" : "Free quote"} <span aria-hidden>→</span>
      </a>
    </div>
  );
}

export function CookieBanner() {
  const { lang } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem("cc-cookies")) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const accept = (v: string) => {
    try {
      window.localStorage.setItem("cc-cookies", v);
    } catch {
      /* stockage indisponible */
    }
    setShow(false);
  };

  if (!show) return null;
  const fr = lang === "fr";
  return (
    <div role="dialog" aria-label="Cookies" className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/15 bg-white shadow-2xl md:bottom-6 md:left-auto md:right-6 md:w-[420px] md:border">
      <div className="p-5">
        <p className="text-[14px] font-black uppercase tracking-widest">{fr ? "Cookies 🍪" : "Cookies 🍪"}</p>
        <p className="mt-2 text-[13.5px] leading-5 text-black/65">
          {fr
            ? "Ce site n'utilise aucun traceur publicitaire ni mesure d'audience. Seuls vos choix techniques (langue, bannière) sont mémorisés dans votre navigateur."
            : "This site uses no ad trackers and no analytics. Only technical choices (language, banner) are stored in your browser."}
        </p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => accept("all")} className="btn btn-primary btn-small flex-1 text-[13px]!">
            {fr ? "Compris" : "Got it"}
          </button>
          <a href="/confidentialite" className="btn btn-outline btn-small flex-1 text-[13px]!">
            {fr ? "En savoir plus" : "Learn more"}
          </a>
        </div>
      </div>
    </div>
  );
}
