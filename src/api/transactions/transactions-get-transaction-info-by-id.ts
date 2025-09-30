/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TransactionsGetTransactionInfoByIdMutationRequest,
  TransactionsGetTransactionInfoByIdMutationResponse,
  TransactionsGetTransactionInfoById400,
  TransactionsGetTransactionInfoById401,
} from '../../types/TransactionsGetTransactionInfoById.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  transactionsGetTransactionInfoByIdMutationResponseSchema,
  transactionsGetTransactionInfoByIdMutationRequestSchema,
} from '../../zod/transactions/transactions-get-transaction-info-by-id-schema.ts'

function getTransactionsGetTransactionInfoByIdUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/GetTransactionInfoById"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/GetTransactionInfoById"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Transactions/GetTransactionInfoById` as const }
  return res
}

/**
 * @description Transactions operation
 * @summary Get Transaction Info By Id
 * {@link /api/v11/Transactions/GetTransactionInfoById}
 */
export async function transactionsGetTransactionInfoById(
  { data }: { data?: TransactionsGetTransactionInfoByIdMutationRequest },
  config: Partial<RequestConfig<TransactionsGetTransactionInfoByIdMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ HaveRecipient?: boolean | undefined; Status1?: number | undefined; CardNumber5?: string | null | undefined; Sulac25?: string | null | undefined; JParameter29?: string | null | undefined; Tokef30?: string | null | undefined; Sum36?: number | undefined; SumStars52?: string | null | undefined; ApprovalNumber71?: string | null | undefined; FirstPaymentSum78?: string | null | undefined; ConstPayment86?: string | null | undefined; NumberOfPayments94?: string | null | undefined; AbroadCard119?: string | null | undefined; CardTypeCode60?: string | null | undefined; Mutag24?: string | null | undefined; CardOwnerName?: string | null | undefined; CardToken?: string | null | undefined; CardHolderIdentityNumber?: string | null | undefined; CardName?: string | null | undefined; CreditType63?: string | null | undefined; DealType61?: string | null | undefined; ChargType66?: string | null | undefined; SapakMutav?: string | null | undefined; BinId?: number | undefined; DealDate?: string | undefined; ExternalPaymentVector?: number | null | undefined; ExternalPaymentID?: string | null | undefined; CustomFields?: string[] | null | undefined; TerminalNumber?: number | undefined; InternalDealNumber?: number | undefined; CouponNumber?: string | null | undefined; CardOwnerPhone?: string | null | undefined; FirstCardDigits?: number | null | undefined; Uid?: string | null | undefined; }[]> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { TerminalNumber: number; UserName: string; UserPassword: string; InternalDealNumber: number; } | null = transactionsGetTransactionInfoByIdMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").TransactionsGetTransactionInfoById200> = await request<
    TransactionsGetTransactionInfoByIdMutationResponse,
    ResponseErrorConfig<TransactionsGetTransactionInfoById400 | TransactionsGetTransactionInfoById401>,
    TransactionsGetTransactionInfoByIdMutationRequest
  >({ method: 'POST', url: getTransactionsGetTransactionInfoByIdUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsGetTransactionInfoByIdMutationResponseSchema.parse(res.data)
}