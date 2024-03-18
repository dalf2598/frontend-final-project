import "@testing-library/jest-dom";
import Field from "./Field";
import { render, screen, fireEvent } from "@testing-library/react";
import { TextFieldProps } from "./Field.types";

describe("<Field />", () => {
  const setup = ({ value, onChange, maxLength }: TextFieldProps) => {
    return render(
      <Field value={value} onChange={onChange} maxLength={maxLength} />
    );
  };

  test("should render textbox", () => {
    const props: TextFieldProps = {
      value: "",
      onChange: jest.fn(),
      maxLength: 10,
    };

    setup(props);
    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();
  });

  test("should render input", () => {
    const props: TextFieldProps = {
      value: "test",
      onChange: jest.fn(),
      maxLength: 10,
    };

    setup(props);
    const input = screen.getByDisplayValue("test");
    expect(input).toBeInTheDocument();
  });

  test("should call onChange action", () => {
    const mockOnChange = jest.fn();
    const props: TextFieldProps = {
      value: "",
      onChange: mockOnChange,
      maxLength: 10,
    };

    setup(props);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
