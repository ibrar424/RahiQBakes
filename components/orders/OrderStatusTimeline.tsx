import {
  orderStatusSteps,
  orderStatusLabels,
  getStatusIndex,
  type OrderStatus,
} from "@/lib/orders";
import { cn } from "@/lib/utils";

export function OrderStatusTimeline({ status }: { status: OrderStatus }) {
  const currentIndex = getStatusIndex(status);

  return (
    <ol className="relative space-y-0">
      {orderStatusSteps.map((step, index) => {
        const isComplete = index <= currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <li key={step} className="flex gap-4 pb-8 last:pb-0">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold",
                  isComplete
                    ? "border-gold bg-gold text-chocolate"
                    : "border-pink bg-white text-chocolate-light"
                )}
              >
                {index + 1}
              </div>
              {index < orderStatusSteps.length - 1 && (
                <div
                  className={cn(
                    "mt-1 h-full min-h-[2rem] w-0.5 flex-1",
                    index < currentIndex ? "bg-gold" : "bg-pink"
                  )}
                />
              )}
            </div>
            <div className="pt-2">
              <p
                className={cn(
                  "font-semibold",
                  isCurrent ? "text-gold" : isComplete ? "text-chocolate" : "text-chocolate-light"
                )}
              >
                {orderStatusLabels[step]}
              </p>
              {isCurrent && (
                <p className="mt-1 text-sm text-chocolate-light">
                  Current status — updates shared via WhatsApp
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
