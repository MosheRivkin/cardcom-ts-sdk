import type {
  DocumentsCreateDocument200,
  DocumentsCreateDocument400,
  DocumentsCreateDocument401,
  DocumentsCreateDocumentMutationRequest,
  DocumentsCreateDocumentMutationResponse,
} from '../../types/DocumentsCreateDocument.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { createDocumentRequestSchema } from '../create-document-request-schema.ts'
import { documentInfoSchema } from '../document-info-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const documentsCreateDocument200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DocumentInfo>, "passthrough"> = documentInfoSchema.describe('Document create response') as unknown as ToZod<DocumentsCreateDocument200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCreateDocument400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCreateDocument400>

/**
 * @description Invalid username
 */
export const documentsCreateDocument401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCreateDocument401>

export const documentsCreateDocumentMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CreateDocumentRequest>, "passthrough">> = createDocumentRequestSchema.nullable() as unknown as ToZod<DocumentsCreateDocumentMutationRequest>

export const documentsCreateDocumentMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DocumentInfo>, "passthrough"> = documentsCreateDocument200Schema as unknown as ToZod<DocumentsCreateDocumentMutationResponse>