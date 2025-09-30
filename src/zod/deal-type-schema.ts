import type { DealType } from '../types/DealType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const dealTypeSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DealTypeEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DealTypeEnum, unknown>> = z.enum([
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