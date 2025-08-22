/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { FinancialCreditCardTransactionsHaltedMutationRequest, FinancialCreditCardTransactionsHaltedMutationResponse, FinancialCreditCardTransactionsHalted400, FinancialCreditCardTransactionsHalted401 } from "../../types/FinancialCreditCardTransactionsHalted.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { financialCreditCardTransactionsHaltedMutationResponseSchema, financialCreditCardTransactionsHaltedMutationRequestSchema } from "../../zod/financial/financial-credit-card-transactions-halted-schema.ts";

function getFinancialCreditCardTransactionsHaltedUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Financial/CreditCardTransactionsHalted` as const
  }
  return res
}

/**
 * @summary CreditCard Transactions - Halted
 * {@link /api/v11/Financial/CreditCardTransactionsHalted}
 */
export async function financialCreditCardTransactionsHalted({ data }: { data?: FinancialCreditCardTransactionsHaltedMutationRequest }, config: Partial<RequestConfig<FinancialCreditCardTransactionsHaltedMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = financialCreditCardTransactionsHaltedMutationRequestSchema.parse(data)
  const res = await request<FinancialCreditCardTransactionsHaltedMutationResponse, ResponseErrorConfig<FinancialCreditCardTransactionsHalted400 | FinancialCreditCardTransactionsHalted401>, FinancialCreditCardTransactionsHaltedMutationRequest>({ method: "POST", url: getFinancialCreditCardTransactionsHaltedUrl().url.toString(), data: requestData, ...requestConfig })
  return financialCreditCardTransactionsHaltedMutationResponseSchema.parse(res.data)
}