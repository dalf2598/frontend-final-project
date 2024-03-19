import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TableHeadProps } from "./TableHead.types";
import TableHead from "./TableHead";

describe("<TableHead />", () => {
  const setup = ({ headers }: TableHeadProps) => {
    return render(<TableHead headers={headers} />);
  };

  const mockHeaders = ["Header1", "Header2", "Header3", "Header4"];

  test.each(mockHeaders)("should display headers", (header) => {
    const props: TableHeadProps = {
      headers: mockHeaders,
    };

    setup(props);

    const headerValue = screen.getByText(header);

    expect(headerValue).toBeInTheDocument();
  });
});
