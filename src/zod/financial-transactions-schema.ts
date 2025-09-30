import type { FinancialTransactions } from '../types/FinancialTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { brand2Schema } from './brand2-schema.ts'
import { linkedTransactionsTypeSchema } from './linked-transactions-type-schema.ts'
import { txnTypeSchema } from './txn-type-schema.ts'
import { z } from 'zod'

export const financialTransactionsSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<FinancialTransactions>> = z.object({
  CreateDate: z.date().optional(),
  FirstCardDigits: z.int().nullable().nullish(),
  Id: z.int().optional(),
  ARN: z.string().describe('ARN is Solek transaction Id, this is the original ARN and this transaction ARN').nullable().nullish(),
  SapakNumber: z.int().describe('The Sapak that will get the Money').optional(),
  OrigTransactionAmount: z.number().describe('The Sapak that will get the Money').optional(),
  BankDepositesId: z.int().nullable().nullish(),
  BankDepositAt: z.date().nullable().nullish(),
  CreditCardTransactionsId: z.int().optional(),
  ConcentrationNumber: z.int().describe('מספר הפקדה / ריכוז').optional(),
  DepositeCurrency: z.int().describe('bank deposit currency').optional(),
  ActionCode: z.int().describe('מספר הפקדה / ריכוז').optional(),
  CreditCardCurrency: z.int().describe('CreditCard original transactions currency').optional(),
  DepositeAmount: z.number().describe('Amount for Bank Deposite').optional(),
  IfPct: z.number().describe('Interchange Fee in percentage').optional(),
  FeePerTrnAmt: z.number().describe('fee per transaction, in transaction currency').optional(),
  FixFeeAmtDepoCurr: z.number().describe('per transaction fix commission in Deposite currency').optional(),
  MngtFeePct: z.number().describe('clube management commission percentage').optional(),
  BrutoOrgCurAmt: z.number().describe('סכום העסקה או סכום התשלום הרלונטי מטבע עסקה').optional(),
  DiscOrigCurrAmt: z.number().describe('הנחת סולק היחסית לתשלום הרלונטי מטבע עסקה').optional(),
  ClDscOrgCurAmt: z.number().describe('הנחת מועדון היחסית לתשלום הרלונטי מטבע עסקה').optional(),
  DiscFreqShopAmt: z.number().describe('סכום הנחה תמורת נקודות/כוכבים').optional(),
  AftDiscAmtDepoCur: z.number().describe('Amount after discounts for calculation').optional(),
  IfAmtDepoCur: z.number().describe('fee in deposit currency').optional(),
  VatPrc: z.number().describe('VAT percentage for this transaction').optional(),
  VatIfNisDepoCur: z.number().describe('VAT in deposit currency').optional(),
  CurrencyOrIndexRate: z.number().describe('base rate of index or Currency rate used in this transaction').optional(),
  EffectiveCurrencyOrIndexRate: z.number().describe('base rate of index or Currency rate used in this transaction').optional(),
  EstimateDepositeDate: z.date().describe('Estimate Deposite Date').nullable().nullish(),
  NoOfPmt: z.int().describe('Estimate Deposite Date').optional(),
  PmtNo: z.int().describe('this payment number ').optional(),
  get Brand() {
    return brand2Schema.optional()
  },
  get TxnType() {
    return txnTypeSchema.describe('Txn type ').optional()
  },
  get IndexLinkType() {
    return linkedTransactionsTypeSchema.describe('linked transactions type').optional()
  },
  PurchaseDate: z.date().describe('linked transactions type').optional(),
  UID: z.string().nullable().nullish(),
  Last4CardDigits: z.int().nullable().nullish(),
  Last4CardDigitsStr: z.string().describe('String representation of Last4CardDigits. Prevents zeros from being omitted').nullable().nullish(),
  SapakMutavNumber: z.int().describe('Mutav number in Meaged style work, information only').nullable().nullish(),
}) as unknown as ToZod<FinancialTransactions>