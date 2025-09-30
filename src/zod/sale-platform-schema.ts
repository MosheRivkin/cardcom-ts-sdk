import type { SalePlatform } from '../types/SalePlatform.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const salePlatformSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SalePlatformEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SalePlatformEnum, unknown>> = z.enum(['PhysicalSale', 'Phone', 'Web', 'LandingPage']) as unknown as ToZod<SalePlatform>