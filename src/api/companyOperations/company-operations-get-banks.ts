/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetBanksQueryResponse,
  CompanyOperationsGetBanksQueryParams,
  CompanyOperationsGetBanks401,
} from '../../types/CompanyOperationsGetBanks.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetBanksQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-banks-schema.ts'

function getCompanyOperationsGetBanksUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanks"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanks"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanks` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get banks
 * {@link /api/v11/CompanyOperations/GetBanks}
 */
export async function companyOperationsGetBanks(
  { params }: { params: CompanyOperationsGetBanksQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
): Promise<{ Bank_Code?: number | undefined; Bank_Name?: string | null | undefined; IsMasavDigitalVerificationSupported?: boolean | undefined; BanksBranches?: { Bank_Code?: number | undefined; Branch_Code?: number | undefined; Branch_Name?: string | null | undefined; Branch_Address?: string | null | undefined; Banks?: { Bank_Code?: number | undefined; Bank_Name?: string | null | undefined; IsMasavDigitalVerificationSupported?: boolean | undefined; BanksBranches?: any[] | null | undefined; } | null | undefined; }[] | null | undefined; }[]> {
  const { client: request = fetch, ...requestConfig } = config

  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CompanyOperationsGetBanks200> = await request<CompanyOperationsGetBanksQueryResponse, ResponseErrorConfig<CompanyOperationsGetBanks401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetBanksUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetBanksQueryResponseSchema.parse(res.data)
}