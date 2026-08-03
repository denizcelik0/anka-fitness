"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/content/gallery";
import { Reveal } from "@/components/Reveal";

interface GalleryProps {
  items?: GalleryItem[];
}

export function Gallery({ items = [] }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  if (!items.length) {
    return null;
  }

  return (
    <section id="galeri" className="border-t border-line bg-bg-elevated px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red">Atmosfer</p>
          <h2 className="font-display text-4xl tracking-tight text-fg md:text-6xl">
            Galeri
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Salonumuzdan kareler — Anka Fitness atmosferini keşfedin.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 grid-flow-dense">
          {items.map((item, index) => (
            <Reveal
              key={item.id}
              delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
              className={
                item.featured
                  ? "col-span-2 row-span-2 md:col-span-2"
                  : ""
              }
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                className={`group relative block w-full overflow-hidden bg-bg-soft ${
                  item.featured ? "aspect-square md:aspect-auto md:h-full md:min-h-[320px]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes={
                    item.featured
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-bg/0 transition group-hover:bg-bg/20" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && items[active] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Galeri önizleme"
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 text-sm tracking-wide text-muted hover:text-fg"
            onClick={() => setActive(null)}
          >
            Kapat
          </button>
          <div
            className="relative h-[70vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[active].src}
              alt={items[active].alt}
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
