import { Box, IconButton as MuiIconButton } from "@mui/material";
import { IconButtonProps } from "./IconButton.types";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <StyledBox>
      <MuiIconButton onClick={onClick}>{icon}</MuiIconButton>
    </StyledBox>
  );
};

export default IconButton;
