import type { SlikaInvoicesResult } from '../types/SlikaInvoicesResult.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { bankDepositesSchema } from './bank-deposites-schema.ts'
import { z } from 'zod'

export const slikaInvoicesResultSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<SlikaInvoicesResult>> = z.object({
  DocNumber: z.int().describe('Document Number').optional(),
  DocType: z.int().describe('Document type. 1 = Tax invoice').optional(),
  DocDate: z.date().describe('Date of the document').optional(),
  BrutoOrgCurAmt: z.number().describe('Original transaction amount').optional(),
  DiscOrigCurrAmt: z.number().describe('Club discounts').optional(),
  AftDiscNisAmt: z.number().describe('Transaction amount after club discounts').optional(),
  IfNisAmt: z.number().describe('Interchange fee amount').optional(),
  MngtFeeNis: z.number().describe('Club managment fee').optional(),
  VatIfNis: z.number().describe('Charged VAT').optional(),
  DepositAmount: z.number().describe('Deposit Amount').optional(),
  BusinessName: z.string().nullable().nullish(),
  BusinessRegistrationNumber: z.string().describe('Business Registration Number').nullable().nullish(),
  City: z.string().nullable().nullish(),
  Address1: z.string().nullable().nullish(),
  Address2: z.string().nullable().nullish(),
  HouseNumber: z.string().nullable().nullish(),
  Email: z.string().nullable().nullish(),
  Phone: z.string().nullable().nullish(),
  SapakNumber: z.int().optional(),
  EmailRecipient: z.string().describe('Invoice email recipient').nullable().nullish(),
  get BankDeposits() {
    return z.array(bankDepositesSchema).describe('Bank Deposits').nullable().nullish()
  },
}) as unknown as ToZod<SlikaInvoicesResult>