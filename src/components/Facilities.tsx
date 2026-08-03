import { facilities } from "@/content/facilities";
import { FacilityIconGraphic } from "@/components/FacilityIcons";
import { Reveal } from "@/components/Reveal";

export function Facilities() {
  return (
    <section id="imkanlar" className="border-t border-line bg-bg-elevated px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red">Hizmetler</p>
          <h2 className="font-display text-4xl tracking-tight text-fg md:text-6xl">
            İmkanlarımız
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Fitness&apos;ten takım sporlarına kadar geniş imkanlar — tek çatı altında.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <Reveal key={facility.id} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="group flex h-full flex-col border border-line bg-bg p-6 transition duration-300 hover:border-red/50 hover:bg-bg-soft">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-red/30 bg-red/10 text-red transition group-hover:border-red group-hover:bg-red/15">
                  <FacilityIconGraphic icon={facility.icon} />
                </div>
                <h3 className="font-display text-xl tracking-wide text-fg">{facility.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {facility.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
