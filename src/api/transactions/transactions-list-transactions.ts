/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { TransactionsListTransactionsMutationRequest, TransactionsListTransactionsMutationResponse, TransactionsListTransactions400, TransactionsListTransactions401 } from "../../types/TransactionsListTransactions.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { transactionsListTransactionsMutationResponseSchema, transactionsListTransactionsMutationRequestSchema } from "../../zod/transactions/transactions-list-transactions-schema.ts";

function getTransactionsListTransactionsUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Transactions/ListTransactions` as const
  }
  return res
}

/**
 * @description Transactions operation
 * @summary List of Transactions
 * {@link /api/v11/Transactions/ListTransactions}
 */
export async function transactionsListTransactions({ data }: { data?: TransactionsListTransactionsMutationRequest }, config: Partial<RequestConfig<TransactionsListTransactionsMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = transactionsListTransactionsMutationRequestSchema.parse(data)
  const res = await request<TransactionsListTransactionsMutationResponse, ResponseErrorConfig<TransactionsListTransactions400 | TransactionsListTransactions401>, TransactionsListTransactionsMutationRequest>({ method: "POST", url: getTransactionsListTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsListTransactionsMutationResponseSchema.parse(res.data)
}