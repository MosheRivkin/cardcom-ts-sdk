import type { ExtGetRecurringPaymentHistoryRsp } from "../types/ExtGetRecurringPaymentHistoryRsp.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { recurringPaymentHistorySchema } from "./recurring-payment-history-schema.ts";
import { z } from "zod";

/**
 * @description List of Recurring Payments
 */
export const extGetRecurringPaymentHistoryRspSchema = z.object({
      "ResponseCode": z.int().describe("Response code , if it equel to zero than all is OK , else error see Description").optional(),
  "Description": z.string().describe("Description for errors only").nullable().nullish(),
  get RecurringPaymentHistory(){
                  return z.array(recurringPaymentHistorySchema).nullable().nullish()
                }
      }).describe("List of Recurring Payments") as unknown as ToZod<ExtGetRecurringPaymentHistoryRsp>