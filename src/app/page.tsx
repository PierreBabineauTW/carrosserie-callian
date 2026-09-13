"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Services, WhyUs } from "@/components/Sections";
import { Blog, Locations, LogoStrip, Packages, Testimonials, Visit } from "@/components/Content";
import { Contact, Footer } from "@/components/ContactFooter";
import { CookieBanner, StickyMobileCta } from "@/components/Overlays";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <WhyUs />
        <About />
        <Locations />
        <Testimonials />
        <Visit />
        <Packages />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
      <CookieBanner />
    </LanguageProvider>
  );
}
