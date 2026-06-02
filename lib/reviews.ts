export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  image?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Ayesha K.",
    rating: 5,
    text: "The birthday cake was absolutely stunning and tasted even better than it looked! RahiQBakes made my daughter's day magical.",
    date: "March 2026",
    image: "/images/reviews/review-1.jpg",
  },
  {
    id: "2",
    name: "Hassan M.",
    rating: 5,
    text: "Ordered chocolate fudge cake for an office party. Everyone asked where it was from. Will definitely order again!",
    date: "February 2026",
  },
  {
    id: "3",
    name: "Fatima R.",
    rating: 5,
    text: "The wedding cake was elegant and delicious. They listened to every detail and delivered on time. Highly recommended!",
    date: "January 2026",
    image: "/images/reviews/review-3.jpg",
  },
  {
    id: "4",
    name: "Omar S.",
    rating: 4,
    text: "Cupcakes were fresh and beautifully packaged. Great value and fast WhatsApp communication throughout.",
    date: "March 2026",
  },
  {
    id: "5",
    name: "Zainab A.",
    rating: 5,
    text: "Custom theme cake for my son's birthday exceeded expectations. The detailing was incredible!",
    date: "February 2026",
  },
  {
    id: "6",
    name: "Bilal H.",
    rating: 5,
    text: "Brownies are the best I've had in Lahore — rich, fudgy, and always delivered fresh. My go-to treat order.",
    date: "March 2026",
  },
];
