/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { FinancialGetSlikaInvoicesMutationRequest, FinancialGetSlikaInvoicesMutationResponse, FinancialGetSlikaInvoices400, FinancialGetSlikaInvoices401 } from "../../types/FinancialGetSlikaInvoices.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { financialGetSlikaInvoicesMutationResponseSchema, financialGetSlikaInvoicesMutationRequestSchema } from "../../zod/financial/financial-get-slika-invoices-schema.ts";

function getFinancialGetSlikaInvoicesUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Financial/GetSlikaInvoices` as const
  }
  return res
}

/**
 * @summary Get billing report for account
 * {@link /api/v11/Financial/GetSlikaInvoices}
 */
export async function financialGetSlikaInvoices({ data }: { data?: FinancialGetSlikaInvoicesMutationRequest }, config: Partial<RequestConfig<FinancialGetSlikaInvoicesMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = financialGetSlikaInvoicesMutationRequestSchema.parse(data)
  const res = await request<FinancialGetSlikaInvoicesMutationResponse, ResponseErrorConfig<FinancialGetSlikaInvoices400 | FinancialGetSlikaInvoices401>, FinancialGetSlikaInvoicesMutationRequest>({ method: "POST", url: getFinancialGetSlikaInvoicesUrl().url.toString(), data: requestData, ...requestConfig })
  return financialGetSlikaInvoicesMutationResponseSchema.parse(res.data)
}