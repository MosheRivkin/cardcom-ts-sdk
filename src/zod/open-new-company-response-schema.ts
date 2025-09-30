import type { OpenNewCompanyResponse } from '../types/OpenNewCompanyResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { openNewCompanyRespSchema } from './open-new-company-resp-schema.ts'
import { z } from 'zod'

export const openNewCompanyResponseSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<OpenNewCompanyResponse>> = openNewCompanyRespSchema.and(
  z.object({
    CardComSapakNumber: z.string().nullable().nullish(),
    CompanyNumber: z.int().optional(),
  }),
) as unknown as ToZod<OpenNewCompanyResponse>