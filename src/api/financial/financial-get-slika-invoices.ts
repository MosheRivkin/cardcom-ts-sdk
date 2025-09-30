/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  FinancialGetSlikaInvoicesMutationRequest,
  FinancialGetSlikaInvoicesMutationResponse,
  FinancialGetSlikaInvoices400,
  FinancialGetSlikaInvoices401,
} from '../../types/FinancialGetSlikaInvoices.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  financialGetSlikaInvoicesMutationResponseSchema,
  financialGetSlikaInvoicesMutationRequestSchema,
} from '../../zod/financial/financial-get-slika-invoices-schema.ts'

function getFinancialGetSlikaInvoicesUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/GetSlikaInvoices"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/GetSlikaInvoices"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Financial/GetSlikaInvoices` as const }
  return res
}

/**
 * @summary Get billing report for account
 * {@link /api/v11/Financial/GetSlikaInvoices}
 */
export async function financialGetSlikaInvoices(
  { data }: { data?: FinancialGetSlikaInvoicesMutationRequest },
  config: Partial<RequestConfig<FinancialGetSlikaInvoicesMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; TotalCount?: number | undefined; Invoices?: { DocNumber?: number | undefined; DocType?: number | undefined; DocDate?: string | undefined; BrutoOrgCurAmt?: number | undefined; DiscOrigCurrAmt?: number | undefined; AftDiscNisAmt?: number | undefined; IfNisAmt?: number | undefined; MngtFeeNis?: number | undefined; VatIfNis?: number | undefined; DepositAmount?: number | undefined; BusinessName?: string | null | undefined; BusinessRegistrationNumber?: string | null | undefined; City?: string | null | undefined; Address1?: string | null | undefined; Address2?: string | null | undefined; HouseNumber?: string | null | undefined; Email?: string | null | undefined; Phone?: string | null | undefined; SapakNumber?: number | undefined; EmailRecipient?: string | null | undefined; BankDeposits?: { Id?: number | undefined; DepositeAt?: string | undefined; SapakNumber?: number | undefined; Amount?: number | undefined; BankNumber?: number | undefined; BranchNumber?: number | undefined; AccountNumber?: number | undefined; Currency?: number | undefined; }[] | null | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; FromCreateDate: string; ToCreateDate: string; } | null = financialGetSlikaInvoicesMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").SlikaInvoicesResponse> = await request<
    FinancialGetSlikaInvoicesMutationResponse,
    ResponseErrorConfig<FinancialGetSlikaInvoices400 | FinancialGetSlikaInvoices401>,
    FinancialGetSlikaInvoicesMutationRequest
  >({ method: 'POST', url: getFinancialGetSlikaInvoicesUrl().url.toString(), data: requestData, ...requestConfig })
  return financialGetSlikaInvoicesMutationResponseSchema.parse(res.data)
}