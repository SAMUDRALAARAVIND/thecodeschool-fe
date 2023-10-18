import { observer } from "@legendapp/state/react";
import { ISnackBarType, globalSnackBarModel } from "./global-snackbar-model";
import React, { CSSProperties } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const SnackBarIcon: Record<ISnackBarType, () => React.JSX.Element> = {
  error: () => <ErrorOutlineIcon htmlColor="red" fontSize="small"/>,
  info: () => <InfoOutlinedIcon htmlColor="black" fontSize="small" />,
  success: () => <CheckCircleOutlineOutlinedIcon htmlColor="green" fontSize="small" />,
};

const colorMapping = {
    info: "black",
    success: "green",
    error: "red"
}

export const GlobalSnackBar = observer(() => {
  const snackBarOptions = globalSnackBarModel.snackBarConfig$.get();
  const snackBarType = snackBarOptions.type;

    if (!snackBarOptions.isActive) return null;

  const IconComponent = SnackBarIcon[snackBarType];

  return (
    <div style={styles.container} className="fr-aic g-10">
      {snackBarOptions.showIcon && <IconComponent />}
      <div style={{...styles.messageText, ...{color: colorMapping[snackBarType]} }}>{snackBarOptions.message}</div>
    </div>
  );
});

const styles: Record<string, CSSProperties> = {
  container: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: 'white',
    border: "2px solid #EDEDED",
    color: 'green'
  },
  messageText: {
    fontSize: "14px",
    fontWeight: '600'
  }
};
