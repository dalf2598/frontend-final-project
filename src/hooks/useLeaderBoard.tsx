import { initLeaderboardRows } from "../backups/Leaderboard";
import { addRowLeaderboard } from "../utils/Utils";
import { LeaderboardRow } from "../utils/Utils.types";
import useLocalStorage from "./useLocalStorage";

const useLeaderBoard = () => {
  const { readLocalStorage, writeLocalStorage } = useLocalStorage();

  const initLeaderboard = () => {
    const hasExecuted = readLocalStorage("hasExecuted");
    if (!hasExecuted) {
      writeLocalStorage("leaderboard", initLeaderboardRows);
      writeLocalStorage("hasExecuted", true);
    }
  };

  const leaderboard = readLocalStorage("leaderboard");

  const updateLeaderboard = (newRow: LeaderboardRow) => {
    const currentLeaderboard = [...leaderboard];

    const newLeaderboard = addRowLeaderboard(currentLeaderboard, newRow);

    writeLocalStorage("leaderboard", newLeaderboard);
  };

  return { leaderboard, updateLeaderboard, initLeaderboard };
};

export default useLeaderBoard;
