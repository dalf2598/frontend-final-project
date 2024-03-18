import "@testing-library/jest-dom";
import Tile from "./Tile";
import { render, screen, fireEvent } from "@testing-library/react";
import { TileProps } from "./Tile.types";

describe("<Tile />", () => {
  const setup = ({ color, index, text, onClick }: TileProps) => {
    return render(
      <Tile color={color} index={index} text={text} onClick={onClick} />
    );
  };

  test("should render text ", () => {
    const props: TileProps = {
      color: "primary",
      index: 1,
      onClick: jest.fn(),
      text: "Test",
    };

    setup(props);
    const tile = screen.getByText("Test");
    expect(tile).toBeInTheDocument();
  });

  test("should render with proper color ", () => {
    const props: TileProps = {
      color: "blue",
      index: 1,
      onClick: jest.fn(),
      text: "Test",
    };

    setup(props);
    const tile = screen.getByTestId("tile-1");
    expect(tile).toHaveAttribute("color", "blue");
  });

  test("should call onClick action", () => {
    const mockOnClick = jest.fn();
    const props: TileProps = {
      color: "primary",
      index: 1,
      onClick: mockOnClick,
      text: "Test",
    };

    setup(props);
    const tile = screen.getByText("Test");
    fireEvent.click(tile);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
