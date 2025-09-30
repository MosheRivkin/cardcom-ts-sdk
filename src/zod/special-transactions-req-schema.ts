import type { SpecialTransactionsReq } from '../types/SpecialTransactionsReq.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const specialTransactionsReqSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<SpecialTransactionsReq>> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  FromDate: z.string().min(1).describe('Form Date DDMMYYYY'),
  ToDate: z.string().min(1).describe('To Date DDMMYYYY'),
}) as unknown as ToZod<SpecialTransactionsReq>