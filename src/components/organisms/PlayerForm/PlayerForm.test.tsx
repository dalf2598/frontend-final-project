import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PlayerForm from "./PlayerForm";
import { DIFFICULTY_LABEL, PLAYER_LABEL } from "../../../Constants";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("../../../utils/Urls", () => ({
  get API_URL() {
    return "localhost:3000/api/questions";
  },
}));

describe("<RadioGroup />", () => {
  const setup = () => {
    return render(<PlayerForm />);
  };

  test("should render child components", () => {
    setup();
    const playerLabel = screen.getByText(PLAYER_LABEL);
    expect(playerLabel).toBeInTheDocument();
    const difficultyLabel = screen.getByText(DIFFICULTY_LABEL);
    expect(difficultyLabel).toBeInTheDocument();
    const playButton = screen.getByText("Play");
    expect(playButton).toBeInTheDocument();
  });
});
