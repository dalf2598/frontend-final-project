import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AnswerDialogProps } from "./AnswerDialog.types";
import AnswerDialog from "./AnswerDialog";

describe("<AnswerDialog />", () => {
  const setup = ({ isOpen, isCorrect, answer, score }: AnswerDialogProps) => {
    return render(
      <AnswerDialog
        isOpen={isOpen}
        score={score}
        isCorrect={isCorrect}
        answer={answer}
      />
    );
  };

  test("should render components when answer is correct", () => {
    const props: AnswerDialogProps = {
      isOpen: true,
      isCorrect: true,
      score: 100,
      answer: "Test Answer",
    };

    setup(props);

    jest.spyOn(Math, "random").mockReturnValue(0.5);

    const score = screen.getByText("Score: + 100");
    const happyFaceIcon = screen.getByTestId("SentimentSatisfiedAltIcon");

    expect(score).toBeInTheDocument();
    expect(happyFaceIcon).toBeInTheDocument();
  });

  test("should render components when answer is correct", () => {
    const props: AnswerDialogProps = {
      isOpen: true,
      isCorrect: false,
      score: 0,
      answer: "Test Answer",
    };

    setup(props);

    jest.spyOn(Math, "random").mockReturnValue(0.5);

    const score = screen.getByText("Score: + 0");
    const happyFaceIcon = screen.getByTestId("SentimentVeryDissatisfiedIcon");
    const correctAnswer = screen.getByText("Correct Answer: Test Answer");

    expect(score).toBeInTheDocument();
    expect(happyFaceIcon).toBeInTheDocument();
    expect(correctAnswer).toBeInTheDocument();
  });
});
