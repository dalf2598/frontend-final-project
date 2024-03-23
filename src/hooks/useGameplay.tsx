import { useGame } from "../contexts/GameContext/GameContext";
import { useCallback, useEffect, useState } from "react";
import { getQuestionScore } from "../utils/Utils";

const useGamePlay = () => {
  const { questions, questionTimer } = useGame();

  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(100);
  const [progress, setProgress] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isOptionCorrect, setIsOptionCorrect] = useState(false);
  const [currentQuestionScore, setCurrentQuestionScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const currentQuestion = questions[index];
  const intervalTime = 100;
  const decrement = 100 / ((questionTimer * 1000) / intervalTime);

  const handleTransition = useCallback(() => {
    setIsOptionSelected(true);
    setTimer(100);
    setProgress(
      (prevProgress: number) => prevProgress + 100 / questions.length
    );
    setTimeout(() => {
      setIsOptionSelected(false);
      if (index === questions.length - 1) {
        setIsOptionSelected(true);
        setIsGameOver(true);
      } else {
        setIndex((prevIndex: number) => prevIndex + 1);
      }
    }, 2000);
  }, [index, questions.length]);

  const handleTileClick = (option: number) => {
    const correcteness =
      currentQuestion.options[option] === currentQuestion.answer;
    setIsOptionCorrect(correcteness);
    const score = getQuestionScore(
      correcteness,
      timer,
      currentQuestion.difficulty
    );
    setCurrentQuestionScore(score);
    const timePerPercentage = (questionTimer * 1000) / 100;
    const initialTime = (100 - timer) * timePerPercentage;
    const elapsedSeconds = initialTime / 1000;
    setTotalTime((prevTime) =>
      correcteness ? prevTime + elapsedSeconds : prevTime
    );
    setTotalScore((prevScore) => prevScore + score);
    handleTransition();
  };

  useEffect(() => {
    if (!isGameOver && !isOptionSelected) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - decrement : 0));
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [isGameOver, isOptionSelected, decrement]);

  useEffect(() => {
    if (timer === 0) {
      setIsOptionCorrect(false);
      setCurrentQuestionScore(0);
      handleTransition();
    }
  }, [timer, handleTransition]);

  return {
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
  };
};

export default useGamePlay;
