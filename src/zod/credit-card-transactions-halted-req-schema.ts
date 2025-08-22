import type { CreditCardTransactionsHaltedReq } from "../types/CreditCardTransactionsHaltedReq.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const creditCardTransactionsHaltedReqSchema = z.object({
      "ApiName": z.string().min(1).describe("Api Name for authentication"),
  "ApiPassword": z.string().min(1).describe("Api password for authentication")
      }) as unknown as ToZod<CreditCardTransactionsHaltedReq>