import type { ExtSlikaAggrement } from '../types/ExtSlikaAggrement.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const extSlikaAggrementSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<ExtSlikaAggrement>, "passthrough"> = z.object({
  AgreementId: z.int().describe('agreement Id').optional(),
}) as unknown as ToZod<ExtSlikaAggrement>