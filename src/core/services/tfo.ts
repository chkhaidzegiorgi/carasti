import { TFODetailsResponse } from "src/types/tfo.type";
import { httpClient } from "./http-client";

export async function getDetails(): Promise<TFODetailsResponse> {
  const response = await httpClient.get<TFODetailsResponse>("/tfo/details");
  return response.data;
}
