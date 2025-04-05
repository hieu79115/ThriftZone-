"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AlertContextType {
  alertMessage: string | null;
  alertType: "success" | "error" | null;
  setAlert: (message: string, type: "success" | "error") => void;
  clearAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const setAlert = (message: string, type: "success" | "error") => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => clearAlert(), 3000);
  };

  const clearAlert = () => {
    setAlertMessage(null);
    setAlertType(null);
  };

  return (
    <AlertContext.Provider value={{ alertMessage, alertType, setAlert, clearAlert }}>
      {children}
      {alertMessage && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-xl shadow-lg ${
            alertType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {alertMessage}
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};