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
export const tapTransactionsGetTransactions200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ProcessTransactionResponse>, "passthrough"> = processTransactionResponseSchema as unknown as ToZod<TapTransactionsGetTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const tapTransactionsGetTransactions400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsGetTransactions400>

/**
 * @description Invalid username
 */
export const tapTransactionsGetTransactions401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsGetTransactions401>

export const tapTransactionsGetTransactionsMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetTransactionsRequest>, "passthrough">> =
  getTransactionsRequestSchema.nullable() as unknown as ToZod<TapTransactionsGetTransactionsMutationRequest>

export const tapTransactionsGetTransactionsMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ProcessTransactionResponse>, "passthrough"> =
  tapTransactionsGetTransactions200Schema as unknown as ToZod<TapTransactionsGetTransactionsMutationResponse>