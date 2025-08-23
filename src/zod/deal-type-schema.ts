import type { DealType } from '../types/DealType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const dealTypeSchema = z.enum([
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