import type { CreateDocumentRequest } from '../types/CreateDocumentRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { documentSchema } from './document-schema.ts'
import { rciExtChequeSchema } from './rci-ext-cheque-schema.ts'
import { rciExtCustomeSchema } from './rci-ext-custome-schema.ts'
import { rciExtDealNumSchema } from './rci-ext-deal-num-schema.ts'
import { z } from 'zod'

export const createDocumentRequestSchema = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  get Document() {
    return documentSchema.describe('The document to be created')
  },
  Cash: z.number().describe('The amount in cache').optional(),
  get Cheques() {
    return z.array(rciExtChequeSchema).describe('Array of cheques').nullable().nullish()
  },
  get CustomFields() {
    return z.array(rciExtCustomeSchema).describe('Array of cheques').nullable().nullish()
  },
  get DealNumbers() {
    return z.array(rciExtDealNumSchema).describe('Array of cheques').nullable().nullish()
  },
  IsSendSMS: z.boolean().describe('Array of cheques').optional(),
}) as unknown as ToZod<CreateDocumentRequest>