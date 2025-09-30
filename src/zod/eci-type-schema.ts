import type { EciType } from '../types/EciType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const eciTypeSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").EciTypeEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").EciTypeEnum, unknown>> = z.enum(['Empty', 'NoCavvUcaf', 'CavvUcafNotIssuer', 'CavvUcaf']) as unknown as ToZod<EciType>