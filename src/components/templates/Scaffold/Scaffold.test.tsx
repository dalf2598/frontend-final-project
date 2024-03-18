import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Scaffold from "./Scaffold";
import { ScaffoldProps } from "./Scaffold.types";

describe("<Scaffold />", () => {
  const setup = ({ children }: ScaffoldProps) => {
    return render(<Scaffold children={children} />);
  };

  test("should render text ", () => {
    const props: ScaffoldProps = {
      children: <p>Test</p>,
    };

    setup(props);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
  });
});
