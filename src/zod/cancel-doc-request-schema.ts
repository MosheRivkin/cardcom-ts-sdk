import type { CancelDocRequest } from '../types/CancelDocRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const cancelDocRequestSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CancelDocRequest>, "passthrough"> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  DocumentNumber: z.int().describe('document number to cancel'),
  DocumentType: z.int().describe('document type to cancel'),
  IsCancelEmailSend: z.boolean().default(false).describe('Do not send the new cancell document client'),
  IsSendSMS: z.boolean().default(false).describe('Send sms with link to download document'),
  IsCreditCardCancelOnly: z.boolean().default(false).describe('Do not cancel document if credit card transaction use deposit to the acquire'),
}) as unknown as ToZod<CancelDocRequest>