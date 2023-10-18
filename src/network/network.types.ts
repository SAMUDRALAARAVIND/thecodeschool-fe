export type ApiStatus = "init" | "pending" | "success" | "error"

export interface IError {
    errorMessage: string;
    errorCode: number;
}

export interface IErrorResponse {
    message: string;
}