import type { LinkedTransactionsType } from '../types/LinkedTransactionsType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const linkedTransactionsTypeSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").LinkedTransactionsTypeEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").LinkedTransactionsTypeEnum, unknown>> = z.union([z.literal(1), z.literal(4), z.literal(8)]) as unknown as ToZod<LinkedTransactionsType>