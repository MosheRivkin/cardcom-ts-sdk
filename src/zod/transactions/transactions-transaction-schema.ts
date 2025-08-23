import type {
  TransactionsTransaction200,
  TransactionsTransaction400,
  TransactionsTransaction401,
  TransactionsTransactionMutationRequest,
  TransactionsTransactionMutationResponse,
} from '../../types/TransactionsTransaction.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { transactionInfoSchema } from '../transaction-info-schema.ts'
import { transactionReqSchema } from '../transaction-req-schema.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export const transactionsTransaction200Schema = transactionInfoSchema as unknown as ToZod<TransactionsTransaction200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsTransaction400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsTransaction400>

/**
 * @description Invalid username
 */
export const transactionsTransaction401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsTransaction401>

export const transactionsTransactionMutationRequestSchema = transactionReqSchema.nullable() as unknown as ToZod<TransactionsTransactionMutationRequest>

export const transactionsTransactionMutationResponseSchema = transactionsTransaction200Schema as unknown as ToZod<TransactionsTransactionMutationResponse>