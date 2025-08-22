import type { DocumentsCreateTaxInvoice200, DocumentsCreateTaxInvoice400, DocumentsCreateTaxInvoice401, DocumentsCreateTaxInvoiceMutationRequest, DocumentsCreateTaxInvoiceMutationResponse } from "../../types/DocumentsCreateTaxInvoice.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { createTaxInvoiceRequestSchema } from "../create-tax-invoice-request-schema.ts";
import { errorInfoSchema } from "../error-info-schema.ts";
import { invResponseSchema } from "../inv-response-schema.ts";

/**
 * @description successful request
 */
export const documentsCreateTaxInvoice200Schema = invResponseSchema as unknown as ToZod<DocumentsCreateTaxInvoice200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCreateTaxInvoice400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsCreateTaxInvoice400>

/**
 * @description Invalid username
 */
export const documentsCreateTaxInvoice401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsCreateTaxInvoice401>

export const documentsCreateTaxInvoiceMutationRequestSchema = createTaxInvoiceRequestSchema.nullable() as unknown as ToZod<DocumentsCreateTaxInvoiceMutationRequest>

export const documentsCreateTaxInvoiceMutationResponseSchema = documentsCreateTaxInvoice200Schema as unknown as ToZod<DocumentsCreateTaxInvoiceMutationResponse>