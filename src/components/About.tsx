import { Reveal } from "@/components/Reveal";

const highlights = [
  {
    title: "Premium Ekipman",
    text: "Serbest ağırlık, makine ve kardiyo hatlarında güncel, bakımlı setler.",
  },
  {
    title: "Uzman Koçluk",
    text: "Hedefine göre planlanan antrenman ve ilerleme takibi.",
  },
  {
    title: "Esnek Saatler",
    text: "Hafta içi gece yarısına kadar açık — programına uyum sağlar.",
  },
];

export function About() {
  return (
    <section className="border-t border-line bg-bg px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red">Neden Anka</p>
          <h2 className="font-display text-4xl leading-none tracking-tight text-fg md:text-6xl">
            Disiplin.
            <br />
            Performans.
            <br />
            <span className="text-red">Karakter.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Anka Fitness, Sakarya Erenler&apos;de modern bir antrenman alanı sunar.
            Gürültüsüz bir premium his, net bir hedef ve her tekrarda ilerleme.
            Burada antrenman bir rutin değil — bir standarttır.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-3">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={(index + 1) as 1 | 2 | 3}>
            <div className="border-t border-red/40 pt-6">
              <h3 className="font-display text-xl tracking-wide text-fg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
