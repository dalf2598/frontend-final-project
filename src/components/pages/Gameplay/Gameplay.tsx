import { useState } from "react";
import { Typography, LinearProgress } from "@mui/material";
import { getQuestionIcon, parseToTileGroupFormat } from "../../../utils/Utils";
import Scaffold from "../../templates/Scaffold/Scaffold";
import Question from "../../molecules/Question/Question";
import Metrics from "../../molecules/Metrics/Metrics";
import TileGroup from "../../molecules/TileGroup/TileGroup";
import AnswerDialog from "../../organisms/AnswerDialog/AnswerDialog";
import ResultDialog from "../../organisms/ResultsDialog/ResultsDialog";
import useGamePlay from "../../../hooks/useGameplay";

const Gameplay = () => {
  const {
    index,
    currentQuestion,
    handleTransition,
    progress,
    timer,
    isGameOver,
    isOptionSelected,
  } = useGamePlay();

  const [isOptionCorrect, setIsOptionCorrect] = useState(false);

  const handleTileClick = (option: number) => {
    setIsOptionCorrect(
      currentQuestion.options[option] === currentQuestion.answer
    );
    handleTransition();
  };

  return (
    <Scaffold>
      <LinearProgress variant="determinate" value={progress} />
      <Typography variant="h2" fontWeight="bold">
        Question {index + 1}
      </Typography>
      <Question
        category={currentQuestion.category}
        question={currentQuestion.query}
        icon={getQuestionIcon(currentQuestion.category)}
      />
      <Metrics score={20} time={timer} />
      <TileGroup
        options={parseToTileGroupFormat(currentQuestion)}
        onClick={handleTileClick}
      />
      <AnswerDialog
        isOpen={isOptionSelected}
        score={20}
        isCorrect={isOptionCorrect}
        answer={currentQuestion.answer}
      />
      <ResultDialog isOpen={isGameOver} score={200} time={84} level="Master" />
    </Scaffold>
  );
};

export default Gameplay;
