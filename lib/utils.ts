export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(amount: number): string {
  return `Rs ${amount.toLocaleString("en-PK")}`;
}
