export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  /** Büyük kart için true (masaüstü grid) */
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  { id: "g01", src: "/images/gallery/Screenshot 2026-08-03 120248.png", alt: "Anka Fitness ağırlık alanı", featured: true },
  { id: "g02", src: "/images/gallery/Screenshot 2026-08-03 120255.png", alt: "Kardiyo ekipmanları ve koşu bantları" },
  { id: "g03", src: "/images/gallery/Screenshot 2026-08-03 120303.png", alt: "Modern fitness ve egzersiz ekipmanları" },
  { id: "g04", src: "/images/gallery/Screenshot 2026-08-03 120311.png", alt: "Serbest ağırlık bölgesi", featured: true },
  { id: "g05", src: "/images/gallery/Screenshot 2026-08-03 120327.png", alt: "Motivasyon dolu antrenman atmosferi" },
  { id: "g06", src: "/images/gallery/Screenshot 2026-08-03 120335.png", alt: "Fonksiyonel antrenman alanı" },
  { id: "g07", src: "/images/gallery/Screenshot 2026-08-03 120340.png", alt: "CrossFit ve güç geliştirme bölgesi" },
  { id: "g08", src: "/images/gallery/Screenshot 2026-08-03 120348.png", alt: "Grup antrenman ve pilates alanı", featured: true },
  { id: "g09", src: "/images/gallery/Screenshot 2026-08-03 120356.png", alt: "Esneklik ve mobilite alanı" },
  { id: "g10", src: "/images/gallery/Screenshot 2026-08-03 120402.png", alt: "Ferah soyunma ve dinlenme alanı" },
  { id: "g11", src: "/images/gallery/Screenshot 2026-08-03 120409.png", alt: "Salon genel görünümü ve ekipmanlar" },
  { id: "g12", src: "/images/gallery/Screenshot 2026-08-03 120420.png", alt: "Anka Fitness detay alanı", featured: true },
  { id: "g13", src: "/images/gallery/Screenshot 2026-08-03 120426.png", alt: "Güç ve kondisyon alanı" },
  { id: "g14", src: "/images/gallery/Screenshot 2026-08-03 120431.png", alt: "Kişisel antrenman bölgesi" },
].map((item) => ({
  ...item,
  src: encodeURI(item.src),
}));

export function getGalleryItems(): GalleryItem[] {
  return galleryItems;
}
