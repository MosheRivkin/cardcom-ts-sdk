import type {
  CompanyOperationsMeagedAddCompany200,
  CompanyOperationsMeagedAddCompanyMutationRequest,
  CompanyOperationsMeagedAddCompanyMutationResponse,
} from '../../types/CompanyOperationsMeagedAddCompany.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { meagedOpenRequestSchema } from '../meaged-open-request-schema.ts'
import { openMeagedResponseSchema } from '../open-meaged-response-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsMeagedAddCompany200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").OpenMeagedResponse>> = openMeagedResponseSchema as unknown as ToZod<CompanyOperationsMeagedAddCompany200>

export const companyOperationsMeagedAddCompanyMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").MeagedOpenRequest>>> =
  meagedOpenRequestSchema.nullable() as unknown as ToZod<CompanyOperationsMeagedAddCompanyMutationRequest>

export const companyOperationsMeagedAddCompanyMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").OpenMeagedResponse>> =
  companyOperationsMeagedAddCompany200Schema as unknown as ToZod<CompanyOperationsMeagedAddCompanyMutationResponse>