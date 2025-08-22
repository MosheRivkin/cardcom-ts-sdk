import type { SuspendedInfo } from "../types/SuspendedInfo.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

/**
 * @description SuspendedDeal result
 */
export const suspendedInfoSchema = z.object({
      "SuspendedDealId": z.int().describe("Suspended deal Id, can be charge via API or the admin panel ").optional()
      }).describe("SuspendedDeal result") as unknown as ToZod<SuspendedInfo>