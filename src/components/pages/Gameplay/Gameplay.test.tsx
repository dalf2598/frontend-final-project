import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { GameContextProps } from "../../../contexts/GameContext/GameContext.types";
import { GameContext } from "../../../contexts/GameContext/GameContext";
import Gameplay from "./Gameplay";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("<Gameplay />", () => {
  const mockGameContextProps: GameContextProps = {
    playerName: "",
    setPlayerName: () => {},
    questions: [
      {
        category: "test category",
        difficulty: "test difficulty",
        query: "test query",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 1",
      },
    ],
    setQuestions: () => {},
    questionTimer: 0,
    setQuestionTimer: () => {},
  };

  const setup = () => {
    return render(
      <GameContext.Provider value={{ ...mockGameContextProps }}>
        <Gameplay />
      </GameContext.Provider>
    );
  };

  test("should render child components", () => {
    setup();

    const titleLabel = screen.getByText("Question 1");

    expect(titleLabel).toBeInTheDocument();
  });
});
