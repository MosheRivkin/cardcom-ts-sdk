import type { JValidateType } from '../types/JValidateType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const jValidateTypeSchema: z.ZodType<import("src/index").JValidateTypeEnum, unknown, z.core.$ZodTypeInternals<import("src/index").JValidateTypeEnum, unknown>> = z.union([z.literal(2), z.literal(5)]) as unknown as ToZod<JValidateType>