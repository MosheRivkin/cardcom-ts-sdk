import type { Gender2 } from '../types/Gender2.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const gender2Schema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").Gender2Enum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").Gender2Enum, unknown>> = z.union([z.literal(0), z.literal(1), z.literal(2)]) as unknown as ToZod<Gender2>