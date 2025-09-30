import type {
  FinancialCreditCardTransactionsHalted200,
  FinancialCreditCardTransactionsHalted400,
  FinancialCreditCardTransactionsHalted401,
  FinancialCreditCardTransactionsHaltedMutationRequest,
  FinancialCreditCardTransactionsHaltedMutationResponse,
} from '../../types/FinancialCreditCardTransactionsHalted.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { creditCardTransactionsHaltedReqSchema } from '../credit-card-transactions-halted-req-schema.ts'
import { creditCardTransactionsHaltedRespSchema } from '../credit-card-transactions-halted-resp-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const financialCreditCardTransactionsHalted200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CreditCardTransactionsHaltedResp>> =
  creditCardTransactionsHaltedRespSchema as unknown as ToZod<FinancialCreditCardTransactionsHalted200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialCreditCardTransactionsHalted400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialCreditCardTransactionsHalted400>

/**
 * @description Invalid username
 */
export const financialCreditCardTransactionsHalted401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialCreditCardTransactionsHalted401>

export const financialCreditCardTransactionsHaltedMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CreditCardTransactionsHaltedReq>>> =
  creditCardTransactionsHaltedReqSchema.nullable() as unknown as ToZod<FinancialCreditCardTransactionsHaltedMutationRequest>

export const financialCreditCardTransactionsHaltedMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").CreditCardTransactionsHaltedResp>> =
  financialCreditCardTransactionsHalted200Schema as unknown as ToZod<FinancialCreditCardTransactionsHaltedMutationResponse>