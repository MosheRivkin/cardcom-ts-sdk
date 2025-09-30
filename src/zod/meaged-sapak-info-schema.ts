import type { MeagedSapakInfo } from '../types/MeagedSapakInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { sapakStatusSchema } from './sapak-status-schema.ts'
import { z } from 'zod'

export const meagedSapakInfoSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<MeagedSapakInfo>> = z.object({
  SapakNumber: z.int().optional(),
  get SapakStatus() {
    return sapakStatusSchema.optional()
  },
}) as unknown as ToZod<MeagedSapakInfo>