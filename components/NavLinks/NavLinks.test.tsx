// import { render, screen } from "@testing-library/react";
// import NavLinks from "./NavLinks";

// jest.mock("next/navigation", () => ({
//   usePathname: () => "/about-me",
// }));

// describe("NavLinks Component", () => {
//   it("should render two links", () => {
//     render(<NavLinks />); // ARRANGE
//     expect(screen.getAllByRole("link").length).toBe(2); // ACT and ASSERT
//   });
// });

import React from "react";
import { usePathname } from "next/navigation";
import { render, screen } from "@testing-library/react";
import NavLinks from "./NavLinks";

// Mock next/navigation's usePathname
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe("NavLinks", () => {
  test("applies 'secondary' to /contact link when path includes /contact", () => {
    (usePathname as jest.Mock).mockReturnValue("/contact");

    render(<NavLinks />);

    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toHaveClass("secondary");
    expect(contactLink).not.toHaveClass("link-hover");
  });

  test("applies 'link-hover' to /contact link when path does NOT include /contact", () => {
    (usePathname as jest.Mock).mockReturnValue("/about-me");

    render(<NavLinks />);

    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toHaveClass("link-hover");
    expect(contactLink).not.toHaveClass("secondary");
  });

  test("applies 'secondary' and 'text-center' to /about-me link when path includes /about-me", () => {
    (usePathname as jest.Mock).mockReturnValue("/about-me");

    render(<NavLinks />);

    const aboutLink = screen.getByText("About me");
    expect(aboutLink).toHaveClass("secondary");
    expect(aboutLink).toHaveClass("text-center");
    expect(aboutLink).not.toHaveClass("link-hover");
  });

  test("applies 'link-hover' and 'text-center' to /about-me link when path does NOT include /about-me", () => {
    (usePathname as jest.Mock).mockReturnValue("/contact");

    render(<NavLinks />);

    const aboutLink = screen.getByText("About me");
    expect(aboutLink).toHaveClass("link-hover");
    expect(aboutLink).toHaveClass("text-center");
    expect(aboutLink).not.toHaveClass("secondary");
  });
});
