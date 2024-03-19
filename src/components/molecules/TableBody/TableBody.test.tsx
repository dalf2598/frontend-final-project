import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TableBody from "./TableBody";
import { TableBodyProps } from "./TableBody.types";

describe("<TableBody />", () => {
  const setup = ({ rows }: TableBodyProps) => {
    return render(<TableBody rows={rows} />);
  };

  const mockRows = [
    { rank: 1, player: "Test Player 1", score: 150, level: "Test Level 1" },
    { rank: 2, player: "Test Player 2", score: 130, level: "Test Level 2" },
  ];

  test.each(mockRows)(
    "should display rows",
    ({ rank, player, score, level }) => {
      const props: TableBodyProps = {
        rows: mockRows,
      };

      setup(props);
      const rankValue = screen.getByText(rank);
      const playerValue = screen.getByText(player);
      const scoreValue = screen.getByText(score);
      const levelValue = screen.getByText(level);

      expect(rankValue).toBeInTheDocument();
      expect(playerValue).toBeInTheDocument();
      expect(scoreValue).toBeInTheDocument();
      expect(levelValue).toBeInTheDocument();
    }
  );
});
