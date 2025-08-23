import type {
  CompanyOperationsMeagedGetCompanyInfo200,
  CompanyOperationsMeagedGetCompanyInfoMutationRequest,
  CompanyOperationsMeagedGetCompanyInfoMutationResponse,
} from '../../types/CompanyOperationsMeagedGetCompanyInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { meagedGetCompanyInfoResponseSchema } from '../meaged-get-company-info-response-schema.ts'
import { meagedGetCompanyInfoReuqestSchema } from '../meaged-get-company-info-reuqest-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsMeagedGetCompanyInfo200Schema = meagedGetCompanyInfoResponseSchema as unknown as ToZod<CompanyOperationsMeagedGetCompanyInfo200>

export const companyOperationsMeagedGetCompanyInfoMutationRequestSchema =
  meagedGetCompanyInfoReuqestSchema.nullable() as unknown as ToZod<CompanyOperationsMeagedGetCompanyInfoMutationRequest>

export const companyOperationsMeagedGetCompanyInfoMutationResponseSchema =
  companyOperationsMeagedGetCompanyInfo200Schema as unknown as ToZod<CompanyOperationsMeagedGetCompanyInfoMutationResponse>