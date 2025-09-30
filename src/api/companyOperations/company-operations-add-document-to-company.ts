/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsAddDocumentToCompanyMutationRequest,
  CompanyOperationsAddDocumentToCompanyMutationResponse,
  CompanyOperationsAddDocumentToCompany400,
  CompanyOperationsAddDocumentToCompany401,
} from '../../types/CompanyOperationsAddDocumentToCompany.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  companyOperationsAddDocumentToCompanyMutationResponseSchema,
  companyOperationsAddDocumentToCompanyMutationRequestSchema,
} from '../../zod/companyOperations/company-operations-add-document-to-company-schema.ts'

function getCompanyOperationsAddDocumentToCompanyUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/AddDocumentToCompany"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/AddDocumentToCompany"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/AddDocumentToCompany` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Add document to company
 * {@link /api/v11/CompanyOperations/AddDocumentToCompany}
 */
export async function companyOperationsAddDocumentToCompany(
  { data }: { data?: CompanyOperationsAddDocumentToCompanyMutationRequest },
  config: Partial<RequestConfig<CompanyOperationsAddDocumentToCompanyMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; CompanyInternalID?: string | null | undefined; TerminalNumber?: number | null | undefined; APIUserName?: string | null | undefined; APISecret?: string | null | undefined; ModulesList?: string[] | null | undefined; UpayAPIKey?: string | null | undefined; ShowErrorToEndUser?: boolean | undefined; CardComSapakNumber?: string | null | undefined; CompanyNumber?: number | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { SupplierUserName: string; SupplierPassword: string; Secret: string; CompanyInternalID: string; DocumentsInfo?: { DocType: import("/home/m/dev/git/cardcom-ts-sdk/src/index").DocType; Name: string; Content: string; }[] | null | undefined; } | null = companyOperationsAddDocumentToCompanyMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenNewCompanyResponse> = await request<
    CompanyOperationsAddDocumentToCompanyMutationResponse,
    ResponseErrorConfig<CompanyOperationsAddDocumentToCompany400 | CompanyOperationsAddDocumentToCompany401>,
    CompanyOperationsAddDocumentToCompanyMutationRequest
  >({ method: 'POST', url: getCompanyOperationsAddDocumentToCompanyUrl().url.toString(), data: requestData, ...requestConfig })
  return companyOperationsAddDocumentToCompanyMutationResponseSchema.parse(res.data)
}