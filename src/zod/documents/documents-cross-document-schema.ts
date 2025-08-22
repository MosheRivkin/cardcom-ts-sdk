import type { DocumentsCrossDocument200, DocumentsCrossDocument400, DocumentsCrossDocument401, DocumentsCrossDocumentMutationRequest, DocumentsCrossDocumentMutationResponse } from "../../types/DocumentsCrossDocument.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { crossDocumentRequestSchema } from "../cross-document-request-schema.ts";
import { crossDocumentResponseSchema } from "../cross-document-response-schema.ts";
import { errorInfoSchema } from "../error-info-schema.ts";

/**
 * @description successful request
 */
export const documentsCrossDocument200Schema = crossDocumentResponseSchema as unknown as ToZod<DocumentsCrossDocument200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const documentsCrossDocument400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsCrossDocument400>

/**
 * @description Invalid username
 */
export const documentsCrossDocument401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<DocumentsCrossDocument401>

export const documentsCrossDocumentMutationRequestSchema = crossDocumentRequestSchema.nullable() as unknown as ToZod<DocumentsCrossDocumentMutationRequest>

export const documentsCrossDocumentMutationResponseSchema = documentsCrossDocument200Schema as unknown as ToZod<DocumentsCrossDocumentMutationResponse>