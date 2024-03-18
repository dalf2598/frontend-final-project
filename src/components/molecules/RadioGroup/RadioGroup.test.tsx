import "@testing-library/jest-dom";
import RadioGroup from "./RadioGroup";
import { RadioGroupProps } from "./RadioGroup.types";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<RadioGroup />", () => {
  const setup = ({
    options,
    selectedOption,
    handleChange,
  }: RadioGroupProps) => {
    return render(
      <RadioGroup
        options={options}
        selectedOption={selectedOption}
        handleChange={handleChange}
      />
    );
  };

  const mockOptions = [
    { value: "test", label: "Test" },
    { value: "test2", label: "Test2" },
  ];

  test("should render options ", () => {
    const props: RadioGroupProps = {
      options: mockOptions,
      selectedOption: "test",
      handleChange: jest.fn(),
    };

    setup(props);
    const radio = screen.getByText("Test");
    const radio2 = screen.getByText("Test2");
    expect(radio).toBeInTheDocument();
    expect(radio2).toBeInTheDocument();
  });

  test("should render options ", () => {
    const mockChange = jest.fn();

    const props: RadioGroupProps = {
      options: mockOptions,
      selectedOption: "test",
      handleChange: mockChange,
    };

    setup(props);
    const radio2 = screen.getByText("Test2");
    fireEvent.click(radio2);
    expect(mockChange).toHaveBeenCalled();
  });
});
