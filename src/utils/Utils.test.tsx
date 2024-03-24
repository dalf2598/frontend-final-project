import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CORRECT_ANSWER_TITLES, INCORRECT_ANSWER_TITLES } from "../Constants";
import {
  mockDifficulties,
  mockFormattedQuestion,
  mockGetDifficultyFactorOptions,
  mockGetPlayerLevelOptions,
  mockGetQuestionScoreOptions,
  mockLeaderboard,
  mockQuestionBank,
  mockQuestionIconOptions,
  mockQuestionNumberOptions,
  mockQuestionTimeOptions,
} from "./Mocks";
import {
  addRowLeaderboard,
  getAnswerDialogTitle,
  getDifficultyFactor,
  getPlayerLevel,
  getQuestionIcon,
  getQuestionNumber,
  getQuestionScore,
  getQuestionTimer,
  getRandomQuestions,
  parseToTileGroupFormat,
} from "./Utils";

describe("<Utils />", () => {
  test.each(mockQuestionNumberOptions)(
    "should return the correct question number for each difficulty",
    ({ difficulty, number }) => {
      expect(getQuestionNumber(difficulty)).toBe(number);
    }
  );

  test.each(mockQuestionTimeOptions)(
    "should return the correct question time for each difficulty",
    ({ difficulty, time }) => {
      expect(getQuestionTimer(difficulty)).toBe(time);
    }
  );

  test.each(mockQuestionIconOptions)(
    "should return correct question icon for each category",
    ({ category, expectedIcon }) => {
      const result = getQuestionIcon(category);
      render(result);
      const icon = screen.getByTestId(expectedIcon);
      expect(icon).toBeInTheDocument();
    }
  );

  test.each(mockDifficulties)(
    "should return a random set of questions",
    (difficulty) => {
      const questions = getRandomQuestions(mockQuestionBank, 4, difficulty);
      expect(questions.length).toBe(4);
      questions.forEach((question) => {
        expect(question.category).toBeDefined();
        expect(question.difficulty).toBe(difficulty);
        expect(question.query).toBeDefined();
        expect(question.options).toBeDefined();
        expect(question.options.length).toBe(4);
      });
    }
  );

  test.each(mockGetPlayerLevelOptions)(
    "should return correct player level",
    ({ score, level }) => {
      const result = getPlayerLevel(score);
      expect(result).toBe(level);
    }
  );

  test.each(mockGetDifficultyFactorOptions)(
    "should return correct difficulty factor",
    ({ difficulty, factor }) => {
      const result = getDifficultyFactor(difficulty);
      expect(result).toBe(factor);
    }
  );

  test.each(mockGetQuestionScoreOptions)(
    "should return correct player score",
    ({ correctness, time, difficulty, score }) => {
      const result = getQuestionScore(correctness, time, difficulty);
      expect(result).toBe(score);
    }
  );

  test("should parse questions to tile option format", () => {
    const tileOptions = parseToTileGroupFormat(mockFormattedQuestion);
    expect(tileOptions.length).toBe(4);
    tileOptions.forEach((option: { type: string; label: string }) => {
      expect(option.type).toBeDefined();
      expect(option.label).toBeDefined();
    });
  });

  test("should return a correct title when isCorrect is true", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);

    const result = getAnswerDialogTitle(true);

    expect(result).toEqual(
      CORRECT_ANSWER_TITLES[Math.floor(0.5 * CORRECT_ANSWER_TITLES.length)]
    );
  });

  test("should return a incorrect title when isCorrect is true", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);

    const result = getAnswerDialogTitle(false);

    expect(result).toEqual(
      INCORRECT_ANSWER_TITLES[Math.floor(0.5 * INCORRECT_ANSWER_TITLES.length)]
    );
  });

  test("should add row to the leaderboard", () => {
    const currentLeaderboard = [...mockLeaderboard];
    const newRow = {
      rank: 0,
      player: "New Player",
      score: 410,
      level: "Intermediate",
    };
    const newLeaderboard = [
      ...mockLeaderboard,
      { rank: 3, player: "New Player", score: 410, level: "Intermediate" },
    ];
    const result = addRowLeaderboard(currentLeaderboard, newRow);
    expect(result).toEqual(newLeaderboard);
  });
});
