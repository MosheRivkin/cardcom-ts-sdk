import type { ProcessTransactionRequest } from '../types/ProcessTransactionRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { sdkTransactionInfoSchema } from './sdk-transaction-info-schema.ts'
import { z } from 'zod'

export const processTransactionRequestSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<ProcessTransactionRequest>> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  TerminalNumber: z.int().describe('Terminal number at Cardcom'),
  RavMutavTerminalNumber: z.int().describe('The value returned in the PrepareDevice response').nullable().nullish(),
  DeviceUUID: z.string().min(1).max(50).describe('Mobile device UUID'),
  get TransactionInfo() {
    return sdkTransactionInfoSchema.describe('SDK transaction info')
  },
}) as unknown as ToZod<ProcessTransactionRequest>