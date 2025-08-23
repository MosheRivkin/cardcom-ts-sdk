import type { RecurringStatus } from '../types/RecurringStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const recurringStatusSchema = z.enum(['DebtForTracking', 'NoOtherPaymentMethod', 'BadDebt']) as unknown as ToZod<RecurringStatus>