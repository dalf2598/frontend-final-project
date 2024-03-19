import { Box, Typography } from "@mui/material";
import Field from "../../atoms/Field/Field";
import { TextFieldProps } from "./TextField.types";
import { MAX_CHARACTERS_ALLOWED } from "../../../Constants";

const TextField = ({ label, value, setValue }: TextFieldProps) => {
  const handleChange = (newValue: string) => {
    const onlyLettersRegex = /^[a-zA-Z]*$/;
    if (onlyLettersRegex.test(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <>
      <Typography variant="h6" fontWeight="bold" style={{ textAlign: "left" }}>
        {label}
      </Typography>
      <Box>
        <Field
          value={value}
          onChange={handleChange}
          maxLength={MAX_CHARACTERS_ALLOWED}
        />
      </Box>
    </>
  );
};

export default TextField;
