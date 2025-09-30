import type { Brand } from '../types/Brand.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const brandSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").BrandEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").BrandEnum, unknown>> = z.enum([
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