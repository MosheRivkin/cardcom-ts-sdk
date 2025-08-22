import type { DocumentsCreateDocumentUrl200, DocumentsCreateDocumentUrl400, DocumentsCreateDocumentUrl401, DocumentsCreateDocumentUrlMutationRequest, DocumentsCreateDocumentUrlMutationResponse } from "../../types/DocumentsCreateDocumentUrl.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { errorInfoSchema } from "../error-info-schema.ts";
import { getDocumentRequestSchema } from "../get-document-request-schema.ts";
import { getDocumentUrlResponseSchema } from "../get-document-url-response-schema.ts";

/**
 * @description successful request
 */
export const documentsCreateDocumentUrl200Schema = getDocumentUrlResponseSchema as unknown as ToZod<DocumentsCreateDocumentUrl200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCreateDocumentUrl400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsCreateDocumentUrl400>

/**
 * @description Invalid username
 */
export const documentsCreateDocumentUrl401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsCreateDocumentUrl401>

export const documentsCreateDocumentUrlMutationRequestSchema = getDocumentRequestSchema.nullable() as unknown as ToZod<DocumentsCreateDocumentUrlMutationRequest>

export const documentsCreateDocumentUrlMutationResponseSchema = documentsCreateDocumentUrl200Schema as unknown as ToZod<DocumentsCreateDocumentUrlMutationResponse>