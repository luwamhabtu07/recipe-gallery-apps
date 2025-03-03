import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Recipe Gallery heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Recipe Gallery/i);
  expect(headingElement).toBeInTheDocument();
});
