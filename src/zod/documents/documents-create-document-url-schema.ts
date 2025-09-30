import type {
  DocumentsCreateDocumentUrl200,
  DocumentsCreateDocumentUrl400,
  DocumentsCreateDocumentUrl401,
  DocumentsCreateDocumentUrlMutationRequest,
  DocumentsCreateDocumentUrlMutationResponse,
} from '../../types/DocumentsCreateDocumentUrl.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { getDocumentRequestSchema } from '../get-document-request-schema.ts'
import { getDocumentUrlResponseSchema } from '../get-document-url-response-schema.ts'

/**
 * @description successful request
 */
export const documentsCreateDocumentUrl200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetDocumentUrlResponse>, "passthrough"> = getDocumentUrlResponseSchema as unknown as ToZod<DocumentsCreateDocumentUrl200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCreateDocumentUrl400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCreateDocumentUrl400>

/**
 * @description Invalid username
 */
export const documentsCreateDocumentUrl401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsCreateDocumentUrl401>

export const documentsCreateDocumentUrlMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetDocumentRequest>, "passthrough">> =
  getDocumentRequestSchema.nullable() as unknown as ToZod<DocumentsCreateDocumentUrlMutationRequest>

export const documentsCreateDocumentUrlMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetDocumentUrlResponse>, "passthrough"> =
  documentsCreateDocumentUrl200Schema as unknown as ToZod<DocumentsCreateDocumentUrlMutationResponse>