import { useCallback, useEffect, useState } from "react";
import { Typography, LinearProgress } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useGame } from "../../../contexts/GameContext/GameContext";
import Scaffold from "../../templates/Scaffold/Scaffold";
import Question from "../../molecules/Question/Question";
import Metrics from "../../molecules/Metrics/Metrics";
import TileGroup from "../../molecules/TileGroup/TileGroup";
import { parseToTileOptionFormat } from "../../../utils/Utils";
import AnswerDialog from "../../organisms/AnswerDialog/AnswerDialog";
import ResultDialog from "../../organisms/ResultsDialog/ResultsDialog";

const Gameplay = () => {
  const { questions, questionTimer } = useGame();

  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(100);
  const [progress, setProgress] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isOptionCorrect, setIsOptionCorrect] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const intervalTime = 100;
  const decrement = 100 / ((questionTimer * 1000) / intervalTime);

  useEffect(() => {
    if (!isGameOver && !isOptionSelected) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - decrement : 0));
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [isGameOver, isOptionSelected, decrement]);

  const handleTransition = useCallback(() => {
    setIsOptionSelected(true);
    setTimer(100);
    setProgress(
      (prevProgress: number) => prevProgress + 100 / questions.length
    );
    setTimeout(() => {
      setIsOptionSelected(false);
      if (index === questions.length - 1) {
        setIsGameOver(true);
        setIsOptionSelected(true);
      } else {
        setIndex((prevIndex: number) => prevIndex + 1);
      }
    }, 2000);
  }, [index, questions.length]);

  useEffect(() => {
    if (timer === 0) {
      handleTransition();
    }
  }, [timer, handleTransition]);

  const handleTileClick = (option: number) => {
    setIsOptionCorrect(
      questions[index].options[option] === questions[index].answer
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
        category={questions[index].category}
        question={questions[index].query}
        icon={<AutoStoriesIcon sx={{ fontSize: "4rem" }} />}
      />
      <Metrics score={20} time={timer} />
      <TileGroup
        options={parseToTileOptionFormat(questions[index])}
        onClick={handleTileClick}
      />
      <AnswerDialog
        isOpen={isOptionSelected}
        score={20}
        isCorrect={isOptionCorrect}
        answer={questions[index].answer}
      />
      <ResultDialog isOpen={isGameOver} score={200} time={84} level="Master" />
    </Scaffold>
  );
};

export default Gameplay;
