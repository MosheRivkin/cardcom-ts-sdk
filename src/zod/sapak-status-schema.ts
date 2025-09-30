import type { SapakStatus } from '../types/SapakStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const sapakStatusSchema: z.ZodType<import("src/index").SapakStatusEnum, unknown, z.core.$ZodTypeInternals<import("src/index").SapakStatusEnum, unknown>> = z.enum(['UnderTest', 'InProcess', 'Approved', 'Blocked', 'Error']) as unknown as ToZod<SapakStatus>