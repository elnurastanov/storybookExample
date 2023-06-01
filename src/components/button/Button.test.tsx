import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./index.tsx";

const mockFunction = jest.fn();

window.React = React;

describe("Button component", () => {
  it("should be button rendered in document", () => {
    render(<Button label="Click me" onClick={mockFunction} />);

    const element = screen.getByTestId("button-test");

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Click me");
  });

  it("should be onClick method fired on click event", async () => {
    render(<Button label="Click me" onClick={mockFunction} />);

    const element = screen.getByTestId("button-test");

    await userEvent.click(element);

    expect(mockFunction).toBeCalled();
    expect(mockFunction).toBeCalledTimes(1);
  });
});
