import type { Trainer } from "@/content/trainers";
import { Reveal } from "@/components/Reveal";
import { TrainerCard } from "@/components/TrainerCard";

interface TrainersProps {
  items?: Trainer[];
}

export function Trainers({ items = [] }: TrainersProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section id="egitmenler" className="border-t border-line bg-bg px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red">Ekip</p>
          <h2 className="font-display text-4xl tracking-tight text-fg md:text-6xl">
            Antrenörler
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Formunu birlikte inşa edeceğin deneyimli antrenör kadrosu.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((trainer, index) => (
            <Reveal key={trainer.id} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
              <TrainerCard trainer={trainer} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
