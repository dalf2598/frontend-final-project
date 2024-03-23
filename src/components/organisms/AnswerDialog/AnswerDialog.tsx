import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { AnswerDialogProps } from "./AnswerDialog.types";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Dialog from "../../templates/Dialog/Dialog";
import { getAnswerDialogTitle } from "../../../utils/Utils";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

const AnswerDialog = ({
  isOpen,
  isCorrect,
  answer,
  score,
}: AnswerDialogProps) => {
  return (
    <Dialog
      title={getAnswerDialogTitle(isCorrect)}
      body={
        <StyledBox>
          {isCorrect ? (
            <SentimentSatisfiedAltIcon style={{ fontSize: "48px" }} />
          ) : (
            <SentimentVeryDissatisfiedIcon style={{ fontSize: "48px" }} />
          )}
          <Typography variant="h6" sx={{ mt: "8px" }}>
            Score: + {score}
          </Typography>
          {!isCorrect ? (
            <Typography variant="subtitle1">
              Correct Answer: {answer}
            </Typography>
          ) : null}
        </StyledBox>
      }
      open={isOpen}
      showOptions={false}
    />
  );
};

export default AnswerDialog;
