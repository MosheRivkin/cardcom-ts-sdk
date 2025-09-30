import type {
  DocumentsCreateDocument200,
  DocumentsCreateDocument400,
  DocumentsCreateDocument401,
  DocumentsCreateDocumentMutationRequest,
  DocumentsCreateDocumentMutationResponse,
} from '../../types/DocumentsCreateDocument.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { createDocumentRequestSchema } from '../create-document-request-schema.ts'
import { documentInfoSchema } from '../document-info-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const documentsCreateDocument200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").DocumentInfo>> = documentInfoSchema.describe('Document create response') as unknown as ToZod<DocumentsCreateDocument200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCreateDocument400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCreateDocument400>

/**
 * @description Invalid username
 */
export const documentsCreateDocument401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCreateDocument401>

export const documentsCreateDocumentMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CreateDocumentRequest>>> = createDocumentRequestSchema.nullable() as unknown as ToZod<DocumentsCreateDocumentMutationRequest>

export const documentsCreateDocumentMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").DocumentInfo>> = documentsCreateDocument200Schema as unknown as ToZod<DocumentsCreateDocumentMutationResponse>