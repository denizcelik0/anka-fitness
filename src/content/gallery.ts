import fs from "fs";
import path from "path";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  /** Büyük kart için true (masaüstü grid) */
  featured?: boolean;
};

const GALLERY_CAPTIONS = [
  "Anka Fitness ağırlık alanı",
  "Kardiyo ekipmanları ve koşu bantları",
  "Modern fitness ve egzersiz ekipmanları",
  "Serbest ağırlık bölgesi",
  "Motivasyon dolu antrenman atmosferi",
  "Fonksiyonel antrenman alanı",
  "CrossFit ve güç geliştirme bölgesi",
  "Grup antrenman ve pilates alanı",
  "Esneklik ve mobilite alanı",
  "Ferah soyunma ve dinlenme alanı",
  "Salon genel görünümü ve ekipmanlar",
  "Anka Fitness detay ve özel çalışma alanları",
];

const DEFAULT_ITEMS: GalleryItem[] = [
  { id: "g01", src: "/images/hero.svg", alt: "Anka Fitness ağırlık alanı", featured: true },
  { id: "g02", src: "/images/hero.svg", alt: "Kardiyo ekipmanları" },
  { id: "g03", src: "/images/hero.svg", alt: "Modern fitness salonu" },
  { id: "g04", src: "/images/hero.svg", alt: "Serbest ağırlık bölgesi", featured: true },
];

const VALID_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".svg",
  ".avif",
  ".gif",
]);

export function getGalleryItems(): GalleryItem[] {
  try {
    const dirPath = path.join(process.cwd(), "public", "images", "gallery");
    if (!fs.existsSync(dirPath)) {
      return DEFAULT_ITEMS;
    }

    const files = fs.readdirSync(dirPath);
    const validFiles = files.filter((file) => {
      if (file.startsWith(".")) return false;
      const ext = path.extname(file).toLowerCase();
      return VALID_EXTENSIONS.has(ext);
    });

    if (validFiles.length === 0) {
      return DEFAULT_ITEMS;
    }

    const realPhotos = validFiles.filter(
      (file) => path.extname(file).toLowerCase() !== ".svg"
    );

    const displayFiles = realPhotos.length > 0 ? realPhotos : validFiles;

    displayFiles.sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    );

    return displayFiles.map((file, index) => {
      const alt =
        GALLERY_CAPTIONS[index % GALLERY_CAPTIONS.length] ||
        `Anka Fitness Salon Görünümü ${index + 1}`;
      const featured = index === 0 || index % 5 === 0;

      return {
        id: `g-${index}-${file}`,
        src: encodeURI(`/images/gallery/${file}`),
        alt,
        featured,
      };
    });
  } catch (error) {
    console.error("Error reading gallery images:", error);
    return DEFAULT_ITEMS;
  }
}
