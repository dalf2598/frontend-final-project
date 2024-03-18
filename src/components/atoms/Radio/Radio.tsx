import { Radio as MuiRadio, FormControlLabel } from "@mui/material";
import { RadioProps } from "./Radio.types";

const Radio = ({ value, label }: RadioProps) => {
  return (
    <FormControlLabel value={value} label={label} control={<MuiRadio />} />
  );
};

export default Radio;
