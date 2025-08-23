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

function getTransactionsRefundByTransactionIdUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Transactions/RefundByTransactionId` as const }
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
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = transactionsRefundByTransactionIdMutationRequestSchema.parse(data)
  const res = await request<
    TransactionsRefundByTransactionIdMutationResponse,
    ResponseErrorConfig<TransactionsRefundByTransactionId400 | TransactionsRefundByTransactionId401>,
    TransactionsRefundByTransactionIdMutationRequest
  >({ method: 'POST', url: getTransactionsRefundByTransactionIdUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsRefundByTransactionIdMutationResponseSchema.parse(res.data)
}