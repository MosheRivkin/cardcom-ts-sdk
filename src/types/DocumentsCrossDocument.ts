import type { CrossDocumentRequest } from "./CrossDocumentRequest.ts";
import type { CrossDocumentResponse } from "./CrossDocumentResponse.ts";
import type { ErrorInfo } from "./ErrorInfo.ts";

/**
 * @description successful request
*/
export type DocumentsCrossDocument200 = CrossDocumentResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type DocumentsCrossDocument400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type DocumentsCrossDocument401 = ErrorInfo;

export type DocumentsCrossDocumentMutationRequest = CrossDocumentRequest | null;

export type DocumentsCrossDocumentMutationResponse = DocumentsCrossDocument200;

export type DocumentsCrossDocumentMutation = {
    Response: DocumentsCrossDocument200;
    Request: DocumentsCrossDocumentMutationRequest;
    Errors: DocumentsCrossDocument400 | DocumentsCrossDocument401;
};