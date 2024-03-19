import { TableContainer, Table as MuiTable } from "@mui/material";
import { styled } from "@mui/system";
import TableHead from "../../molecules/TableHead/TableHead";
import TableBody from "../../molecules/TableBody/TableBody";
import { TableProps } from "./Table.typex";

const customScrollbarStyle = {
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "5px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "5px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
};

const StyledTableContainer = styled(TableContainer)({
  minWidth: "45vw",
  margin: "20px auto",
  maxHeight: "50vh",
  ...customScrollbarStyle,
});

const Table = ({ headers, rows }: TableProps) => {
  return (
    <StyledTableContainer>
      <MuiTable>
        <TableHead headers={headers} />
        <TableBody rows={rows} />
      </MuiTable>
    </StyledTableContainer>
  );
};

export default Table;
