import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Location() {
  return (
    <section id="konum" className="border-t border-line bg-bg px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red">Bizi bul</p>
            <h2 className="font-display text-4xl tracking-tight text-fg md:text-6xl">
              Konum & Saatler
            </h2>
            <p className="mt-5 max-w-md text-muted">{site.address}</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-medium tracking-wide text-red transition hover:text-fg"
            >
              Google Maps&apos;te Aç →
            </a>

            <div className="mt-10 space-y-4 border-t border-line pt-8">
              {site.hours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-baseline justify-between gap-4 border-b border-line/70 pb-4"
                >
                  <span className="text-sm uppercase tracking-[0.18em] text-muted">
                    {item.day}
                  </span>
                  <span className="font-display text-xl text-fg">{item.time}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="overflow-hidden border border-line bg-bg-soft">
              <iframe
                title="Anka Fitness konum haritası"
                src={site.mapsEmbed}
                className="h-[360px] w-full grayscale contrast-125 invert-[0.92] md:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
