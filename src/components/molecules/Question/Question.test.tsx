import "@testing-library/jest-dom";
import Question from "./Question";
import { QuestionProps } from "./Question.types";
import { render, screen } from "@testing-library/react";
import { PlayArrow } from "@mui/icons-material";

describe("<Question />", () => {
  const setup = ({ category, question, icon }: QuestionProps) => {
    return render(
      <Question category={category} question={question} icon={icon} />
    );
  };

  test("should display components", () => {
    const props: QuestionProps = {
      category: "Test category",
      question: "Test question",
      icon: <PlayArrow />,
    };

    setup(props);
    const category = screen.getByText("Category: Test category");
    const question = screen.getByText("Test question");
    const icon = screen.getByTestId("PlayArrowIcon");

    expect(category).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
