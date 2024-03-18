import "@testing-library/jest-dom";
import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonProps } from "./Button.types";
import { PlayArrow } from "@mui/icons-material";

describe("<Button />", () => {
  const setup = ({ icon, onClick, text }: ButtonProps) => {
    return render(<Button icon={icon} onClick={onClick} text={text} />);
  };

  test("should render text ", () => {
    const props: ButtonProps = {
      onClick: jest.fn(),
      text: "Test",
    };

    setup(props);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
  });

  test("should render icon", () => {
    const props: ButtonProps = {
      icon: <PlayArrow />,
      onClick: jest.fn(),
      text: "Test",
    };

    setup(props);
    const button = screen.getByTestId("PlayArrowIcon");
    expect(button).toBeInTheDocument();
  });

  test("should call onClick action", () => {
    const mockOnClick = jest.fn();
    const props: ButtonProps = {
      onClick: mockOnClick,
      text: "Test",
    };

    setup(props);
    const button = screen.getByText("Testing");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
