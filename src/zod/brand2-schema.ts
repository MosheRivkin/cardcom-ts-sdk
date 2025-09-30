import type { Brand2 } from '../types/Brand2.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const brand2Schema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").Brand2Enum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").Brand2Enum, unknown>> = z.enum(['MasterCard_1', 'Visa_2', 'Diners_3', 'Amex_4', 'Isracard_5']) as unknown as ToZod<Brand2>