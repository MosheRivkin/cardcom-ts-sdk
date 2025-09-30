/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetMainMCCsQueryResponse,
  CompanyOperationsGetMainMCCsQueryParams,
  CompanyOperationsGetMainMCCs401,
} from '../../types/CompanyOperationsGetMainMCCs.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetMainMcCsQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-main-mc-cs-schema.ts'

function getCompanyOperationsGetMainMcCsUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetMainMCCs"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetMainMCCs"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetMainMCCs` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get Main MCCs
 * {@link /api/v11/CompanyOperations/GetMainMCCs}
 */
export async function companyOperationsGetMainMcCs(
  { params }: { params: CompanyOperationsGetMainMCCsQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
): Promise<{ MCC_Code_MainClassification?: number | undefined; MCC_Description_MainClassification?: string | null | undefined; }[]> {
  const { client: request = fetch, ...requestConfig } = config

  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CompanyOperationsGetMainMCCs200> = await request<CompanyOperationsGetMainMCCsQueryResponse, ResponseErrorConfig<CompanyOperationsGetMainMCCs401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetMainMcCsUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetMainMcCsQueryResponseSchema.parse(res.data)
}