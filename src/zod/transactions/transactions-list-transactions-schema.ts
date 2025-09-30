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
export const transactionsListTransactions200Schema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetTranzactionsResp>, "passthrough"> = getTranzactionsRespSchema as unknown as ToZod<TransactionsListTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsListTransactions400Schema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsListTransactions400>

/**
 * @description Invalid username
 */
export const transactionsListTransactions401Schema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsListTransactions401>

export const transactionsListTransactionsMutationRequestSchema: z.ZodNullable<z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ListTransactionsReq>, "passthrough">> =
  listTransactionsReqSchema.nullable() as unknown as ToZod<TransactionsListTransactionsMutationRequest>

export const transactionsListTransactionsMutationResponseSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetTranzactionsResp>, "passthrough"> =
  transactionsListTransactions200Schema as unknown as ToZod<TransactionsListTransactionsMutationResponse>