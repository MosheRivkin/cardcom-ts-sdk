import type {
  TransactionsSpecialTransactions200,
  TransactionsSpecialTransactions400,
  TransactionsSpecialTransactions401,
  TransactionsSpecialTransactionsMutationRequest,
  TransactionsSpecialTransactionsMutationResponse,
} from '../../types/TransactionsSpecialTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { specialTransactionsReqSchema } from '../special-transactions-req-schema.ts'
import { specialTransactionsRespSchema } from '../special-transactions-resp-schema.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export const transactionsSpecialTransactions200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SpecialTransactionsResp>, "passthrough"> = specialTransactionsRespSchema as unknown as ToZod<TransactionsSpecialTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsSpecialTransactions400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsSpecialTransactions400>

/**
 * @description Invalid username
 */
export const transactionsSpecialTransactions401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsSpecialTransactions401>

export const transactionsSpecialTransactionsMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SpecialTransactionsReq>, "passthrough">> =
  specialTransactionsReqSchema.nullable() as unknown as ToZod<TransactionsSpecialTransactionsMutationRequest>

export const transactionsSpecialTransactionsMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SpecialTransactionsResp>, "passthrough"> =
  transactionsSpecialTransactions200Schema as unknown as ToZod<TransactionsSpecialTransactionsMutationResponse>