import { RadioGroup as MuiRadioGroup } from "@mui/material";
import Radio from "../../atoms/Radio/Radio";
import { RadioGroupProps } from "./RadioGroup.types";

const RadioGroup = ({
  options,
  selectedOption,
  handleChange,
}: RadioGroupProps) => {
  return (
    <MuiRadioGroup
      sx={{ justifyContent: "center" }}
      value={selectedOption}
      onChange={(e) => handleChange(e.target.value)}
      row
    >
      {options.map((option) => (
        <Radio value={option.value} label={option.label} />
      ))}
    </MuiRadioGroup>
  );
};

export default RadioGroup;
