import type { SalePlatform2 } from '../types/SalePlatform2.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const salePlatform2Schema: z.ZodType<import("src/index").SalePlatform2Enum, unknown, z.core.$ZodTypeInternals<import("src/index").SalePlatform2Enum, unknown>> = z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]) as unknown as ToZod<SalePlatform2>