import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import ScienceIcon from "@mui/icons-material/Science";
import {
  CATEGORIES,
  CORRECT_ANSWER_TITLES,
  DIFFICULTIES,
  INCORRECT_ANSWER_TITLES,
} from "../Constants";
import {
  FormattedQuestionsType,
  QuestionBankType,
  CategoryType,
  LeaderboardRow,
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

export const getQuestionTimer = (difficulty: string) => {
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

export const getQuestionIcon = (category: string) => {
  switch (category) {
    case availableCategories[0]: // history
      return <AutoStoriesIcon sx={{ fontSize: "4rem" }} />;
    case availableCategories[1]: // geography
      return <ExploreIcon sx={{ fontSize: "4rem" }} />;
    case availableCategories[2]: // music
      return <LibraryMusicIcon sx={{ fontSize: "4rem" }} />;
    case availableCategories[3]: // science
      return <ScienceIcon sx={{ fontSize: "4rem" }} />;
    default:
      return <AutoStoriesIcon sx={{ fontSize: "4rem" }} />;
  }
};

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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
      options: shuffleArray(selectedQuestion.options),
      answer: selectedQuestion.answer,
    });
  });

  return selectedQuestions;
};

export const getPlayerLevel = (score: number) => {
  switch (true) {
    case score <= 200:
      return "Novice";
    case score <= 300:
      return "Apprentice";
    case score <= 400:
      return "Expert";
    default:
      return "Sage";
  }
};

export const getDifficultyFactor = (difficulty: string) => {
  switch (difficulty) {
    case availableDifficulties[0]: // easy
      return 0.5;
    case availableDifficulties[1]: // medium
      return 0.75;
    case availableDifficulties[2]: // hard
      return 1;
    default:
      return 0.75;
  }
};

export const getQuestionScore = (
  isOptionCorrect: boolean,
  time: number,
  difficulty: string
) => {
  const correcteness = isOptionCorrect ? 1 : 0;
  const difficultyFactor = getDifficultyFactor(difficulty);
  return Math.ceil(correcteness * time * difficultyFactor);
};

export const parseToTileGroupFormat = (question: FormattedQuestionsType) => {
  return question.options.map((option) => {
    return {
      type: question.category,
      label: option,
    };
  });
};

export const getAnswerDialogTitle = (isCorrect: boolean) => {
  const correctTitles = CORRECT_ANSWER_TITLES;
  const incorrectTitles = INCORRECT_ANSWER_TITLES;

  return isCorrect
    ? correctTitles[Math.floor(Math.random() * correctTitles.length)]
    : incorrectTitles[Math.floor(Math.random() * incorrectTitles.length)];
};

export const addRowLeaderboard = (
  leaderboard: LeaderboardRow[],
  newRow: LeaderboardRow
) => {
  const filterLeaderboard = leaderboard.filter(
    (row) => row.player !== newRow.player
  );

  filterLeaderboard.push(newRow);

  filterLeaderboard.sort((a, b) => b.score - a.score || a.rank - b.rank);

  if (filterLeaderboard.length > 10) {
    filterLeaderboard.splice(10);
  }

  filterLeaderboard.forEach((item, index) => {
    item.rank = index + 1;
  });

  return filterLeaderboard;
};

export const filterLeaderboardRows = (
  array: LeaderboardRow[],
  query: string
) => {
  if (query.trim() === "") {
    return array;
  }

  return array.filter((row) => row.player.toLowerCase().includes(query));
};
