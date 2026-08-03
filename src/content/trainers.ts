export type Trainer = {
  id: string;
  name: string;
  role?: string;
  /** /public/images/trainers/ altındaki dosya yolu */
  image: string;
};

export const trainers: Trainer[] = [
  { id: "t1", name: "Murat", image: encodeURI("/images/trainers/Murat.jpeg") },
  { id: "t2", name: "Gamze", image: encodeURI("/images/trainers/Gamze.jpeg") },
  { id: "t3", name: "Efe", image: encodeURI("/images/trainers/Efe2.jpeg") },
  { id: "t4", name: "Efe", image: encodeURI("/images/trainers/Efe.jpeg") },
  { id: "t5", name: "Ceren", image: encodeURI("/images/trainers/Ceren.jpeg") },
  { id: "t6", name: "Nisa", image: encodeURI("/images/trainers/Nisa.jpeg") },
  { id: "t7", name: "Emre", image: encodeURI("/images/trainers/Emre.jpeg") },
  { id: "t8", name: "Selin", image: encodeURI("/images/trainers/Selin.jpeg") },
  { id: "t9", name: "Serra", image: encodeURI("/images/trainers/Serra.jpeg") },
  { id: "t10", name: "Sıla", image: encodeURI("/images/trainers/Sila.jpeg") },
];

export function getTrainers(): Trainer[] {
  return trainers;
}
