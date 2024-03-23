import { useState, createContext, useContext } from "react";
import { GameContextProps, GameProviderProps } from "./GameContext.types";
import { FormattedQuestionsType } from "../../utils/Utils.types";

const GameContext = createContext<GameContextProps>({
  playerName: "",
  setPlayerName: () => {},
  questions: [],
  setQuestions: () => {},
  questionTimer: 0,
  setQuestionTimer: () => {},
});

const useGame = () => {
  return useContext(GameContext);
};

const GameProvider = ({ children }: GameProviderProps) => {
  const [playerName, setPlayerName] = useState<string>("");
  const [questions, setQuestions] = useState<FormattedQuestionsType[]>([]);
  const [questionTimer, setQuestionTimer] = useState(0);

  return (
    <GameContext.Provider
      value={{
        playerName,
        questions,
        questionTimer,
        setPlayerName,
        setQuestions,
        setQuestionTimer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { GameContext, useGame, GameProvider };
