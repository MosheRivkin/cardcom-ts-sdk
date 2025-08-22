/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { TransactionsSpecialTransactionsMutationRequest, TransactionsSpecialTransactionsMutationResponse, TransactionsSpecialTransactions400, TransactionsSpecialTransactions401 } from "../../types/TransactionsSpecialTransactions.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { transactionsSpecialTransactionsMutationResponseSchema, transactionsSpecialTransactionsMutationRequestSchema } from "../../zod/transactions/transactions-special-transactions-schema.ts";

function getTransactionsSpecialTransactionsUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Transactions/SpecialTransactions` as const
  }
  return res
}

/**
 * @description get other transaction if you use CardCom as acquire
 * @summary Special Transactions
 * {@link /api/v11/Transactions/SpecialTransactions}
 */
export async function transactionsSpecialTransactions({ data }: { data?: TransactionsSpecialTransactionsMutationRequest }, config: Partial<RequestConfig<TransactionsSpecialTransactionsMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = transactionsSpecialTransactionsMutationRequestSchema.parse(data)
  const res = await request<TransactionsSpecialTransactionsMutationResponse, ResponseErrorConfig<TransactionsSpecialTransactions400 | TransactionsSpecialTransactions401>, TransactionsSpecialTransactionsMutationRequest>({ method: "POST", url: getTransactionsSpecialTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsSpecialTransactionsMutationResponseSchema.parse(res.data)
}