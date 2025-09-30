import type { RciExtCustome } from '../types/RciExtCustome.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const rciExtCustomeSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<RciExtCustome>> = z.object({
  TransactionID: z.int().optional(),
  TranDate: z.date().optional(),
  Description: z.string().nullable().nullish(),
  asmacta: z.string().nullable().nullish(),
  Sum: z.number().optional(),
}) as unknown as ToZod<RciExtCustome>