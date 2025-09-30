import type { MeagedSapakInfo } from '../types/MeagedSapakInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { sapakStatusSchema } from './sapak-status-schema.ts'
import { z } from 'zod'

export const meagedSapakInfoSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<MeagedSapakInfo>, "passthrough"> = z.object({
  SapakNumber: z.int().optional(),
  get SapakStatus() {
    return sapakStatusSchema.optional()
  },
}) as unknown as ToZod<MeagedSapakInfo>