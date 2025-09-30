/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TransactionsGetTransactionByExternalUniqTranMutationRequest,
  TransactionsGetTransactionByExternalUniqTranMutationResponse,
  TransactionsGetTransactionByExternalUniqTran400,
  TransactionsGetTransactionByExternalUniqTran401,
} from '../../types/TransactionsGetTransactionByExternalUniqTran.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  transactionsGetTransactionByExternalUniqTranMutationResponseSchema,
  transactionsGetTransactionByExternalUniqTranMutationRequestSchema,
} from '../../zod/transactions/transactions-get-transaction-by-external-uniq-tran-schema.ts'

function getTransactionsGetTransactionByExternalUniqTranUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/GetTransactionByExternalUniqTran"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/GetTransactionByExternalUniqTran"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Transactions/GetTransactionByExternalUniqTran` as const }
  return res
}

/**
 * @description use to validate if there is a successful transaction using the External UniqTranId parameter
 * @summary Query Transaction By ExternalUniqTranId
 * {@link /api/v11/Transactions/GetTransactionByExternalUniqTran}
 */
export async function transactionsGetTransactionByExternalUniqTran(
  { data }: { data?: TransactionsGetTransactionByExternalUniqTranMutationRequest },
  config: Partial<RequestConfig<TransactionsGetTransactionByExternalUniqTranMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; TranzactionId?: number | undefined; TerminalNumber?: number | undefined; Amount?: number | undefined; CoinId?: number | undefined; CouponNumber?: string | null | undefined; CreateDate?: string | undefined; Last4CardDigits?: number | undefined; Last4CardDigitsString?: string | null | undefined; FirstCardDigits?: number | undefined; JParameter?: string | null | undefined; CardMonth?: number | undefined; CardYear?: number | undefined; ApprovalNumber?: string | null | undefined; FirstPaymentAmount?: number | undefined; ConstPaymentAmount?: number | undefined; NumberOfPayments?: number | undefined; CardInfo?: import("src/index").CardInfo | undefined; CardOwnerName?: string | null | undefined; CardOwnerPhone?: string | null | undefined; CardOwnerEmail?: string | null | undefined; CardOwnerIdentityNumber?: string | null | undefined; Token?: string | null | undefined; CardName?: string | null | undefined; SapakMutav?: string | null | undefined; Uid?: string | null | undefined; ConcentrationNumber?: string | null | undefined; DocumentNumber?: number | null | undefined; DocumentType?: (import("src/index").DocumentType | null) | undefined; Rrn?: string | null | undefined; Brand?: import("src/index").Brand | undefined; Acquire?: import("src/index").Acquire | undefined; Issuer?: import("src/index").Issuer | undefined; PaymentType?: import("src/index").PaymentType | undefined; CardNumberEntryMode?: import("src/index").CardNumberEntryMode | undefined; DealType?: import("src/index").DealType | undefined; IsRefund?: boolean | undefined; DocumentUrl?: string | null | undefined; CustomFields?: { Id?: number | undefined; Value?: string | undefined; }[] | null | undefined; IsAbroadCard?: boolean | undefined; IssuerAuthCodeDescription?: string | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { TerminalNumber: number; ApiName: string; ExternalUniqTranId?: string | null | undefined; ExternalMerchantId?: string | null | undefined; } | null = transactionsGetTransactionByExternalUniqTranMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").TransactionInfo> = await request<
    TransactionsGetTransactionByExternalUniqTranMutationResponse,
    ResponseErrorConfig<TransactionsGetTransactionByExternalUniqTran400 | TransactionsGetTransactionByExternalUniqTran401>,
    TransactionsGetTransactionByExternalUniqTranMutationRequest
  >({ method: 'POST', url: getTransactionsGetTransactionByExternalUniqTranUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsGetTransactionByExternalUniqTranMutationResponseSchema.parse(res.data)
}