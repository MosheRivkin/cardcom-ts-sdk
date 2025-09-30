import type { RecurringStatus } from '../types/RecurringStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const recurringStatusSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RecurringStatusEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RecurringStatusEnum, unknown>> = z.enum(['DebtForTracking', 'NoOtherPaymentMethod', 'BadDebt']) as unknown as ToZod<RecurringStatus>