import type {
  FinancialFinancialTransactions200,
  FinancialFinancialTransactions400,
  FinancialFinancialTransactions401,
  FinancialFinancialTransactionsMutationRequest,
  FinancialFinancialTransactionsMutationResponse,
} from '../../types/FinancialFinancialTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { financialTransactionsReqSchema } from '../financial-transactions-req-schema.ts'
import { financialTransactionsRespSchema } from '../financial-transactions-resp-schema.ts'

/**
 * @description successful request
 */
export const financialFinancialTransactions200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").FinancialTransactionsResp>> = financialTransactionsRespSchema as unknown as ToZod<FinancialFinancialTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialFinancialTransactions400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialFinancialTransactions400>

/**
 * @description Invalid username
 */
export const financialFinancialTransactions401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialFinancialTransactions401>

export const financialFinancialTransactionsMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").FinancialTransactionsReq>>> =
  financialTransactionsReqSchema.nullable() as unknown as ToZod<FinancialFinancialTransactionsMutationRequest>

export const financialFinancialTransactionsMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").FinancialTransactionsResp>> =
  financialFinancialTransactions200Schema as unknown as ToZod<FinancialFinancialTransactionsMutationResponse>