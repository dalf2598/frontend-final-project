import { Paper, Typography } from "@mui/material";
import { TileProps } from "./Tile.types";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ color }) => ({
  color: "white",
  margin: "5px",
  cursor: "pointer",
  padding: "1rem",
  backgroundColor: color ? color : "#313230",
  "&:hover": {
    backgroundColor: "#464545",
  },
}));

const Tile = ({ color, index, text, onClick }: TileProps) => {
  return (
    <StyledPaper
      color={color}
      onClick={() => onClick(index)}
      data-testid={`tile-${index}`}
    >
      <Typography>{text}</Typography>
    </StyledPaper>
  );
};

export default Tile;
