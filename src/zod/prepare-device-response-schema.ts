import type { PrepareDeviceResponse } from "../types/PrepareDeviceResponse.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const prepareDeviceResponseSchema = z.object({
      "ResponseCode": z.int().describe("Response code: 0 - Success / Other values - Error (See Description for more info)").optional(),
  "Description": z.string().describe("Description for ResponseCode").nullable().nullish(),
  "TPN": z.string().describe("TPN for TapOnPhone device").nullable().nullish(),
  "MerchantCode": z.string().describe("Merchant Code for TapOnPhone device").nullable().nullish(),
  "SapakMutavNumber": z.string().describe("Sapak Mutav Number of the sent Cardcom terminal number in the rquest").nullable().nullish(),
  "RavMutavTerminalNumber": z.int().describe("Cardcom Rav Mutav terminal number of the sent Cardcom terminal number in the rquest").nullable().nullish()
      }) as unknown as ToZod<PrepareDeviceResponse>