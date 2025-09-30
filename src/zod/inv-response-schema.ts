import type { InvResponse } from '../types/InvResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const invResponseSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<InvResponse>, "passthrough"> = z.object({
  ResponseCode: z.int().optional(),
  Description: z.string().nullable().nullish(),
  InvoiceNumber: z.int().optional(),
  InvoiceType: z.int().optional(),
  AccountID: z.int().nullable().nullish(),
  CardSaved: z.boolean().optional(),
  EmailSendWasQueued: z.boolean().nullable().nullish(),
  InvoiceLink: z.string().nullable().nullish(),
  TaxAuthorityAllocationNumber: z.string().nullable().nullish(),
  PaymentLink: z.string().nullable().nullish(),
}) as unknown as ToZod<InvResponse>