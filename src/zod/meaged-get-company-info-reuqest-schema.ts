import type { MeagedGetCompanyInfoReuqest } from '../types/MeagedGetCompanyInfoReuqest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const meagedGetCompanyInfoReuqestSchema = z.object({
  SupplierUserName: z.string().min(1).describe('Supplier User Name'),
  Secret: z.string().min(1).describe('Supplier Secret'),
  BusinessRegistrationNumber: z.int().nullable().nullish(),
  SapakNumber: z.int().nullable().nullish(),
}) as unknown as ToZod<MeagedGetCompanyInfoReuqest>