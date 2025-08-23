import type { RciExtCheque } from '../types/RciExtCheque.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const rciExtChequeSchema = z.object({
  ChequeNumber: z.string().nullable().nullish(),
  BankNumber: z.int().optional(),
  SnifNumber: z.int().optional(),
  AccountNumber: z.string().nullable().nullish(),
  DateCheque: z.date().optional(),
  Sum: z.number().optional(),
}) as unknown as ToZod<RciExtCheque>