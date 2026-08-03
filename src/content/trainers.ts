import fs from "fs";
import path from "path";

export type Trainer = {
  id: string;
  name: string;
  role?: string;
  /** /public/images/trainers/ altındaki dosya yolu */
  image: string;
};

/** Manuel isim tanımlamak isterseniz sırayla buraya yazabilirsiniz */
export const TRAINER_NAMES: string[] = [
  // 1. WhatsApp Image 2026-08-03 at 12.08.19 (1).jpeg
  "",
  // 2. WhatsApp Image 2026-08-03 at 12.08.19.jpeg
  "",
  // 3. WhatsApp Image 2026-08-03 at 12.08.20 (1).jpeg
  "",
  // 4. WhatsApp Image 2026-08-03 at 12.08.20 (2).jpeg
  "",
  // 5. WhatsApp Image 2026-08-03 at 12.08.20 (3).jpeg
  "",
  // 6. WhatsApp Image 2026-08-03 at 12.08.20 (4).jpeg
  "",
  // 7. WhatsApp Image 2026-08-03 at 12.08.20 (5).jpeg
  "",
  // 8. WhatsApp Image 2026-08-03 at 12.08.20.jpeg
  "",
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

function formatNameFromFileName(file: string, index: number): string {
  // Manuel isim tanımlanmışsa onu kullan
  if (TRAINER_NAMES[index] && TRAINER_NAMES[index].trim() !== "") {
    return TRAINER_NAMES[index];
  }

  const nameWithoutExt = path.basename(file, path.extname(file));

  // Eğer dosya adı "WhatsApp Image..." veya "trainer-..." gibi genel bir ad değilse, dosya adını isim yap
  if (!nameWithoutExt.toLowerCase().startsWith("whatsapp") && !nameWithoutExt.toLowerCase().startsWith("trainer")) {
    return nameWithoutExt
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  return `Antrenör ${index + 1}`;
}

export function getTrainers(): Trainer[] {
  try {
    const dirPath = path.join(process.cwd(), "public", "images", "trainers");
    if (!fs.existsSync(dirPath)) {
      return [];
    }

    const files = fs.readdirSync(dirPath);
    const validFiles = files.filter((file) => {
      if (file.startsWith(".")) return false;
      const ext = path.extname(file).toLowerCase();
      return VALID_EXTENSIONS.has(ext);
    });

    const realPhotos = validFiles.filter(
      (file) => path.extname(file).toLowerCase() !== ".svg"
    );

    const displayFiles = realPhotos.length > 0 ? realPhotos : validFiles;

    displayFiles.sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    );

    return displayFiles.map((file, index) => {
      const name = formatNameFromFileName(file, index);

      return {
        id: `t-${index}-${file}`,
        name,
        image: encodeURI(`/images/trainers/${file}`),
      };
    });
  } catch (error) {
    console.error("Error reading trainer images:", error);
    return [];
  }
}
