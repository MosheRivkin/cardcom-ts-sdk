/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { TapTransactionsGetTransactionsMutationRequest, TapTransactionsGetTransactionsMutationResponse, TapTransactionsGetTransactions400, TapTransactionsGetTransactions401 } from "../../types/TapTransactionsGetTransactions.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { tapTransactionsGetTransactionsMutationResponseSchema, tapTransactionsGetTransactionsMutationRequestSchema } from "../../zod/tapTransactions/tap-transactions-get-transactions-schema.ts";

function getTapTransactionsGetTransactionsUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/TapTransactions/GetTransactions` as const
  }
  return res
}

/**
 * @description Tap On Phone operations
 * @summary GetTransactions - Get all TAP transaction by given terminal number and dates range
 * {@link /api/v11/TapTransactions/GetTransactions}
 */
export async function tapTransactionsGetTransactions({ data }: { data?: TapTransactionsGetTransactionsMutationRequest }, config: Partial<RequestConfig<TapTransactionsGetTransactionsMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = tapTransactionsGetTransactionsMutationRequestSchema.parse(data)
  const res = await request<TapTransactionsGetTransactionsMutationResponse, ResponseErrorConfig<TapTransactionsGetTransactions400 | TapTransactionsGetTransactions401>, TapTransactionsGetTransactionsMutationRequest>({ method: "POST", url: getTapTransactionsGetTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return tapTransactionsGetTransactionsMutationResponseSchema.parse(res.data)
}