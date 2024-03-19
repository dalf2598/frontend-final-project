import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TableProps } from "./Table.typex";
import Table from "./Table";

describe("<Table />", () => {
  const setup = ({ headers, rows }: TableProps) => {
    return render(<Table headers={headers} rows={rows} />);
  };

  const mockHeaders = ["Header1", "Header2", "Header3", "Header4"];
  const mockRows = [
    { rank: 1, player: "Test Player 1", score: 150, level: "Test Level 1" },
    { rank: 2, player: "Test Player 2", score: 130, level: "Test Level 2" },
  ];

  test.each(mockHeaders)("should display headers", (header) => {
    const props: TableProps = {
      headers: mockHeaders,
      rows: mockRows,
    };

    setup(props);

    const headerValue = screen.getByText(header);

    expect(headerValue).toBeInTheDocument();
  });

  test.each(mockRows)(
    "should display rows",
    ({ rank, player, score, level }) => {
      const props: TableProps = {
        headers: mockHeaders,
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
