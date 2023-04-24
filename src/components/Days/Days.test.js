import { render } from "@testing-library/react";
import Days from ".";
import useStore from "../../store";
import days from "../../daysDb";

// Mock the useStore hook
jest.mock("../../store");

describe("Days component", () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    useStore.mockReset();
  });

  it("renders the correct training days and their buttons", () => {
    // Mock the useStore hook
    useStore.mockReturnValue({ days });

    // Render the Days component
    const { getByText } = render(<Days filtered={false} />);

    // Assert that the training days and buttons are rendered correctly
    expect(getByText("Monday")).toBeInTheDocument();
    expect(getByText("Tuesday")).toBeInTheDocument();
    expect(getByText("Wednesday")).toBeInTheDocument();
  });
});
