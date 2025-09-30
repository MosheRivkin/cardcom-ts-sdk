import type { RciExtCheque } from '../types/RciExtCheque.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const rciExtChequeSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<RciExtCheque>> = z.object({
  ChequeNumber: z.string().nullable().nullish(),
  BankNumber: z.int().optional(),
  SnifNumber: z.int().optional(),
  AccountNumber: z.string().nullable().nullish(),
  DateCheque: z.date().optional(),
  Sum: z.number().optional(),
}) as unknown as ToZod<RciExtCheque>