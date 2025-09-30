import type { SapakStatus } from '../types/SapakStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const sapakStatusSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SapakStatusEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SapakStatusEnum, unknown>> = z.enum(['UnderTest', 'InProcess', 'Approved', 'Blocked', 'Error']) as unknown as ToZod<SapakStatus>