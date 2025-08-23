import type { DocumentTran } from '../types/DocumentTran.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { documentBaseSchema } from './document-base-schema.ts'
import { z } from 'zod'

export const documentTranSchema = documentBaseSchema.and(
  z.object({
    ManualNumber: z.string().describe('Manual numbering of the document. Special permission must be requested to use this parameter.').nullable().nullish(),
    DocumentDateDDMMYYYY: z.string().describe('Document production date.').nullable().nullish(),
    ValueDate: z.string().describe('Document value date (for journal entries)').nullable().nullish(),
    Languge: z.string().describe('document languge: "he" / "en" / "ru" / "ar" / "fr" / "it"').nullable().nullish(),
    IsSendSMS: z.boolean().default(true).describe('should the system send the document via SMS (only with the SMS module)').nullable().nullish(),
  }),
) as unknown as ToZod<DocumentTran>