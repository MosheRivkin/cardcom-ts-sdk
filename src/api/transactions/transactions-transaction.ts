/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TransactionsTransactionMutationRequest,
  TransactionsTransactionMutationResponse,
  TransactionsTransaction400,
  TransactionsTransaction401,
} from '../../types/TransactionsTransaction.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  transactionsTransactionMutationResponseSchema,
  transactionsTransactionMutationRequestSchema,
} from '../../zod/transactions/transactions-transaction-schema.ts'

function getTransactionsTransactionUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/Transaction"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/Transaction"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Transactions/Transaction` as const }
  return res
}

/**
 * @description Transactions operation
 * @summary Do Transaction
 * {@link /api/v11/Transactions/Transaction}
 */
export async function transactionsTransaction(
  { data }: { data?: TransactionsTransactionMutationRequest },
  config: Partial<RequestConfig<TransactionsTransactionMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; TranzactionId?: number | undefined; TerminalNumber?: number | undefined; Amount?: number | undefined; CoinId?: number | undefined; CouponNumber?: string | null | undefined; CreateDate?: string | undefined; Last4CardDigits?: number | undefined; Last4CardDigitsString?: string | null | undefined; FirstCardDigits?: number | undefined; JParameter?: string | null | undefined; CardMonth?: number | undefined; CardYear?: number | undefined; ApprovalNumber?: string | null | undefined; FirstPaymentAmount?: number | undefined; ConstPaymentAmount?: number | undefined; NumberOfPayments?: number | undefined; CardInfo?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").CardInfo | undefined; CardOwnerName?: string | null | undefined; CardOwnerPhone?: string | null | undefined; CardOwnerEmail?: string | null | undefined; CardOwnerIdentityNumber?: string | null | undefined; Token?: string | null | undefined; CardName?: string | null | undefined; SapakMutav?: string | null | undefined; Uid?: string | null | undefined; ConcentrationNumber?: string | null | undefined; DocumentNumber?: number | null | undefined; DocumentType?: (import("/home/m/dev/git/cardcom-ts-sdk/src/index").DocumentType | null) | undefined; Rrn?: string | null | undefined; Brand?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Brand | undefined; Acquire?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Acquire | undefined; Issuer?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Issuer | undefined; PaymentType?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").PaymentType | undefined; CardNumberEntryMode?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").CardNumberEntryMode | undefined; DealType?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").DealType | undefined; IsRefund?: boolean | undefined; DocumentUrl?: string | null | undefined; CustomFields?: { Id?: number | undefined; Value?: string | undefined; }[] | null | undefined; IsAbroadCard?: boolean | undefined; IssuerAuthCodeDescription?: string | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { TerminalNumber: number; ApiName: string; Amount: number; CardNumber?: string | null | undefined; Token?: string | null | undefined; ExternalMerchantId?: string | null | undefined; CardExpirationMMYY?: string | null | undefined; CVV2?: string | null | undefined; ExternalUniqTranId?: string | null | undefined; ExternalUniqUniqTranIdResponse?: boolean | null | undefined; NumOfPayments?: number | null | undefined; CardOwnerInformation?: { Phone?: string | null | undefined; FullName?: string | null | undefined; IdentityNumber?: string | null | undefined; CardOwnerEmail?: string | null | undefined; AvsZip?: string | null | undefined; AvsAddress?: string | null | undefined; AvsCity?: string | null | undefined; } | null | undefined; ISOCoinId?: number | null | undefined; CustomFields?: { Id?: number | undefined; Value?: string | undefined; }[] | null | undefined; Advanced?: { ApiPassword?: string | null | undefined; IsRefund?: boolean | undefined; ISOCoinName?: string | null | undefined; JValidateType?: (import("/home/m/dev/git/cardcom-ts-sdk/src/index").JValidateType | null) | undefined; SapakMutav?: string | null | undefined; CreditType?: number | null | undefined; MTI?: number | null | undefined; AccountIdToGetCardNumber?: number | null | undefined; ApprovalNumber?: string | null | undefined; FirstPayment?: number | null | undefined; ConstPayment?: number | null | undefined; IsAutoRecurringPayment?: boolean | null | undefined; IsCreateToken?: boolean | null | undefined; SendNote?: boolean | null | undefined; } | null | undefined; Document?: { Name: string; DocumentTypeToCreate?: (import("/home/m/dev/git/cardcom-ts-sdk/src/index").DocumentToCreate | null) | undefined; TaxId?: string | null | undefined; Email?: string | null | undefined; IsSendByEmail?: boolean | null | undefined; AddressLine1?: string | null | undefined; AddressLine2?: string | null | undefined; City?: string | null | undefined; Mobile?: string | null | undefined; Phone?: string | null | undefined; Comments?: string | null | undefined; IsVatFree?: boolean | null | undefined; DepartmentId?: number | null | undefined; AdvancedDefinition?: { IsAutoCreateUpdateAccount?: (import("/home/m/dev/git/cardcom-ts-sdk/src/index").ConfigBool | null) | undefined; AccountForeignKey?: string | null | undefined; SiteUniqueId?: string | null | undefined; AccountID?: number | null | undefined; IsLoadInfoFromAccountID?: boolean | null | undefined; } | null | undefined; Products?: { Description: string; UnitCost: number; ProductID?: string | null | undefined; Quantity?: number | null | undefined; TotalLineCost?: number | null | undefined; IsVatFree?: boolean | null | undefined; }[] | undefined; ExternalId?: string | null | undefined; ManualNumber?: string | null | undefined; DocumentDateDDMMYYYY?: string | null | undefined; ValueDate?: string | null | undefined; Languge?: string | null | undefined; IsSendSMS?: boolean | null | undefined; } | null | undefined; } | null = transactionsTransactionMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").TransactionInfo> = await request<
    TransactionsTransactionMutationResponse,
    ResponseErrorConfig<TransactionsTransaction400 | TransactionsTransaction401>,
    TransactionsTransactionMutationRequest
  >({ method: 'POST', url: getTransactionsTransactionUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsTransactionMutationResponseSchema.parse(res.data)
}