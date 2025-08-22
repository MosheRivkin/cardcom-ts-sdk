import type { ErrorInfo } from "./ErrorInfo.ts";
import type { ExtIsBankNumberValidRsp } from "./ExtIsBankNumberValidRsp.ts";
import type { IsBankNumberValidReq } from "./IsBankNumberValidReq.ts";

/**
 * @description successful request
*/
export type RecuringPaymentsIsBankNumberValid200 = ExtIsBankNumberValidRsp;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type RecuringPaymentsIsBankNumberValid400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type RecuringPaymentsIsBankNumberValid401 = ErrorInfo;

/**
 * @description body Params
*/
export type RecuringPaymentsIsBankNumberValidQueryRequest = IsBankNumberValidReq | null;

export type RecuringPaymentsIsBankNumberValidQueryResponse = RecuringPaymentsIsBankNumberValid200;

export type RecuringPaymentsIsBankNumberValidQuery = {
    Response: RecuringPaymentsIsBankNumberValid200;
    Request: RecuringPaymentsIsBankNumberValidQueryRequest;
    Errors: RecuringPaymentsIsBankNumberValid400 | RecuringPaymentsIsBankNumberValid401;
};