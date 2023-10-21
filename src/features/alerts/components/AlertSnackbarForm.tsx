import { Alert, Snackbar } from "@mui/material";

import { useAlertSnackStore } from "../lib";
import { COLORS_PORTFOLIO } from "@/src/utils/constants";

export const AlertsSnackbarForm = () => {
  const { handleClose, openSnack, severity, message } = useAlertSnackStore();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{ mt: 5 }}
      open={openSnack}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{
          width: "100%",
          backgroundColor:
            severity === "error"
              ? COLORS_PORTFOLIO.primary
              : COLORS_PORTFOLIO.secondary,
          color: "white",
          "& .MuiAlert-icon": {
            color: "white",
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
