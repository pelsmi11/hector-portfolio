/* eslint-disable no-unused-vars */
import { SyntheticEvent } from "react";

import { AlertColor, SnackbarCloseReason } from "@mui/material";
import { create } from "zustand";

interface AlertState {
  openSnack: boolean;
  severity: AlertColor;
  message: string;
  isLoading: boolean;
  handleClose: (
    event: Event | SyntheticEvent<any, Event>,
    reason?: SnackbarCloseReason
  ) => void;
  handleSendData: (message?: string) => void;
  handleLoading: () => void;
  handleErrorData: (message: string, severity: AlertColor) => void;
}

export const useAlertSnackStore = create<AlertState>((set, get) => ({
  message: "",
  severity: "success", //type AlertColor = "success" | "info" | "warning" | "error"
  openSnack: false,
  isLoading: false,
  handleLoading: () => {
    set((state) => ({ ...state, isLoading: !state.isLoading }));
  },
  handleSendData: (message = "Gracias! tus datos han sido enviados") => {
    set((state) => ({
      ...state,
      openSnack: true,
      severity: "success",
      message: message,
    }));
  },
  handleClose: (event, reason) => {
    //type SnackbarCloseReason = "timeout" | "clickaway" | "escapeKeyDown"
    if (reason === "clickaway") {
      return;
    }
    set(() => ({ openSnack: false }));
  },
  handleErrorData: (message, severity) => {
    set(() => ({ message, severity, openSnack: true }));
  },
}));
