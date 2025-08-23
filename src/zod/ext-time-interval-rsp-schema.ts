import type { ExtTimeIntervalRsp } from '../types/ExtTimeIntervalRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const extTimeIntervalRspSchema = z.object({
  TimeIntervalId: z.int().optional(),
  AddDays: z.int().optional(),
  AddWeeks: z.int().optional(),
  AddMonth: z.int().optional(),
  AddYears: z.int().optional(),
}) as unknown as ToZod<ExtTimeIntervalRsp>