import type { SapakStatusChangeNotify } from '../types/SapakStatusChangeNotify.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { sapakStatusSchema } from './sapak-status-schema.ts'
import { z } from 'zod'

export const sapakStatusChangeNotifySchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<SapakStatusChangeNotify>> = z.object({
  SapakNumber: z.int().optional(),
  get SapakStatus() {
    return sapakStatusSchema.optional()
  },
}) as unknown as ToZod<SapakStatusChangeNotify>