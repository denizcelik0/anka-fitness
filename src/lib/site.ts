export const site = {
  name: "Anka Fitness",
  tagline: "Gücünü yükselt. Sınırlarını aş.",
  description:
    "Sakarya Erenler'de premium fitness deneyimi. Modern ekipman, uzman eğitmenler ve sonuç odaklı programlar.",
  phone: "0505 667 37 98",
  phoneHref: "tel:+905056673798",
  whatsapp: "905056673798",
  whatsappUrl: "https://wa.me/905056673798",
  instagram: "anka.fitnesss",
  instagramUrl: "https://instagram.com/anka.fitnesss",
  address: "Erenler, Şht. İlhan Aras Cd. No:60 kat.1, 54200 Erenler/Sakarya",
  mapsEmbed:
    "https://www.google.com/maps?q=Erenler,+%C5%9Eht.+%C4%B0lhan+Aras+Cd.+No:60,+54200+Erenler/Sakarya&output=embed",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Erenler+%C5%9Eht.+%C4%B0lhan+Aras+Cd.+No:60+Erenler+Sakarya",
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
      features: ["Tüm ekipmanlara erişim", "Soyunma & duş", "Ücretsiz deneme günü"],
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
        "Beslenme rehberi",
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
        "Beslenme rehberi",
        "En uygun birim fiyat",
      ],
    },
  ],
  trainers: [
    {
      name: "Emre Yıldız",
      role: "Baş Antrenör · Strength",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Selin Kara",
      role: "Fonksiyonel Antrenman",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Can Demir",
      role: "HIIT & Conditioning",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      alt: "Anka Fitness ağırlık alanı",
    },
    {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      alt: "Kardiyo ekipmanları",
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern fitness salonu",
    },
    {
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      alt: "Serbest ağırlık bölgesi",
    },
    {
      src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80",
      alt: "Antrenman atmosferi",
    },
    {
      src: "https://images.unsplash.com/photo-1599058945522-28d584b6f14f?auto=format&fit=crop&w=1200&q=80",
      alt: "Fonksiyonel antrenman alanı",
    },
  ],
} as const;

export function formatPrice(value: number) {
  return new Intl.NumberFormat("tr-TR").format(value);
}
