import "@testing-library/jest-dom";
import TileGroup from "./TileGroup";
import { render, screen, fireEvent } from "@testing-library/react";
import { TileGroupProps } from "./TileGroup.types";

describe("<TileGroup />", () => {
  const mockOptions = [
    { type: "test1", label: "Test1" },
    { type: "test2", label: "Test2" },
  ];

  const setup = ({ options, onClick }: TileGroupProps) => {
    return render(<TileGroup options={options} onClick={onClick} />);
  };

  test("should render options ", () => {
    const props: TileGroupProps = {
      options: mockOptions,
      onClick: jest.fn(),
    };

    setup(props);
    const tile1 = screen.getByText("Test1");
    const tile2 = screen.getByText("Test2");
    expect(tile1).toBeInTheDocument();
    expect(tile2).toBeInTheDocument();
  });

  test("should call onClick ", () => {
    const mockClick = jest.fn();

    const props: TileGroupProps = {
      options: mockOptions,
      onClick: mockClick,
    };

    setup(props);
    const tile2 = screen.getByText("Test2");
    fireEvent.click(tile2);
    expect(mockClick).toHaveBeenCalled();
  });
});
