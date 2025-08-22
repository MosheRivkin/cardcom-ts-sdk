import type { CreateLowProfileResponse } from "../types/CreateLowProfileResponse.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

/**
 * @description Response for creating low profile page
 */
export const createLowProfileResponseSchema = z.object({
      "ResponseCode": z.int().describe("if equel zero then success , else , a develper error see Description for more info ").optional(),
  "Description": z.string().max(250).describe("Description of the ResponseCode").nullable().nullish(),
  "LowProfileId": z.string().describe("The unique Id of the low profile page - save it in you data base!").nullable().nullish(),
  "Url": z.string().describe("the url you need to redirect the card holder").nullable().nullish(),
  "UrlToPayPal": z.string().describe("the url you need to redirect the card holder").nullable().nullish(),
  "UrlToBit": z.string().describe("the url you need to redirect the card holder").nullable().nullish()
      }).describe("Response for creating low profile page") as unknown as ToZod<CreateLowProfileResponse>