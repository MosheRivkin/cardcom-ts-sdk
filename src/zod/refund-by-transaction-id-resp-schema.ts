import type { RefundByTransactionIdResp } from '../types/RefundByTransactionIdResp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const refundByTransactionIdRespSchema = z.object({
  ResponseCode: z.int().describe('if equel zero then success , else , Description for more info ').optional(),
  Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
  NewTranzactionId: z.int().describe('refund transaction id ').nullable().nullish(),
}) as unknown as ToZod<RefundByTransactionIdResp>