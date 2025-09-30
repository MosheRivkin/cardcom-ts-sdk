import type { GetLowProfileResult } from '../types/GetLowProfileResult.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

/**
 * @description Get iframe \\ redirect result
 */
export const getLowProfileResultSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<GetLowProfileResult>> = z
  .object({
    TerminalNumber: z.int().describe('Cardcom terminal number'),
    ApiName: z.string().min(1).describe('Api Name for authentication'),
    LowProfileId: z.string().min(1).describe('The unique Id of the low profile transaction'),
  })
  .describe('Get iframe \\ redirect result') as unknown as ToZod<GetLowProfileResult>