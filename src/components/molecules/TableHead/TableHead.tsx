import { TableHead as MuiTableHead, TableRow, TableCell } from "@mui/material";
import { TableHeadProps } from "./TableHead.types";

const TableHead = ({ headers }: TableHeadProps) => {
  return (
    <MuiTableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableCell key={index} sx={{ fontWeight: "bold" }}>
            {header}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
