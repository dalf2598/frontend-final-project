import { TableRow, TableCell, TableBody as MuiTableBody } from "@mui/material";

import { TableBodyProps } from "./TableBody.types";

const TableBody = ({ rows }: TableBodyProps) => {
  return (
    <MuiTableBody>
      {rows.map((item, index) => (
        <TableRow key={index}>
          <TableCell sx={{ fontWeight: "bold" }}>{item.rank}</TableCell>
          <TableCell>{item.player}</TableCell>
          <TableCell>{item.level}</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>{item.score}</TableCell>
        </TableRow>
      ))}
    </MuiTableBody>
  );
};

export default TableBody;
