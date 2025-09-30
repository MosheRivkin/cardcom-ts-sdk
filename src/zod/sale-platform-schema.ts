import type { SalePlatform } from '../types/SalePlatform.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const salePlatformSchema: z.ZodType<import("src/index").SalePlatformEnum, unknown, z.core.$ZodTypeInternals<import("src/index").SalePlatformEnum, unknown>> = z.enum(['PhysicalSale', 'Phone', 'Web', 'LandingPage']) as unknown as ToZod<SalePlatform>