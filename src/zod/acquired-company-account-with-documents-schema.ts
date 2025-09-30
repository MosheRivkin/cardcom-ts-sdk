import type { AcquiredCompanyAccountWithDocuments } from '../types/AcquiredCompanyAccountWithDocuments.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { acquiredCompanyAccountSchema } from './acquired-company-account-schema.ts'
import { documentsInfoSchema } from './documents-info-schema.ts'
import { z } from 'zod'

export const acquiredCompanyAccountWithDocumentsSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<AcquiredCompanyAccountWithDocuments>, "passthrough"> = z.object({
  get DocumentsInfos() {
    return z.array(documentsInfoSchema).describe('Document object').nullable().nullish()
  },
  get AcquiredCompanyAccount() {
    return acquiredCompanyAccountSchema.describe('General info object').nullable().nullish()
  },
}) as unknown as ToZod<AcquiredCompanyAccountWithDocuments>