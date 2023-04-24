import { render } from "@testing-library/react";
import Header from ".";

test("renders the header with the correct text", () => {
  const { getByRole } = render(<Header />);
  const headerElement = getByRole("heading", { level: 1 });
  expect(headerElement).toBeInTheDocument();
  expect(headerElement.textContent).toBe("Triathlon-App");
});
