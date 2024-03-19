import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StartMenu from "./StartMenu";
import {
  CATEGORIES_TITLE,
  GAME_DESCRIPTION,
  GAME_TITLE,
} from "../../../Constants";

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
