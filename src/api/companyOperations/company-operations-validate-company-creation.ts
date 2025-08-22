/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { CompanyOperationsValidateCompanyCreationMutationRequest, CompanyOperationsValidateCompanyCreationMutationResponse, CompanyOperationsValidateCompanyCreation400, CompanyOperationsValidateCompanyCreation401 } from "../../types/CompanyOperationsValidateCompanyCreation.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { companyOperationsValidateCompanyCreationMutationResponseSchema, companyOperationsValidateCompanyCreationMutationRequestSchema } from "../../zod/companyOperations/company-operations-validate-company-creation-schema.ts";

function getCompanyOperationsValidateCompanyCreationUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/CompanyOperations/ValidateCompanyCreation` as const
  }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Validate company fields
 * {@link /api/v11/CompanyOperations/ValidateCompanyCreation}
 */
export async function companyOperationsValidateCompanyCreation({ data }: { data?: CompanyOperationsValidateCompanyCreationMutationRequest }, config: Partial<RequestConfig<CompanyOperationsValidateCompanyCreationMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = companyOperationsValidateCompanyCreationMutationRequestSchema.parse(data)
  const res = await request<CompanyOperationsValidateCompanyCreationMutationResponse, ResponseErrorConfig<CompanyOperationsValidateCompanyCreation400 | CompanyOperationsValidateCompanyCreation401>, CompanyOperationsValidateCompanyCreationMutationRequest>({ method: "POST", url: getCompanyOperationsValidateCompanyCreationUrl().url.toString(), data: requestData, ...requestConfig })
  return companyOperationsValidateCompanyCreationMutationResponseSchema.parse(res.data)
}