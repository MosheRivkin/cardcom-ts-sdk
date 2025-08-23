import type {
  TapTransactionsGetTransactions200,
  TapTransactionsGetTransactions400,
  TapTransactionsGetTransactions401,
  TapTransactionsGetTransactionsMutationRequest,
  TapTransactionsGetTransactionsMutationResponse,
} from '../../types/TapTransactionsGetTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { getTransactionsRequestSchema } from '../get-transactions-request-schema.ts'
import { processTransactionResponseSchema } from '../process-transaction-response-schema.ts'

/**
 * @description Successful request
 */
export const tapTransactionsGetTransactions200Schema = processTransactionResponseSchema as unknown as ToZod<TapTransactionsGetTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const tapTransactionsGetTransactions400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsGetTransactions400>

/**
 * @description Invalid username
 */
export const tapTransactionsGetTransactions401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsGetTransactions401>

export const tapTransactionsGetTransactionsMutationRequestSchema =
  getTransactionsRequestSchema.nullable() as unknown as ToZod<TapTransactionsGetTransactionsMutationRequest>

export const tapTransactionsGetTransactionsMutationResponseSchema =
  tapTransactionsGetTransactions200Schema as unknown as ToZod<TapTransactionsGetTransactionsMutationResponse>