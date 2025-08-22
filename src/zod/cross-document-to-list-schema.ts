import type { CrossDocumentToList } from "../types/CrossDocumentToList.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

/**
 * @description sum to corss , null for full document price
 */
export const crossDocumentToListSchema = z.object({
      "DocNumber": z.int().optional(),
  "DocType": z.int().optional(),
  "PartialSumToCorss": z.number().describe("sum to corss , null for full document price").nullable().nullish()
      }).describe("sum to corss , null for full document price") as unknown as ToZod<CrossDocumentToList>