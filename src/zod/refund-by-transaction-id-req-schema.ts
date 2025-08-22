import type { RefundByTransactionIdReq } from "../types/RefundByTransactionIdReq.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { customFieldSchema } from "./custom-field-schema.ts";
import { z } from "zod";

export const refundByTransactionIdReqSchema = z.object({
      "ApiName": z.string().min(1).describe("Api Name for authentication"),
  "ApiPassword": z.string().min(1).describe("Api password for authentication"),
  "TransactionId": z.int().describe("The Id for refund"),
  "ExternalDealId": z.string().describe("External deal Id (parameter shopify)").nullable().nullish(),
  "ExternalMerchantId": z.string().describe("External Merchant Id (parameter shopify)").nullable().nullish(),
  "PartialSum": z.number().describe("Partial Sum for refund").nullable().nullish(),
  "CancelOnly": z.boolean().default(false).describe("Cancellation only, before deposit of the transaction").nullable().nullish(),
  "SapakMutav": z.string().describe("override original transaction SapalMutav value").nullable().nullish(),
  "AllowMultipleRefunds": z.boolean().default(false).describe("Allow Multiple Refunds on the same transaction").nullable().nullish(),
  get CustomFields(){
                  return z.array(customFieldSchema.describe("Custom field")).describe("Custom Fields").nullable().nullish()
                }
      }) as unknown as ToZod<RefundByTransactionIdReq>