import type { ErrorInfo } from "./ErrorInfo.ts";
import type { GetDocumentRequest } from "./GetDocumentRequest.ts";
import type { GetDocumentUrlResponse } from "./GetDocumentUrlResponse.ts";

/**
 * @description successful request
*/
export type DocumentsCreateDocumentUrl200 = GetDocumentUrlResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type DocumentsCreateDocumentUrl400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type DocumentsCreateDocumentUrl401 = ErrorInfo;

export type DocumentsCreateDocumentUrlMutationRequest = GetDocumentRequest | null;

export type DocumentsCreateDocumentUrlMutationResponse = DocumentsCreateDocumentUrl200;

export type DocumentsCreateDocumentUrlMutation = {
    Response: DocumentsCreateDocumentUrl200;
    Request: DocumentsCreateDocumentUrlMutationRequest;
    Errors: DocumentsCreateDocumentUrl400 | DocumentsCreateDocumentUrl401;
};