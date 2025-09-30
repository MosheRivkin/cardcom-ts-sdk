import type { KycInfo } from '../types/KycInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { kycInfoGenericSchema } from './kyc-info-generic-schema.ts'
import { kycInfoOsekMursheSchema } from './kyc-info-osek-murshe-schema.ts'
import { z } from 'zod'

export const kycInfoSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<KycInfo>, "passthrough"> = z.object({
  get KycInfoGeneric() {
    return kycInfoGenericSchema.describe('פרמטרים שמתאימים לכל').nullable().nullish()
  },
  get KycInfoOsekMurshe() {
    return kycInfoOsekMursheSchema.describe('פרמטרים שמתאימים לעוסק מורשה').nullable().nullish()
  },
}) as unknown as ToZod<KycInfo>