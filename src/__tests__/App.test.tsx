import { render, screen } from "@testing-library/react";
import App from "../App";

it("should have Hello world", () => {
  render(<App />);
  const messageElement = screen.queryByText(/Hello World/i);
  expect(messageElement).toBeVisible();
});
