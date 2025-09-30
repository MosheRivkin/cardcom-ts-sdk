import type { DealType } from '../types/DealType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const dealTypeSchema: z.ZodType<import("src/index").DealTypeEnum, unknown, z.core.$ZodTypeInternals<import("src/index").DealTypeEnum, unknown>> = z.enum([
  'Information',
  'Debit',
  'Discharge',
  'ForcedCharge',
  'CashBack',
  'CashTransaction',
  'Recurring',
  'BalanceQuery',
  'Cancel',
  'Refund',
  'Recharge',
]) as unknown as ToZod<DealType>