import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#anasayfa" className="inline-flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Anka Fitness Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display text-2xl tracking-[0.12em]">
              ANKA <span className="text-red">FITNESS</span>
            </span>
          </a>
          <p className="mt-3 max-w-sm text-sm text-muted">{site.address}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted">
          <a href={site.phoneHref} className="hover:text-red">
            {site.phone}
          </a>
          <a href={site.phone2Href} className="hover:text-red">
            {site.phone2}
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red"
          >
            @{site.instagram}
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-line pt-6 text-xs text-muted">
        © {year} Anka Fitness. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
