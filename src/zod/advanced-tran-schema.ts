import type { AdvancedTran } from '../types/AdvancedTran.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { jValidateTypeSchema } from './j-validate-type-schema.ts'
import { z } from 'zod'

export const advancedTranSchema = z.object({
  ApiPassword: z.string().describe("Required only if 'IsRefund' is true").nullable().nullish(),
  IsRefund: z.boolean().describe("Is refund transaction , 'ApiPassword' is Required to use this option").optional(),
  ISOCoinName: z
    .string()
    .max(3)
    .describe("ISO name (alternative and override to 'IsoCoinId'). ISO Coin Name from list : https://en.wikipedia.org/wiki/ISO_4217")
    .nullable()
    .nullish(),
  get JValidateType() {
    return jValidateTypeSchema
      .describe('Type of transaction for credit card in operation : CreateTokenOnly or Suspended deal, can be J2 (simple card validation) or J5 (authoriz)')
      .nullable()
      .nullish()
  },
  SapakMutav: z.string().max(15).describe('SapakMutav number, for meaged terminals').nullable().nullish(),
  CreditType: z.int().default(1).describe('Type of credit for the card, for israel cards only.').nullable().nullish(),
  MTI: z.int().nullable().nullish(),
  AccountIdToGetCardNumber: z
    .int()
    .describe(
      'Get the card number and expiretion date from account , if you need the account informatin for the invoice you need send the account Id in the document object : Document.AdvancedDefinition.AccountID and Document.AdvancedDefinition.IsLoadInfoFromAccountID=true',
    )
    .nullable()
    .nullish(),
  ApprovalNumber: z.string().describe('capture an J5 (authoriz) request ').nullable().nullish(),
  FirstPayment: z.number().nullable().nullish(),
  ConstPayment: z.number().nullable().nullish(),
  IsAutoRecurringPayment: z.boolean().default(false).nullable().nullish(),
  IsCreateToken: z.boolean().default(false).nullable().nullish(),
  SendNote: z.boolean().default(false).nullable().nullish(),
}) as unknown as ToZod<AdvancedTran>