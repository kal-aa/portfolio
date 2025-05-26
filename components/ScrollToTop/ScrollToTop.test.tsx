import { render, screen } from "@testing-library/react";
import ScrollToTop from "./ScrollToTop";
import userEvent from "@testing-library/user-event";

// Mocking the scrollTo function
global.scrollTo = jest.fn();

describe("ScrollToTop Component", () => {
  it("should take to the top on click", async () => {
    render(<ScrollToTop />); // ARRANGE
    // ACT
    const arrowButton = screen.getByRole("button");
    await userEvent.click(arrowButton);
    expect(global.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    }); // ASSERT
  });
});
