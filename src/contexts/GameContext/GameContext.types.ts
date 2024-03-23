import { ReactNode } from "react";
import { FormattedQuestionsType } from "../../utils/Utils.types";

type GameContextProps = {
    playerName: string;
    setPlayerName: (value: string) => void;
    questions: FormattedQuestionsType[];
    setQuestions: (questions: FormattedQuestionsType[]) => void;
    questionTimer: number;
    setQuestionTimer: (timer: number) => void;
};

type GameProviderProps = {
    children: ReactNode;
};

export type { GameContextProps, GameProviderProps };