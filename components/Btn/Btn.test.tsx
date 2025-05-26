import { render, screen } from "@testing-library/react";
import Btn from "./Btn";

describe("Button Component", () => {
  it("should render a given text given as a prop", () => {
    render(<Btn text="click" width="fixed" bg="red" disabled={true} />); // ARRANGE
    expect(screen.getByText("click")).toBeInTheDocument(); // ACT & ASSERT
  });

  it("should render the default text if the text prop is not given", () => {
    render(<Btn width="full" bg="white" disabled={false} />); // ARRANGE
    const text = screen.getByText((text) => text.includes("Got a Project")); // ACT
    expect(text).toBeInTheDocument(); // ASSERT
  });
});
