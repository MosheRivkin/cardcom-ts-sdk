import type {
  TransactionsGetTransactionByExternalUniqTran200,
  TransactionsGetTransactionByExternalUniqTran400,
  TransactionsGetTransactionByExternalUniqTran401,
  TransactionsGetTransactionByExternalUniqTranMutationRequest,
  TransactionsGetTransactionByExternalUniqTranMutationResponse,
} from '../../types/TransactionsGetTransactionByExternalUniqTran.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { getExternalUniqTranIdStatusReqSchema } from '../get-external-uniq-tran-id-status-req-schema.ts'
import { transactionInfoSchema } from '../transaction-info-schema.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export const transactionsGetTransactionByExternalUniqTran200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").TransactionInfo>, "passthrough"> = transactionInfoSchema as unknown as ToZod<TransactionsGetTransactionByExternalUniqTran200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsGetTransactionByExternalUniqTran400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsGetTransactionByExternalUniqTran400>

/**
 * @description Invalid username
 */
export const transactionsGetTransactionByExternalUniqTran401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsGetTransactionByExternalUniqTran401>

export const transactionsGetTransactionByExternalUniqTranMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetExternalUniqTranIdStatusReq>, "passthrough">> =
  getExternalUniqTranIdStatusReqSchema.nullable() as unknown as ToZod<TransactionsGetTransactionByExternalUniqTranMutationRequest>

export const transactionsGetTransactionByExternalUniqTranMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").TransactionInfo>, "passthrough"> =
  transactionsGetTransactionByExternalUniqTran200Schema as unknown as ToZod<TransactionsGetTransactionByExternalUniqTranMutationResponse>