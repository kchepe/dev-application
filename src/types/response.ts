export interface IApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}
export type SuccessOrErrorResponse<T> = IApiResponse<T>;
