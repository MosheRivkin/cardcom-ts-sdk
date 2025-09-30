import type { DocumentInfo } from '../types/DocumentInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { documentTypeSchema } from './document-type-schema.ts'
import { z } from 'zod'

/**
 * @description Document create response
 */
export const documentInfoSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<DocumentInfo>> = z
  .object({
    ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
    Description: z.string().describe('Description of the ResponseCode').optional(),
    get DocumentType() {
      return documentTypeSchema.describe('document type that was created').optional()
    },
    DocumentNumber: z.int().describe('Uniqe number for this DocumentType').optional(),
    AccountId: z.int().describe('Unique account Id in cardcom system').optional(),
    ForeignAccountNumber: z.string().describe('Customer accounting number, only if a customer card was created or consolidated.').nullable().nullish(),
    SiteUniqueId: z.string().describe('Unique identifier for the site - informative parameter.').nullable().nullish(),
    DocumentUrl: z.string().describe('Url to a document (invoice, etc), if created').nullable().nullish(),
  })
  .describe('Document create response') as unknown as ToZod<DocumentInfo>