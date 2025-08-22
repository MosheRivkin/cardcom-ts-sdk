import type { AdvancedDocumentDefinition } from "../types/AdvancedDocumentDefinition.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { configBoolSchema } from "./config-bool-schema.ts";
import { z } from "zod";

/**
 * @description Advanced document definition
 */
export const advancedDocumentDefinitionSchema = z.object({
      get IsAutoCreateUpdateAccount(){
                  return configBoolSchema.default("auto").describe("Is to Auto update or create an Account, default = auto, will automatically update from admin panel configuration \r\n במידה ולא מועבר יתבצע איתור לפי  מפתח זר ולאחר מכן לפי מזהה ייחודי אתר ואז לפי  EMAIL לקוח. (הפרמטר הראשון שנמצע בשרת מולצב ולא ממשיך לחפש עוד )\r\n").nullable().nullish()
                },
  "AccountForeignKey": z.string().max(50).describe("The account number on a Foreign system, use for transfer to 3-party account system ( hashavshevet, SAP )").nullable().nullish(),
  "SiteUniqueId": z.string().max(50).describe("Your system unique Id for this account").nullable().nullish(),
  "AccountID": z.int().describe("Unique account ID in cardcom system, account must exist in CardCom system").nullable().nullish(),
  "IsLoadInfoFromAccountID": z.boolean().default(false).describe("If AccountID is passed, CardCom system will update the document information ( To ,HP_TZ, Email ...) from existing accounts information").nullable().nullish()
      }).describe("Advanced document definition") as unknown as ToZod<AdvancedDocumentDefinition>