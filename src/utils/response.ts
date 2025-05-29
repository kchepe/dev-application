import type { IApiResponse } from "../types";

export const successResponse = <T>(
  data: T,
  message?: string
): IApiResponse<T> => ({
  success: true,
  message,
  data,
});

export const errorResponse = <T>(
  data: T,
  message: string = "An error occured. Please try again."
): IApiResponse<T> => ({
  success: false,
  data,
  message,
});
