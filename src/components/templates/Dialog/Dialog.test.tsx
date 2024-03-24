import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DialogProps } from "./Dialog.types";
import Dialog from "./Dialog";
import { Box, Button } from "@mui/material";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("<Dialog />", () => {
  const setup = ({ title, body, open, options: showOptions }: DialogProps) => {
    return render(
      <Dialog title={title} body={body} open={open} options={showOptions} />
    );
  };

  test("should render components", () => {
    const props: DialogProps = {
      title: "Test Title",
      body: <p>Test Body</p>,
      open: true,
      options: (
        <Box>
          <Button>Home</Button>
        </Box>
      ),
    };

    setup(props);
    const title = screen.getByText("Test Title");
    const body = screen.getByText("Test Body");
    const homeButton = screen.getByText("Home");

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
  });

  test("should not render options", () => {
    const props: DialogProps = {
      title: "Test Title",
      body: <p>Test Body</p>,
      open: true,
    };

    setup(props);

    const homeButton = screen.queryByText("Home");

    expect(homeButton).not.toBeInTheDocument();
  });
});
