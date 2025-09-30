import type {
  TransactionsRefundByTransactionId200,
  TransactionsRefundByTransactionId400,
  TransactionsRefundByTransactionId401,
  TransactionsRefundByTransactionIdMutationRequest,
  TransactionsRefundByTransactionIdMutationResponse,
} from '../../types/TransactionsRefundByTransactionId.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { refundByTransactionIdReqSchema } from '../refund-by-transaction-id-req-schema.ts'
import { refundByTransactionIdRespSchema } from '../refund-by-transaction-id-resp-schema.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export const transactionsRefundByTransactionId200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RefundByTransactionIdResp>> = refundByTransactionIdRespSchema as unknown as ToZod<TransactionsRefundByTransactionId200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsRefundByTransactionId400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsRefundByTransactionId400>

/**
 * @description Invalid username
 */
export const transactionsRefundByTransactionId401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsRefundByTransactionId401>

export const transactionsRefundByTransactionIdMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RefundByTransactionIdReq>>> =
  refundByTransactionIdReqSchema.nullable() as unknown as ToZod<TransactionsRefundByTransactionIdMutationRequest>

export const transactionsRefundByTransactionIdMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RefundByTransactionIdResp>> =
  transactionsRefundByTransactionId200Schema as unknown as ToZod<TransactionsRefundByTransactionIdMutationResponse>