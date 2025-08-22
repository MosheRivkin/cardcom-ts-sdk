import type { CreateTaxInvoiceRequest } from "./CreateTaxInvoiceRequest.ts";
import type { ErrorInfo } from "./ErrorInfo.ts";
import type { InvResponse } from "./InvResponse.ts";

/**
 * @description successful request
*/
export type DocumentsCreateTaxInvoice200 = InvResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type DocumentsCreateTaxInvoice400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type DocumentsCreateTaxInvoice401 = ErrorInfo;

export type DocumentsCreateTaxInvoiceMutationRequest = CreateTaxInvoiceRequest | null;

export type DocumentsCreateTaxInvoiceMutationResponse = DocumentsCreateTaxInvoice200;

export type DocumentsCreateTaxInvoiceMutation = {
    Response: DocumentsCreateTaxInvoice200;
    Request: DocumentsCreateTaxInvoiceMutationRequest;
    Errors: DocumentsCreateTaxInvoice400 | DocumentsCreateTaxInvoice401;
};