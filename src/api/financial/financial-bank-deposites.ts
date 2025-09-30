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

function getFinancialBankDepositesUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/BankDeposites"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/BankDeposites"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Financial/BankDeposites` as const }
  return res
}

/**
 * @summary Bank Deposites
 * {@link /api/v11/Financial/BankDeposites}
 */
export async function financialBankDeposites(
  { data }: { data?: FinancialBankDepositesMutationRequest },
  config: Partial<RequestConfig<FinancialBankDepositesMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; BankDeposites?: { Id?: number | undefined; DepositeAt?: string | undefined; SapakNumber?: number | undefined; Amount?: number | undefined; BankNumber?: number | undefined; BranchNumber?: number | undefined; AccountNumber?: number | undefined; Currency?: number | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; FromCreateDate: string; ToCreateDate: string; } | null = financialBankDepositesMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").BankDepositesResp> = await request<
    FinancialBankDepositesMutationResponse,
    ResponseErrorConfig<FinancialBankDeposites400 | FinancialBankDeposites401>,
    FinancialBankDepositesMutationRequest
  >({ method: 'POST', url: getFinancialBankDepositesUrl().url.toString(), data: requestData, ...requestConfig })
  return financialBankDepositesMutationResponseSchema.parse(res.data)
}