import type { SuspendedInfo } from '../types/SuspendedInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

/**
 * @description SuspendedDeal result
 */
export const suspendedInfoSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<SuspendedInfo>> = z
  .object({
    SuspendedDealId: z.int().describe('Suspended deal Id, can be charge via API or the admin panel ').optional(),
  })
  .describe('SuspendedDeal result') as unknown as ToZod<SuspendedInfo>