import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { PlayArrow } from "@mui/icons-material";
import { IconButtonProps } from "./IconButton.types";
import IconButton from "./IconButton";

describe("<IconButton />", () => {
  const setup = ({ icon, onClick }: IconButtonProps) => {
    return render(<IconButton icon={icon} onClick={onClick} />);
  };
  test("should render icon", () => {
    const props: IconButtonProps = {
      icon: <PlayArrow />,
      onClick: jest.fn(),
    };

    setup(props);
    const iconButton = screen.getByTestId("PlayArrowIcon");
    expect(iconButton).toBeInTheDocument();
  });

  test("should call onClick", () => {
    const mockOnClick = jest.fn();

    const props: IconButtonProps = {
      icon: <PlayArrow />,
      onClick: mockOnClick,
    };

    setup(props);
    const iconButton = screen.getByTestId("PlayArrowIcon");
    fireEvent.click(iconButton);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
