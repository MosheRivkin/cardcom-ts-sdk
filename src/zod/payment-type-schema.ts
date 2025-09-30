import type { PaymentType } from '../types/PaymentType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const paymentTypeSchema: z.ZodType<import("src/index").PaymentTypeEnum, unknown, z.core.$ZodTypeInternals<import("src/index").PaymentTypeEnum, unknown>> = z.enum([
  'Unknown',
  'Standard',
  'SpecialCredits',
  'ImmediateCharge',
  'CreditClub',
  'SuperCredit',
  'InstallmentCredit',
  'Payments',
  'ClubPatments',
]) as unknown as ToZod<PaymentType>