import type { ErrorInfo } from "./ErrorInfo.ts";
import type { ExtGetListOfFilesRsp } from "./ExtGetListOfFilesRsp.ts";
import type { MuhlafimByDateRequest } from "./MuhlafimByDateRequest.ts";

/**
 * @description successful request
*/
export type RecuringPaymentsGetMuhlafimByDate200 = ExtGetListOfFilesRsp;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type RecuringPaymentsGetMuhlafimByDate400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type RecuringPaymentsGetMuhlafimByDate401 = ErrorInfo;

export type RecuringPaymentsGetMuhlafimByDateMutationRequest = MuhlafimByDateRequest | null;

export type RecuringPaymentsGetMuhlafimByDateMutationResponse = RecuringPaymentsGetMuhlafimByDate200;

export type RecuringPaymentsGetMuhlafimByDateMutation = {
    Response: RecuringPaymentsGetMuhlafimByDate200;
    Request: RecuringPaymentsGetMuhlafimByDateMutationRequest;
    Errors: RecuringPaymentsGetMuhlafimByDate400 | RecuringPaymentsGetMuhlafimByDate401;
};