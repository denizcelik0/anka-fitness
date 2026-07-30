"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeri" className="border-t border-line bg-bg-elevated px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red">Atmosfer</p>
          <h2 className="font-display text-4xl tracking-tight text-fg md:text-6xl">
            Galeri
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {site.gallery.map((item, index) => (
            <Reveal
              key={item.src}
              delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              className={index === 0 || index === 3 ? "md:col-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block aspect-[4/3] w-full overflow-hidden bg-bg-soft"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-bg/0 transition group-hover:bg-bg/25" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Galeri önizleme"
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-sm tracking-wide text-muted hover:text-fg"
            onClick={() => setActive(null)}
          >
            Kapat
          </button>
          <div
            className="relative h-[70vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={site.gallery[active].src}
              alt={site.gallery[active].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
