import { render, screen } from "@testing-library/react";
import ContactBtns from "./ContactBtns";

describe("Contact Buttons Component", () => {
  it("should render a button", () => {
    render(<ContactBtns />); // ARRANGE
    const btns = screen.getAllByRole("button"); // ACT
    console.log(btns.length);
    expect(btns.length === 2).toBeTruthy(); // ASSERT
  });
});
