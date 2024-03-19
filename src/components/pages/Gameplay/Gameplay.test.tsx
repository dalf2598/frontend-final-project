import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Gameplay from "./Gameplay";

describe("<Gameplay />", () => {
  const setup = () => {
    return render(<Gameplay />);
  };

  test("should render child components", () => {
    setup();

    const titleLabel = screen.getByText("Question");
    screen.debug();
    expect(titleLabel).toBeInTheDocument();
  });
});
