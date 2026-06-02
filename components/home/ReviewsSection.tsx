import { reviews } from "@/lib/reviews";
import { StarRating } from "@/components/ui/StarRating";
import { ProductImage } from "@/components/ui/ProductImage";

export function ReviewsSection() {
  return (
    <section className="bg-pink-soft/50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading">
            Real reviews from happy celebrations across Pakistan
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl bg-white p-6 shadow-card"
            >
              <StarRating rating={review.rating} size="md" />
              <p className="mt-4 text-chocolate-light">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                {review.image && (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <ProductImage
                      src={review.image}
                      alt={review.name}
                      fill
                      sizes="40px"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-chocolate">{review.name}</p>
                  <p className="text-xs text-chocolate-light">{review.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
