import type { RciExtDealNum } from '../types/RciExtDealNum.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const rciExtDealNumSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<RciExtDealNum>, "passthrough"> = z.object({
  DealNumber: z.int().optional(),
}) as unknown as ToZod<RciExtDealNum>