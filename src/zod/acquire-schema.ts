import type { Acquire } from '../types/Acquire.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const acquireSchema: z.ZodType<import("src/index").AcquireEnum, unknown, z.core.$ZodTypeInternals<import("src/index").AcquireEnum, unknown>> = z.enum([
  'Unknown',
  'Isracard',
  'CAL',
  'Diners',
  'AmericanExpress',
  'Laumicard',
  'CardCom',
  'PayPal',
  'Upay',
  'PayMe',
]) as unknown as ToZod<Acquire>