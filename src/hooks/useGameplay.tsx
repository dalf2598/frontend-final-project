import { useGame } from "../contexts/GameContext/GameContext";
import { useCallback, useEffect, useState } from "react";

const useGamePlay = () => {
  const { questions, questionTimer } = useGame();

  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(100);
  const [progress, setProgress] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const currentQuestion = questions[index];
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

  return {
    currentQuestion,
    index,
    timer,
    progress,
    handleTransition,
    isOptionSelected,
    isGameOver,
  };
};

export default useGamePlay;
