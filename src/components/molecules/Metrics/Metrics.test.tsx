import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MetricsProps } from "./Metrics.types";
import Metrics from "./Metrics";

describe("<Metrics />", () => {
  const setup = ({ score, time }: MetricsProps) => {
    return render(<Metrics score={score} time={time} />);
  };

  test("should display components", () => {
    const props: MetricsProps = {
      score: 10,
      time: 10,
    };

    setup(props);
    const score = screen.getByText("Score: 10");
    const circularProgress = screen.getByRole("progressbar");

    expect(score).toBeInTheDocument();
    expect(circularProgress.getAttribute("aria-valuenow")).toBe("10");
  });
});
