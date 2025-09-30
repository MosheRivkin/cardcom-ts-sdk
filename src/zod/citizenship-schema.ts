import type { Citizenship } from '../types/Citizenship.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const citizenshipSchema: z.ZodType<import("src/index").CitizenshipEnum, unknown, z.core.$ZodTypeInternals<import("src/index").CitizenshipEnum, unknown>> = z.enum(['Unknown', 'Israel', 'Expatriate', 'ResidentArea']) as unknown as ToZod<Citizenship>