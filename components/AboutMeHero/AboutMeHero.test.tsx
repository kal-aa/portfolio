import { render, screen } from "@testing-library/react";
import AboutMeHero from "./AboutMeHero";

describe("About Hero sectoion", () => {
  it("should render the about hero section", () => {
    render(<AboutMeHero />); // ARRANGE
    const text = screen.getByText("Kalab"); // ACT
    expect(text).toBeInTheDocument();// ASSERT
  });
});
