/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  FinancialCreditCardTransactionsMutationRequest,
  FinancialCreditCardTransactionsMutationResponse,
  FinancialCreditCardTransactions400,
  FinancialCreditCardTransactions401,
} from '../../types/FinancialCreditCardTransactions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  financialCreditCardTransactionsMutationResponseSchema,
  financialCreditCardTransactionsMutationRequestSchema,
} from '../../zod/financial/financial-credit-card-transactions-schema.ts'

function getFinancialCreditCardTransactionsUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Financial/CreditCardTransactions` as const }
  return res
}

/**
 * @summary CreditCard Transactions
 * {@link /api/v11/Financial/CreditCardTransactions}
 */
export async function financialCreditCardTransactions(
  { data }: { data?: FinancialCreditCardTransactionsMutationRequest },
  config: Partial<RequestConfig<FinancialCreditCardTransactionsMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = financialCreditCardTransactionsMutationRequestSchema.parse(data)
  const res = await request<
    FinancialCreditCardTransactionsMutationResponse,
    ResponseErrorConfig<FinancialCreditCardTransactions400 | FinancialCreditCardTransactions401>,
    FinancialCreditCardTransactionsMutationRequest
  >({ method: 'POST', url: getFinancialCreditCardTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return financialCreditCardTransactionsMutationResponseSchema.parse(res.data)
}