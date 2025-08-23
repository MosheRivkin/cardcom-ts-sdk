import type {
  FinancialFinancialTransactions200,
  FinancialFinancialTransactions400,
  FinancialFinancialTransactions401,
  FinancialFinancialTransactionsMutationRequest,
  FinancialFinancialTransactionsMutationResponse,
} from '../../types/FinancialFinancialTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { financialTransactionsReqSchema } from '../financial-transactions-req-schema.ts'
import { financialTransactionsRespSchema } from '../financial-transactions-resp-schema.ts'

/**
 * @description successful request
 */
export const financialFinancialTransactions200Schema = financialTransactionsRespSchema as unknown as ToZod<FinancialFinancialTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialFinancialTransactions400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialFinancialTransactions400>

/**
 * @description Invalid username
 */
export const financialFinancialTransactions401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialFinancialTransactions401>

export const financialFinancialTransactionsMutationRequestSchema =
  financialTransactionsReqSchema.nullable() as unknown as ToZod<FinancialFinancialTransactionsMutationRequest>

export const financialFinancialTransactionsMutationResponseSchema =
  financialFinancialTransactions200Schema as unknown as ToZod<FinancialFinancialTransactionsMutationResponse>