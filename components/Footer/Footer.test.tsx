import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("next/navigation", () => ({
  usePathname: () => "/about-me", // mock path as "/about-me"
}));

describe("Footer Component", () => {
  it("should render both left, right and copyright section", () => {
    render(<Footer />); // ARRANGE

    // ACT
    const leftSec = screen.getByText(/sadkalshayee@gmail.com/i);
    const rightSec = screen.getAllByText(/About me/i);
    const copyright = screen.getByText((text) =>
      text.includes("Copyright Kalab")
    );

    expect(leftSec).toBeInTheDocument();
    expect(rightSec.length).toBeGreaterThan(0);
    expect(copyright).toBeInTheDocument(); // ASSERT
  });
});
