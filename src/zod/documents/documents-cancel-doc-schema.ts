import type {
  DocumentsCancelDoc200,
  DocumentsCancelDoc400,
  DocumentsCancelDoc401,
  DocumentsCancelDocMutationRequest,
  DocumentsCancelDocMutationResponse,
} from '../../types/DocumentsCancelDoc.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { cancelDocRequestSchema } from '../cancel-doc-request-schema.ts'
import { cancelDocResponseSchema } from '../cancel-doc-response-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const documentsCancelDoc200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CancelDocResponse>> = cancelDocResponseSchema as unknown as ToZod<DocumentsCancelDoc200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCancelDoc400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe('error information for non http status 200') as unknown as ToZod<DocumentsCancelDoc400>

/**
 * @description Invalid username
 */
export const documentsCancelDoc401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe('error information for non http status 200') as unknown as ToZod<DocumentsCancelDoc401>

export const documentsCancelDocMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CancelDocRequest>>> = cancelDocRequestSchema.nullable() as unknown as ToZod<DocumentsCancelDocMutationRequest>

export const documentsCancelDocMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CancelDocResponse>> = documentsCancelDoc200Schema as unknown as ToZod<DocumentsCancelDocMutationResponse>