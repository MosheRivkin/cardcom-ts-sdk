import type { TerminalInfo } from '../types/TerminalInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { moduleTypeSchema } from './module-type-schema.ts'
import { z } from 'zod'

export const terminalInfoSchema = z.object({
  BankCode: z.string().describe('Bank code - get list of banks from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanks').nullable().nullish(),
  BankBranchCode: z
    .string()
    .describe('Bank branch code -  - get list of bank branches from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanksBranches by bank number')
    .nullable()
    .nullish(),
  BankAccountNumber: z.string().describe('Bank account number').nullable().nullish(),
  get ModuleList() {
    return z.array(moduleTypeSchema).nullable().nullish()
  },
}) as unknown as ToZod<TerminalInfo>