import React from "react";
import { render, screen } from "@testing-library/react";
import ScrollBtn from "./ScrollBtn";
import userEvent from "@testing-library/user-event";

// Setup: mock getElementById and its children
beforeEach(() => {
  render(<ScrollBtn />);

  // Mock the scrollBy method on the container and set up the card and container because we don't get them exactly from the currently rendered DOM
  const scrollBy = jest.fn();
  const card = document.createElement("div");
  card.className = "my-work-portfolio";
  Object.defineProperty(card, "offsetWidth", {
    configurable: true,
    value: 200,
  }); // set the offsetwidt

  const container = document.createElement("div");
  container.id = "portfolio-scroll";
  container.appendChild(card);
  container.scrollBy = scrollBy;

  document.body.appendChild(container);
});

afterEach(() => {
  document.body.innerHTML = "";
  jest.clearAllMocks();
});

it("clicking right button scrolls right", async () => {
  await userEvent.click(screen.getByTestId("scroll-right-btn"));

  const scrollContainer = document.getElementById("portfolio-scroll")!;
  expect(scrollContainer.scrollBy).toHaveBeenCalledWith({
    left: 232, // 200 + 32
    behavior: "smooth",
  });
});

it("clicking left button scrolls left", async () => {
  await userEvent.click(screen.getByTestId("scroll-left-btn"));

  const scrollContainer = document.getElementById("portfolio-scroll")!;
  expect(scrollContainer.scrollBy).toHaveBeenCalledWith({
    left: -232,
    behavior: "smooth",
  });
});
