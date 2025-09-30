import type { RecurringPaymentQuery } from '../types/RecurringPaymentQuery.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const recurringPaymentQuerySchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<RecurringPaymentQuery>, "passthrough"> = z.object({
  apiUserName: z.string().describe('API User Name').nullable().nullish(),
  apiPassword: z.string().describe('API Password').nullable().nullish(),
  AccountId: z.int().nullable().nullish(),
  RecurringId: z.int().nullable().nullish(),
}) as unknown as ToZod<RecurringPaymentQuery>