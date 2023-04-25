import { render } from "@testing-library/react";
import FooterButton from ".";

test("renders the link with the correct attributes", () => {
  const testHref = "/addedDaysPage";
  const testTitle = "Create Plan";
  const { getByRole } = render(
    <FooterButton href={testHref} title={testTitle} />
  );
  const linkElement = getByRole("link");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.getAttribute("href")).toBe(testHref);
  expect(linkElement.textContent).toBe(testTitle);
});
