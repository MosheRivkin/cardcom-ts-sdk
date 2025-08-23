import type { Data } from '../types/Data.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { reportCodesSchema } from './report-codes-schema.ts'
import { z } from 'zod'

export const dataSchema = z.object({
  MuhlafID: z.int().optional(),
  EntryType: z.int().optional(),
  EntryNumber: z.int().optional(),
  SapakNumber: z.int().optional(),
  OldCreditNumber: z.string().nullable().nullish(),
  NewCreditNumber: z.string().nullable().nullish(),
  get ReportCode() {
    return reportCodesSchema
      .describe(
        'Report Code ,1 - New Credit Card, 2 - Card was canceled – no new number issued, 3 - CHB, 4 - Card was canceled – no new number issued , 5 - Card Unfreeze',
      )
      .optional()
  },
  NewCardExpirationDate: z.string().nullable().nullish(),
}) as unknown as ToZod<Data>