import type {
  CompanyOperationsGetBanksBranchesQueryParams,
  CompanyOperationsGetBanksBranches200,
  CompanyOperationsGetBanksBranches401,
  CompanyOperationsGetBanksBranchesQueryResponse,
} from '../../types/CompanyOperationsGetBanksBranches.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { banksBranchesSchema } from '../banks-branches-schema.ts'
import { z } from 'zod'

export const companyOperationsGetBanksBranchesQueryParamsSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CompanyOperationsGetBanksBranchesQueryParams>, "passthrough"> = z.object({
  SupplierUserName: z.string().nullable(),
  secret: z.string().nullable(),
  bankNumber: z.coerce.number().int(),
}) as unknown as ToZod<CompanyOperationsGetBanksBranchesQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetBanksBranches200Schema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").BanksBranches>, "passthrough">> = z.array(banksBranchesSchema) as unknown as ToZod<CompanyOperationsGetBanksBranches200>

/**
 * @description Invalid username
 */
export const companyOperationsGetBanksBranches401Schema: z.ZodString = z.string() as unknown as ToZod<CompanyOperationsGetBanksBranches401>

export const companyOperationsGetBanksBranchesQueryResponseSchema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").BanksBranches>, "passthrough">> =
  companyOperationsGetBanksBranches200Schema as unknown as ToZod<CompanyOperationsGetBanksBranchesQueryResponse>