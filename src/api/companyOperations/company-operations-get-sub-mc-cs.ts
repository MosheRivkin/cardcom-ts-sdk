/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsGetSubMCCsQueryResponse,
  CompanyOperationsGetSubMCCsQueryParams,
  CompanyOperationsGetSubMCCs401,
} from '../../types/CompanyOperationsGetSubMCCs.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { companyOperationsGetSubMcCsQueryResponseSchema } from '../../zod/companyOperations/company-operations-get-sub-mc-cs-schema.ts'

function getCompanyOperationsGetSubMcCsUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetSubMCCs"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/GetSubMCCs"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/GetSubMCCs` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get Sub MCCs
 * {@link /api/v11/CompanyOperations/GetSubMCCs}
 */
export async function companyOperationsGetSubMcCs(
  { params }: { params: CompanyOperationsGetSubMCCsQueryParams },
  config: Partial<RequestConfig> & { client?: typeof fetch } = {},
): Promise<{ MCC_CardCom?: number | undefined; MCC_Code_Local?: number | undefined; MCC_Code_Master?: number | undefined; MCC_Code_Visa?: number | undefined; MCC_Description?: string | null | undefined; MCC_Code_MainClassification?: number | undefined; MCC_Description_MainClassification?: string | null | undefined; PriorApprovalForRecruitingABusinessRiskManagement?: boolean | undefined; RecruitmentRouteType?: number | undefined; ATouristMissingDocument?: boolean | undefined; MissingDocumentStatusDefault?: boolean | undefined; RiskLevel?: number | undefined; }[]> {
  const { client: request = fetch, ...requestConfig } = config

  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").CompanyOperationsGetSubMCCs200> = await request<CompanyOperationsGetSubMCCsQueryResponse, ResponseErrorConfig<CompanyOperationsGetSubMCCs401>, unknown>({
    method: 'GET',
    url: getCompanyOperationsGetSubMcCsUrl().url.toString(),
    params,
    ...requestConfig,
  })
  return companyOperationsGetSubMcCsQueryResponseSchema.parse(res.data)
}