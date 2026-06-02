export type GalleryCategory =
  | "birthday"
  | "drip"
  | "wedding"
  | "cupcakes"
  | "brownies"
  | "cookies"
  | "decorating"
  | "delivery";

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  birthday: "Luxury Birthday Cakes",
  drip: "Chocolate Drip Cakes",
  wedding: "Wedding Cakes",
  cupcakes: "Cupcakes",
  brownies: "Brownies",
  cookies: "Cookies",
  decorating: "Cake Decorating",
  delivery: "Happy Deliveries",
};

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/birthday-1.jpg", alt: "Luxury birthday cake", category: "birthday" },
  { id: "g2", src: "/images/gallery/birthday-2.jpg", alt: "Elegant birthday celebration cake", category: "birthday" },
  { id: "g3", src: "/images/gallery/drip-1.jpg", alt: "Chocolate drip cake", category: "drip" },
  { id: "g4", src: "/images/gallery/drip-2.jpg", alt: "Gold drip birthday cake", category: "drip" },
  { id: "g5", src: "/images/gallery/wedding-1.jpg", alt: "Tiered wedding cake", category: "wedding" },
  { id: "g6", src: "/images/gallery/wedding-2.jpg", alt: "Floral wedding cake", category: "wedding" },
  { id: "g7", src: "/images/gallery/cupcakes-1.jpg", alt: "Decorated cupcake box", category: "cupcakes" },
  { id: "g8", src: "/images/gallery/cupcakes-2.jpg", alt: "Colorful cupcakes", category: "cupcakes" },
  { id: "g9", src: "/images/gallery/brownies-1.jpg", alt: "Chocolate brownie box", category: "brownies" },
  { id: "g10", src: "/images/gallery/cookies-1.jpg", alt: "Decorated cookies", category: "cookies" },
  { id: "g11", src: "/images/gallery/decorating-1.jpg", alt: "Cake decorating process", category: "decorating" },
  { id: "g12", src: "/images/gallery/decorating-2.jpg", alt: "Piping buttercream", category: "decorating" },
  { id: "g13", src: "/images/gallery/delivery-1.jpg", alt: "Happy customer delivery", category: "delivery" },
  { id: "g14", src: "/images/gallery/delivery-2.jpg", alt: "Cake delivery moment", category: "delivery" },
];

export const galleryPreviewImages = galleryImages.slice(0, 8);
