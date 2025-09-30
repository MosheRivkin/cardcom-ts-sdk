import type { EciType } from '../types/EciType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const eciTypeSchema: z.ZodType<import("src/index").EciTypeEnum, unknown, z.core.$ZodTypeInternals<import("src/index").EciTypeEnum, unknown>> = z.enum(['Empty', 'NoCavvUcaf', 'CavvUcafNotIssuer', 'CavvUcaf']) as unknown as ToZod<EciType>