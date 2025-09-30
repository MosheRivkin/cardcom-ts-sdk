import type {
  DocumentsGetReport200,
  DocumentsGetReport400,
  DocumentsGetReport401,
  DocumentsGetReportMutationRequest,
  DocumentsGetReportMutationResponse,
} from '../../types/DocumentsGetReport.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { documentSearchRequestSchema } from '../document-search-request-schema.ts'
import { documentSearchResponseSchema } from '../document-search-response-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const documentsGetReport200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").DocumentSearchResponse>> = documentSearchResponseSchema as unknown as ToZod<DocumentsGetReport200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsGetReport400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe('error information for non http status 200') as unknown as ToZod<DocumentsGetReport400>

/**
 * @description Invalid username
 */
export const documentsGetReport401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe('error information for non http status 200') as unknown as ToZod<DocumentsGetReport401>

export const documentsGetReportMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").DocumentSearchRequest>>> = documentSearchRequestSchema.nullable() as unknown as ToZod<DocumentsGetReportMutationRequest>

export const documentsGetReportMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").DocumentSearchResponse>> = documentsGetReport200Schema as unknown as ToZod<DocumentsGetReportMutationResponse>