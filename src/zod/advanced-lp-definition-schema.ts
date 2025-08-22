import type { AdvancedLPDefinition } from "../types/AdvancedLPDefinition.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { jValidateTypeSchema } from "./j-validate-type-schema.ts";
import { threeDSecureStateSchema } from "./three-d-secure-state-schema.ts";
import { virtualTerminalParamsSchema } from "./virtual-terminal-params-schema.ts";
import { z } from "zod";

export const advancedLpDefinitionSchema = z.object({
      get VirtualTerminal(){
                  return virtualTerminalParamsSchema.describe("virtual terminal mode propertis").nullable().nullish()
                },
  get JValidateType(){
                  return jValidateTypeSchema.default(5).describe("Type of transaction for credit card in operation : CreateTokenOnly or Suspended deal, can be J2 (simple card validation) or J5 (authoriz)").nullable().nullish()
                },
  "IsAVSEnable": z.boolean().default(false).describe("Is AVS enabled validation enabled").nullable().nullish(),
  "SapakMutav": z.string().max(15).describe("SapakMutav number, for meaged terminals").nullable().nullish(),
  "CreditType": z.int().default(1).describe("Type of credit for the card, for israel cards only.  6 - israel credit for multiple payments").nullable().nullish(),
  "IsRefundDeal": z.boolean().default(false).describe("Is the transaction will be a refund deal").nullable().nullish(),
  "ApiPassword": z.string().describe("Required only if IsRefundDeal is true").nullable().nullish(),
  "ISOCoinName": z.string().max(3).describe("ISO name (alternative to IsoCoinId). ISO Coin Name from list : https://en.wikipedia.org/wiki/ISO_4217").nullable().nullish(),
  "MinNumOfPayments": z.int().min(1).max(36).default(1).describe("Minimum number of payment to show to card holder").nullable().nullish(),
  "MaxNumOfPayments": z.int().min(1).max(36).default(1).describe("Maximum number of payment to show to card holder , default 1").nullable().nullish(),
  "SelectedNumOfPayments": z.int().default(0).describe("Change the selectd number of payments in the UI selection box , default (MinNumOfPayments)").nullable().nullish(),
  "FirstPayment": z.number().describe("Change the selectd number of payments in the UI selection box , default (MinNumOfPayments)").nullable().nullish(),
  "ConstPayment": z.number().describe("Change the selectd number of payments in the UI selection box , default (MinNumOfPayments)").nullable().nullish(),
  "Token": z.string().describe("3-D secure and Token tranzactions can use token instead of card number,it will be used to charge the customer if exist ").nullable().nullish(),
  "CardExpirationYear": z.string().describe("Card expiration year will be pre-set to the customer. 4 characters string.").nullable().nullish(),
  "CardExpirationMonth": z.string().describe("Card expiration Month will be pre-set to the customer. Values 01-12").nullable().nullish(),
  "CardNumber": z.string().default("").describe("Full card number, a token will be created and can be used to start 3DS process and charge").nullable().nullish(),
  "CVV": z.string().default("").describe("CVV used for 3DS process and charge").nullable().nullish(),
  get ThreeDSecureState(){
                  return threeDSecureStateSchema.describe("should this Tranasaction pass 3DSecure? Auto (or null): 3-D Secure validation will be performed as it configured by CardCom definition. Enable - Transaction will pass 3-D Secure validation. Disable - Transaction will NOT pass 3-D Secure validation").nullable().nullish()
                },
  "ShouldOpenPinpadOnPageLoad": z.boolean().describe("Will open PinPad charge window on load").nullable().nullish(),
  "IsExternal": z.boolean().default(false).describe("Is payment performed in external payment page").nullable().nullish()
      }) as unknown as ToZod<AdvancedLPDefinition>