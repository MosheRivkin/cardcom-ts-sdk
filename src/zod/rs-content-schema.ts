import type { RSContent } from "../types/RSContent.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { companyOperationsErrorSchema } from "./company-operations-error-schema.ts";
import { errorInfoSchema } from "./error-info-schema.ts";
import { httpStatusCodeSchema } from "./http-status-code-schema.ts";
import { z } from "zod";

export const rsContentSchema = errorInfoSchema.and(z.object({
      get DocumentsErrorResults(){
                  return z.array(companyOperationsErrorSchema).nullable().nullish()
                },
  get KycErrorResults(){
                  return z.array(companyOperationsErrorSchema).nullable().nullish()
                },
  get CompanyErrorResults(){
                  return z.array(companyOperationsErrorSchema).nullable().nullish()
                },
  get UserErrorResults(){
                  return z.array(companyOperationsErrorSchema).nullable().nullish()
                },
  "CompanyInternalID": z.string().nullable().nullish(),
  "TerminalNumber": z.int().nullable().nullish(),
  "APIUserName": z.string().nullable().nullish(),
  "APISecret": z.string().nullable().nullish(),
  "ModulesList": z.array(z.string()).nullable().nullish(),
  get Request(){
                  return httpStatusCodeSchema.optional()
                },
  "IsDone": z.boolean().optional()
      })) as unknown as ToZod<RSContent>