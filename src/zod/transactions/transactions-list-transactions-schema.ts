import type {
  TransactionsListTransactions200,
  TransactionsListTransactions400,
  TransactionsListTransactions401,
  TransactionsListTransactionsMutationRequest,
  TransactionsListTransactionsMutationResponse,
} from '../../types/TransactionsListTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { getTranzactionsRespSchema } from '../get-tranzactions-resp-schema.ts'
import { listTransactionsReqSchema } from '../list-transactions-req-schema.ts'
import { z } from 'zod'

/**
 * @description successful request
 */
export const transactionsListTransactions200Schema = getTranzactionsRespSchema as unknown as ToZod<TransactionsListTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsListTransactions400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsListTransactions400>

/**
 * @description Invalid username
 */
export const transactionsListTransactions401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsListTransactions401>

export const transactionsListTransactionsMutationRequestSchema =
  listTransactionsReqSchema.nullable() as unknown as ToZod<TransactionsListTransactionsMutationRequest>

export const transactionsListTransactionsMutationResponseSchema =
  transactionsListTransactions200Schema as unknown as ToZod<TransactionsListTransactionsMutationResponse>