/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetBanksBranchesQueryResponse,
  CompanyOperationsGetBanksBranchesQueryParams,
  CompanyOperationsGetBanksBranches401,
} from '../../types/CompanyOperationsGetBanksBranches.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetBanksBranchesQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-banks-branches-schema.ts'

function getCompanyOperationsGetBanksBranchesUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanksBranches"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanksBranches"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanksBranches` as const }
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
): Promise<{ Bank_Code?: number | undefined; Branch_Code?: number | undefined; Branch_Name?: string | null | undefined; Branch_Address?: string | null | undefined; Banks?: { Bank_Code?: number | undefined; Bank_Name?: string | null | undefined; IsMasavDigitalVerificationSupported?: boolean | undefined; BanksBranches?: { Bank_Code?: number | undefined; Branch_Code?: number | undefined; Branch_Name?: string | null | undefined; Branch_Address?: string | null | undefined; Banks?: any | null | undefined; }[] | null | undefined; } | null | undefined; }[]> {
  const { client: request = fetch, ...requestConfig } = config

  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").CompanyOperationsGetBanksBranches200> = await request<CompanyOperationsGetBanksBranchesQueryResponse, ResponseErrorConfig<CompanyOperationsGetBanksBranches401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetBanksBranchesUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetBanksBranchesQueryResponseSchema.parse(res.data)
}