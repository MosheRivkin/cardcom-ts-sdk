import type { ExtProductRsp } from "../types/ExtProductRsp.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const extProductRspSchema = z.object({
      "ProductId": z.string().nullable().nullish(),
  "Quantity": z.number().optional()
      }) as unknown as ToZod<ExtProductRsp>