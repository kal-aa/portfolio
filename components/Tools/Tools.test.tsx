import { render, screen } from "@testing-library/react";
import Tools from "./Tools";
import userEvent from "@testing-library/user-event";

describe("Tools component", () => {
  it("should display only design tools when design button is clicked", async () => {
    render(<Tools />); // ARRANGE

    // ACT
    const designButton = screen.getByTestId("tools-design-btn");
    await userEvent.click(designButton);

    // ASSERT
    expect(screen.getByText("Sketch")).toBeInTheDocument();
    expect(screen.queryByText("HTML5")).not.toBeInTheDocument();
  });

  it("should display only development tools when development button is clicked", async () => {
    render(<Tools />); // ARRANGE

    // ACT
    const devButton = screen.getByTestId("tools-dev-btn");
    await userEvent.click(devButton);

    // ASSERT
    expect(screen.getByText("HTML5")).toBeInTheDocument();
    expect(screen.queryByText("Sketch")).not.toBeInTheDocument();
  });
});
