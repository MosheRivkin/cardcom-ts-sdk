import type { UIDefinition } from "../types/UIDefinition.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { customFieldSchema } from "./custom-field-schema.ts";
import { googlePayBtnDesignSchema } from "./google-pay-btn-design-schema.ts";
import { z } from "zod";

/**
 * @description UI Definition for the created page
 */
export const uiDefinitionSchema = z.object({
      "IsHideCardOwnerName": z.boolean().default(false).describe("Hide card Owner name").nullable().nullish(),
  "CardOwnerNameValue": z.string().max(50).default("").describe("Fill the value of CardOwnerName input box").nullable().nullish(),
  "CardOwnerIdValue": z.string().default("").describe("Card onwer Id aka teudat zeut").nullable().nullish(),
  "IsHideCardOwnerPhone": z.boolean().default(false).describe("Hide card owner phone number").nullable().nullish(),
  "CardOwnerPhoneValue": z.string().max(50).describe("Fill the value of CardOwnerPhone input box").nullable().nullish(),
  "IsCardOwnerPhoneRequired": z.boolean().default(true).describe("Is CardOwnerPhone input box required").nullable().nullish(),
  "CardOwnerEmailValue": z.string().max(50).describe("fill the value of card owner email").nullable().nullish(),
  "IsHideCardOwnerEmail": z.boolean().default(false).describe("Hide card owner email").nullable().nullish(),
  "IsCardOwnerEmailRequired": z.boolean().default(true).describe("Is card owner email input box required").nullable().nullish(),
  "IsHideCardOwnerIdentityNumber": z.boolean().default(false).describe("Hide card ownder identity number").nullable().nullish(),
  "IsHideCVV": z.boolean().default(false).describe("Hide card number CVV").nullable().nullish(),
  "CSSUrl": z.string().max(250).describe("Full URL address of CSS file. it will be injected to page, required CardCom premition (http(s)://site.com/file.css)").nullable().nullish(),
  get CustomFields(){
                  return z.array(customFieldSchema.describe("Custom field")).describe("Fill the value of CustomFields input box by Field Id").nullable().nullish()
                },
  get GooglePayBtnDesign(){
                  return googlePayBtnDesignSchema.describe("Set how the Google Pay button will appear").nullable().nullish()
                }
      }).describe("UI Definition for the created page") as unknown as ToZod<UIDefinition>