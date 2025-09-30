import type { HumanIDTypes } from '../types/HumanIDTypes.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const humanIdTypesSchema: z.ZodType<import("src/index").HumanIDTypesEnum, unknown, z.core.$ZodTypeInternals<import("src/index").HumanIDTypesEnum, unknown>> = z.enum(['IDNumber', 'Passport']) as unknown as ToZod<HumanIDTypes>