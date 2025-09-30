import type { GetDocumentRequest } from '../types/GetDocumentRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { documentToCreateSchema } from './document-to-create-schema.ts'
import { z } from 'zod'

export const getDocumentRequestSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<GetDocumentRequest>, "passthrough"> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  get DocumentType() {
    return documentToCreateSchema.describe('Document Type. Note "Auto" type is not acceptable in this method.')
  },
  DocumentNumber: z.int().describe('Document Number'),
}) as unknown as ToZod<GetDocumentRequest>