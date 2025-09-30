/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  DocumentsCreateTaxInvoiceMutationRequest,
  DocumentsCreateTaxInvoiceMutationResponse,
  DocumentsCreateTaxInvoice400,
  DocumentsCreateTaxInvoice401,
} from '../../types/DocumentsCreateTaxInvoice.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  documentsCreateTaxInvoiceMutationResponseSchema,
  documentsCreateTaxInvoiceMutationRequestSchema,
} from '../../zod/documents/documents-create-tax-invoice-schema.ts'

function getDocumentsCreateTaxInvoiceUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/CreateTaxInvoice"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/CreateTaxInvoice"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Documents/CreateTaxInvoice` as const }
  return res
}

/**
 * @description Documents operations
 * @summary Create Tax invoice
 * {@link /api/v11/Documents/CreateTaxInvoice}
 */
export async function documentsCreateTaxInvoice(
  { data }: { data?: DocumentsCreateTaxInvoiceMutationRequest },
  config: Partial<RequestConfig<DocumentsCreateTaxInvoiceMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; InvoiceNumber?: number | undefined; InvoiceType?: number | undefined; AccountID?: number | null | undefined; CardSaved?: boolean | undefined; EmailSendWasQueued?: boolean | null | undefined; InvoiceLink?: string | null | undefined; TaxAuthorityAllocationNumber?: string | null | undefined; PaymentLink?: string | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; InvoiceType?: number | undefined; InvoiceHead?: { CustName?: string | null | undefined; CustAddresLine1?: string | null | undefined; CustAddresLine2?: string | null | undefined; CustCity?: string | null | undefined; CustLinePH?: string | null | undefined; CustMobilePH?: string | null | undefined; CompID?: string | null | undefined; Language?: string | null | undefined; Languge?: string | null | undefined; Comments?: string | null | undefined; CoinID?: number | undefined; CoinIsoName?: string | null | undefined; Email?: string | null | undefined; SendByEmail?: boolean | undefined; ExtIsVatFree?: boolean | null | undefined; ManualInvoiceNumber?: string | null | undefined; DepartmentId?: string | null | undefined; DepartmentIdShort?: number | undefined; IsLoadInfoFromAccountID?: string | null | undefined; IsAutoCreateUpdateAccount?: string | null | undefined; AccountForeignKey?: string | null | undefined; SiteUniqueId?: string | null | undefined; DeliveryName?: string | null | undefined; InvDate?: string | null | undefined; ValueDate?: string | null | undefined; ExternalId?: string | null | undefined; AccountID?: string | null | undefined; } | null | undefined; InvoiceLines?: { Description?: string | null | undefined; Quantity?: number | undefined; IsPriceIncludeVAT?: boolean | undefined; IsVatFree?: string | null | undefined; Price?: number | undefined; ProductID?: string | null | undefined; TotalLineCost?: string | null | undefined; }[] | null | undefined; Cash?: number | undefined; CustomLines?: { TransactionID?: number | undefined; TranDate?: string | undefined; Description?: string | null | undefined; asmacta?: string | null | undefined; Sum?: number | undefined; }[] | null | undefined; Cheques?: { ChequeNumber?: string | null | undefined; BankNumber?: number | undefined; SnifNumber?: number | undefined; AccountNumber?: string | null | undefined; DateCheque?: string | undefined; Sum?: number | undefined; }[] | null | undefined; DealNumbers?: { DealNumber?: number | undefined; }[] | null | undefined; } | null = documentsCreateTaxInvoiceMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").InvResponse> = await request<
    DocumentsCreateTaxInvoiceMutationResponse,
    ResponseErrorConfig<DocumentsCreateTaxInvoice400 | DocumentsCreateTaxInvoice401>,
    DocumentsCreateTaxInvoiceMutationRequest
  >({ method: 'POST', url: getDocumentsCreateTaxInvoiceUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsCreateTaxInvoiceMutationResponseSchema.parse(res.data)
}