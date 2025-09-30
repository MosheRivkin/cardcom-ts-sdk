/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetCompanyStatusQueryResponse,
  CompanyOperationsGetCompanyStatusQueryParams,
  CompanyOperationsGetCompanyStatus400,
  CompanyOperationsGetCompanyStatus401,
} from '../../types/CompanyOperationsGetCompanyStatus.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetCompanyStatusQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-company-status-schema.ts'

function getCompanyOperationsGetCompanyStatusUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCompanyStatus"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCompanyStatus"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCompanyStatus` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get company status - Validate KYC info
 * {@link /api/v11/CompanyOperations/GetCompanyStatus}
 */
export async function companyOperationsGetCompanyStatus(
  { params }: { params: CompanyOperationsGetCompanyStatusQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; DocumentsErrorResults?: { PropertyName?: string | null | undefined; Response?: string | null | undefined; }[] | null | undefined; KycErrorResults?: { PropertyName?: string | null | undefined; Response?: string | null | undefined; }[] | null | undefined; CompanyErrorResults?: { PropertyName?: string | null | undefined; Response?: string | null | undefined; }[] | null | undefined; UserErrorResults?: { PropertyName?: string | null | undefined; Response?: string | null | undefined; }[] | null | undefined; CompanyInternalID?: string | null | undefined; TerminalNumber?: number | null | undefined; APIUserName?: string | null | undefined; APISecret?: string | null | undefined; ModulesList?: string[] | null | undefined; Request?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").HttpStatusCode | undefined; IsDone?: boolean | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RSContent> = await request<
    CompanyOperationsGetCompanyStatusQueryResponse,
    ResponseErrorConfig<CompanyOperationsGetCompanyStatus400 | CompanyOperationsGetCompanyStatus401>,
    unknown
  >({ method: 'GET', url: getCompanyOperationsGetCompanyStatusUrl().url.toString(), params, ...requestConfig })
  return companyOperationsGetCompanyStatusQueryResponseSchema.parse(res.data)
}