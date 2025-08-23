import type { Acquire } from '../types/Acquire.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const acquireSchema = z.enum([
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