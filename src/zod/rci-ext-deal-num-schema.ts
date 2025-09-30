import type { RciExtDealNum } from '../types/RciExtDealNum.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const rciExtDealNumSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<RciExtDealNum>> = z.object({
  DealNumber: z.int().optional(),
}) as unknown as ToZod<RciExtDealNum>