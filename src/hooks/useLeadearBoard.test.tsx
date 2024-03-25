import { act, renderHook } from "@testing-library/react";
import useLeaderBoard from "./useLeaderBoard";
import { INITIAL_LEADERBOARD_ROWS } from "../Constants";
import useLocalStorage from "./useLocalStorage";
import * as utils from "../utils/Utils";

jest.mock("../utils/Utils");
jest.mock("./useLocalStorage");

describe("useLeaderBoard", () => {
  test("should check if hasExecuted key exists when calling init leaderboard", () => {
    const mockerReadLocalStorage = jest.fn();

    const mockUseLocalStorage = jest.mocked(useLocalStorage);
    mockUseLocalStorage.mockReturnValue({
      readLocalStorage: mockerReadLocalStorage,
      writeLocalStorage: jest.fn(),
    });
    const { result } = renderHook(() => useLeaderBoard());

    result.current.initLeaderboard();

    expect(mockerReadLocalStorage).toHaveBeenCalledWith("hasExecuted");
  });

  test("should init leaderboard if hasExecuted key does not exists", () => {
    const mockerWriteLocalStorage = jest.fn();

    const mockUseLocalStorage = jest.mocked(useLocalStorage);
    mockUseLocalStorage.mockReturnValue({
      readLocalStorage: jest.fn().mockReturnValue(false),
      writeLocalStorage: mockerWriteLocalStorage,
    });
    const { result } = renderHook(() => useLeaderBoard());

    result.current.initLeaderboard();
    expect(mockerWriteLocalStorage).toHaveBeenCalledTimes(2);

    expect(mockerWriteLocalStorage).toHaveBeenNthCalledWith(
      1,
      "leaderboard",
      INITIAL_LEADERBOARD_ROWS
    );
    expect(mockerWriteLocalStorage).toHaveBeenNthCalledWith(
      2,
      "hasExecuted",
      true
    );
  });

  test("should updateLeaderboard", () => {
    const mockLeaderboard = [
      { rank: 1, player: "Player 1", score: 450, level: "Sage" },
    ];
    const mockNewRow = {
      rank: 2,
      player: "Player 2",
      score: 420,
      level: "Sage",
    };
    const mockUpdatedLeaderboard = [...mockLeaderboard, mockNewRow];

    const mockedUtils = jest.mocked(utils);

    mockedUtils.addRowLeaderboard.mockReturnValue(mockUpdatedLeaderboard);

    const mockerWriteLocalStorage = jest.fn();

    const mockUseLocalStorage = jest.mocked(useLocalStorage);
    mockUseLocalStorage.mockReturnValue({
      readLocalStorage: jest.fn().mockReturnValue(mockLeaderboard),
      writeLocalStorage: mockerWriteLocalStorage,
    });

    const { result } = renderHook(() => useLeaderBoard());
    result.current.updateLeaderboard(mockNewRow);

    expect(mockerWriteLocalStorage).toHaveBeenCalledWith(
      "leaderboard",
      mockUpdatedLeaderboard
    );
  });

  test("should handleQueryChange", () => {
    const mockLeaderboard = [
      { rank: 1, player: "Player 1", score: 450, level: "Sage" },
    ];
    const mockUseLocalStorage = jest.mocked(useLocalStorage);
    mockUseLocalStorage.mockReturnValue({
      readLocalStorage: jest.fn().mockReturnValue(mockLeaderboard),
      writeLocalStorage: jest.fn(),
    });

    const mockedUtils = jest.mocked(utils);

    const { result } = renderHook(() => useLeaderBoard());
    const mockQuery = "player";

    act(() => {
      result.current.handleQueryChange(mockQuery);
    });
    expect(mockedUtils.filterLeaderboardRows).toHaveBeenCalledWith(
      mockLeaderboard,
      mockQuery.toLowerCase()
    );
    expect(result.current.query).toBe(mockQuery);
  });
});
