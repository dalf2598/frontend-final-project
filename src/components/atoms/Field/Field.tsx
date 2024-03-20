import { TextField as MuiTextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextFieldProps } from "./Field.types";
import { styled } from "@mui/system";

const StyledTextField = styled(MuiTextField)({
  "& .MuiInputBase-input": { height: "30px", padding: "5px" },
});

const Field = ({
  value,
  placeholder,
  onChange,
  maxLength,
  fullWidth,
}: TextFieldProps) => {
  return (
    <StyledTextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      inputProps={{
        maxLength: maxLength,
      }}
      fullWidth={fullWidth}
      InputProps={{
        endAdornment: fullWidth ? <SearchIcon /> : null,
      }}
    />
  );
};

export default Field;
