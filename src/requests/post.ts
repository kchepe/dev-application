import type { IPost, SuccessOrErrorResponse } from "../types";
import { errorResponse, successResponse } from "../utils";

export const fetchPosts = async (): Promise<
  SuccessOrErrorResponse<IPost[]>
> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return successResponse(data);
  } catch {
    return errorResponse([]);
  }
};
