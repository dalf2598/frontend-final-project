import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";

import { styled, Theme } from "@mui/system";

import { TableRows, Home } from "@mui/icons-material";
import { DialogProps } from "./Dialog.types";
import Button from "../../atoms/Button/Button";

const StyledDialog = styled(MuiDialog)<{ theme: Theme }>((props) => ({
  "& .MuiDialog-paper": {
    border: `1px solid ${props.theme.palette.text.primary}`, // Add a white border to the dialog paper
    borderRadius: "8px", // Apply border radius to the dialog paper
  },

  "& .MuiDialogTitle-root": {
    backgroundColor: props.theme.palette.background.paper,
    color: props.theme.palette.text.primary,
    textAlign: "center",
    fontWeight: "bold",
  },
  "& .MuiDialogContent-root": {
    backgroundColor: props.theme.palette.background.paper,
    color: props.theme.palette.text.primary,
    minHeight: "100px",
    minWidth: "300px",
  },
  "& .MuiDialogActions-root": {
    backgroundColor: props.theme.palette.background.paper,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Dialog = ({ title, body, open, showOptions }: DialogProps) => {
  const theme = useTheme();

  return (
    <StyledDialog open={open} theme={theme}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{body}</DialogContent>
      {showOptions && (
        <DialogActions>
          <Button icon={<Home />} onClick={() => {}} text="Home" />
          <Button icon={<TableRows />} onClick={() => {}} text="Ranking" />
        </DialogActions>
      )}
    </StyledDialog>
  );
};

export default Dialog;
