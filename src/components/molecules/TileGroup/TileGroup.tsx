import { Box } from "@mui/material";
import Tile from "../../atoms/Tile/Tile";
import { TileGroupProps } from "./TileGroup.types";
import { styled } from "@mui/system";

const StyledTyleGroupBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  maxWidth: 500,
});

const TyleBoxStyle = {
  width: { xs: "100%", sm: "50%" },
  boxSizing: "border-box",
};

const TileGroup = ({ options, onClick }: TileGroupProps) => {
  return (
    <StyledTyleGroupBox>
      {options.map((option, index) => (
        <Box key={index} sx={TyleBoxStyle}>
          <Tile index={index + 1} text={option.label} onClick={onClick} />
        </Box>
      ))}
    </StyledTyleGroupBox>
  );
};

export default TileGroup;
