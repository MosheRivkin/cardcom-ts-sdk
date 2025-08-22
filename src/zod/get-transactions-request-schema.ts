import type { GetTransactionsRequest } from "../types/GetTransactionsRequest.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const getTransactionsRequestSchema = z.object({
      "ApiName": z.string().min(1).describe("Api Name for authentication"),
  "ApiPassword": z.string().min(1).describe("Api password for authentication"),
  "TerminalNumber": z.int().describe("Terminal number at Cardcom"),
  "FromDate": z.date().min(1).describe("Date for a search from a specific date"),
  "ToDate": z.date().min(1).describe("Date for searching up to a specific date")
      }) as unknown as ToZod<GetTransactionsRequest>