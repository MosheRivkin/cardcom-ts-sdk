import type { JValidateType } from '../types/JValidateType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const jValidateTypeSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").JValidateTypeEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").JValidateTypeEnum, unknown>> = z.union([z.literal(2), z.literal(5)]) as unknown as ToZod<JValidateType>