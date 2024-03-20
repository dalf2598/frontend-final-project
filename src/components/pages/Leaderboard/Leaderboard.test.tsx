import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Leaderboard from "./Leaderboard";
import { LEADERBOARD_TITLE } from "../../../Constants";

describe("<Leaderboard />", () => {
  const setup = () => {
    return render(<Leaderboard />);
  };

  test("should render child components", () => {
    setup();

    const titleLabel = screen.getByText(LEADERBOARD_TITLE);

    expect(titleLabel).toBeInTheDocument();
  });
});
