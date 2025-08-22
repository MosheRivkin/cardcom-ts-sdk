import type { DtoResponseOfMuhlafimData } from "./DtoResponseOfMuhlafimData.ts";
import type { GetMuhlafimRequest } from "./GetMuhlafimRequest.ts";

/**
 * @description successful request
*/
export type RecuringPaymentsGetMuhlafimFile200 = DtoResponseOfMuhlafimData;

export type RecuringPaymentsGetMuhlafimFileMutationRequest = GetMuhlafimRequest | null;

export type RecuringPaymentsGetMuhlafimFileMutationResponse = RecuringPaymentsGetMuhlafimFile200;

export type RecuringPaymentsGetMuhlafimFileMutation = {
    Response: RecuringPaymentsGetMuhlafimFile200;
    Request: RecuringPaymentsGetMuhlafimFileMutationRequest;
    Errors: any;
};