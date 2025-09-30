import type { BanksBranches } from '../types/BanksBranches.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { banksSchema } from './banks-schema.ts'
import { z } from 'zod'

export const banksBranchesSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<BanksBranches>, "passthrough"> = z.object({
  Bank_Code: z.int().optional(),
  Branch_Code: z.int().optional(),
  Branch_Name: z.string().nullable().nullish(),
  Branch_Address: z.string().nullable().nullish(),
  get Banks() {
    return banksSchema.nullable().nullish()
  },
}) as unknown as ToZod<BanksBranches>