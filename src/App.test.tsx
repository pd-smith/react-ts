import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders as expected", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});
