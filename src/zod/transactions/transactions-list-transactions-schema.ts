import type {
  TransactionsListTransactions200,
  TransactionsListTransactions400,
  TransactionsListTransactions401,
  TransactionsListTransactionsMutationRequest,
  TransactionsListTransactionsMutationResponse,
} from '../../types/TransactionsListTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { getTranzactionsRespSchema } from '../get-tranzactions-resp-schema.ts'
import { listTransactionsReqSchema } from '../list-transactions-req-schema.ts'
import { z } from 'zod'

/**
 * @description successful request
 */
export const transactionsListTransactions200Schema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").GetTranzactionsResp>> = getTranzactionsRespSchema as unknown as ToZod<TransactionsListTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsListTransactions400Schema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsListTransactions400>

/**
 * @description Invalid username
 */
export const transactionsListTransactions401Schema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsListTransactions401>

export const transactionsListTransactionsMutationRequestSchema: z.ZodNullable<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ListTransactionsReq>>> =
  listTransactionsReqSchema.nullable() as unknown as ToZod<TransactionsListTransactionsMutationRequest>

export const transactionsListTransactionsMutationResponseSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").GetTranzactionsResp>> =
  transactionsListTransactions200Schema as unknown as ToZod<TransactionsListTransactionsMutationResponse>