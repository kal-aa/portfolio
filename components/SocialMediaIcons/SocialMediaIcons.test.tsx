import { render, screen } from "@testing-library/react";
import SocialMediaIcons from "./SocialMediaIcons";

describe("SocialMediaIcons Component", () => {
  it("should render atleast 3 social medial links", async () => {
    render(<SocialMediaIcons />); // ARRANGE
    // ACT
    const iconLinks = screen.getAllByTestId(/social-media-link/i);
    expect(iconLinks.length).toBeGreaterThan(2);
  });
});
