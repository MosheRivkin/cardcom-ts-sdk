import type { BankDepositesReq } from "../types/BankDepositesReq.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const bankDepositesReqSchema = z.object({
      "ApiName": z.string().min(1).describe("Api Name for authentication"),
  "ApiPassword": z.string().min(1).describe("Api password for authentication"),
  "FromCreateDate": z.string().min(1).describe("Form Create Date DDMMYYYY"),
  "ToCreateDate": z.string().min(1).describe("To Create Date DDMMYYYY")
      }) as unknown as ToZod<BankDepositesReq>