import { TextField as MuiTextField } from "@mui/material";
import { TextFieldProps } from "./Field.types";
import { styled } from "@mui/system";

const StyledTextField = styled(MuiTextField)({
  "& .MuiInputBase-input": { height: "30px", padding: "5px" },
});

const Field = ({ value, onChange, maxLength }: TextFieldProps) => {
  return (
    <StyledTextField
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      inputProps={{ maxLength: maxLength }}
    />
  );
};

export default Field;
