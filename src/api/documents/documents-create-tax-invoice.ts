/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { DocumentsCreateTaxInvoiceMutationRequest, DocumentsCreateTaxInvoiceMutationResponse, DocumentsCreateTaxInvoice400, DocumentsCreateTaxInvoice401 } from "../../types/DocumentsCreateTaxInvoice.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { documentsCreateTaxInvoiceMutationResponseSchema, documentsCreateTaxInvoiceMutationRequestSchema } from "../../zod/documents/documents-create-tax-invoice-schema.ts";

function getDocumentsCreateTaxInvoiceUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Documents/CreateTaxInvoice` as const
  }
  return res
}

/**
 * @description Documents operations
 * @summary Create Tax invoice
 * {@link /api/v11/Documents/CreateTaxInvoice}
 */
export async function documentsCreateTaxInvoice({ data }: { data?: DocumentsCreateTaxInvoiceMutationRequest }, config: Partial<RequestConfig<DocumentsCreateTaxInvoiceMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = documentsCreateTaxInvoiceMutationRequestSchema.parse(data)
  const res = await request<DocumentsCreateTaxInvoiceMutationResponse, ResponseErrorConfig<DocumentsCreateTaxInvoice400 | DocumentsCreateTaxInvoice401>, DocumentsCreateTaxInvoiceMutationRequest>({ method: "POST", url: getDocumentsCreateTaxInvoiceUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsCreateTaxInvoiceMutationResponseSchema.parse(res.data)
}