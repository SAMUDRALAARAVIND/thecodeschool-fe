import { ObservableObject, observable } from "@legendapp/state";

export type ISnackBarType = "error" | "success" | "info";

interface ISnackBarConfig {
  isActive: boolean;
  message: string;
  showIcon: boolean;
  type: ISnackBarType;
  duration: number;
}

const intialState: ISnackBarConfig = {
  isActive: false,
  message: "",
  showIcon: true,
  type: "info",
  duration: 3000,
};

class GlobalSnackBarModel {
  snackBarConfig$: ObservableObject<ISnackBarConfig>;
  timerId: NodeJS.Timeout | undefined;

  constructor() {
    this.snackBarConfig$ = observable<ISnackBarConfig>(intialState);
  }

  private resetState = () => {
    this.snackBarConfig$.set(intialState);
  };

  private notifySnackBar = ({
    message = "",
    type = "info",
    duration = 3000,
    showIcon = true,
  }: {
    message: string;
    type: ISnackBarType;
    duration?: number;
    showIcon?: boolean;
  }) => {
    if(this.timerId){
      clearTimeout(this.timerId);
      this.timerId = undefined;
    }
    
    this.snackBarConfig$.set({
      isActive: true,
      message,
      type,
      duration,
      showIcon,
    });

    this.timerId = setTimeout(() => {
      this.hideSnackBar();
      this.timerId  = undefined;
    }, duration);
  };

  private hideSnackBar = () => {
    this.resetState();
  }

  actions = {
    notifySnackBar: this.notifySnackBar,
    resetState: this.resetState,
    hideSnackBar: this.hideSnackBar
  };
}

export const globalSnackBarModel = new GlobalSnackBarModel();
