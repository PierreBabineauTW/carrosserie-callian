import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";
import { IMG } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";
import { SliderRow } from "./Slider";

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="section relative overflow-hidden">
      <span aria-hidden className="bg-word right-0 top-10">Services</span>
      <div className="container-default relative">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="subtitle">{t.services.subtitle}</p>
            <h2 className="h-display text-[34px] sm:text-[44px] lg:text-[54px]">{t.services.title}</h2>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <div className="flex flex-wrap gap-4">
              <a href="#devis" className="btn btn-primary">
                {t.services.ctaPrimary} <span aria-hidden>→</span>
              </a>
              <a href="#services" className="btn btn-outline">
                {t.services.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
        <SliderRow label={t.services.subtitle}>
          {t.services.items.map((s) => (
            <a
              key={s.n}
              data-slide
              href="#devis"
              className="group relative flex min-h-[630px] w-[86vw] max-w-[596px] shrink-0 snap-start flex-col justify-between overflow-hidden bg-black p-8 text-white"
            >
              <Image src={s.img} alt={s.title} fill sizes="(max-width: 767px) 86vw, 596px" className="object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-50" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <span className="h-display relative text-[72px] text-white">{s.n}</span>
              <span className="relative">
                <span className="h-display block text-[32px] sm:text-[44px]">{s.title}</span>
                <span className="mt-3 block max-w-[440px] text-[15px] font-semibold leading-6 text-white/75">{s.text}</span>
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-black uppercase tracking-widest text-white">
                  <span className="border-b-2 border-[#1557ff] pb-1">{t.services.learnMore}</span>
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </span>
              </span>
            </a>
          ))}
        </SliderRow>
      </div>
    </section>
  );
}

export function WhyUs() {
  const { t } = useLang();
  return (
    <section className="section relative overflow-hidden bg-black text-white">
      <span aria-hidden className="bg-word on-dark left-0 top-10">{t.why.word}</span>
      <div className="container-default relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="subtitle">{t.why.subtitle}</p>
          <h2 className="h-display text-[34px] text-white sm:text-[44px] lg:text-[54px]">{t.why.title}</h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-7 text-white/70">{t.why.text}</p>
          <ul className="mt-7 space-y-3">
            {t.why.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] font-bold text-white/90">
                <span className="grid h-6 w-6 shrink-0 place-items-center bg-[#1557ff] text-sm font-black text-white">✓</span>
                {p}
              </li>
            ))}
          </ul>
          <a href="#devis" className="btn btn-light mt-8">
            {t.why.cta} <span aria-hidden>→</span>
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <Image src={`${IMG}/mechanic.jpg`} alt="Mécanicien de l'atelier Carrosserie Callian" width={1000} height={1100} className="h-auto w-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <Image
              src={`${IMG}/engine.png`}
              alt=""
              width={420}
              height={300}
              aria-hidden
              className="absolute -bottom-10 -left-6 w-[46%] max-w-[300px] sm:-left-10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <section id="atelier" className="section relative overflow-hidden">
      <div className="container-default grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative bg-[#f4f4f4] p-8 sm:p-12">
            <p className="h-display text-[26px] leading-snug sm:text-[32px]">
              “On vous montre, on vous explique — on ne repeint que ce qui doit l&apos;être.”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-display bg-black px-5 py-3 text-[34px] text-white">{t.about.badgeYears}</span>
              <span className="text-sm font-black uppercase tracking-widest text-black/60">{t.about.badgeText}</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="subtitle">{t.about.subtitle}</p>
          <h2 className="h-display text-[34px] sm:text-[44px] lg:text-[54px]">{t.about.title}</h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-7 text-black/65">{t.about.text}</p>
          <a href="#contact" className="btn btn-primary mt-8">
            {t.about.cta} <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
