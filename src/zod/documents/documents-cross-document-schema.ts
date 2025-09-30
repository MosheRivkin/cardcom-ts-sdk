import type {
  DocumentsCrossDocument200,
  DocumentsCrossDocument400,
  DocumentsCrossDocument401,
  DocumentsCrossDocumentMutationRequest,
  DocumentsCrossDocumentMutationResponse,
} from '../../types/DocumentsCrossDocument.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { crossDocumentRequestSchema } from '../cross-document-request-schema.ts'
import { crossDocumentResponseSchema } from '../cross-document-response-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const documentsCrossDocument200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CrossDocumentResponse>> = crossDocumentResponseSchema as unknown as ToZod<DocumentsCrossDocument200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCrossDocument400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCrossDocument400>

/**
 * @description Invalid username
 */
export const documentsCrossDocument401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCrossDocument401>

export const documentsCrossDocumentMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CrossDocumentRequest>>> = crossDocumentRequestSchema.nullable() as unknown as ToZod<DocumentsCrossDocumentMutationRequest>

export const documentsCrossDocumentMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CrossDocumentResponse>> = documentsCrossDocument200Schema as unknown as ToZod<DocumentsCrossDocumentMutationResponse>