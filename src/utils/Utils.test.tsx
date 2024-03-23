import { CORRECT_ANSWER_TITLES, INCORRECT_ANSWER_TITLES } from "../Constants";
import {
  mockDifficulties,
  mockFormattedQuestion,
  mockQuestionBank,
  mockQuestionNumberOptions,
  mockQuestionTimeOptions,
} from "./Mocks";
import {
  getAnswerDialogTitle,
  getQuestionNumber,
  getQuestionTimer,
  getRandomQuestions,
  parseToTileOptionFormat,
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

  test("should parse questions to tile option format", () => {
    const tileOptions = parseToTileOptionFormat(mockFormattedQuestion);
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
});
