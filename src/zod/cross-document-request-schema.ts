import type { CrossDocumentRequest } from "../types/CrossDocumentRequest.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { crossDocumentToListSchema } from "./cross-document-to-list-schema.ts";
import { z } from "zod";

/**
 * @description the From document number
 */
export const crossDocumentRequestSchema = z.object({
      "ApiName": z.string().describe("Api Name for authentication").optional(),
  "ApiPassword": z.string().describe("Api password for authentication").optional(),
  "FromDocNumber": z.int().describe("the From document number").optional(),
  "FromDocType": z.int().describe("the From document number").optional(),
  get ToDocumentsList(){
                  return z.array(crossDocumentToListSchema.describe("sum to corss , null for full document price")).describe("the From document number").optional()
                }
      }).describe("the From document number") as unknown as ToZod<CrossDocumentRequest>