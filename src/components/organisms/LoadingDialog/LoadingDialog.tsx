import { Box, CircularProgress } from "@mui/material";
import Dialog from "../../templates/Dialog/Dialog";
import { LoadingDialogProps } from "./LoadingDialog.types";
import { LOADING_DIALOG_TITLE } from "../../../Constants";

const LoadingDialog = ({ isOpen }: LoadingDialogProps) => {
  return (
    <Dialog
      title={LOADING_DIALOG_TITLE}
      body={
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress data-testid="circular-progress" />
        </Box>
      }
      open={isOpen}
    />
  );
};

export default LoadingDialog;
