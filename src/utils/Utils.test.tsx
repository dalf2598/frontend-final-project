import {
  mockDifficulties,
  mockQuestionBank,
  mockQuestionNumberOptions,
  mockQuestionTimeOptions,
} from "./Mocks";
import {
  getQuestionNumber,
  getQuestionTimer,
  getRandomQuestions,
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
});
