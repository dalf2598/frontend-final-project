import { Box, CircularProgress, Typography } from "@mui/material";
import { MetricsProps } from "./Metrics.types";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  my: "10px",
});

const StyledChildBoxLeft = styled(Box)({
  flex: "50%",
});

const StyledChildBoxRight = styled(Box)({
  display: "flex",
  flex: "50%",
  alignItems: "center",
  justifyContent: "center",
});

const Metrics = ({ score, time }: MetricsProps) => {
  return (
    <StyledBox>
      <StyledChildBoxLeft>
        <Typography variant="h6">Score: {score}</Typography>
      </StyledChildBoxLeft>
      <StyledChildBoxRight>
        <Typography variant="h6">Timer:</Typography>
        <CircularProgress
          sx={{ margin: "0 10px" }}
          variant="determinate"
          value={time}
        />
      </StyledChildBoxRight>
    </StyledBox>
  );
};

export default Metrics;
