import type { Gender2 } from '../types/Gender2.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const gender2Schema: z.ZodType<import("src/index").Gender2Enum, unknown, z.core.$ZodTypeInternals<import("src/index").Gender2Enum, unknown>> = z.union([z.literal(0), z.literal(1), z.literal(2)]) as unknown as ToZod<Gender2>