import { render, screen } from "@testing-library/react";
import ToastNotification from "./ToastNotification";

describe("ToastNotification", () => {
  it("renders ToastContainer", () => {
    render(<ToastNotification />);
    const toastContainer = screen.getByRole("region"); // ToastContainer renders a region by default
    expect(toastContainer).toBeInTheDocument();
  });
});
