import type { BankDeposites } from '../types/BankDeposites.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const bankDepositesSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<BankDeposites>> = z.object({
  Id: z.int().describe('uniq deposite id').optional(),
  DepositeAt: z.date().describe('Deposite date').optional(),
  SapakNumber: z.int().describe('Sapak Number').optional(),
  Amount: z.number().describe('Deposite amount').optional(),
  BankNumber: z.int().describe('Israel bank Number').optional(),
  BranchNumber: z.int().describe('Israel Branch Number').optional(),
  AccountNumber: z.int().describe('Israel Account number').optional(),
  Currency: z.int().describe('deposit currency').optional(),
}) as unknown as ToZod<BankDeposites>