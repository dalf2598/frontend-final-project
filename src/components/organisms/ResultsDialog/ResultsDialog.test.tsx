import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RESULTS_DIALOG_TITLE } from "../../../Constants";
import { ResultsDialogProps } from "./ResultsDialog.types";
import ResultDialog from "./ResultsDialog";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("<ResultsDialog />", () => {
  const setup = ({
    isOpen,
    playerName,
    score,
    time,
    level,
  }: ResultsDialogProps) => {
    return render(
      <ResultDialog
        isOpen={isOpen}
        playerName={playerName}
        score={score}
        time={time}
        level={level}
      />
    );
  };

  test("should render components", () => {
    const props: ResultsDialogProps = {
      isOpen: true,
      playerName: "John Doe",
      score: 100,
      time: "10",
      level: "Test Level",
    };

    setup(props);
    const title = screen.getByText(RESULTS_DIALOG_TITLE);
    const score = screen.getByText("Score: 100");
    const time = screen.getByText("Time: 10s");
    const level = screen.getByText("Test Level");

    expect(title).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(level).toBeInTheDocument();
  });
});
