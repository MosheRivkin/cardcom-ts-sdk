import type { ExtGetRecurringPaymentRsp } from '../types/ExtGetRecurringPaymentRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { extRecurringPaymentsRspSchema } from './ext-recurring-payments-rsp-schema.ts'
import { z } from 'zod'

/**
 * @description List of Recurring Payments
 */
export const extGetRecurringPaymentRspSchema = z
  .object({
    ResponseCode: z.int().describe('Response code , if it equel to zero than all is OK , else error see Description').optional(),
    Description: z.string().describe('Description for errors only').nullable().nullish(),
    get UpdateList() {
      return z.array(extRecurringPaymentsRspSchema.describe('Recurring Payment info')).describe('Recurring Payments list').nullable().nullish()
    },
  })
  .describe('List of Recurring Payments') as unknown as ToZod<ExtGetRecurringPaymentRsp>