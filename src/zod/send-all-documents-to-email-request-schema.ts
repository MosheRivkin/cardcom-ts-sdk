import type { SendAllDocumentsToEmailRequest } from "../types/SendAllDocumentsToEmailRequest.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const sendAllDocumentsToEmailRequestSchema = z.object({
      "ApiName": z.string().min(1).describe("Api Name for authentication"),
  "ApiPassword": z.string().min(1).describe("Api password for authentication"),
  "EmailTo": z.string().min(1).describe("Send to email"),
  "FromDateYYYYMMDD": z.string().min(1).describe("from date"),
  "ToDateYYYYMMDD": z.string().min(1).describe("to date"),
  "SendEmptyEmail": z.boolean().default(false).describe("send empty email if no documents were found").nullable().nullish(),
  "ForceOriginal": z.boolean().default(false).describe("add original on the document").nullable().nullish(),
  "DocumentType": z.int().default(-1).describe("document type to send , null or -1 for all , else the doc id").nullable().nullish()
      }) as unknown as ToZod<SendAllDocumentsToEmailRequest>