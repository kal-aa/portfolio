import { render, screen } from "@testing-library/react";
import HamburgerMenu from "./HamburgerMenu";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  usePathname: () => "/about-me",
}));

describe("HamburgerMenu component", () => {
  it("should show the menus on button click", async () => {
    render(<HamburgerMenu />); // ARRANGE

    expect(screen.getByText(/about me/i)).not.toBeVisible();

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByText(/about me/i)).toBeVisible();
  });
});
