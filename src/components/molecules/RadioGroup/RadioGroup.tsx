import { RadioGroup as MuiRadioGroup, Typography } from "@mui/material";
import Radio from "../../atoms/Radio/Radio";
import { RadioGroupProps } from "./RadioGroup.types";

const RadioGroup = ({
  label,
  options,
  selectedOption,
  handleChange,
}: RadioGroupProps) => {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" style={{ textAlign: "left" }}>
        {label}
      </Typography>
      <MuiRadioGroup
        sx={{ justifyContent: "center" }}
        value={selectedOption}
        onChange={(e) => handleChange(e.target.value)}
        row
      >
        {options.map((option, index) => (
          <Radio key={index} value={option.value} label={option.label} />
        ))}
      </MuiRadioGroup>
    </>
  );
};

export default RadioGroup;
