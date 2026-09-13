import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";
import { business, IMG } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";
import { SliderRow } from "./Slider";

export function Locations() {
  const { t } = useLang();
  return (
    <section className="section relative overflow-hidden bg-[#f4f4f4]">
      <span aria-hidden className="bg-word right-0 top-10">{t.locations.word}</span>
      <div className="container-default relative">
        <Reveal className="max-w-[640px]">
          <p className="subtitle">{t.locations.subtitle}</p>
          <h2 className="h-display text-[34px] sm:text-[44px] lg:text-[54px]">{t.locations.title}</h2>
          <p className="mt-4 text-[16px] leading-7 text-black/65">{t.locations.text}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.locations.cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <article className="border border-black/10 bg-white">
                <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
                  <Image src={c.img} alt={c.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="h-display text-[26px] sm:text-[30px]">{c.name}</h3>
                  <p className="mt-3 text-[15px] leading-6 text-black/60">{c.text}</p>
                  <div className="mt-6 space-y-2 border-t border-black/10 pt-6 text-[15px] font-bold">
                    <a href={i === 0 ? business.mapsUrl : business.phoneHref} target={i === 0 ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-2 hover:text-[#1557ff]">
                      <span aria-hidden>📍</span> {c.address} <span aria-hidden>↗</span>
                    </a>
                    <a href={business.phoneHref} className="flex items-center gap-2 hover:text-[#1557ff]">
                      <span aria-hidden>📞</span> {c.phone}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useLang();
  return (
    <section id="avis" className="section relative overflow-hidden">
      <span aria-hidden className="bg-word left-0 top-10">{t.reviews.word}</span>
      <div className="container-default relative">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="subtitle">{t.reviews.subtitle}</p>
            <h2 className="h-display text-[34px] sm:text-[44px] lg:text-[54px]">{t.reviews.title}</h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-black/65">{t.reviews.text}</p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <a href="#devis" className="btn btn-primary">
              {t.reviews.cta} <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
        <SliderRow label={t.reviews.subtitle}>
          {t.reviews.items.map((r) => (
            <figure
              key={r.name}
              data-slide
              className="relative flex min-h-[560px] w-[86vw] max-w-[520px] shrink-0 snap-start flex-col justify-end overflow-hidden bg-black p-8 text-white"
            >
              {r.img ? (
                <Image src={r.img} alt={r.name} fill sizes="(max-width: 767px) 86vw, 520px" className="object-cover opacity-70" />
              ) : (
                <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#1557ff]" />
              )}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative">
                <div aria-hidden className="text-[18px] tracking-[0.2em] text-white">★★★★★</div>
                <blockquote className="mt-3 text-[17px] font-semibold leading-7">“{r.text}”</blockquote>
                <figcaption className="mt-5 border-t border-white/25 pt-4">
                  <p className="h-display text-[22px]">{r.name}</p>
                  <p className="mt-1 text-[13px] font-bold uppercase tracking-widest text-white/60">{r.place}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </SliderRow>
      </div>
    </section>
  );
}

export function Visit() {
  const { t } = useLang();
  return (
    <section className="container-default pb-[128px] lg:pb-[190px]">
      <Reveal>
        <div className="relative overflow-hidden bg-[#1557ff] px-8 py-14 text-white sm:px-14 lg:px-20">
          <span aria-hidden className="bg-word on-dark -right-6 -top-4">Visit</span>
          <div className="relative max-w-[640px]">
            <p className="text-[16px] font-black uppercase tracking-[0.15em] text-white/80">{t.visit.subtitle}</p>
            <h2 className="h-display mt-3 text-[34px] sm:text-[44px]">{t.visit.title}</h2>
            <p className="mt-4 text-[16px] leading-7 text-white/85">{t.visit.text}</p>
            <a href="#devis" className="btn btn-light mt-8">
              {t.visit.cta} <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Packages() {
  const { t } = useLang();
  return (
    <section id="forfaits" className="section relative overflow-hidden bg-black text-white">
      <span aria-hidden className="bg-word on-dark right-0 top-10">{t.packages.word}</span>
      <div className="container-default relative">
        <Reveal className="max-w-[640px]">
          <p className="subtitle">{t.packages.subtitle}</p>
          <h2 className="h-display text-[34px] text-white sm:text-[44px] lg:text-[54px]">{t.packages.title}</h2>
          <p className="mt-4 text-[16px] leading-7 text-white/65">{t.packages.text}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.packages.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="flex h-full flex-col border border-white/15 bg-[#111]">
                <div className="relative h-[220px] overflow-hidden">
                  <Image src={p.img} alt={p.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="h-display text-[30px]">{p.name}</h3>
                  <p className="h-display mt-1 text-[44px] text-[#5b8cff]">{p.price}</p>
                  <p className="mt-2 text-[15px] text-white/60">{p.desc}</p>
                  <p className="mt-6 text-[14px] font-black uppercase tracking-widest text-white/80">{t.packages.included}</p>
                  <ul className="mt-3 flex-1 space-y-2.5 text-[15px] font-semibold text-white/85">
                    {p.feats.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-[#1557ff] text-[11px] font-black text-white">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#devis" className="btn btn-light mt-7 w-full">
                    {t.packages.cta} {p.name} <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const { t } = useLang();
  return (
    <section id="conseils" className="section relative overflow-hidden">
      <span aria-hidden className="bg-word right-0 top-10">Blog</span>
      <div className="container-default relative">
        <Reveal>
          <p className="subtitle">{t.blog.subtitle}</p>
          <h2 className="h-display text-[34px] sm:text-[44px] lg:text-[54px]">{t.blog.title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <a href="#devis" className="group relative flex min-h-[480px] flex-col justify-end overflow-hidden bg-black p-8 text-white">
              <Image src={t.blog.featured.img} alt={t.blog.featured.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-60 transition duration-500 group-hover:scale-105" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <span className="relative w-fit bg-[#1557ff] px-3 py-1.5 text-[13px] font-black uppercase tracking-widest">{t.blog.featured.tag}</span>
              <span className="h-display relative mt-3 block text-[28px] sm:text-[34px]">{t.blog.featured.title}</span>
              <span className="relative mt-3 inline-flex items-center gap-2 text-[15px] font-black uppercase tracking-widest">
                <span className="border-b-2 border-[#1557ff] pb-1">{t.blog.learnMore}</span> <span aria-hidden>→</span>
              </span>
            </a>
          </Reveal>
          <div className="grid gap-6">
            {t.blog.items.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <a href="#devis" className="group flex items-center gap-6 border border-black/10 bg-white p-6 transition hover:border-black">
                  <span className="grid h-16 w-16 shrink-0 place-items-center bg-black text-[13px] font-black uppercase text-white">{a.tag.slice(0, 4)}</span>
                  <span>
                    <span className="h-display block text-[20px] leading-tight group-hover:text-[#1557ff]">{a.title}</span>
                    <span className="mt-2 block text-[13px] font-bold uppercase tracking-widest text-black/45">{a.date} · {t.blog.readMore} →</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LogoStrip() {
  return (
    <div className="border-y border-black/10 bg-white">
      <div className="container-default flex flex-wrap items-center justify-between gap-4 py-6 text-[13px] font-black uppercase tracking-[0.2em] text-black/40">
        <span>{business.rating} · {business.reviewsCount}</span>
        <span className="hidden sm:inline">Toutes assurances</span>
        <span className="hidden md:inline">Devis gratuit 24 h</span>
        <span>{business.phone}</span>
      </div>
    </div>
  );
}
