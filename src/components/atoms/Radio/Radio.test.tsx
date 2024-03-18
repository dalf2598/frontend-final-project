import "@testing-library/jest-dom";
import Radio from "./Radio";
import { render, screen } from "@testing-library/react";
import { RadioProps } from "./Radio.types";

describe("<Radio />", () => {
  const setup = ({ value, label }: RadioProps) => {
    return render(<Radio value={value} label={label} />);
  };

  test("should render label ", () => {
    const props: RadioProps = {
      value: "test",
      label: "Test",
    };

    setup(props);
    const radio = screen.getByText("Test");
    expect(radio).toBeInTheDocument();
  });
});
