import type {
  TransactionsSpecialTransactions200,
  TransactionsSpecialTransactions400,
  TransactionsSpecialTransactions401,
  TransactionsSpecialTransactionsMutationRequest,
  TransactionsSpecialTransactionsMutationResponse,
} from '../../types/TransactionsSpecialTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { specialTransactionsReqSchema } from '../special-transactions-req-schema.ts'
import { specialTransactionsRespSchema } from '../special-transactions-resp-schema.ts'

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
 */
export const transactionsSpecialTransactions200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").SpecialTransactionsResp>> = specialTransactionsRespSchema as unknown as ToZod<TransactionsSpecialTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsSpecialTransactions400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsSpecialTransactions400>

/**
 * @description Invalid username
 */
export const transactionsSpecialTransactions401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TransactionsSpecialTransactions401>

export const transactionsSpecialTransactionsMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").SpecialTransactionsReq>>> =
  specialTransactionsReqSchema.nullable() as unknown as ToZod<TransactionsSpecialTransactionsMutationRequest>

export const transactionsSpecialTransactionsMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").SpecialTransactionsResp>> =
  transactionsSpecialTransactions200Schema as unknown as ToZod<TransactionsSpecialTransactionsMutationResponse>