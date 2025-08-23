import type { DocumentsInfo } from '../types/DocumentsInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { docTypeSchema } from './doc-type-schema.ts'
import { z } from 'zod'

export const documentsInfoSchema = z.object({
  get DocType() {
    return docTypeSchema.describe('Document Type')
  },
  Name: z.string().min(1).describe('Name'),
  Content: z.string().min(1).describe('Content'),
}) as unknown as ToZod<DocumentsInfo>