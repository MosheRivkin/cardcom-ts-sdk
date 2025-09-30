import type {
  TapTransactionsProcessTransaction200,
  TapTransactionsProcessTransaction400,
  TapTransactionsProcessTransaction401,
  TapTransactionsProcessTransactionMutationRequest,
  TapTransactionsProcessTransactionMutationResponse,
} from '../../types/TapTransactionsProcessTransaction.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { processTransactionRequestSchema } from '../process-transaction-request-schema.ts'
import { processTransactionResponseSchema } from '../process-transaction-response-schema.ts'

/**
 * @description Successful request
 */
export const tapTransactionsProcessTransaction200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ProcessTransactionResponse>, "passthrough"> = processTransactionResponseSchema as unknown as ToZod<TapTransactionsProcessTransaction200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const tapTransactionsProcessTransaction400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsProcessTransaction400>

/**
 * @description Invalid username
 */
export const tapTransactionsProcessTransaction401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsProcessTransaction401>

export const tapTransactionsProcessTransactionMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ProcessTransactionRequest>, "passthrough">> =
  processTransactionRequestSchema.nullable() as unknown as ToZod<TapTransactionsProcessTransactionMutationRequest>

export const tapTransactionsProcessTransactionMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ProcessTransactionResponse>, "passthrough"> =
  tapTransactionsProcessTransaction200Schema as unknown as ToZod<TapTransactionsProcessTransactionMutationResponse>