import type { Citizenship } from '../types/Citizenship.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const citizenshipSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CitizenshipEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CitizenshipEnum, unknown>> = z.enum(['Unknown', 'Israel', 'Expatriate', 'ResidentArea']) as unknown as ToZod<Citizenship>