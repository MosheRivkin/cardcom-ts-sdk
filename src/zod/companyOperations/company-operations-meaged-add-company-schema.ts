import type {
  CompanyOperationsMeagedAddCompany200,
  CompanyOperationsMeagedAddCompanyMutationRequest,
  CompanyOperationsMeagedAddCompanyMutationResponse,
} from '../../types/CompanyOperationsMeagedAddCompany.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { meagedOpenRequestSchema } from '../meaged-open-request-schema.ts'
import { openMeagedResponseSchema } from '../open-meaged-response-schema.ts'

/**
 * @description successful request
 */
export const companyOperationsMeagedAddCompany200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenMeagedResponse>, "passthrough"> = openMeagedResponseSchema as unknown as ToZod<CompanyOperationsMeagedAddCompany200>

export const companyOperationsMeagedAddCompanyMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").MeagedOpenRequest>, "passthrough">> =
  meagedOpenRequestSchema.nullable() as unknown as ToZod<CompanyOperationsMeagedAddCompanyMutationRequest>

export const companyOperationsMeagedAddCompanyMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").OpenMeagedResponse>, "passthrough"> =
  companyOperationsMeagedAddCompany200Schema as unknown as ToZod<CompanyOperationsMeagedAddCompanyMutationResponse>