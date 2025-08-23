import type { RecurringPaymentHistoryQuery } from '../types/RecurringPaymentHistoryQuery.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { filterBySchema } from './filter-by-schema.ts'
import { z } from 'zod'

export const recurringPaymentHistoryQuerySchema = z.object({
  apiUserName: z.string().describe('API User Name').nullable().nullish(),
  apiPassword: z.string().describe('API Password').nullable().nullish(),
  RowId: z.int().describe('RowId for history').nullable().nullish(),
  AccountId: z.int().describe('AccountId for history not req if you send RowId').nullable().nullish(),
  FromDate: z.string().describe('FromDate CreateDate , format  DDMMYYYY , req only if AccountId is sent').nullable().nullish(),
  ToDate: z.string().describe('ToDate CreateDate , format DDMMYYYY , req only if AccountId is sent').nullable().nullish(),
  get FilterBy() {
    return filterBySchema.default('CreateDate').describe('type of operation to perform').nullable().nullish()
  },
}) as unknown as ToZod<RecurringPaymentHistoryQuery>