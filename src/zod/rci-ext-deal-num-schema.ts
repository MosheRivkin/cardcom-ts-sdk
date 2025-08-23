import type { RciExtDealNum } from '../types/RciExtDealNum.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const rciExtDealNumSchema = z.object({
  DealNumber: z.int().optional(),
}) as unknown as ToZod<RciExtDealNum>