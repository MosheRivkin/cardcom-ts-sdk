/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TransactionsListTransactionsMutationRequest,
  TransactionsListTransactionsMutationResponse,
  TransactionsListTransactions400,
  TransactionsListTransactions401,
} from '../../types/TransactionsListTransactions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  transactionsListTransactionsMutationResponseSchema,
  transactionsListTransactionsMutationRequestSchema,
} from '../../zod/transactions/transactions-list-transactions-schema.ts'

function getTransactionsListTransactionsUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/ListTransactions"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/ListTransactions"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Transactions/ListTransactions` as const }
  return res
}

/**
 * @description Transactions operation
 * @summary List of Transactions
 * {@link /api/v11/Transactions/ListTransactions}
 */
export async function transactionsListTransactions(
  { data }: { data?: TransactionsListTransactionsMutationRequest },
  config: Partial<RequestConfig<TransactionsListTransactionsMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; Tranzactions?: { ResponseCode?: number | undefined; Description?: string | null | undefined; TranzactionId?: number | undefined; TerminalNumber?: number | undefined; Amount?: number | undefined; CoinId?: number | undefined; CouponNumber?: string | null | undefined; CreateDate?: string | undefined; Last4CardDigits?: number | undefined; Last4CardDigitsString?: string | null | undefined; FirstCardDigits?: number | undefined; JParameter?: string | null | undefined; CardMonth?: number | undefined; CardYear?: number | undefined; ApprovalNumber?: string | null | undefined; FirstPaymentAmount?: number | undefined; ConstPaymentAmount?: number | undefined; NumberOfPayments?: number | undefined; CardInfo?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").CardInfo | undefined; CardOwnerName?: string | null | undefined; CardOwnerPhone?: string | null | undefined; CardOwnerEmail?: string | null | undefined; CardOwnerIdentityNumber?: string | null | undefined; Token?: string | null | undefined; CardName?: string | null | undefined; SapakMutav?: string | null | undefined; Uid?: string | null | undefined; ConcentrationNumber?: string | null | undefined; DocumentNumber?: number | null | undefined; DocumentType?: (import("/home/m/dev/git/cardcom-ts-sdk/src/index").DocumentType | null) | undefined; Rrn?: string | null | undefined; Brand?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Brand | undefined; Acquire?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Acquire | undefined; Issuer?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Issuer | undefined; PaymentType?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").PaymentType | undefined; CardNumberEntryMode?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").CardNumberEntryMode | undefined; DealType?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").DealType | undefined; IsRefund?: boolean | undefined; DocumentUrl?: string | null | undefined; CustomFields?: { Id?: number | undefined; Value?: string | undefined; }[] | null | undefined; IsAbroadCard?: boolean | undefined; IssuerAuthCodeDescription?: string | null | undefined; }[] | null | undefined; Page?: number | undefined; Page_size?: number | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; FromDate: string; ToDate: string; Page: number; Page_size: number; TranStatus?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").ListTransactionStatus | undefined; LimitForTerminal?: number | null | undefined; } | null = transactionsListTransactionsMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetTranzactionsResp> = await request<
    TransactionsListTransactionsMutationResponse,
    ResponseErrorConfig<TransactionsListTransactions400 | TransactionsListTransactions401>,
    TransactionsListTransactionsMutationRequest
  >({ method: 'POST', url: getTransactionsListTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsListTransactionsMutationResponseSchema.parse(res.data)
}