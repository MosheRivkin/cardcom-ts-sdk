import type { SalePlatform } from '../types/SalePlatform.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const salePlatformSchema = z.enum(['PhysicalSale', 'Phone', 'Web', 'LandingPage']) as unknown as ToZod<SalePlatform>