import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";
import { IMG } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden bg-black text-white">
      {/* Truck image — right side with diagonal cut (desktop) */}
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[64%] md:block">
        <Image
          src={`${IMG}/hero-truck.jpg`}
          alt=""
          fill
          priority
          sizes="64vw"
          className="object-cover object-[50%_100%] [clip-path:polygon(7%_0,100%_0,100%_100%,22%_100%)]"
        />
        <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-black to-transparent" />
      </div>

      {/* Mobile: image on top, stacked */}
      <div className="relative h-[300px] sm:h-[360px] md:hidden">
        <Image
          src={`${IMG}/hero-truck.jpg`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_80%]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="container-default relative flex items-center py-14 md:min-h-[640px] md:py-0 lg:min-h-[720px]">
        <Reveal className="max-w-[560px]">
          <p className="subtitle">{t.hero.subtitle}</p>
          <h1 className="h-display text-[42px] text-white sm:text-[54px] lg:text-[62px]">
            {t.hero.titleA} <span className="whitespace-nowrap">{t.hero.titleB}</span>
          </h1>
          <p className="mt-5 max-w-[480px] text-[16px] leading-7 text-white/70">{t.hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#devis" className="btn btn-primary">
              {t.hero.ctaPrimary} <span aria-hidden>→</span>
            </a>
            <a href="#services" className="btn btn-outline-light">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
