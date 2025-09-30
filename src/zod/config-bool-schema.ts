import type { ConfigBool } from '../types/ConfigBool.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const configBoolSchema: z.ZodType<import("src/index").ConfigBoolEnum, unknown, z.core.$ZodTypeInternals<import("src/index").ConfigBoolEnum, unknown>> = z.enum(['auto', 'true', 'false']) as unknown as ToZod<ConfigBool>