import { Reveal } from "@/components/Reveal";
import { formatPrice, site } from "@/lib/site";

export function Packages() {
  return (
    <section id="paketler" className="border-t border-line bg-bg-elevated px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red">Üyelik</p>
          <h2 className="font-display text-4xl tracking-tight text-fg md:text-6xl">
            Paketler
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Hedefine ve tempona uygun üyelik seç. Tüm paketlerde salona tam erişim.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {site.packages.map((pack, index) => (
            <Reveal key={pack.id} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
              <article
                className={`relative flex h-full flex-col border p-6 transition duration-300 hover:border-red/60 ${
                  pack.popular
                    ? "border-red bg-bg-soft shadow-[0_0_40px_rgba(225,29,46,0.12)]"
                    : "border-line bg-bg"
                }`}
              >
                {pack.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-red px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    Popüler
                  </span>
                )}
                <p className="text-xs uppercase tracking-[0.25em] text-muted">{pack.duration}</p>
                <h3 className="mt-3 font-display text-3xl tracking-wide text-fg">{pack.name}</h3>
                <p className="mt-6 font-display text-4xl text-fg">
                  ₺{formatPrice(pack.price)}
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-muted">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${site.whatsappUrl}?text=${encodeURIComponent(`${pack.name} üyelik hakkında bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition ${
                    pack.popular
                      ? "bg-red text-white hover:bg-red-deep"
                      : "border border-white/15 text-fg hover:border-red hover:text-red"
                  }`}
                >
                  Bu Paketi Seç
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
