import type { CreditCardTransaction } from '../types/CreditCardTransaction.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { actionCodeSchema } from './action-code-schema.ts'
import { brand2Schema } from './brand2-schema.ts'
import { eciTypeSchema } from './eci-type-schema.ts'
import { mtiSchema } from './mti-schema.ts'
import { tranTypeSchema } from './tran-type-schema.ts'
import { z } from 'zod'

export const creditCardTransactionSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CreditCardTransaction>> = z.object({
  CreateDate: z.date().optional(),
  Id: z.int().optional(),
  SapakNumber: z.int().describe('The Sapak that will get the Money').nullable().nullish(),
  ARN: z.string().nullable().nullish(),
  TransacDate: z.date().optional(),
  TransacTime: z.string().optional(),
  TransmissionDate: z.date().optional(),
  TransmissionTime: z.string().optional(),
  get TranType() {
    return tranTypeSchema.optional()
  },
  Rrn: z.string().nullable().nullish(),
  Amount: z.number().optional(),
  FirstPayment: z.number().optional(),
  NotFirstPayment: z.number().optional(),
  NoPayments: z.int().optional(),
  IndexPayment: z.int().optional(),
  Agg_PayDay: z.date().optional(),
  Agg_IfPac: z.number().optional(),
  get ActionCode() {
    return actionCodeSchema.optional()
  },
  Last4Digits: z.int().nullable().nullish(),
  Last4DigitsStr: z.string().describe('String representation of Last4Digits. Prevents zeros from being omitted.').nullable().nullish(),
  First7Digits: z.int().nullable().nullish(),
  Uid: z.string().nullable().nullish(),
  get Mti() {
    return mtiSchema.optional()
  },
  SessionNumber: z.int().optional(),
  CouponNumber: z.string().nullable().nullish(),
  AuthorizeNo: z.string().nullable().nullish(),
  Retailer: z.int().optional(),
  get Brand() {
    return brand2Schema.optional()
  },
  Agg_IfPctFixAmt: z.number().optional(),
  OriginCurrency: z.int().optional(),
  PaymentCurrency: z.int().optional(),
  SapakMutavNumber: z.int().describe('Mutav number in Meaged style work, information only').optional(),
  get Eci() {
    return eciTypeSchema.describe('Secure transaction indicator').optional()
  },
}) as unknown as ToZod<CreditCardTransaction>