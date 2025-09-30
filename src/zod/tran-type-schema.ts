import type { TranType } from '../types/TranType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const tranTypeSchema: z.ZodType<import("src/index").TranTypeEnum, unknown, z.core.$ZodTypeInternals<import("src/index").TranTypeEnum, unknown>> = z.enum([
  'Info_0',
  'Charge_1',
  'Prika_2',
  'Meulachet_3',
  'Cashback_6',
  'Cash_7',
  'DirectDebite_11',
  'ManualCashDisbursement_12',
  'Yitra_30',
  'Refund_53',
  'Recharge_55',
]) as unknown as ToZod<TranType>