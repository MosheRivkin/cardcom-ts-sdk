import type { RciExtCustome } from "../types/RciExtCustome.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const rciExtCustomeSchema = z.object({
      "TransactionID": z.int().optional(),
  "TranDate": z.date().optional(),
  "Description": z.string().nullable().nullish(),
  "asmacta": z.string().nullable().nullish(),
  "Sum": z.number().optional()
      }) as unknown as ToZod<RciExtCustome>