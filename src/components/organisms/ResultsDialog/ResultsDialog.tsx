import { RESULTS_DIALOG_TITLE, RESULTS_LEVEL } from "../../../Constants";
import { ResultsDialogProps } from "./ResultsDialog.types";
import { Box, Divider, Typography } from "@mui/material";
import Dialog from "../../templates/Dialog/Dialog";

const ResultDialog = ({ isOpen, score, time, level }: ResultsDialogProps) => {
  return (
    <Dialog
      title={RESULTS_DIALOG_TITLE}
      body={
        <Box>
          <Typography variant="h6">Score: {score}</Typography>
          <Typography variant="h6">Time: {time}s</Typography>
          <Divider
            variant="fullWidth"
            sx={{ bgcolor: "white", marginY: "8px" }}
          />
          <Typography
            variant="h6"
            style={{ textAlign: "center" }}
            fontWeight="bold"
          >
            {RESULTS_LEVEL}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            {level}
          </Typography>
        </Box>
      }
      open={isOpen}
      showOptions={true}
    />
  );
};

export default ResultDialog;
