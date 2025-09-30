import type { LinkedTransactionsType } from '../types/LinkedTransactionsType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const linkedTransactionsTypeSchema: z.ZodType<import("src/index").LinkedTransactionsTypeEnum, unknown, z.core.$ZodTypeInternals<import("src/index").LinkedTransactionsTypeEnum, unknown>> = z.union([z.literal(1), z.literal(4), z.literal(8)]) as unknown as ToZod<LinkedTransactionsType>