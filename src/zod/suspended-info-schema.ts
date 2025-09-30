import type { SuspendedInfo } from '../types/SuspendedInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

/**
 * @description SuspendedDeal result
 */
export const suspendedInfoSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<SuspendedInfo>, "passthrough"> = z
  .object({
    SuspendedDealId: z.int().describe('Suspended deal Id, can be charge via API or the admin panel ').optional(),
  })
  .describe('SuspendedDeal result') as unknown as ToZod<SuspendedInfo>