import { CATEGORIES, DIFFICULTIES } from "../Constants";
import {
  FormattedQuestionsType,
  QuestionBankType,
  CategoryType,
} from "./Utils.types";

const availableCategories: string[] = CATEGORIES.map(
  (category) => category.type
);

const availableDifficulties: string[] = DIFFICULTIES.map(
  (difficulty) => difficulty.value
);

export const getQuestionNumber = (difficulty: string) => {
  switch (difficulty) {
    case availableDifficulties[0]: // easy
      return 4;
    case availableDifficulties[1]: // medium
      return 5;
    case availableDifficulties[2]: // hard
      return 6;
    default:
      return 5;
  }
};

export const getQuestionTime = (difficulty: string) => {
  switch (difficulty) {
    case availableDifficulties[0]: // easy
      return 12;
    case availableDifficulties[1]: // medium
      return 10;
    case availableDifficulties[2]: // hard
      return 8;
    default:
      return 10;
  }
};

export const getRandomQuestions = (
  questionBank: QuestionBankType,
  questionNumber: number,
  difficulty: string
): FormattedQuestionsType[] => {
  const selectedQuestions: FormattedQuestionsType[] = [];
  const selectedCategories: string[] = [];
  const selectedIndexes: Set<number> = new Set();

  for (let i = 0; i < questionNumber; i++) {
    selectedCategories.push(
      availableCategories[
        Math.floor(Math.random() * availableCategories.length)
      ]
    );
  }

  selectedCategories.forEach((category) => {
    const questionPool =
      questionBank[category as keyof QuestionBankType][
        difficulty as keyof CategoryType
      ];

    let selectedIndex = Math.floor(Math.random() * questionPool.length);
    while (selectedIndexes.has(selectedIndex)) {
      selectedIndex = Math.floor(Math.random() * questionPool.length);
    }
    selectedIndexes.add(selectedIndex);
    const selectedQuestion = questionPool[selectedIndex];
    selectedQuestions.push({
      category: category,
      difficulty: difficulty,
      query: selectedQuestion.query,
      options: selectedQuestion.options,
      answer: selectedQuestion.answer,
    });
  });

  return selectedQuestions;
};
