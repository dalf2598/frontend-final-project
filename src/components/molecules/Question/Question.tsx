import { Box, Typography } from "@mui/material";
import { QuestionProps } from "./Question.types";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  my: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
});

const StyledChildBoxLeft = styled(Box)({
  flex: "75%",
  padding: "4px",
  borderRight: "1px solid #ccc",
});

const StyledChildBoxRight = styled(Box)({
  flex: "25%",
  padding: "4px",
});

const Question = ({ category, question, icon }: QuestionProps) => {
  return (
    <>
      <Typography variant="h4" fontWeight="bold" align="left">
        Category: {category}
      </Typography>
      <StyledBox>
        <StyledChildBoxLeft>
          <Typography variant="h6">{question}</Typography>
        </StyledChildBoxLeft>
        <StyledChildBoxRight>{icon}</StyledChildBoxRight>
      </StyledBox>
    </>
  );
};

export default Question;
