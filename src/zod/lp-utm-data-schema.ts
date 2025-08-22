import type { LPUtmData } from "../types/LPUtmData.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const lpUtmDataSchema = z.object({
      "Source": z.string().nullable().nullish(),
  "Medium": z.string().nullable().nullish(),
  "Campaign": z.string().nullable().nullish(),
  "Content": z.string().nullable().nullish(),
  "Term": z.string().nullable().nullish()
      }) as unknown as ToZod<LPUtmData>