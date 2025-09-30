import type {
  TransactionsGetTransactionInfoById200,
  TransactionsGetTransactionInfoById400,
  TransactionsGetTransactionInfoById401,
  TransactionsGetTransactionInfoByIdMutationRequest,
  TransactionsGetTransactionInfoByIdMutationResponse,
} from '../../types/TransactionsGetTransactionInfoById.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { extShvaParamsSchema } from '../ext-shva-params-schema.ts'
import { transactionInfoRequestSchema } from '../transaction-info-request-schema.ts'
import { z } from 'zod'

/**
 * @description successful request
 */
export const transactionsGetTransactionInfoById200Schema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtShvaParams>, "passthrough">> = z.array(extShvaParamsSchema) as unknown as ToZod<TransactionsGetTransactionInfoById200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsGetTransactionInfoById400Schema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsGetTransactionInfoById400>

/**
 * @description Invalid username
 */
export const transactionsGetTransactionInfoById401Schema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsGetTransactionInfoById401>

export const transactionsGetTransactionInfoByIdMutationRequestSchema: z.ZodNullable<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").TransactionInfoRequest>, "passthrough">> =
  transactionInfoRequestSchema.nullable() as unknown as ToZod<TransactionsGetTransactionInfoByIdMutationRequest>

export const transactionsGetTransactionInfoByIdMutationResponseSchema: z.ZodArray<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtShvaParams>, "passthrough">> =
  transactionsGetTransactionInfoById200Schema as unknown as ToZod<TransactionsGetTransactionInfoByIdMutationResponse>