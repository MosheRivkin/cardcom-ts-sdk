import type { ChangeStatusForHistoryRecurringToIrrevocableReqest } from '../types/ChangeStatusForHistoryRecurringToIrrevocableReqest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { recurringStatusSchema } from './recurring-status-schema.ts'
import { z } from 'zod'

export const changeStatusForHistoryRecurringToIrrevocableReqestSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<ChangeStatusForHistoryRecurringToIrrevocableReqest>, "passthrough"> = z.object({
  ApiUserName: z.string().describe('API User Name').nullable().nullish(),
  ApiPassword: z.string().describe('API Password').nullable().nullish(),
  RowID: z.int().nullable().nullish(),
  get ChangeTo() {
    return recurringStatusSchema.describe('ProcessId value to be updated').optional()
  },
}) as unknown as ToZod<ChangeStatusForHistoryRecurringToIrrevocableReqest>