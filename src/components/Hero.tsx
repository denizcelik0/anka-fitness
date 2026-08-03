import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0 animate-hero-bg">
        <Image
          src="/images/background.png"
          alt="Anka Fitness salon atmosferi"
          fill
          priority
          className="object-cover object-center brightness-90 transition duration-1000 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.65)_0%,rgba(5,5,5,0.4)_40%,rgba(5,5,5,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(225,29,46,0.32),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p
          className="animate-hero-copy mb-4 text-xs uppercase tracking-[0.35em] text-red md:text-sm"
          style={{ animationDelay: "0.1s" }}
        >
          Sakarya · Erenler
        </p>
        <h1
          className="animate-hero-copy font-display text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.9] tracking-[-0.02em] text-fg"
          style={{ animationDelay: "0.2s" }}
        >
          ANKA
          <br />
          <span className="text-red">FITNESS</span>
        </h1>
        <p
          className="animate-hero-copy mt-6 max-w-xl text-base text-muted md:text-lg"
          style={{ animationDelay: "0.35s" }}
        >
          {site.tagline} Premium ekipman, disiplinli antrenman ve sonuç odaklı
          koçluk ile formuna yön ver.
        </p>
        <div
          className="animate-hero-copy mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#paketler"
            className="inline-flex items-center justify-center rounded-full bg-red px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-red-deep"
          >
            Paketleri İncele
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium tracking-wide text-fg transition hover:border-red hover:text-red"
          >
            Ücretsiz Bilgi Al
          </a>
        </div>
      </div>
    </section>
  );
}
