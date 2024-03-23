export type FormattedQuestionsType = {
    category: string;
    difficulty: string;
    query: string;
    options: string[];
    answer: string;
};

export type QuestionType = {
    query: string;
    options: string[];
    answer: string;
};

export type CategoryType = {
    easy: QuestionType[];
    medium: QuestionType[];
    hard: QuestionType[];
};

export type QuestionBankType = {
    history: CategoryType;
    music: CategoryType;
    science: CategoryType;
    geography: CategoryType;
};