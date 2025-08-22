import type { ModuleType } from "../types/ModuleType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const moduleTypeSchema = z.object({
      "ModuleID": z.string().nullable().nullish()
      }) as unknown as ToZod<ModuleType>