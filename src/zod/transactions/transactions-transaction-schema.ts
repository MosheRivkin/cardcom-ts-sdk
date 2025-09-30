import type {
  TransactionsTransaction200,
  TransactionsTransaction400,
  TransactionsTransaction401,
  TransactionsTransactionMutationRequest,
  TransactionsTransactionMutationResponse,
} from '../../types/TransactionsTransaction.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { transactionInfoSchema } from '../transaction-info-schema.ts'
import { transactionReqSchema } from '../transaction-req-schema.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export const transactionsTransaction200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").TransactionInfo>> = transactionInfoSchema as unknown as ToZod<TransactionsTransaction200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsTransaction400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsTransaction400>

/**
 * @description Invalid username
 */
export const transactionsTransaction401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsTransaction401>

export const transactionsTransactionMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").TransactionReq>>> = transactionReqSchema.nullable() as unknown as ToZod<TransactionsTransactionMutationRequest>

export const transactionsTransactionMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").TransactionInfo>> = transactionsTransaction200Schema as unknown as ToZod<TransactionsTransactionMutationResponse>