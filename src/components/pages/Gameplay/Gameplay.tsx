import { Typography, LinearProgress } from "@mui/material";
import {
  getPlayerLevel,
  getQuestionIcon,
  parseToTileGroupFormat,
} from "../../../utils/Utils";
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
    progress,
    timer,
    isOptionCorrect,
    isOptionSelected,
    currentQuestion,
    currentQuestionScore,
    handleTileClick,
    isGameOver,
    totalScore,
    totalTime,
  } = useGamePlay();

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
      <Metrics score={totalScore} time={timer} />
      <TileGroup
        options={parseToTileGroupFormat(currentQuestion)}
        onClick={handleTileClick}
      />
      <AnswerDialog
        isOpen={isOptionSelected}
        score={currentQuestionScore}
        isCorrect={isOptionCorrect}
        answer={currentQuestion.answer}
      />
      <ResultDialog
        isOpen={isGameOver}
        score={totalScore}
        time={totalTime.toFixed(2)}
        level={getPlayerLevel(totalScore)}
      />
    </Scaffold>
  );
};

export default Gameplay;
