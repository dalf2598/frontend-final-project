import { useState } from "react";
import { initLeaderboardRows } from "../backups/Leaderboard";
import { addRowLeaderboard, filterLeaderboardRows } from "../utils/Utils";
import { LeaderboardRow } from "../utils/Utils.types";
import useLocalStorage from "./useLocalStorage";

const useLeaderBoard = () => {
  const { readLocalStorage, writeLocalStorage } = useLocalStorage();

  const leaderboard = readLocalStorage("leaderboard");
  const [visibleRows, setVisibleRows] = useState<LeaderboardRow[]>(leaderboard);
  const [query, setQuery] = useState<string>("");

  const initLeaderboard = () => {
    const hasExecuted = readLocalStorage("hasExecuted");
    if (!hasExecuted) {
      writeLocalStorage("leaderboard", initLeaderboardRows);
      writeLocalStorage("hasExecuted", true);
    }
  };

  const updateLeaderboard = (newRow: LeaderboardRow) => {
    const currentLeaderboard = [...leaderboard];

    const newLeaderboard = addRowLeaderboard(currentLeaderboard, newRow);

    writeLocalStorage("leaderboard", newLeaderboard);
  };

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    setVisibleRows(filterLeaderboardRows(leaderboard, newQuery.toLowerCase()));
  };

  return {
    initLeaderboard,
    leaderboard,
    updateLeaderboard,
    visibleRows,
    query,
    handleQueryChange,
  };
};

export default useLeaderBoard;
