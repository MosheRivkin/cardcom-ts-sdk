import type {
  DocumentsCrossDocument200,
  DocumentsCrossDocument400,
  DocumentsCrossDocument401,
  DocumentsCrossDocumentMutationRequest,
  DocumentsCrossDocumentMutationResponse,
} from '../../types/DocumentsCrossDocument.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { crossDocumentRequestSchema } from '../cross-document-request-schema.ts'
import { crossDocumentResponseSchema } from '../cross-document-response-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const documentsCrossDocument200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CrossDocumentResponse>, "passthrough"> = crossDocumentResponseSchema as unknown as ToZod<DocumentsCrossDocument200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCrossDocument400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCrossDocument400>

/**
 * @description Invalid username
 */
export const documentsCrossDocument401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCrossDocument401>

export const documentsCrossDocumentMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CrossDocumentRequest>, "passthrough">> = crossDocumentRequestSchema.nullable() as unknown as ToZod<DocumentsCrossDocumentMutationRequest>

export const documentsCrossDocumentMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CrossDocumentResponse>, "passthrough"> = documentsCrossDocument200Schema as unknown as ToZod<DocumentsCrossDocumentMutationResponse>