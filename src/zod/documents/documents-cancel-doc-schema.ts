import type {
  DocumentsCancelDoc200,
  DocumentsCancelDoc400,
  DocumentsCancelDoc401,
  DocumentsCancelDocMutationRequest,
  DocumentsCancelDocMutationResponse,
} from '../../types/DocumentsCancelDoc.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { cancelDocRequestSchema } from '../cancel-doc-request-schema.ts'
import { cancelDocResponseSchema } from '../cancel-doc-response-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const documentsCancelDoc200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CancelDocResponse>, "passthrough"> = cancelDocResponseSchema as unknown as ToZod<DocumentsCancelDoc200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCancelDoc400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe('error information for non http status 200') as unknown as ToZod<DocumentsCancelDoc400>

/**
 * @description Invalid username
 */
export const documentsCancelDoc401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe('error information for non http status 200') as unknown as ToZod<DocumentsCancelDoc401>

export const documentsCancelDocMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CancelDocRequest>, "passthrough">> = cancelDocRequestSchema.nullable() as unknown as ToZod<DocumentsCancelDocMutationRequest>

export const documentsCancelDocMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CancelDocResponse>, "passthrough"> = documentsCancelDoc200Schema as unknown as ToZod<DocumentsCancelDocMutationResponse>