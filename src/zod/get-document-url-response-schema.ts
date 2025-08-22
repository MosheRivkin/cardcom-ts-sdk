import type { GetDocumentUrlResponse } from "../types/GetDocumentUrlResponse.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const getDocumentUrlResponseSchema = z.object({
      "ResponseCode": z.int().describe("if equel zero then success , else , a develper error see Description for more info ").optional(),
  "Description": z.string().max(250).describe("Description of the ResponseCode").nullable().nullish(),
  "DocUrl": z.string().describe("URL to the requested document").nullable().nullish()
      }) as unknown as ToZod<GetDocumentUrlResponse>