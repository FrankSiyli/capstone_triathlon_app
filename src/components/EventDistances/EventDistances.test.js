import { render, fireEvent } from "@testing-library/react";
import EventDistances from ".";

test("selects the correct event distance when a button is clicked", () => {
  const setSelectedType = jest.fn();
  const { getByText } = render(
    <EventDistances selectedType="short" setSelectedType={setSelectedType} />
  );

  const midButton = getByText("Middle Distance Triathlon");
  fireEvent.click(midButton);
  expect(setSelectedType).toHaveBeenCalledWith("mid");

  const longButton = getByText("Long Distance Triathlon");
  fireEvent.click(longButton);
  expect(setSelectedType).toHaveBeenCalledWith("long");

  const shortButton = getByText("Short Distance Triathlon");
  fireEvent.click(shortButton);
  expect(setSelectedType).toHaveBeenCalledWith("short");
});
