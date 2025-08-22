import type { CreditCardTransactionsResp } from "../types/CreditCardTransactionsResp.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { creditCardTransactionSchema } from "./credit-card-transaction-schema.ts";
import { z } from "zod";

export const creditCardTransactionsRespSchema = z.object({
      "ResponseCode": z.int().describe("if equel zero then success , else , a develper error see Description for more info ").optional(),
  "Description": z.string().max(250).describe("Description of the ResponseCode").nullable().nullish(),
  "Page": z.int().describe("page, from 1"),
  "Page_size": z.int().describe("page size, 10 - 2000"),
  get CreditCardTransactions(){
                  return z.array(creditCardTransactionSchema).nullable().nullish()
                }
      }) as unknown as ToZod<CreditCardTransactionsResp>