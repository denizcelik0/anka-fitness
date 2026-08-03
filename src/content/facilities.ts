export type FacilityIcon =
  | "fitness"
  | "pilates"
  | "crossfit"
  | "table-tennis"
  | "volleyball"
  | "football";

export type Facility = {
  id: string;
  name: string;
  description: string;
  icon: FacilityIcon;
};

/** Salon imkanları — isim veya açıklama değiştirmek için bu dosyayı düzenleyin. */
export const facilities: Facility[] = [
  {
    id: "fitness",
    name: "Fitness",
    description: "Serbest ağırlık, makine ve kardiyo alanlarında tam donanımlı antrenman.",
    icon: "fitness",
  },
  {
    id: "pilates",
    name: "Pilates",
    description: "Esneklik, denge ve core gücü için özel pilates alanı.",
    icon: "pilates",
  },
  {
    id: "crossfit",
    name: "CrossFit",
    description: "Fonksiyonel hareketler ve yüksek yoğunluklu antrenman için ayrılmış bölüm.",
    icon: "crossfit",
  },
  {
    id: "table-tennis",
    name: "Masa Tenisi",
    description: "Koordinasyon ve refleks geliştirmek için masa tenisi imkanı.",
    icon: "table-tennis",
  },
  {
    id: "volleyball",
    name: "Voleybol",
    description: "Takım ruhu ve kondisyon için voleybol alanı.",
    icon: "volleyball",
  },
  {
    id: "football",
    name: "Ayak Tenisi",
    description: "Eğlenceli ve dinamik ayak tenisi alanı.",
    icon: "football",
  },
];
