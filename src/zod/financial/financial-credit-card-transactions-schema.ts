import type {
  FinancialCreditCardTransactions200,
  FinancialCreditCardTransactions400,
  FinancialCreditCardTransactions401,
  FinancialCreditCardTransactionsMutationRequest,
  FinancialCreditCardTransactionsMutationResponse,
} from '../../types/FinancialCreditCardTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { creditCardTransactionsReqSchema } from '../credit-card-transactions-req-schema.ts'
import { creditCardTransactionsRespSchema } from '../credit-card-transactions-resp-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const financialCreditCardTransactions200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CreditCardTransactionsResp>> = creditCardTransactionsRespSchema as unknown as ToZod<FinancialCreditCardTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialCreditCardTransactions400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialCreditCardTransactions400>

/**
 * @description Invalid username
 */
export const financialCreditCardTransactions401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialCreditCardTransactions401>

export const financialCreditCardTransactionsMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CreditCardTransactionsReq>>> =
  creditCardTransactionsReqSchema.nullable() as unknown as ToZod<FinancialCreditCardTransactionsMutationRequest>

export const financialCreditCardTransactionsMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CreditCardTransactionsResp>> =
  financialCreditCardTransactions200Schema as unknown as ToZod<FinancialCreditCardTransactionsMutationResponse>