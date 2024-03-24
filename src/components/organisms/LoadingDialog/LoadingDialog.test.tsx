import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LoadingDialogProps } from "./LoadingDialog.types";
import LoadingDialog from "./LoadingDialog";
import { LOADING_DIALOG_TITLE } from "../../../Constants";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("<LoadingDialog />", () => {
  const setup = ({ isOpen }: LoadingDialogProps) => {
    return render(<LoadingDialog isOpen={isOpen} />);
  };

  test("should render components", () => {
    const props: LoadingDialogProps = {
      isOpen: true,
    };

    setup(props);
    const title = screen.getByText(LOADING_DIALOG_TITLE);
    const circularProgress = screen.getByTestId("circular-progress");
    expect(title).toBeInTheDocument();
    expect(circularProgress).toBeInTheDocument();
  });
});
