import type { SlikaInvoicesResponse } from '../types/SlikaInvoicesResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { slikaInvoicesResultSchema } from './slika-invoices-result-schema.ts'
import { z } from 'zod'

export const slikaInvoicesResponseSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<SlikaInvoicesResponse>, "passthrough"> = z.object({
  ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
  Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
  TotalCount: z.int().describe('Total count of documents').optional(),
  get Invoices() {
    return z.array(slikaInvoicesResultSchema).describe('Query result').nullable().nullish()
  },
}) as unknown as ToZod<SlikaInvoicesResponse>