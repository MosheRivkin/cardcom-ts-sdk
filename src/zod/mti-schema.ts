import type { MTI } from '../types/MTI.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const mtiSchema = z.enum([
  'Request_100',
  'RequestRepeat_101',
  'ResponseToRequest_110',
  'RequestCancel_400',
  'ResponseToRequestCancel_410',
  'RequestReversal',
  'ResponseToRequestReversal_430',
  'CreditCardCharge_500',
  'CreditRefund_520',
  'Info_540',
  'RequestNetwork_800',
  'ResponseNetwork_810',
]) as unknown as ToZod<MTI>