"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      "Merhaba Anka Fitness,",
      `Ad: ${name}`,
      `Telefon: ${phone}`,
      `Mesaj: ${message}`,
    ].join("\n");

    window.open(
      `${site.whatsappUrl}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <section id="iletisim" className="border-t border-line bg-bg-elevated px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red">İletişim</p>
          <h2 className="font-display text-4xl tracking-tight text-fg md:text-6xl">
            Hemen başla
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Formu doldur, WhatsApp üzerinden seni arayalım. Deneme ve üyelik
            bilgisi için buradayız.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <a href={site.phoneHref} className="block text-fg transition hover:text-red">
              {site.phone}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted transition hover:text-red"
            >
              Instagram · @{site.instagram}
            </a>
            <p className="max-w-sm leading-relaxed text-muted">{site.address}</p>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <form onSubmit={onSubmit} className="space-y-5 border border-line bg-bg p-6 md:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
                Ad Soyad
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full border border-line bg-transparent px-4 py-3 text-fg outline-none transition focus:border-red"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="w-full border border-line bg-transparent px-4 py-3 text-fg outline-none transition focus:border-red"
                placeholder="05xx xxx xx xx"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-y border border-line bg-transparent px-4 py-3 text-fg outline-none transition focus:border-red"
                placeholder="Hangi paket ilginizi çekiyor?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-red px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-red-deep"
            >
              WhatsApp ile Gönder
            </button>
            {status === "sent" && (
              <p className="text-center text-sm text-muted">
                WhatsApp açıldı. Mesajını göndererek bize ulaşabilirsin.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
