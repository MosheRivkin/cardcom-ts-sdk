/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetBanksBranchesQueryResponse,
  CompanyOperationsGetBanksBranchesQueryParams,
  CompanyOperationsGetBanksBranches401,
} from '../../types/CompanyOperationsGetBanksBranches.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetBanksBranchesQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-banks-branches-schema.ts'

function getCompanyOperationsGetBanksBranchesUrl() {
  const res = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanksBranches` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get banks branches
 * {@link /api/v11/CompanyOperations/GetBanksBranches}
 */
export async function companyOperationsGetBanksBranches(
  { params }: { params: CompanyOperationsGetBanksBranchesQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const res = await request<CompanyOperationsGetBanksBranchesQueryResponse, ResponseErrorConfig<CompanyOperationsGetBanksBranches401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetBanksBranchesUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetBanksBranchesQueryResponseSchema.parse(res.data)
}