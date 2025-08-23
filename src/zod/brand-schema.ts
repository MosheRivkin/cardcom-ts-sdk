import type { Brand } from '../types/Brand.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const brandSchema = z.enum([
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