import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Typage de la fonction `cn`
export function cn(...inputs: (string | undefined | boolean | null)[]): string {
  return twMerge(clsx(inputs));
}
