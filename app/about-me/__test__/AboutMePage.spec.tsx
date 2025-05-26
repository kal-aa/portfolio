import { render, screen } from "@testing-library/react";
import AboutMePage from "../page";

describe("AboutMePage", () => {
  it("should three images in the workspace section", () => {
    render(<AboutMePage />);
    expect(screen.getAllByAltText(/workspace/i)).toHaveLength(3);
  });
});
