import { faker } from "@faker-js/faker";

interface ImageGenerationProps {
  category: string;
  numberofImages: number;
}

export function ImageGeneration({
  category,
  numberofImages,
}: ImageGenerationProps) {
  const Imgs = [];
  for (let i = 0; i < numberofImages; i++) {
    Imgs.push(faker.image.urlLoremFlickr({ category }));
  }

  return Imgs;
}
