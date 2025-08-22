/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { CompanyOperationsGetBanksQueryResponse, CompanyOperationsGetBanksQueryParams, CompanyOperationsGetBanks401 } from "../../types/CompanyOperationsGetBanks.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { companyOperationsGetBanksQueryResponseSchema } from "../../zod/companyOperations/company-operations-get-banks-schema.ts";

function getCompanyOperationsGetBanksUrl() {
  const res =
  {
    method: 'GET',
    url: `/api/v11/CompanyOperations/GetBanks` as const
  }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get banks
 * {@link /api/v11/CompanyOperations/GetBanks}
 */
export async function companyOperationsGetBanks({ params }: { params: CompanyOperationsGetBanksQueryParams }, config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config


  const res = await request<CompanyOperationsGetBanksQueryResponse, ResponseErrorConfig<CompanyOperationsGetBanks401>, unknown>({ method: "GET", url: getCompanyOperationsGetBanksUrl().url.toString(), params, ...requestConfig })
  return companyOperationsGetBanksQueryResponseSchema.parse(res.data)
}