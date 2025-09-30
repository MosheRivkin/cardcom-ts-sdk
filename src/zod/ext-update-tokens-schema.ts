import type { ExtUpdateTokens } from '../types/ExtUpdateTokens.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { exUpdatTokesProssesSchema } from './ex-updat-tokes-prosses-schema.ts'
import { z } from 'zod'

export const extUpdateTokensSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<ExtUpdateTokens>> = z.object({
  ID: z.int().describe('Prosses ID').optional(),
  get UpdatedTokenList() {
    return z.array(exUpdatTokesProssesSchema).describe('list of update tokens').nullable().nullish()
  },
}) as unknown as ToZod<ExtUpdateTokens>