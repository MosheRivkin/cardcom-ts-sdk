import type { CardNumberEntryMode } from '../types/CardNumberEntryMode.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const cardNumberEntryModeSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CardNumberEntryModeEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CardNumberEntryModeEnum, unknown>> = z.enum([
  'MagneticStip',
  'SelfService',
  'GasStationSelfService',
  'Contactless',
  'EmvContactless',
  'MobileContactless',
  'EmvMobileContactless',
  'MobileNumber',
  'Emv',
  'Phone',
  'SignatureOnly',
  'Internet',
  'Fallback',
  'EmptyCandidateList',
]) as unknown as ToZod<CardNumberEntryMode>