import { render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("next/navigation", () => ({
  usePathname: () => "/about-me",
}));

describe("Header Component", () => {
  it("should render both left and right sections", () => {
    render(<Header />); // ARRANGE
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/sadkalshayee@gmail.com/i)).toBeInTheDocument();
  });
});
