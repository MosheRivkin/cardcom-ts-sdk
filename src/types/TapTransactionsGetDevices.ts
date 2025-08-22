import type { ErrorInfo } from "./ErrorInfo.ts";
import type { GetDevicesRequest } from "./GetDevicesRequest.ts";
import type { ProcessTransactionResponse } from "./ProcessTransactionResponse.ts";

/**
 * @description Successful request
*/
export type TapTransactionsGetDevices200 = ProcessTransactionResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type TapTransactionsGetDevices400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type TapTransactionsGetDevices401 = ErrorInfo;

export type TapTransactionsGetDevicesMutationRequest = GetDevicesRequest | null;

export type TapTransactionsGetDevicesMutationResponse = TapTransactionsGetDevices200;

export type TapTransactionsGetDevicesMutation = {
    Response: TapTransactionsGetDevices200;
    Request: TapTransactionsGetDevicesMutationRequest;
    Errors: TapTransactionsGetDevices400 | TapTransactionsGetDevices401;
};