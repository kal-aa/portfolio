import { render, screen } from "@testing-library/react";
import FQA from "./FQA";
import userEvent from "@testing-library/user-event";

describe("FQA Component", () => {
  it("should render 5 FQAs ", () => {
    render(<FQA />); // ARRANGE
    const fqas = screen.getAllByTestId("fqa"); // ACT
    expect(fqas.length).toBe(5); // ASSERT
  });

  it("should toggle answer on question click", async () => {
    render(<FQA />); // ARRANGE

    const question = screen.getByText(/How much do/i);

    // Initially answer shouldn't be visible
    expect(screen.queryByText(/My pricing varies/i)).not.toBeVisible();

    // Simulate click to open the answer
    await userEvent.click(question);
    expect(screen.getByText(/My pricing varies/i)).toBeVisible();

    // Simulate a click again to close the answer
    await userEvent.click(question);
    expect(screen.getByText(/My pricing varies/i)).not.toBeVisible();
  });

  it("should open one answer at a time on question click", async () => {
    render(<FQA />); // ARRANGE

    const firstQuestion = screen.getByText(/What timezone/i);
    const secondQuestion = screen.getByText(/How much/i);

    // answere to first question should not be visible initially
    expect(screen.getByText(/I'm based in/i)).not.toBeVisible();
    await userEvent.click(firstQuestion);
    // answer to first question should be visible
    expect(screen.getByText(/I'm based in/i)).toBeVisible();
    // answer to second question should not be visible
    expect(screen.getByText(/My pricing varies/i)).not.toBeVisible();

    // click on second question
    await userEvent.click(secondQuestion);
    // answer to first question should not be visible
    expect(screen.getByText(/I'm based in/i)).not.toBeVisible();
    // answer to second question should be visible
    expect(screen.getByText(/My pricing varies/i)).toBeVisible();
  });

  it("should open and close on plus/minus click", async () => {
    render(<FQA />); // ARRANGE

    const plusIcon = screen.getByTestId("plus-icon-0");
    const minusIcon = screen.getByTestId("minus-icon-0");

    expect(plusIcon).toBeInTheDocument();
    expect(minusIcon).toBeInTheDocument();

    // Initially the answere should be invisible
    expect(screen.getByText(/I'm based in/i)).not.toBeVisible();

    // simulate a click to the plusIcon to open the answer
    await userEvent.click(plusIcon);
    expect(screen.getByText(/I'm based in/i)).toBeVisible();

    // simulate a click to the minusIcon to close the answer
    await userEvent.click(minusIcon);
    expect(screen.getByText(/I'm based in/i)).not.toBeVisible();
  });
});
