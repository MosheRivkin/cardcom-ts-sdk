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
export const transactionsRefundByTransactionId200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RefundByTransactionIdResp>, "passthrough"> = refundByTransactionIdRespSchema as unknown as ToZod<TransactionsRefundByTransactionId200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsRefundByTransactionId400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsRefundByTransactionId400>

/**
 * @description Invalid username
 */
export const transactionsRefundByTransactionId401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsRefundByTransactionId401>

export const transactionsRefundByTransactionIdMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RefundByTransactionIdReq>, "passthrough">> =
  refundByTransactionIdReqSchema.nullable() as unknown as ToZod<TransactionsRefundByTransactionIdMutationRequest>

export const transactionsRefundByTransactionIdMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RefundByTransactionIdResp>, "passthrough"> =
  transactionsRefundByTransactionId200Schema as unknown as ToZod<TransactionsRefundByTransactionIdMutationResponse>