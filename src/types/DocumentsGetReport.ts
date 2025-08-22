import type { DocumentSearchRequest } from "./DocumentSearchRequest.ts";
import type { DocumentSearchResponse } from "./DocumentSearchResponse.ts";
import type { ErrorInfo } from "./ErrorInfo.ts";

/**
 * @description successful request
*/
export type DocumentsGetReport200 = DocumentSearchResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type DocumentsGetReport400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type DocumentsGetReport401 = ErrorInfo;

export type DocumentsGetReportMutationRequest = DocumentSearchRequest | null;

export type DocumentsGetReportMutationResponse = DocumentsGetReport200;

export type DocumentsGetReportMutation = {
    Response: DocumentsGetReport200;
    Request: DocumentsGetReportMutationRequest;
    Errors: DocumentsGetReport400 | DocumentsGetReport401;
};