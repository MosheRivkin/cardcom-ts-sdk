import type {
  DocumentsSendAllDocumentsToEmail200,
  DocumentsSendAllDocumentsToEmail400,
  DocumentsSendAllDocumentsToEmail401,
  DocumentsSendAllDocumentsToEmailMutationRequest,
  DocumentsSendAllDocumentsToEmailMutationResponse,
} from '../../types/DocumentsSendAllDocumentsToEmail.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { sendAllDocumentsToEmailRequestSchema } from '../send-all-documents-to-email-request-schema.ts'
import { sendAllDocumentsToEmailResponseSchema } from '../send-all-documents-to-email-response-schema.ts'

/**
 * @description successful request
 */
export const documentsSendAllDocumentsToEmail200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").SendAllDocumentsToEmailResponse>> = sendAllDocumentsToEmailResponseSchema.describe(
  'send pdf documents by email',
) as unknown as ToZod<DocumentsSendAllDocumentsToEmail200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsSendAllDocumentsToEmail400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsSendAllDocumentsToEmail400>

/**
 * @description Invalid username
 */
export const documentsSendAllDocumentsToEmail401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<DocumentsSendAllDocumentsToEmail401>

export const documentsSendAllDocumentsToEmailMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").SendAllDocumentsToEmailRequest>>> =
  sendAllDocumentsToEmailRequestSchema.nullable() as unknown as ToZod<DocumentsSendAllDocumentsToEmailMutationRequest>

export const documentsSendAllDocumentsToEmailMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").SendAllDocumentsToEmailResponse>> =
  documentsSendAllDocumentsToEmail200Schema as unknown as ToZod<DocumentsSendAllDocumentsToEmailMutationResponse>