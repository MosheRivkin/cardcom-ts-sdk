import type { Brand } from '../types/Brand.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const brandSchema: z.ZodType<import("src/index").BrandEnum, unknown, z.core.$ZodTypeInternals<import("src/index").BrandEnum, unknown>> = z.enum([
  'PrivateCard',
  'MasterCard',
  'Visa',
  'Maestro',
  'AmericanExpress',
  'Isracard',
  'JBC',
  'Discover',
  'Diners',
]) as unknown as ToZod<Brand>