/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  DocumentsCreateDocumentMutationRequest,
  DocumentsCreateDocumentMutationResponse,
  DocumentsCreateDocument400,
  DocumentsCreateDocument401,
} from '../../types/DocumentsCreateDocument.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  documentsCreateDocumentMutationResponseSchema,
  documentsCreateDocumentMutationRequestSchema,
} from '../../zod/documents/documents-create-document-schema.ts'

function getDocumentsCreateDocumentUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/CreateDocument"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/CreateDocument"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Documents/CreateDocument` as const }
  return res
}

/**
 * @description Documents operations
 * @summary Create a document associated to a deal
 * {@link /api/v11/Documents/CreateDocument}
 */
export async function documentsCreateDocument(
  { data }: { data?: DocumentsCreateDocumentMutationRequest },
  config: Partial<RequestConfig<DocumentsCreateDocumentMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | undefined; DocumentType?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").DocumentType | undefined; DocumentNumber?: number | undefined; AccountId?: number | undefined; ForeignAccountNumber?: string | null | undefined; SiteUniqueId?: string | null | undefined; DocumentUrl?: string | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; Document: { DocumentTypeToCreate: "Auto" | "TaxInvoiceAndReceipt" | "TaxInvoiceAndReceiptRefund" | "Receipt" | "ReceiptRefund" | "Quote" | "Order" | "OrderConfirmation" | "OrderConfirmationRefund" | "DeliveryNote" | "DeliveryNoteRefund" | "ProformaInvoice" | "DemandForPayment" | "DemandForPaymentRefund" | "ProformaDealInvoice" | "ProformaDealInvoiceRefund" | "TaxInvoice" | "ProformaInvoiceRefund" | "TaxInvoiceRefund" | "ReceiptForTaxInvoice" | "DonationReceipt" | "DonationReceiptRefund" | "ReceiptForTaxInvoiceRefund"; Name: string; TaxId?: string | null | undefined; Email?: string | null | undefined; IsSendByEmail?: boolean | null | undefined; AddressLine1?: string | null | undefined; AddressLine2?: string | null | undefined; City?: string | null | undefined; Mobile?: string | null | undefined; Phone?: string | null | undefined; Comments?: string | null | undefined; IsVatFree?: boolean | null | undefined; DepartmentId?: number | null | undefined; AdvancedDefinition?: { IsAutoCreateUpdateAccount?: (import("/home/m/dev/git/cardcom-ts-sdk/src/index").ConfigBool | null) | undefined; AccountForeignKey?: string | null | undefined; SiteUniqueId?: string | null | undefined; AccountID?: number | null | undefined; IsLoadInfoFromAccountID?: boolean | null | undefined; } | null | undefined; Products?: { Description: string; UnitCost: number; ProductID?: string | null | undefined; Quantity?: number | null | undefined; TotalLineCost?: number | null | undefined; IsVatFree?: boolean | null | undefined; }[] | undefined; ExternalId?: string | null | undefined; ManualNumber?: string | null | undefined; DocumentDate?: string | null | undefined; ValueDate?: string | null | undefined; ISOCoinID?: number | undefined; ISOCoinName?: string | null | undefined; Languge?: string | null | undefined; }; Cash?: number | undefined; Cheques?: { ChequeNumber?: string | null | undefined; BankNumber?: number | undefined; SnifNumber?: number | undefined; AccountNumber?: string | null | undefined; DateCheque?: string | undefined; Sum?: number | undefined; }[] | null | undefined; CustomFields?: { TransactionID?: number | undefined; TranDate?: string | undefined; Description?: string | null | undefined; asmacta?: string | null | undefined; Sum?: number | undefined; }[] | null | undefined; DealNumbers?: { DealNumber?: number | undefined; }[] | null | undefined; IsSendSMS?: boolean | undefined; } | null = documentsCreateDocumentMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DocumentInfo> = await request<
    DocumentsCreateDocumentMutationResponse,
    ResponseErrorConfig<DocumentsCreateDocument400 | DocumentsCreateDocument401>,
    DocumentsCreateDocumentMutationRequest
  >({ method: 'POST', url: getDocumentsCreateDocumentUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsCreateDocumentMutationResponseSchema.parse(res.data)
}