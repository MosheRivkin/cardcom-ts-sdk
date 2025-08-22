/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { TransactionsGetTransactionInfoByIdMutationRequest, TransactionsGetTransactionInfoByIdMutationResponse, TransactionsGetTransactionInfoById400, TransactionsGetTransactionInfoById401 } from "../../types/TransactionsGetTransactionInfoById.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { transactionsGetTransactionInfoByIdMutationResponseSchema, transactionsGetTransactionInfoByIdMutationRequestSchema } from "../../zod/transactions/transactions-get-transaction-info-by-id-schema.ts";

function getTransactionsGetTransactionInfoByIdUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Transactions/GetTransactionInfoById` as const
  }
  return res
}

/**
 * @description Transactions operation
 * @summary Get Transaction Info By Id
 * {@link /api/v11/Transactions/GetTransactionInfoById}
 */
export async function transactionsGetTransactionInfoById({ data }: { data?: TransactionsGetTransactionInfoByIdMutationRequest }, config: Partial<RequestConfig<TransactionsGetTransactionInfoByIdMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = transactionsGetTransactionInfoByIdMutationRequestSchema.parse(data)
  const res = await request<TransactionsGetTransactionInfoByIdMutationResponse, ResponseErrorConfig<TransactionsGetTransactionInfoById400 | TransactionsGetTransactionInfoById401>, TransactionsGetTransactionInfoByIdMutationRequest>({ method: "POST", url: getTransactionsGetTransactionInfoByIdUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsGetTransactionInfoByIdMutationResponseSchema.parse(res.data)
}