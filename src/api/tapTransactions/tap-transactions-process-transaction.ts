/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TapTransactionsProcessTransactionMutationRequest,
  TapTransactionsProcessTransactionMutationResponse,
  TapTransactionsProcessTransaction400,
  TapTransactionsProcessTransaction401,
} from '../../types/TapTransactionsProcessTransaction.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  tapTransactionsProcessTransactionMutationResponseSchema,
  tapTransactionsProcessTransactionMutationRequestSchema,
} from '../../zod/tapTransactions/tap-transactions-process-transaction-schema.ts'

function getTapTransactionsProcessTransactionUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/TapTransactions/ProcessTransaction` as const }
  return res
}

/**
 * @description Tap On Phone operations
 * @summary ProcessTransaction - Process Tap On Phone transaction
 * {@link /api/v11/TapTransactions/ProcessTransaction}
 */
export async function tapTransactionsProcessTransaction(
  { data }: { data?: TapTransactionsProcessTransactionMutationRequest },
  config: Partial<RequestConfig<TapTransactionsProcessTransactionMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = tapTransactionsProcessTransactionMutationRequestSchema.parse(data)
  const res = await request<
    TapTransactionsProcessTransactionMutationResponse,
    ResponseErrorConfig<TapTransactionsProcessTransaction400 | TapTransactionsProcessTransaction401>,
    TapTransactionsProcessTransactionMutationRequest
  >({ method: 'POST', url: getTapTransactionsProcessTransactionUrl().url.toString(), data: requestData, ...requestConfig })
  return tapTransactionsProcessTransactionMutationResponseSchema.parse(res.data)
}