import { act, renderHook } from "@testing-library/react";
import usePlayerForm from "./usePlayerForm";
import useFetchQuestions from "./useFetchQuestions";
import { BackupQuestionBank } from "../backups/QuestionBank";

jest.mock("../utils/Urls", () => ({
  get API_URL() {
    return "localhost:3000/api/questions";
  },
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("./useFetchQuestions");

describe("usePlayFrom", () => {
  const mockfetchQuestionBank = jest.fn().mockReturnValue(BackupQuestionBank);
  const mockFetchQuestions = jest.mocked(useFetchQuestions);
  mockFetchQuestions.mockReturnValue({
    fetchQuestionBank: mockfetchQuestionBank,
  });

  test("should change the difficulty", () => {
    const { result } = renderHook(() => usePlayerForm());

    act(() => {
      result.current.handleChangeDifficulty("easy");
    });

    expect(result.current.difficulty).toBe("easy");
  });

  test("should handle button click", () => {
    const { result } = renderHook(() => usePlayerForm());

    const mockPlayernName = "Player 1";
    act(() => {
      result.current.handlePlayButtonClick();
      result.current.setPlayerName(mockPlayernName);
      expect(mockfetchQuestionBank).toHaveBeenCalled();
    });

    expect(result.current.isDialogOpen).toBe(true);
    expect(result.current.playerName).toBe(mockPlayernName);
  });
});
