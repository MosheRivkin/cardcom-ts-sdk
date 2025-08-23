import type { TransactionInfoRequest } from '../types/TransactionInfoRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

/**
 * @description Get transaction info request
 */
export const transactionInfoRequestSchema = z
  .object({
    TerminalNumber: z.int().describe('Terminal Number for authentication'),
    UserName: z.string().min(1).describe('API Name for authentication'),
    UserPassword: z.string().min(1).describe('API Password for authentication'),
    InternalDealNumber: z.int().describe('InternalDealNumber to search'),
  })
  .describe('Get transaction info request') as unknown as ToZod<TransactionInfoRequest>