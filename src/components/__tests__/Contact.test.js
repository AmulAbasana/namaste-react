import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact Us Page Test cases", () => {
  it("Should render title of component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should render Name input in component", () => {
    render(<Contact />);

    const name = screen.getByPlaceholderText("name");

    expect(name).toBeInTheDocument();
  });

  it("Should render message input in component", () => {
    render(<Contact />);

    const message = screen.getByPlaceholderText("message");
    expect(message).toBeInTheDocument();
  });

  it("Should render both inputs in component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });

  it("Should render Submit button in component", () => {
    render(<Contact />);

    const submitBtn = screen.getByText("Submit");

    expect(submitBtn).toBeInTheDocument();
  });
});
