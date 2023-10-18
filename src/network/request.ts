import { Observable } from "@legendapp/state";
import { ApiStatus } from "./network.types";
import axios from "axios";

export interface IApiStatusViews {
  isLoading: boolean;
  isError: boolean;
  isInit: boolean;
  isSuccess: boolean;
  isPending: boolean;
}

export const getApiStatus = (apiStatus: ApiStatus): IApiStatusViews => {
  return {
    isSuccess: apiStatus === "success",
    isError: apiStatus === "error",
    isLoading: apiStatus === "pending" || apiStatus === "init",
    isPending: apiStatus === "pending",
    isInit: apiStatus === "init",
  };
};

export type RequestMethod = "POST" | "GET" | "PUT" | "DELETE";

export const RequestMethods: Record<string, RequestMethod> = {
  POST: "POST",
  GET: "GET",
  DELETE: "DELETE",
  PUT: "PUT",
};

export interface IHttpConfig {
  url: string;
  data?: any;
  method: RequestMethod;
}

interface IRequestResponse {
  data?: any;
  message?: string;
  statusCode?: number;
  status: "error" | "success";
}

export async function request(httpConfig: IHttpConfig): IRequestResponse {
  return new Promise((resolve) => {
    try {
      axios(httpConfig)
        .then((response) => {
          resolve({
            data: response.data,
            status: "success",
            statusCode: response.status,
          });
        })
        .catch((axiosError) => {
          const serverResponse = axiosError.response?.data ;
          console.log({serverResponse});

          resolve({
            message: serverResponse?.errorMessage ?? "Something went wrong",
            status: "error",
            statusCode: serverResponse?.statusCode ?? axiosError?.response?.status, 
            // If Custom Status code is not available from BE then need to use the status code from the axiosError object.
          });
        });
    } catch (error) {
      resolve({
        message: error?.getMessage?.() ?? "Something went wrong",
        status: "error",
      });
    }
  });
}
