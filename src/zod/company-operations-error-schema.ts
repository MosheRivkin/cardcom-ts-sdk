import type { CompanyOperationsError } from '../types/CompanyOperationsError.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const companyOperationsErrorSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CompanyOperationsError>> = z.object({
  PropertyName: z.string().nullable().nullish(),
  Response: z.string().nullable().nullish(),
}) as unknown as ToZod<CompanyOperationsError>