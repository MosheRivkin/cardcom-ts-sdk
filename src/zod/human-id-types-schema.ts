import type { HumanIDTypes } from '../types/HumanIDTypes.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const humanIdTypesSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").HumanIDTypesEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").HumanIDTypesEnum, unknown>> = z.enum(['IDNumber', 'Passport']) as unknown as ToZod<HumanIDTypes>