import type { DocumentsGetReport200, DocumentsGetReport400, DocumentsGetReport401, DocumentsGetReportMutationRequest, DocumentsGetReportMutationResponse } from "../../types/DocumentsGetReport.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { documentSearchRequestSchema } from "../document-search-request-schema.ts";
import { documentSearchResponseSchema } from "../document-search-response-schema.ts";
import { errorInfoSchema } from "../error-info-schema.ts";

/**
 * @description successful request
 */
export const documentsGetReport200Schema = documentSearchResponseSchema as unknown as ToZod<DocumentsGetReport200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsGetReport400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsGetReport400>

/**
 * @description Invalid username
 */
export const documentsGetReport401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsGetReport401>

export const documentsGetReportMutationRequestSchema = documentSearchRequestSchema.nullable() as unknown as ToZod<DocumentsGetReportMutationRequest>

export const documentsGetReportMutationResponseSchema = documentsGetReport200Schema as unknown as ToZod<DocumentsGetReportMutationResponse>