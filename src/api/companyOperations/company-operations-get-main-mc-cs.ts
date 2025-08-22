/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { CompanyOperationsGetMainMCCsQueryResponse, CompanyOperationsGetMainMCCsQueryParams, CompanyOperationsGetMainMCCs401 } from "../../types/CompanyOperationsGetMainMCCs.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { companyOperationsGetMainMcCsQueryResponseSchema } from "../../zod/companyOperations/company-operations-get-main-mc-cs-schema.ts";

function getCompanyOperationsGetMainMcCsUrl() {
  const res =
  {
    method: 'GET',
    url: `/api/v11/CompanyOperations/GetMainMCCs` as const
  }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get Main MCCs
 * {@link /api/v11/CompanyOperations/GetMainMCCs}
 */
export async function companyOperationsGetMainMcCs({ params }: { params: CompanyOperationsGetMainMCCsQueryParams }, config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config


  const res = await request<CompanyOperationsGetMainMCCsQueryResponse, ResponseErrorConfig<CompanyOperationsGetMainMCCs401>, unknown>({ method: "GET", url: getCompanyOperationsGetMainMcCsUrl().url.toString(), params, ...requestConfig })
  return companyOperationsGetMainMcCsQueryResponseSchema.parse(res.data)
}