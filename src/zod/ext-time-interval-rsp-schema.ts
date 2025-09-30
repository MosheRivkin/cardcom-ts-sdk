import type { ExtTimeIntervalRsp } from '../types/ExtTimeIntervalRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const extTimeIntervalRspSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<ExtTimeIntervalRsp>, "passthrough"> = z.object({
  TimeIntervalId: z.int().optional(),
  AddDays: z.int().optional(),
  AddWeeks: z.int().optional(),
  AddMonth: z.int().optional(),
  AddYears: z.int().optional(),
}) as unknown as ToZod<ExtTimeIntervalRsp>