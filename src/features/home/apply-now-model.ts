import {
  ObservableObject,
  ObservablePrimitive,
  observable,
} from "@legendapp/state";
import { ApiStatus } from "../../network/network.types";
import { RequestMethods, request } from "../../network/request";
import { Endpoints } from "../../network/Endpoints";
import { globalSnackBarModel } from "../../components/snackbar/global-snackbar-model";

class AppyNowModel {
  status$: ObservablePrimitive<boolean>;
  obsSubmit: ObservableObject<{ apiStatus: ApiStatus, errorMessage?: string }>;

  constructor() {
    this.status$ = observable<boolean>(false);
    this.obsSubmit = observable({
      apiStatus: "init",
    });
  }

  private submitApplication = async (data: any) => {
    this.obsSubmit.apiStatus.set("pending");
    const httpConfig = {
      url: Endpoints.enroll,
      method: RequestMethods.POST,
      data,
    };
    let response = await request(httpConfig);

    if (response.status === "success") {
      this.toggleModal();
      this.obsSubmit.apiStatus.set("success");
      globalSnackBarModel.actions.notifySnackBar({
        message: response.data,
        type: "success",
      });
    } else if (response.status === "error") {
      this.obsSubmit.set({
        apiStatus: 'error',
        errorMessage: response.message
      });
    }
  };

  private toggleModal = () => {
    this.status$.set((old) => !old);
  };

  actions = {
    toggleModal: this.toggleModal,
    submitApplication: this.submitApplication,
  };
}

export const applyNowModel = new AppyNowModel();
