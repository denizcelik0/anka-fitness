import Image from "next/image";
import type { Trainer } from "@/content/trainers";

type TrainerCardProps = {
  trainer: Trainer;
};

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <article className="group overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden bg-bg-soft">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-2xl tracking-wide text-fg">{trainer.name}</h3>
        </div>
      </div>
    </article>
  );
}
