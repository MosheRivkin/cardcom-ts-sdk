import type { MeagedGetCompanyInfoReuqest } from '../types/MeagedGetCompanyInfoReuqest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const meagedGetCompanyInfoReuqestSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<MeagedGetCompanyInfoReuqest>, "passthrough"> = z.object({
  SupplierUserName: z.string().min(1).describe('Supplier User Name'),
  Secret: z.string().min(1).describe('Supplier Secret'),
  BusinessRegistrationNumber: z.int().nullable().nullish(),
  SapakNumber: z.int().nullable().nullish(),
}) as unknown as ToZod<MeagedGetCompanyInfoReuqest>