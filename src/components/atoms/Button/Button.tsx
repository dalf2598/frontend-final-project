import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./Button.types";
import { styled } from "@mui/system";

const StyledButton = styled(MuiButton)({
  borderRadius: "8px",
});

const Button = ({ icon, onClick, text }: ButtonProps) => {
  return (
    <StyledButton startIcon={icon} onClick={onClick} variant="contained">
      {text}
    </StyledButton>
  );
};

export default Button;
