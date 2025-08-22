import type { ListTransactionsReq } from "../types/ListTransactionsReq.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { listTransactionStatusSchema } from "./list-transaction-status-schema.ts";
import { z } from "zod";

/**
 * @description list transactions request
 */
export const listTransactionsReqSchema = z.object({
      "ApiName": z.string().min(1).describe("Api Name for authentication"),
  "ApiPassword": z.string().min(1).describe("Api password for authentication"),
  "FromDate": z.string().min(1).describe("Form Date DDMMYYYY"),
  "ToDate": z.string().min(1).describe("To Date DDMMYYYY"),
  get TranStatus(){
                  return listTransactionStatusSchema.default("Success").describe("status of transaction to return , default - Completed")
                },
  "Page": z.int().describe("page from 1"),
  "Page_size": z.int().describe("page size 10 - 2000"),
  "LimitForTerminal": z.int().describe("return only transaction for a specific terminal in this company").nullable().nullish()
      }).describe("list transactions request") as unknown as ToZod<ListTransactionsReq>