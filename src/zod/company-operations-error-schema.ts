import type { CompanyOperationsError } from '../types/CompanyOperationsError.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const companyOperationsErrorSchema = z.object({
  PropertyName: z.string().nullable().nullish(),
  Response: z.string().nullable().nullish(),
}) as unknown as ToZod<CompanyOperationsError>