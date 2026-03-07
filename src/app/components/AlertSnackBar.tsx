import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

interface AlertSnackBarProps {
  open: boolean;
  message: string;
  severity?: AlertColor;
  onClose: () => void;
}

const AlertSnackBar: React.FC<AlertSnackBarProps> = ({
  open,
  message,
  severity = "info",
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <MuiAlert
        onClose={onClose}
        variant="filled"
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default AlertSnackBar;
