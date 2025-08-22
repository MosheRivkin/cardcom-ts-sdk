/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { CompanyOperationsAddDocumentToCompanyMutationRequest, CompanyOperationsAddDocumentToCompanyMutationResponse, CompanyOperationsAddDocumentToCompany400, CompanyOperationsAddDocumentToCompany401 } from "../../types/CompanyOperationsAddDocumentToCompany.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { companyOperationsAddDocumentToCompanyMutationResponseSchema, companyOperationsAddDocumentToCompanyMutationRequestSchema } from "../../zod/companyOperations/company-operations-add-document-to-company-schema.ts";

function getCompanyOperationsAddDocumentToCompanyUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/CompanyOperations/AddDocumentToCompany` as const
  }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Add document to company
 * {@link /api/v11/CompanyOperations/AddDocumentToCompany}
 */
export async function companyOperationsAddDocumentToCompany({ data }: { data?: CompanyOperationsAddDocumentToCompanyMutationRequest }, config: Partial<RequestConfig<CompanyOperationsAddDocumentToCompanyMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = companyOperationsAddDocumentToCompanyMutationRequestSchema.parse(data)
  const res = await request<CompanyOperationsAddDocumentToCompanyMutationResponse, ResponseErrorConfig<CompanyOperationsAddDocumentToCompany400 | CompanyOperationsAddDocumentToCompany401>, CompanyOperationsAddDocumentToCompanyMutationRequest>({ method: "POST", url: getCompanyOperationsAddDocumentToCompanyUrl().url.toString(), data: requestData, ...requestConfig })
  return companyOperationsAddDocumentToCompanyMutationResponseSchema.parse(res.data)
}