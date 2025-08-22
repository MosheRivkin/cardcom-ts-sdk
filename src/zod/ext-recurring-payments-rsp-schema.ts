import type { ExtRecurringPaymentsRsp } from "../types/ExtRecurringPaymentsRsp.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { extFlexibleItemRspSchema } from "./ext-flexible-item-rsp-schema.ts";
import { extProductRspSchema } from "./ext-product-rsp-schema.ts";
import { extTimeIntervalRspSchema } from "./ext-time-interval-rsp-schema.ts";
import { z } from "zod";

/**
 * @description Recurring Payment info
 */
export const extRecurringPaymentsRspSchema = z.object({
      "RecurringId": z.int().describe("Cardcom for Recurring Id").nullable().nullish(),
  "InternalDecription": z.string().describe("private description - not shown to card holder").nullable().nullish(),
  "NextDateToBill": z.date().describe("next billing date").optional(),
  "TotalNumOfBills": z.int().describe("total num of charges to do").optional(),
  "NumOfPaymentsAlreadyCharged": z.int().describe("num of payments already charged").nullable().nullish(),
  "IsActive": z.boolean().describe("is recurring is active and will be chanrge").nullable().nullish(),
  get ChargeIntervals(){
                  return extTimeIntervalRspSchema.describe("the chanrge intervals, will be add to NextDateToBill (day, month , year) ").nullable().nullish()
                },
  "FinalDebitCoinId": z.int().describe("currency to charge , 1- NIS , 2 - USD , else iso currency table").optional(),
  "IsDocumentCreate": z.boolean().describe("crate a document for the charge").nullable().nullish(),
  "DocTypeToCreate": z.int().describe("the doc type that will be created , 0 for auto").nullable().nullish(),
  "Comment": z.string().describe("private comment - not shown to card holder").nullable().nullish(),
  "IsPrintNumOfPayments": z.boolean().describe("add num of payments on the item descriptin in the document, add : (TotalNumOfBills of NumOfPaymentsAlreadyCharged )").optional(),
  "IsPrintBillMonth": z.boolean().describe("add the month of the 'NextDateToBill' to the item description").optional(),
  "DepartmentId": z.int().describe("department id - for reports").optional(),
  "UserId": z.int().describe("use id - that create the recurring").optional(),
  "ReturnValue": z.string().describe("custom value used for api ").nullable().nullish(),
  "ChargeInTerminal": z.int().describe("termianl number to charge ").nullable().nullish(),
  get FlexItem(){
                  return extFlexibleItemRspSchema.describe("amount to charge, only if IsByProducts==false ").nullable().nullish()
                },
  "IsByProducts": z.boolean().describe("if true then ProdList is used to calculate cost , if flase then FlexItem is used to calculate cost ").optional(),
  get ProdList(){
                  return z.array(extProductRspSchema).describe("list of prod to change , and amount will be taken for the system products table, only if IsByProducts==true ").nullable().nullish()
                }
      }).describe("Recurring Payment info") as unknown as ToZod<ExtRecurringPaymentsRsp>