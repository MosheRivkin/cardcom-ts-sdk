import type { Banks } from "../types/Banks.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { banksBranchesSchema } from "./banks-branches-schema.ts";
import { z } from "zod";

export const banksSchema = z.object({
      "Bank_Code": z.int().optional(),
  "Bank_Name": z.string().nullable().nullish(),
  "IsMasavDigitalVerificationSupported": z.boolean().optional(),
  get BanksBranches(){
                  return z.array(banksBranchesSchema).nullable().nullish()
                }
      }) as unknown as ToZod<Banks>