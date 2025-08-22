import type { OpenMeagedResponse } from "../types/OpenMeagedResponse.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { sapakStatusSchema } from "./sapak-status-schema.ts";
import { z } from "zod";

export const openMeagedResponseSchema = z.object({
      get SapakStatus(){
                  return sapakStatusSchema.describe("SapakNumber stats").optional()
                },
  "SapakNumber": z.int().describe("Sapak Number for compoany").nullable().nullish(),
  "IsDevError": z.boolean().describe("Developer Error See InputErrorDescription for information, do not show this to the end user").optional(),
  "IsInputError": z.boolean().describe("Is one of the input values is invalid").optional(),
  "ResponseCode": z.int().describe("if equel zero then success , else , a develper error see Description for more info ").optional(),
  "Description": z.string().describe("Description of the ResponseCode").nullable().nullish(),
  "InputErrorPropName": z.string().describe("for the developer to know what porp is invalid ").nullable().nullish()
      }) as unknown as ToZod<OpenMeagedResponse>