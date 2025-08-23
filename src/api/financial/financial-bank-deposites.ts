/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  FinancialBankDepositesMutationRequest,
  FinancialBankDepositesMutationResponse,
  FinancialBankDeposites400,
  FinancialBankDeposites401,
} from '../../types/FinancialBankDeposites.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  financialBankDepositesMutationResponseSchema,
  financialBankDepositesMutationRequestSchema,
} from '../../zod/financial/financial-bank-deposites-schema.ts'

function getFinancialBankDepositesUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Financial/BankDeposites` as const }
  return res
}

/**
 * @summary Bank Deposites
 * {@link /api/v11/Financial/BankDeposites}
 */
export async function financialBankDeposites(
  { data }: { data?: FinancialBankDepositesMutationRequest },
  config: Partial<RequestConfig<FinancialBankDepositesMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = financialBankDepositesMutationRequestSchema.parse(data)
  const res = await request<
    FinancialBankDepositesMutationResponse,
    ResponseErrorConfig<FinancialBankDeposites400 | FinancialBankDeposites401>,
    FinancialBankDepositesMutationRequest
  >({ method: 'POST', url: getFinancialBankDepositesUrl().url.toString(), data: requestData, ...requestConfig })
  return financialBankDepositesMutationResponseSchema.parse(res.data)
}