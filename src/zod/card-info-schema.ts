import type { CardInfo } from '../types/CardInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const cardInfoSchema: z.ZodType<import("src/index").CardInfoEnum, unknown, z.core.$ZodTypeInternals<import("src/index").CardInfoEnum, unknown>> = z.enum(['Israeli', 'NonIsraeli', 'FuelCard', 'ImmediateChargeCard', 'GiftCard']) as unknown as ToZod<CardInfo>