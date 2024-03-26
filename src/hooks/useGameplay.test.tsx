import { act, renderHook } from "@testing-library/react";
import useGamePlay from "./useGameplay";
import { GameContextProps } from "../contexts/GameContext/GameContext.types";
import { GameContext } from "../contexts/GameContext/GameContext";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const mockGameContextProps: GameContextProps = {
  playerName: "",
  setPlayerName: () => {},
  questions: [
    {
      category: "music",
      difficulty: "hard",
      query: "test query",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "Option 1",
    },
    {
      category: "music",
      difficulty: "hard",
      query: "test query 2",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "Option 1",
    },
  ],
  setQuestions: () => {},
  questionTimer: 5,
  setQuestionTimer: () => {},
};

describe("useGameplay", () => {
  test("should handle selecting question option", () => {
    const { result } = renderHook(() => useGamePlay(), {
      wrapper: ({ children }) => (
        <GameContext.Provider value={{ ...mockGameContextProps }}>
          {children}
        </GameContext.Provider>
      ),
    });

    act(() => {
      result.current.handleTileClick(0);
    });

    expect(result.current.index).toBe(0);
    expect(result.current.currentQuestion).toBe(
      mockGameContextProps.questions[0]
    );
    expect(result.current.isOptionCorrect).toBe(true);
    expect(result.current.isOptionSelected).toBe(true);
    expect(result.current.timer).toBe(100);
    expect(result.current.progress).toBe(50);
    expect(result.current.currentQuestionScore).toBe(100);
    expect(result.current.totalScore).toBe(100);
    expect(result.current.totalTime).toBe(0);
    expect(result.current.isGameOver).toBe(false);
  });
});
