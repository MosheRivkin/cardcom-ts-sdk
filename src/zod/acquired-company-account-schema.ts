import type { AcquiredCompanyAccount } from '../types/AcquiredCompanyAccount.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { companyInfoSchema } from './company-info-schema.ts'
import { kycInfoSchema } from './kyc-info-schema.ts'
import { terminalInfoSchema } from './terminal-info-schema.ts'
import { userInfoSchema } from './user-info-schema.ts'
import { z } from 'zod'

export const acquiredCompanyAccountSchema = z.object({
  SupplierUserName: z.string().min(1).describe('SupplierUserName'),
  SupplierPassword: z.string().min(1).describe('SupplierPassword'),
  Secret: z.string().min(1).describe('Secret'),
  get CompanyInfo() {
    return companyInfoSchema.describe('Company info').nullable().nullish()
  },
  get UserInfo() {
    return userInfoSchema.describe('User info').nullable().nullish()
  },
  get TerminalInfo() {
    return terminalInfoSchema.describe('Terminal info').nullable().nullish()
  },
  get KycInfo() {
    return kycInfoSchema.describe('Kyc info').nullable().nullish()
  },
}) as unknown as ToZod<AcquiredCompanyAccount>