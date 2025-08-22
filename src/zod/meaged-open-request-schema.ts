import type { MeagedOpenRequest } from "../types/MeagedOpenRequest.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { meagedCompanyInfoSchema } from "./meaged-company-info-schema.ts";
import { meagedKycInfoSchema } from "./meaged-kyc-info-schema.ts";
import { meagedPeopleInfoSchema } from "./meaged-people-info-schema.ts";
import { z } from "zod";

export const meagedOpenRequestSchema = z.object({
      "IsValidationOnly": z.boolean().describe("Do only validation for the recquest and do not open a new company! for Dev-test only"),
  "SupplierUserName": z.string().min(1).describe("Supplier User Name"),
  "Secret": z.string().min(1).describe("Supplier Secret"),
  get CompnayInfo(){
                  return meagedCompanyInfoSchema
                },
  get PeopleInfo(){
                  return z.array(meagedPeopleInfoSchema)
                },
  get KycInfo(){
                  return meagedKycInfoSchema
                }
      }) as unknown as ToZod<MeagedOpenRequest>