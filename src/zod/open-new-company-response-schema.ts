import type { OpenNewCompanyResponse } from '../types/OpenNewCompanyResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { openNewCompanyRespSchema } from './open-new-company-resp-schema.ts'
import { z } from 'zod'

export const openNewCompanyResponseSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<OpenNewCompanyResponse>, "passthrough"> = openNewCompanyRespSchema.and(
  z.object({
    CardComSapakNumber: z.string().nullable().nullish(),
    CompanyNumber: z.int().optional(),
  }),
) as unknown as ToZod<OpenNewCompanyResponse>