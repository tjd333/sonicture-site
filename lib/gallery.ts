import { galleryItems } from "@/content/gallery";

export function getGalleryItems() {
  return galleryItems;
}

export function getBySlug(slug: string) {
  return galleryItems.find((item) => item.slug === slug) ?? null;
}

export function getAllSlugs() {
  return galleryItems.map((item) => item.slug);
}
