import type { ExtSlikaAggrement } from '../types/ExtSlikaAggrement.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const extSlikaAggrementSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<ExtSlikaAggrement>> = z.object({
  AgreementId: z.int().describe('agreement Id').optional(),
}) as unknown as ToZod<ExtSlikaAggrement>