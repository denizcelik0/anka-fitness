import { images } from "@/lib/images";

export const site = {
  name: "Anka Fitness",
  tagline: "Gücünü yükselt. Sınırlarını aş.",
  description:
    "Sakarya Erenler'de premium fitness deneyimi. Modern ekipman, uzman eğitmenler ve sonuç odaklı programlar.",
  phone: "0532 504 42 15",
  phoneHref: "tel:+905325044215",
  phone2: "0505 667 37 98",
  phone2Href: "tel:+905056673798",
  whatsapp: "905056673798",
  whatsappUrl: "https://wa.me/905056673798",
  instagram: "anka.fitnesss",
  instagramUrl: "https://instagram.com/anka.fitnesss",
  address: "Erenler, Şht. İlhan Aras Cd. No:60 kat.1, 54200 Erenler/Sakarya",
  mapsEmbed:
    "https://www.google.com/maps?q=Erenler,+%C5%9Eht.+%C4%B0lhan+Aras+Cd.+No:60,+54200+Erenler/Sakarya&output=embed",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Erenler+%C5%9Eht.+%C4%B0lhan+Aras+Cd.+No:60+Erenler+Sakarya",
  heroImage: images.hero,
  ogImage: images.og,
  hours: [
    { day: "Hafta içi", time: "08:00 – 00:00" },
    { day: "Cumartesi", time: "10:00 – 22:00" },
    { day: "Pazar", time: "10:00 – 21:00" },
  ],
  packages: [
    {
      id: "monthly",
      name: "Aylık",
      duration: "1 Ay",
      price: 2000,
      popular: false,
      features: ["Tüm ekipmanlara erişim", "Soyunma & duş", "Program danışmanlığı"],
    },
    {
      id: "quarterly",
      name: "3 Aylık",
      duration: "3 Ay",
      price: 5000,
      popular: false,
      features: [
        "Tüm ekipmanlara erişim",
        "Soyunma & duş",
        "Program danışmanlığı",
        "Aylığa göre daha avantajlı",
      ],
    },
    {
      id: "semi",
      name: "6 Aylık",
      duration: "6 Ay",
      price: 9000,
      popular: true,
      features: [
        "Tüm ekipmanlara erişim",
        "Soyunma & duş",
        "Kişisel program desteği",
        "1 kez üyelik dondurma hakkı",
        "En çok tercih edilen",
      ],
    },
    {
      id: "yearly",
      name: "12 Aylık",
      duration: "12 Ay",
      price: 15000,
      popular: false,
      features: [
        "Tüm ekipmanlara erişim",
        "Soyunma & duş",
        "Öncelikli destek",
        "2 kez üyelik dondurma hakkı",
        "En uygun birim fiyat",
      ],
    },
  ],
} as const;

export function formatPrice(value: number) {
  return new Intl.NumberFormat("tr-TR").format(value);
}
