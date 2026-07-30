import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Trainers() {
  return (
    <section id="egitmenler" className="border-t border-line bg-bg px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red">Ekip</p>
          <h2 className="font-display text-4xl tracking-tight text-fg md:text-6xl">
            Eğitmenler
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Formunu birlikte inşa edeceğin deneyimli antrenör kadrosu.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {site.trainers.map((trainer, index) => (
            <Reveal key={trainer.name} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="group overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-bg-soft">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-2xl tracking-wide text-fg">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{trainer.role}</p>
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
