import type { ExUpdatTokesProsses } from '../types/ExUpdatTokesProsses.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const exUpdatTokesProssesSchema = z.object({
  ID: z.int().optional(),
  ExcelRow: z.int().describe('The row number of this work').optional(),
  OriginalStatus: z.string().describe('information only , original code of the acquiring').nullable().nullish(),
  Status: z
    .int()
    .describe('1- New card number , 2- the Card was canceled, there is no new Card Number , 3 - charge back , 4 - card owner ask to cancel deal')
    .optional(),
  Token: z.string().nullable().nullish(),
  NewExpirationDateYYYY: z.string().nullable().nullish(),
  NewExpirationDateMM: z.string().nullable().nullish(),
  Last4Digits: z.string().nullable().nullish(),
}) as unknown as ToZod<ExUpdatTokesProsses>