import type { CreateTaxInvoiceRequest } from '../types/CreateTaxInvoiceRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { invExtHeadLinesSchema } from './inv-ext-head-lines-schema.ts'
import { invExtHeadSchema } from './inv-ext-head-schema.ts'
import { rciExtChequeSchema } from './rci-ext-cheque-schema.ts'
import { rciExtCustomeSchema } from './rci-ext-custome-schema.ts'
import { rciExtDealNumSchema } from './rci-ext-deal-num-schema.ts'
import { z } from 'zod'

export const createTaxInvoiceRequestSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CreateTaxInvoiceRequest>> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  InvoiceType: z.int().describe('Invoice Type').optional(),
  get InvoiceHead() {
    return invExtHeadSchema.describe('Invoice header').nullable().nullish()
  },
  get InvoiceLines() {
    return z.array(invExtHeadLinesSchema).describe('Invoice lines').nullable().nullish()
  },
  Cash: z.number().describe('Amount in cash').optional(),
  get CustomLines() {
    return z.array(rciExtCustomeSchema).describe('Custom line').nullable().nullish()
  },
  get Cheques() {
    return z.array(rciExtChequeSchema).describe('Cheques').nullable().nullish()
  },
  get DealNumbers() {
    return z.array(rciExtDealNumSchema).describe('Deal Numbers').nullable().nullish()
  },
}) as unknown as ToZod<CreateTaxInvoiceRequest>