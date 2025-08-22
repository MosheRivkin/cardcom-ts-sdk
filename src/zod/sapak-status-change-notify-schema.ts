import type { SapakStatusChangeNotify } from "../types/SapakStatusChangeNotify.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { sapakStatusSchema } from "./sapak-status-schema.ts";
import { z } from "zod";

export const sapakStatusChangeNotifySchema = z.object({
      "SapakNumber": z.int().optional(),
  get SapakStatus(){
                  return sapakStatusSchema.optional()
                }
      }) as unknown as ToZod<SapakStatusChangeNotify>