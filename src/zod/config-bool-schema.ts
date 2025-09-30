import type { ConfigBool } from '../types/ConfigBool.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const configBoolSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ConfigBoolEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ConfigBoolEnum, unknown>> = z.enum(['auto', 'true', 'false']) as unknown as ToZod<ConfigBool>