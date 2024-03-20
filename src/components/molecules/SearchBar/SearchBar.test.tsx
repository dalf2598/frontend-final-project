import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBarProps } from "./SearchBar.types";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  const setup = ({ query, setQuery }: SearchBarProps) => {
    return render(<SearchBar query={query} setQuery={setQuery} />);
  };

  test("should render placeholder", () => {
    const props: SearchBarProps = {
      query: "",
      setQuery: jest.fn(),
    };

    setup(props);
    const placeholder = screen.getByPlaceholderText("Search...");
    expect(placeholder).toBeInTheDocument();
  });

  test("should render input", () => {
    const props: SearchBarProps = {
      query: "test",
      setQuery: jest.fn(),
    };

    setup(props);
    const input = screen.getByDisplayValue("test");
    expect(input).toBeInTheDocument();
  });

  test("should call setQuery action", () => {
    const mockSetQuery = jest.fn();
    const props: SearchBarProps = {
      query: "",
      setQuery: mockSetQuery,
    };

    setup(props);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(mockSetQuery).toHaveBeenCalled();
  });
});
