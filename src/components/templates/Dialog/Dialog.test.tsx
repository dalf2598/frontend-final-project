import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DialogProps } from "./Dialog.types";
import Dialog from "./Dialog";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("<Dialog />", () => {
  const setup = ({ title, body, open, showOptions }: DialogProps) => {
    return render(
      <Dialog title={title} body={body} open={open} showOptions={showOptions} />
    );
  };

  test("should render components", () => {
    const props: DialogProps = {
      title: "Test Title",
      body: <p>Test Body</p>,
      open: true,
      showOptions: true,
    };

    setup(props);
    const title = screen.getByText("Test Title");
    const body = screen.getByText("Test Body");
    const homeButton = screen.getByText("Home");
    const rankingButton = screen.getByText("Ranking");

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(rankingButton).toBeInTheDocument();
  });

  test("should not render buttons", () => {
    const props: DialogProps = {
      title: "Test Title",
      body: <p>Test Body</p>,
      open: true,
      showOptions: false,
    };

    setup(props);

    const homeButton = screen.queryByText("Home");
    const rankingButton = screen.queryByText("Ranking");

    expect(homeButton).not.toBeInTheDocument();
    expect(rankingButton).not.toBeInTheDocument();
  });
});
