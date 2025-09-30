import type {
  TransactionsGetTransactionInfoById200,
  TransactionsGetTransactionInfoById400,
  TransactionsGetTransactionInfoById401,
  TransactionsGetTransactionInfoByIdMutationRequest,
  TransactionsGetTransactionInfoByIdMutationResponse,
} from '../../types/TransactionsGetTransactionInfoById.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { extShvaParamsSchema } from '../ext-shva-params-schema.ts'
import { transactionInfoRequestSchema } from '../transaction-info-request-schema.ts'
import { z } from 'zod'

/**
 * @description successful request
 */
export const transactionsGetTransactionInfoById200Schema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ExtShvaParams>>> = z.array(extShvaParamsSchema) as unknown as ToZod<TransactionsGetTransactionInfoById200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsGetTransactionInfoById400Schema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsGetTransactionInfoById400>

/**
 * @description Invalid username
 */
export const transactionsGetTransactionInfoById401Schema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsGetTransactionInfoById401>

export const transactionsGetTransactionInfoByIdMutationRequestSchema: z.ZodNullable<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").TransactionInfoRequest>>> =
  transactionInfoRequestSchema.nullable() as unknown as ToZod<TransactionsGetTransactionInfoByIdMutationRequest>

export const transactionsGetTransactionInfoByIdMutationResponseSchema: z.ZodArray<z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ExtShvaParams>>> =
  transactionsGetTransactionInfoById200Schema as unknown as ToZod<TransactionsGetTransactionInfoByIdMutationResponse>