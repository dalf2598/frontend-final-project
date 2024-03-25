import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../contexts/GameContext/GameContext";
import useLeaderBoard from "./useLeaderBoard";
import {
  getQuestionNumber,
  getQuestionTimer,
  getRandomQuestions,
} from "../utils/Utils";
import { DIFFICULTIES } from "../Constants";
import useFetchQuestions from "./useFetchQuestions";

const usePlayerForm = () => {
  const {
    setPlayerName: setContextName,
    setQuestions,
    setQuestionTimer,
  } = useGame();

  const { fetchQuestionBank } = useFetchQuestions();

  const { initLeaderboard } = useLeaderBoard();

  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState<string>(DIFFICULTIES[1].value);
  const [playerName, setPlayerName] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleChangeDifficulty = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
  };

  const handlePlayButtonClick = async () => {
    const questionBank = await fetchQuestionBank();
    const questions = getRandomQuestions(
      questionBank,
      getQuestionNumber(difficulty),
      difficulty
    );
    setContextName(playerName.length === 0 ? "Blank" : playerName);
    setQuestions(questions);
    setQuestionTimer(getQuestionTimer(difficulty));
    setIsDialogOpen(true);
    initLeaderboard();
    setTimeout(() => {
      navigate("/gameplay");
    }, 1500);
  };

  return {
    difficulty,
    playerName,
    setPlayerName,
    isDialogOpen,
    handleChangeDifficulty,
    handlePlayButtonClick,
  };
};

export default usePlayerForm;
