import type { SpecialTransactionsInfo } from '../types/SpecialTransactionsInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const specialTransactionsInfoSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<SpecialTransactionsInfo>, "passthrough"> = z.object({
  CreateDate: z.date().describe('row Create Date').optional(),
  SpecialType: z.int().describe('Special transaction type ').optional(),
  SpecialTypeDesc: z.string().describe('Special transaction heb desctiption ').optional(),
  SpecialTypeSubType: z.int().describe('sub code for transaction type ').optional(),
  Description: z.string().describe('transaction type and sub type info').nullable().nullish(),
  Amount: z.number().describe('Amount of this transaction').nullable().nullish(),
  OriginlTranAmount: z.number().describe('Original Amount transaction').nullable().nullish(),
  ARN: z.string().describe('ARN is Solek transaction Id, this is the original ARN and this transaction ARN').nullable().nullish(),
  UID: z.string().describe('UID is point of sale transaction Id, this is the original UID and this transaction UID').nullable().nullish(),
  SapakNumber: z.int().describe('The Sapak that will get the Money').optional(),
  TranzactionId: z.int().describe('CardCom point of sale Id').nullable().nullish(),
  Last4CardDigits: z.string().nullable().nullish(),
  MarkedAsRead: z.boolean().nullable().nullish(),
  CurrencyISO: z.int().nullable().nullish(),
  CardToken: z.string().nullable().nullish(),
  OriginlTranDate: z.date().describe('Original transaction date - when the card holder did the transaction').nullable().nullish(),
  SpecialTranDate: z.date().describe('This transaction date').nullable().nullish(),
  SapakMutavNumber: z.int().describe('Mutav number in Meaged style work, information only').nullable().nullish(),
}) as unknown as ToZod<SpecialTransactionsInfo>