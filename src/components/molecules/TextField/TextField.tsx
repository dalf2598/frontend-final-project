import { Box, Typography } from "@mui/material";
import Field from "../../atoms/Field/Field";
import { TextFieldProps } from "./TextField.types";
import { MAX_CHARACTERS_ALLOWED } from "../../../Constants";
import { styled } from "@mui/system";

const StyledTextFieldBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
});

const TextField = ({ label, value, setValue }: TextFieldProps) => {
  const handleChange = (newValue: string) => {
    const onlyLettersRegex = /^[a-zA-Z]*$/;
    if (onlyLettersRegex.test(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <StyledTextFieldBox>
      <Typography variant="h6">{label}</Typography>
      <Field
        value={value}
        onChange={handleChange}
        maxLength={MAX_CHARACTERS_ALLOWED}
      />
    </StyledTextFieldBox>
  );
};

export default TextField;
