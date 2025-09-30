/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TransactionsRefundByTransactionIdMutationRequest,
  TransactionsRefundByTransactionIdMutationResponse,
  TransactionsRefundByTransactionId400,
  TransactionsRefundByTransactionId401,
} from '../../types/TransactionsRefundByTransactionId.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  transactionsRefundByTransactionIdMutationResponseSchema,
  transactionsRefundByTransactionIdMutationRequestSchema,
} from '../../zod/transactions/transactions-refund-by-transaction-id-schema.ts'

function getTransactionsRefundByTransactionIdUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/RefundByTransactionId"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/RefundByTransactionId"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Transactions/RefundByTransactionId` as const }
  return res
}

/**
 * @description Transactions operation
 * @summary Refund By Transaction Id
 * {@link /api/v11/Transactions/RefundByTransactionId}
 */
export async function transactionsRefundByTransactionId(
  { data }: { data?: TransactionsRefundByTransactionIdMutationRequest },
  config: Partial<RequestConfig<TransactionsRefundByTransactionIdMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; NewTranzactionId?: number | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; TransactionId: number; ExternalDealId?: string | null | undefined; ExternalMerchantId?: string | null | undefined; PartialSum?: number | null | undefined; CancelOnly?: boolean | null | undefined; SapakMutav?: string | null | undefined; AllowMultipleRefunds?: boolean | null | undefined; CustomFields?: { Id?: number | undefined; Value?: string | undefined; }[] | null | undefined; } | null = transactionsRefundByTransactionIdMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RefundByTransactionIdResp> = await request<
    TransactionsRefundByTransactionIdMutationResponse,
    ResponseErrorConfig<TransactionsRefundByTransactionId400 | TransactionsRefundByTransactionId401>,
    TransactionsRefundByTransactionIdMutationRequest
  >({ method: 'POST', url: getTransactionsRefundByTransactionIdUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsRefundByTransactionIdMutationResponseSchema.parse(res.data)
}