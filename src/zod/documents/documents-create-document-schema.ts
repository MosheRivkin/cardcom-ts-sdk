import type { DocumentsCreateDocument200, DocumentsCreateDocument400, DocumentsCreateDocument401, DocumentsCreateDocumentMutationRequest, DocumentsCreateDocumentMutationResponse } from "../../types/DocumentsCreateDocument.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { createDocumentRequestSchema } from "../create-document-request-schema.ts";
import { documentInfoSchema } from "../document-info-schema.ts";
import { errorInfoSchema } from "../error-info-schema.ts";

/**
 * @description successful request
 */
export const documentsCreateDocument200Schema = documentInfoSchema.describe("Document create response") as unknown as ToZod<DocumentsCreateDocument200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCreateDocument400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsCreateDocument400>

/**
 * @description Invalid username
 */
export const documentsCreateDocument401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsCreateDocument401>

export const documentsCreateDocumentMutationRequestSchema = createDocumentRequestSchema.nullable() as unknown as ToZod<DocumentsCreateDocumentMutationRequest>

export const documentsCreateDocumentMutationResponseSchema = documentsCreateDocument200Schema as unknown as ToZod<DocumentsCreateDocumentMutationResponse>