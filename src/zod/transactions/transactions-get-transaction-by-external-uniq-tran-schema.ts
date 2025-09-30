import type {
  TransactionsGetTransactionByExternalUniqTran200,
  TransactionsGetTransactionByExternalUniqTran400,
  TransactionsGetTransactionByExternalUniqTran401,
  TransactionsGetTransactionByExternalUniqTranMutationRequest,
  TransactionsGetTransactionByExternalUniqTranMutationResponse,
} from '../../types/TransactionsGetTransactionByExternalUniqTran.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { getExternalUniqTranIdStatusReqSchema } from '../get-external-uniq-tran-id-status-req-schema.ts'
import { transactionInfoSchema } from '../transaction-info-schema.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export const transactionsGetTransactionByExternalUniqTran200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").TransactionInfo>> = transactionInfoSchema as unknown as ToZod<TransactionsGetTransactionByExternalUniqTran200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsGetTransactionByExternalUniqTran400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsGetTransactionByExternalUniqTran400>

/**
 * @description Invalid username
 */
export const transactionsGetTransactionByExternalUniqTran401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsGetTransactionByExternalUniqTran401>

export const transactionsGetTransactionByExternalUniqTranMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").GetExternalUniqTranIdStatusReq>>> =
  getExternalUniqTranIdStatusReqSchema.nullable() as unknown as ToZod<TransactionsGetTransactionByExternalUniqTranMutationRequest>

export const transactionsGetTransactionByExternalUniqTranMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").TransactionInfo>> =
  transactionsGetTransactionByExternalUniqTran200Schema as unknown as ToZod<TransactionsGetTransactionByExternalUniqTranMutationResponse>