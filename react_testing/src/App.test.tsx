import { render, screen } from "@testing-library/react";
import App from "./App";

it("my test", () => {
  render(<App />);
  expect(screen.getByText(/hello/i)).toBeVisible();
});
