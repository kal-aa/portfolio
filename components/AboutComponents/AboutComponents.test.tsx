import { render, screen } from "@testing-library/react";
import AboutComponents from "./AboutComponents";

describe("AboutComponents", () => {
  it("should render can-dos section", () => {
    render(<AboutComponents />); // ARRANGE
    // ACT
    const text1 = screen.getByText((text) => text.includes("Regardless of"));
    const text2 = screen.getByText((text) => text.includes("Deadlines matter"));
    // ASSERT
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it("should render testimonials section", () => {
    render(<AboutComponents />); //ARRANGE
    const text = screen.getByText("Sandra Marks"); // ACT
    expect(text).toBeInTheDocument(); // ASSERT
  });

  it("should render offers section", () => {
    render(<AboutComponents />); // ARRANGE
    const texts = screen.getAllByText((text) => text.includes("I can design")); // ACT
    expect(texts.length).toBe(3); // ASSERT
  });
});
