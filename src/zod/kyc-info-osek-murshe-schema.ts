import type { KycInfoOsekMurshe } from "../types/KycInfoOsekMurshe.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const kycInfoOsekMursheSchema = z.object({
      "IsOwnerAddressDifferentFromBusinessAddress": z.boolean().describe("האם כתובת המגורים של הבעלים שונה מכתובת העסק").nullable().nullish(),
  "BusinessOwnerHomeNumber": z.string().max(10).describe("מספר הבית בכתובת המגורים של בעל בית העסק").nullable().nullish(),
  "BusinessOwnerEntranceNumber": z.string().max(10).describe("כניסה בכתובת המגורים של בעל בית העסק").nullable().nullish(),
  "BusinessOwnerStreetCode": z.int().describe("קוד רחוב בכתובת המגורים של בעל בית העסק").nullable().nullish(),
  "BusinessOwnerCityCode": z.int().describe("קוד עיר בכתובת המגורים של בעל בית העסק").nullable().nullish(),
  "BusinessOwnerZipCode": z.string().max(250).describe("מיקוד בכתובת המגורים של בעל בית העסק").nullable().nullish(),
  "MotherMaidenName": z.string().max(50).describe("שם משפחה של האם לפני הנישואין").nullable().nullish()
      }) as unknown as ToZod<KycInfoOsekMurshe>