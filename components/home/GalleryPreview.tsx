import Link from "next/link";
import { galleryPreviewImages } from "@/lib/gallery";
import { ProductImage } from "@/components/ui/ProductImage";

export function GalleryPreview() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-heading">Our Gallery</h2>
            <p className="section-subheading">
              Cakes, cupcakes, brownies & celebration moments
            </p>
          </div>
          <Link href="/gallery" className="btn-secondary">
            View Full Gallery
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryPreviewImages.map((img) => (
            <Link
              key={img.id}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <ProductImage
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="transition duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
