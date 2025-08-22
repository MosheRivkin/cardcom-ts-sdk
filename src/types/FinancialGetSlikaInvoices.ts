import type { ErrorInfo } from "./ErrorInfo.ts";
import type { SlikaInvoicesRequest } from "./SlikaInvoicesRequest.ts";
import type { SlikaInvoicesResponse } from "./SlikaInvoicesResponse.ts";

/**
 * @description successful request
*/
export type FinancialGetSlikaInvoices200 = SlikaInvoicesResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type FinancialGetSlikaInvoices400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type FinancialGetSlikaInvoices401 = ErrorInfo;

export type FinancialGetSlikaInvoicesMutationRequest = SlikaInvoicesRequest | null;

export type FinancialGetSlikaInvoicesMutationResponse = FinancialGetSlikaInvoices200;

export type FinancialGetSlikaInvoicesMutation = {
    Response: FinancialGetSlikaInvoices200;
    Request: FinancialGetSlikaInvoicesMutationRequest;
    Errors: FinancialGetSlikaInvoices400 | FinancialGetSlikaInvoices401;
};