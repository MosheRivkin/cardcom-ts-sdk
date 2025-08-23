import type {
  FinancialCreditCardTransactionsHalted200,
  FinancialCreditCardTransactionsHalted400,
  FinancialCreditCardTransactionsHalted401,
  FinancialCreditCardTransactionsHaltedMutationRequest,
  FinancialCreditCardTransactionsHaltedMutationResponse,
} from '../../types/FinancialCreditCardTransactionsHalted.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { creditCardTransactionsHaltedReqSchema } from '../credit-card-transactions-halted-req-schema.ts'
import { creditCardTransactionsHaltedRespSchema } from '../credit-card-transactions-halted-resp-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const financialCreditCardTransactionsHalted200Schema =
  creditCardTransactionsHaltedRespSchema as unknown as ToZod<FinancialCreditCardTransactionsHalted200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialCreditCardTransactionsHalted400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialCreditCardTransactionsHalted400>

/**
 * @description Invalid username
 */
export const financialCreditCardTransactionsHalted401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialCreditCardTransactionsHalted401>

export const financialCreditCardTransactionsHaltedMutationRequestSchema =
  creditCardTransactionsHaltedReqSchema.nullable() as unknown as ToZod<FinancialCreditCardTransactionsHaltedMutationRequest>

export const financialCreditCardTransactionsHaltedMutationResponseSchema =
  financialCreditCardTransactionsHalted200Schema as unknown as ToZod<FinancialCreditCardTransactionsHaltedMutationResponse>