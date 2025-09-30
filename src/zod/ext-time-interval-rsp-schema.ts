import type { ExtTimeIntervalRsp } from '../types/ExtTimeIntervalRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const extTimeIntervalRspSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<ExtTimeIntervalRsp>> = z.object({
  TimeIntervalId: z.int().optional(),
  AddDays: z.int().optional(),
  AddWeeks: z.int().optional(),
  AddMonth: z.int().optional(),
  AddYears: z.int().optional(),
}) as unknown as ToZod<ExtTimeIntervalRsp>