/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { CompanyOperationsGetCountriesQueryResponse, CompanyOperationsGetCountriesQueryParams, CompanyOperationsGetCountries401 } from "../../types/CompanyOperationsGetCountries.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { companyOperationsGetCountriesQueryResponseSchema } from "../../zod/companyOperations/company-operations-get-countries-schema.ts";

function getCompanyOperationsGetCountriesUrl() {
  const res =
  {
    method: 'GET',
    url: `/api/v11/CompanyOperations/GetCountries` as const
  }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Get countries
 * {@link /api/v11/CompanyOperations/GetCountries}
 */
export async function companyOperationsGetCountries({ params }: { params: CompanyOperationsGetCountriesQueryParams }, config: Partial<RequestConfig> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config


  const res = await request<CompanyOperationsGetCountriesQueryResponse, ResponseErrorConfig<CompanyOperationsGetCountries401>, unknown>({ method: "GET", url: getCompanyOperationsGetCountriesUrl().url.toString(), params, ...requestConfig })
  return companyOperationsGetCountriesQueryResponseSchema.parse(res.data)
}