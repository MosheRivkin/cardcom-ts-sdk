import type { CardInfo } from '../types/CardInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const cardInfoSchema = z.enum(['Israeli', 'NonIsraeli', 'FuelCard', 'ImmediateChargeCard', 'GiftCard']) as unknown as ToZod<CardInfo>