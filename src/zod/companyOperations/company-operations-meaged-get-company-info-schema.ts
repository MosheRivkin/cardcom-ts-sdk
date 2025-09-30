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
export const companyOperationsMeagedGetCompanyInfo200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").MeagedGetCompanyInfoResponse>, "passthrough"> = meagedGetCompanyInfoResponseSchema as unknown as ToZod<CompanyOperationsMeagedGetCompanyInfo200>

export const companyOperationsMeagedGetCompanyInfoMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").MeagedGetCompanyInfoReuqest>, "passthrough">> =
  meagedGetCompanyInfoReuqestSchema.nullable() as unknown as ToZod<CompanyOperationsMeagedGetCompanyInfoMutationRequest>

export const companyOperationsMeagedGetCompanyInfoMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").MeagedGetCompanyInfoResponse>, "passthrough"> =
  companyOperationsMeagedGetCompanyInfo200Schema as unknown as ToZod<CompanyOperationsMeagedGetCompanyInfoMutationResponse>