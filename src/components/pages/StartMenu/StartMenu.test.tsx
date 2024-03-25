import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StartMenu from "./StartMenu";
import {
  CATEGORIES_TITLE,
  GAME_DESCRIPTION,
  GAME_TITLE,
} from "../../../Constants";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("../../../utils/Urls", () => ({
  get API_URL() {
    return "localhost:3000/api/questions";
  },
}));

describe("<StartMenu />", () => {
  const setup = () => {
    return render(<StartMenu />);
  };

  test("should render child components", () => {
    setup();

    const titleLabel = screen.getByText(GAME_TITLE);
    const descriptionLabel = screen.getByText(GAME_DESCRIPTION);
    const categoriesLabel = screen.getByText(CATEGORIES_TITLE);

    expect(titleLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
    expect(categoriesLabel).toBeInTheDocument();
  });
});
