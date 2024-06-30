import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HelloWorld from "../HelloWorld";

describe("HelloWorld component", () => {
  it("renders with the correct name", () => {
    render(<HelloWorld name="Rohit" />);
    const headingElement = screen.getByText(/hello, rohit!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
