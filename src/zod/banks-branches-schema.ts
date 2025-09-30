import type { BanksBranches } from '../types/BanksBranches.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { banksSchema } from './banks-schema.ts'
import { z } from 'zod'

export const banksBranchesSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<BanksBranches>> = z.object({
  Bank_Code: z.int().optional(),
  Branch_Code: z.int().optional(),
  Branch_Name: z.string().nullable().nullish(),
  Branch_Address: z.string().nullable().nullish(),
  get Banks() {
    return banksSchema.nullable().nullish()
  },
}) as unknown as ToZod<BanksBranches>