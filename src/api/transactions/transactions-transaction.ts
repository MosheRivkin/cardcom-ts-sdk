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

function getTransactionsTransactionUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Transactions/Transaction` as const }
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
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = transactionsTransactionMutationRequestSchema.parse(data)
  const res = await request<
    TransactionsTransactionMutationResponse,
    ResponseErrorConfig<TransactionsTransaction400 | TransactionsTransaction401>,
    TransactionsTransactionMutationRequest
  >({ method: 'POST', url: getTransactionsTransactionUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsTransactionMutationResponseSchema.parse(res.data)
}