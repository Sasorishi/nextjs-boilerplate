import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("affiche le titre de la page", () => {
  render(<Home />);
});

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));
