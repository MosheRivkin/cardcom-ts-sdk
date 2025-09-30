import type { AcquiredCompanyAccountFileUpload } from '../types/AcquiredCompanyAccountFileUpload.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { documentsInfoSchema } from './documents-info-schema.ts'
import { z } from 'zod'

export const acquiredCompanyAccountFileUploadSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<AcquiredCompanyAccountFileUpload>> = z.object({
  get DocumentsInfo() {
    return z.array(documentsInfoSchema).describe('Document for upload').nullable().nullish()
  },
  SupplierUserName: z.string().min(1).describe('SupplierUserName'),
  SupplierPassword: z.string().min(1).describe('SupplierPassword'),
  Secret: z.string().min(1).describe('Secret'),
  CompanyInternalID: z.string().min(1).describe('CompanyInternalID'),
}) as unknown as ToZod<AcquiredCompanyAccountFileUpload>