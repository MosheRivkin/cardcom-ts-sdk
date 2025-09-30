/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsMeagedAddCompanyMutationRequest,
  CompanyOperationsMeagedAddCompanyMutationResponse,
} from '../../types/CompanyOperationsMeagedAddCompany.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  companyOperationsMeagedAddCompanyMutationResponseSchema,
  companyOperationsMeagedAddCompanyMutationRequestSchema,
} from '../../zod/companyOperations/company-operations-meaged-add-company-schema.ts'

function getCompanyOperationsMeagedAddCompanyUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/MeagedAddCompany"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/MeagedAddCompany"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/MeagedAddCompany` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary Add Company for Meaged
 * {@link /api/v11/CompanyOperations/MeagedAddCompany}
 */
export async function companyOperationsMeagedAddCompany(
  { data }: { data?: CompanyOperationsMeagedAddCompanyMutationRequest },
  config: Partial<RequestConfig<CompanyOperationsMeagedAddCompanyMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ SapakStatus?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").SapakStatus | undefined; SapakNumber?: number | null | undefined; IsDevError?: boolean | undefined; IsInputError?: boolean | undefined; ResponseCode?: number | undefined; Description?: string | null | undefined; InputErrorPropName?: string | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { IsValidationOnly: boolean; SupplierUserName: string; Secret: string; CompnayInfo: { BusinessRegistrationNumber: number; NameLegalCorporation: string; NameLegalCorporationEng: string; Email: string; PhoneNumber1: string; ZipCode: string; CityCode: number; StreetCode: number; AdvertisingSapakName?: string | null | undefined; AdvertisingSapakEngName?: string | null | undefined; PhoneNumber2?: string | null | undefined; HouseNumber?: string | null | undefined; }; PeopleInfo: { RelationType: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Relations; IdentityNumber: number; IdentityIssueDate_DDMMYYYY: string; IdentityExpireDate_DDMMYYYY: string; BirthDate_DDMMYYYY: string; Gender: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Gender2; FirstName: string; LastName: string; StreetCode: number; CityCode: number; PhoneNumber1: string; ResedentialCountryCode?: string | null | undefined; ZipCode?: string | null | undefined; HouseNumber?: string | null | undefined; PhoneNumber2?: string | null | undefined; Fax?: string | null | undefined; Email?: string | null | undefined; }[]; KycInfo: { Mcc: number; MaxNumberOfPayments: number; ElectronicCommerceUrl?: string[] | null | undefined; }; } | null = companyOperationsMeagedAddCompanyMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenMeagedResponse> = await request<CompanyOperationsMeagedAddCompanyMutationResponse, ResponseErrorConfig<Error>, CompanyOperationsMeagedAddCompanyMutationRequest>({
    method: 'POST',
    url: getCompanyOperationsMeagedAddCompanyUrl().url.toString(),
    data: requestData,
    ...requestConfig,
  })
  return companyOperationsMeagedAddCompanyMutationResponseSchema.parse(res.data)
}