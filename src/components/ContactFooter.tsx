"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/i18n/LanguageContext";
import { business } from "@/i18n/dictionaries";
import { withBase } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t, lang } = useLang();
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const phone = String(data.get("phone") || "");
    if (phone.replace(/\D/g, "").length < 8) {
      setError(lang === "fr" ? "Merci d'indiquer un numéro de téléphone valide." : "Please enter a valid phone number.");
      return;
    }
    setError("");
    setSending(true);
    window.setTimeout(() => {
      router.push("/merci");
    }, 800);
  };

  return (
    <section id="devis" className="section bg-[#f4f4f4]">
      <div className="container-default grid gap-10 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <p className="subtitle">{t.contact.subtitle}</p>
          <h2 className="h-display text-[34px] sm:text-[44px]">{t.contact.title}</h2>
          <p className="mt-4 max-w-[440px] text-[16px] leading-7 text-black/65">{t.contact.text}</p>
          <div className="mt-8 border border-black/10 bg-white p-7">
            <p className="text-[13px] font-black uppercase tracking-[0.2em] text-black/45">{t.contact.infoTitle}</p>
            <p className="mt-3 text-[17px] font-black">{business.shortName}</p>
            <p className="mt-1 text-[15px] text-black/60">{business.address}</p>
            <a href={business.phoneHref} className="h-display mt-2 block text-[26px] hover:text-[#1557ff]">{business.phone}</a>
            <p className="mt-5 text-[13px] font-black uppercase tracking-[0.2em] text-black/45">{t.contact.hoursTitle}</p>
            <ul className="mt-2 divide-y divide-black/10 text-[14px] font-semibold">
              {t.contact.hours.map(([d, h]) => (
                <li key={d} className="flex items-center justify-between gap-3 py-2">
                  <span>{d}</span>
                  <span className="text-right text-black/55">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full border border-black/10 bg-white p-7 sm:p-12">
              <form onSubmit={onSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-[14px] font-black uppercase tracking-widest">
                    {t.contact.name}
                    <input required name="name" autoComplete="name" placeholder="Marie Dupont" className="border border-black/20 bg-white px-4 py-3.5 text-[15px] font-semibold normal-case tracking-normal outline-none focus:border-[#1557ff]" />
                  </label>
                  <label className="grid gap-2 text-[14px] font-black uppercase tracking-widest">
                    {t.contact.phone}
                    <input required name="phone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" className="border border-black/20 bg-white px-4 py-3.5 text-[15px] font-semibold normal-case tracking-normal outline-none focus:border-[#1557ff]" />
                  </label>
                </div>
                <label className="grid gap-2 text-[14px] font-black uppercase tracking-widest">
                  {t.contact.subject}
                  <input name="subject" placeholder="AB-123-CD · pare-chocs arrière" className="border border-black/20 bg-white px-4 py-3.5 text-[15px] font-semibold normal-case tracking-normal outline-none focus:border-[#1557ff]" />
                </label>
                <label className="grid gap-2 text-[14px] font-black uppercase tracking-widest">
                  {t.contact.message}
                  <textarea required name="message" rows={5} placeholder="Rayure aile avant droite, photos disponibles…" className="resize-none border border-black/20 bg-white px-4 py-3.5 text-[15px] font-semibold normal-case tracking-normal outline-none focus:border-[#1557ff]" />
                </label>
                {error && <p role="alert" className="border border-red-600 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p>}
                <button type="submit" disabled={sending} className="btn btn-primary w-full disabled:opacity-60">
                  {sending ? t.contact.sending : t.contact.send}
                </button>
              </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const nav = [
    { href: "#top", label: t.header.home },
    { href: "#services", label: t.header.services },
    { href: "#atelier", label: t.header.about },
    { href: "#forfaits", label: "Forfaits" },
    { href: "#conseils", label: t.header.blog },
    { href: "#devis", label: t.header.quote },
  ];
  return (
    <footer id="contact" className="bg-black pt-20 text-white">
      <div className="container-default grid gap-12 pb-14 md:grid-cols-3">
        <div>
          <p className="text-[26px] font-black uppercase leading-none">
            Carrosserie <span className="text-[#5b8cff]">Callian</span>
          </p>
          <p className="mt-4 max-w-xs text-[15px] leading-6 text-white/60">{t.footer.tagline}</p>
          <p className="mt-4 text-[15px] font-black text-white">{business.rating} · {business.reviewsCount}</p>
        </div>
        <nav aria-label="Pied de page">
          <p className="text-[14px] font-black uppercase tracking-[0.2em] text-white/40">{t.footer.navTitle}</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[15px] font-bold">
            {nav.map((n) => (
              <li key={n.href + n.label}>
                <a href={n.href} className="text-white/70 hover:text-white">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-[14px] font-black uppercase tracking-[0.2em] text-white/40">{t.footer.contactTitle}</p>
          <p className="mt-4 text-[15px] text-white/70">{business.address}</p>
          <a href={business.phoneHref} className="mt-1 block text-[18px] font-black hover:text-[#5b8cff]">{business.phone}</a>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-[14px] font-black uppercase tracking-widest text-white/70 hover:text-white">
            Maps ↗
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-default flex flex-wrap items-center justify-between gap-3 py-6 text-[13px] text-white/40">
          <p>{t.footer.legal}</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <a href={withBase("/mentions-legales")} className="underline hover:text-white">
              Mentions légales
            </a>
            <a href={withBase("/confidentialite")} className="underline hover:text-white">
              Confidentialité
            </a>
            <a href={withBase("/conditions")} className="underline hover:text-white">
              Conditions
            </a>
            <span>Callian · Var · France</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
