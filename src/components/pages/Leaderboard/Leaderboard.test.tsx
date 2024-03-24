import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Leaderboard from "./Leaderboard";
import { LEADERBOARD_TITLE } from "../../../Constants";
import useLeaderBoard from "../../../hooks/useLeaderBoard";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("../../../hooks/useLeaderBoard");

const mockUseLeaderBoard = jest.mocked(useLeaderBoard);

const mockUseLeaderBoardRows = [
  { rank: 1, player: "Test Player 1", score: 450, level: "Sage" },
  { rank: 2, player: "Test Player 2", score: 420, level: "Sage" },
];

mockUseLeaderBoard.mockReturnValue({
  leaderboard: mockUseLeaderBoardRows,
  updateLeaderboard: jest.fn(),
  initLeaderboard: jest.fn(),
  visibleRows: mockUseLeaderBoardRows,
  query: "",
  handleQueryChange: jest.fn(),
});

describe("<Leaderboard />", () => {
  const setup = () => {
    return render(<Leaderboard />);
  };

  test("should render child components", () => {
    setup();

    const titleLabel = screen.getByText(LEADERBOARD_TITLE);

    expect(titleLabel).toBeInTheDocument();
  });
});
