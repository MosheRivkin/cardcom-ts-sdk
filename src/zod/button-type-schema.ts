import type { ButtonType } from '../types/ButtonType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const buttonTypeSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ButtonTypeEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ButtonTypeEnum, unknown>> = z.enum(['Book', 'Buy', 'Checkout', 'Donate', 'Order', 'Pay', 'Plain', 'Subscribe']) as unknown as ToZod<ButtonType>