import type { InvExtHeadLines } from '../types/InvExtHeadLines.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const invExtHeadLinesSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<InvExtHeadLines>> = z.object({
  Description: z.string().nullable().nullish(),
  Quantity: z.number().optional(),
  IsPriceIncludeVAT: z.boolean().optional(),
  IsVatFree: z.string().nullable().nullish(),
  Price: z.number().optional(),
  ProductID: z.string().nullable().nullish(),
  TotalLineCost: z.string().nullable().nullish(),
}) as unknown as ToZod<InvExtHeadLines>