import "@testing-library/jest-dom";
import TextField from "./TextField";
import { render, screen, fireEvent } from "@testing-library/react";
import { TextFieldProps } from "./TextField.types";

describe("<TextField />", () => {
  const setup = ({ label, value, setValue }: TextFieldProps) => {
    return render(
      <TextField label={label} value={value} setValue={setValue} />
    );
  };

  test("should render label", () => {
    const props: TextFieldProps = {
      label: "Test",
      value: "",
      setValue: jest.fn(),
    };

    setup(props);
    const label = screen.getByText("Test");
    expect(label).toBeInTheDocument();
  });

  test("should render textbox", () => {
    const props: TextFieldProps = {
      label: "Test",
      value: "",
      setValue: jest.fn(),
    };

    setup(props);
    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();
  });

  test("should render input", () => {
    const props: TextFieldProps = {
      label: "Test",
      value: "test",
      setValue: jest.fn(),
    };

    setup(props);
    const input = screen.getByDisplayValue("test");
    expect(input).toBeInTheDocument();
  });

  test("should call setValue action", () => {
    const mockSetValue = jest.fn();
    const props: TextFieldProps = {
      label: "Test",
      value: "",
      setValue: mockSetValue,
    };

    setup(props);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(mockSetValue).toHaveBeenCalled();
  });
});
