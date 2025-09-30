import type { ProcessTransactionResponse } from '../types/ProcessTransactionResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const processTransactionResponseSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<ProcessTransactionResponse>> = z.object({
  ResponseCode: z.int().describe('Response code: 0 - Success / Other values - Error (See Description for more info)').optional(),
  Description: z.string().describe('Description for ResponseCode').nullable().nullish(),
  DealNumber: z.int().describe('Deal number in Cardcom systems').nullable().nullish(),
}) as unknown as ToZod<ProcessTransactionResponse>