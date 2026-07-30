"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#paketler", label: "Paketler" },
  { href: "#egitmenler", label: "Eğitmenler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#konum", label: "Konum" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-bg/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#anasayfa" className="group relative z-50 font-display text-xl tracking-[0.12em] md:text-2xl">
          <span className="text-fg">ANKA</span>
          <span className="text-red"> FITNESS</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red px-5 py-2.5 text-sm font-medium tracking-wide text-white transition hover:bg-red-deep"
          >
            Üye Ol
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Menü</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-fg transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-full bg-fg transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-full bg-fg transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-bg/98 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl tracking-[0.08em] text-fg"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-red px-8 py-3 text-sm font-medium tracking-wide text-white"
          >
            WhatsApp ile Üye Ol
          </a>
        </nav>
      </div>
    </header>
  );
}
