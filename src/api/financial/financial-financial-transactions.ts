/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { FinancialFinancialTransactionsMutationRequest, FinancialFinancialTransactionsMutationResponse, FinancialFinancialTransactions400, FinancialFinancialTransactions401 } from "../../types/FinancialFinancialTransactions.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { financialFinancialTransactionsMutationResponseSchema, financialFinancialTransactionsMutationRequestSchema } from "../../zod/financial/financial-financial-transactions-schema.ts";

function getFinancialFinancialTransactionsUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Financial/FinancialTransactions` as const
  }
  return res
}

/**
 * @summary Finacial tranzaction
 * {@link /api/v11/Financial/FinancialTransactions}
 */
export async function financialFinancialTransactions({ data }: { data?: FinancialFinancialTransactionsMutationRequest }, config: Partial<RequestConfig<FinancialFinancialTransactionsMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = financialFinancialTransactionsMutationRequestSchema.parse(data)
  const res = await request<FinancialFinancialTransactionsMutationResponse, ResponseErrorConfig<FinancialFinancialTransactions400 | FinancialFinancialTransactions401>, FinancialFinancialTransactionsMutationRequest>({ method: "POST", url: getFinancialFinancialTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return financialFinancialTransactionsMutationResponseSchema.parse(res.data)
}