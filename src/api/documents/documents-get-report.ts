/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  DocumentsGetReportMutationRequest,
  DocumentsGetReportMutationResponse,
  DocumentsGetReport400,
  DocumentsGetReport401,
} from '../../types/DocumentsGetReport.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { documentsGetReportMutationResponseSchema, documentsGetReportMutationRequestSchema } from '../../zod/documents/documents-get-report-schema.ts'

function getDocumentsGetReportUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/GetReport"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/GetReport"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Documents/GetReport` as const }
  return res
}

/**
 * @description Documents operations
 * @summary Query invoice documents
 * {@link /api/v11/Documents/GetReport}
 */
export async function documentsGetReport(
  { data }: { data?: DocumentsGetReportMutationRequest },
  config: Partial<RequestConfig<DocumentsGetReportMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; Documents?: { TotalNoVatNIS?: number | undefined; TotalIncludeVATNIS?: number | undefined; VATOnlyNIS?: number | undefined; TotalVatFreeNIS?: number | undefined; TotalNoVat?: number | undefined; TotalIncludeVAT?: number | undefined; VATOnly?: number | undefined; TotalVatFree?: number | undefined; ISORate?: number | undefined; Cust_City?: string | null | undefined; Cust_Addres_Line1?: string | null | undefined; Cust_Addres_Line2?: string | null | undefined; Cust_LinePH?: string | null | undefined; Cust_MobilePH?: string | null | undefined; Comp_ID?: string | null | undefined; Email?: string | null | undefined; Cust_Name?: string | null | undefined; InvoiceDateOnly?: string | undefined; InvoiceDate?: string | undefined; Invoice_Number?: number | undefined; InvoiceType?: number | undefined; Terminal_Number?: number | undefined; CoinID?: number | undefined; DepartmentID?: number | undefined; IsOpen?: boolean | undefined; ValueDate?: string | undefined; UserID?: number | null | undefined; Customer_Number?: number | null | undefined; group_number?: number | null | undefined; Languge?: string | null | undefined; UserComments?: string | null | undefined; Discount?: number | null | undefined; DiscountNIS?: number | null | undefined; ValidateItemsisPriceIncludeVat?: boolean | null | undefined; ExternalId?: string | null | undefined; ZReport?: number | null | undefined; Asmachta?: string | null | undefined; SumBeforeDiscountNIS?: number | undefined; TotalChashNIS?: number | undefined; TotalChequesNIS?: number | undefined; TotalCreditCardNIS?: number | undefined; TotalCustomeTransactionNIS?: number | undefined; TotalRicipientNIS?: number | undefined; TotalChash?: number | undefined; TotalCheques?: number | undefined; IsNegetive?: boolean | undefined; TotalCreditCard?: number | undefined; TotalCustomeTransaction?: number | undefined; TotalRicipient?: number | undefined; }[] | null | undefined; Page?: number | undefined; Count?: number | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; FromDateYYYYMMDD: string; ToDateYYYYMMDD: string; AccountId?: number | null | undefined; CusotmerName?: string | null | undefined; DocType?: number | undefined; CoinId?: number | null | undefined; OpenClose?: number | undefined; VatFreeDocOnly?: boolean | undefined; PageNumber?: number | undefined; ItemsPerPage?: number | undefined; } | null = documentsGetReportMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DocumentSearchResponse> = await request<
    DocumentsGetReportMutationResponse,
    ResponseErrorConfig<DocumentsGetReport400 | DocumentsGetReport401>,
    DocumentsGetReportMutationRequest
  >({ method: 'POST', url: getDocumentsGetReportUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsGetReportMutationResponseSchema.parse(res.data)
}