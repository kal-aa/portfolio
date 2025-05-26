import { render, screen, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";
import { toast } from "react-toastify";
import { server } from "@/app/mocks/server";
import { rest } from "msw";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    info: jest.fn(),
    error: jest.fn(),
  },
}));

beforeEach(() => {
  jest.clearAllMocks(); // reset call histories for all jest.fn()
  render(<ContactForm />);

  // if you want to mock fetch instead of using MSW
  // (global.fetch as jest.Mock) = jest.fn(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve({ success: true }),
  //   })
  // );
});

// Helper function to fill the contact form
const fillContactForm = async () => {
  await userEvent.type(screen.getByLabelText(/name/i), "Kal");
  await userEvent.type(screen.getByLabelText(/email/i), "kal@test.com");
  await userEvent.type(screen.getByLabelText(/description/i), "My project...");
  await userEvent.selectOptions(screen.getByLabelText(/timeline/i), "2 weeks");
  await userEvent.selectOptions(screen.getByLabelText(/budget/i), "$100–$500");
};

// Helper function to click the submit button
const clickSubmitButton = async () => {
  const submitButton = screen.getByRole("button", { name: /let's do this/i });
  await userEvent.click(submitButton);
};

// Initial render to set up the component

describe("Contact Buttons Component", () => {
  it("shouldn't call the handler if the fields are emtpy", async () => {
    // ARRANGE
    await clickSubmitButton(); // ACT

    // ASSERT
    expect(toast.success).not.toHaveBeenCalled();
    expect(toast.error).not.toHaveBeenCalled(); // ASSERT
  });

  it("should add a text to the inputs and selects and show success toast", async () => {
    // ACT
    const inputs = [
      { placeholder: /name/i, value: "John Doe" },
      { placeholder: /email address/i, value: "john@doe.com" },
      { placeholder: /project details/i, value: "I have a project for you" },
    ];

    for (const { placeholder, value } of inputs) {
      const input = screen.getByPlaceholderText(placeholder);
      await userEvent.clear(input);
      await userEvent.type(input, value);
      expect(input).toHaveValue(value);
    }

    const selects = [
      { label: /timeline/i, value: "1 week" },
      { label: /budget/i, value: "<$100" },
    ];

    for (const { label, value } of selects) {
      const select = screen.getByLabelText(label);
      await userEvent.selectOptions(select, value);
      expect(select).toHaveValue(value);
    }

    await clickSubmitButton(); // ACT

    // ASSERT
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("Message sent!"); // ASSERT
    });
  });

  it("should submits the form and shows success toast", async () => {
    // ACT
    await fillContactForm();
    await clickSubmitButton();

    // ASSERT
    await waitFor(
      () => {
        expect(toast.success).toHaveBeenCalledWith("Message sent!");
        expect(toast.info).toHaveBeenCalledWith(
          "I usually reply within 24 hours"
        );
      },
      { timeout: 3500 }
    );
  });

  it("shows error toast on fetch failure", async () => {
    // if you want to mock fetch instead of using MSW
    // Mock fetch to fail once
    // (global.fetch as jest.Mock).mockImplementationOnce(() =>
    //   Promise.reject(new Error("Network error"))
    // );

    server.use(
      rest.post("/api/contact", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    // ACT
    await fillContactForm();
    await clickSubmitButton();

    // ASSERT
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Server error");
    });
  });
});
