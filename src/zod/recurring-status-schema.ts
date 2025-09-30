import type { RecurringStatus } from '../types/RecurringStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const recurringStatusSchema: z.ZodType<import("src/index").RecurringStatusEnum, unknown, z.core.$ZodTypeInternals<import("src/index").RecurringStatusEnum, unknown>> = z.enum(['DebtForTracking', 'NoOtherPaymentMethod', 'BadDebt']) as unknown as ToZod<RecurringStatus>