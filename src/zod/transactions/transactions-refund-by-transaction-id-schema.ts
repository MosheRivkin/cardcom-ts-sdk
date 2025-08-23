import type {
  TransactionsRefundByTransactionId200,
  TransactionsRefundByTransactionId400,
  TransactionsRefundByTransactionId401,
  TransactionsRefundByTransactionIdMutationRequest,
  TransactionsRefundByTransactionIdMutationResponse,
} from '../../types/TransactionsRefundByTransactionId.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { refundByTransactionIdReqSchema } from '../refund-by-transaction-id-req-schema.ts'
import { refundByTransactionIdRespSchema } from '../refund-by-transaction-id-resp-schema.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export const transactionsRefundByTransactionId200Schema = refundByTransactionIdRespSchema as unknown as ToZod<TransactionsRefundByTransactionId200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsRefundByTransactionId400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsRefundByTransactionId400>

/**
 * @description Invalid username
 */
export const transactionsRefundByTransactionId401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsRefundByTransactionId401>

export const transactionsRefundByTransactionIdMutationRequestSchema =
  refundByTransactionIdReqSchema.nullable() as unknown as ToZod<TransactionsRefundByTransactionIdMutationRequest>

export const transactionsRefundByTransactionIdMutationResponseSchema =
  transactionsRefundByTransactionId200Schema as unknown as ToZod<TransactionsRefundByTransactionIdMutationResponse>