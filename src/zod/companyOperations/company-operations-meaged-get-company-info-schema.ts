import type {
  CompanyOperationsMeagedGetCompanyInfo200,
  CompanyOperationsMeagedGetCompanyInfoMutationRequest,
  CompanyOperationsMeagedGetCompanyInfoMutationResponse,
} from '../../types/CompanyOperationsMeagedGetCompanyInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { meagedGetCompanyInfoResponseSchema } from '../meaged-get-company-info-response-schema.ts'
import { meagedGetCompanyInfoReuqestSchema } from '../meaged-get-company-info-reuqest-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsMeagedGetCompanyInfo200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").MeagedGetCompanyInfoResponse>> = meagedGetCompanyInfoResponseSchema as unknown as ToZod<CompanyOperationsMeagedGetCompanyInfo200>

export const companyOperationsMeagedGetCompanyInfoMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").MeagedGetCompanyInfoReuqest>>> =
  meagedGetCompanyInfoReuqestSchema.nullable() as unknown as ToZod<CompanyOperationsMeagedGetCompanyInfoMutationRequest>

export const companyOperationsMeagedGetCompanyInfoMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").MeagedGetCompanyInfoResponse>> =
  companyOperationsMeagedGetCompanyInfo200Schema as unknown as ToZod<CompanyOperationsMeagedGetCompanyInfoMutationResponse>