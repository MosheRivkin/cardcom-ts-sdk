import type { MeagedKycInfo } from "../types/MeagedKycInfo.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const meagedKycInfoSchema = z.object({
      "Mcc": z.int().describe("MCC_CardCom"),
  "MaxNumberOfPayments": z.number(),
  "ElectronicCommerceUrl": z.array(z.string()).nullable().nullish()
      }) as unknown as ToZod<MeagedKycInfo>