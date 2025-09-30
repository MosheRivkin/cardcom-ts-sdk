import type {
  FinancialCreditCardTransactions200,
  FinancialCreditCardTransactions400,
  FinancialCreditCardTransactions401,
  FinancialCreditCardTransactionsMutationRequest,
  FinancialCreditCardTransactionsMutationResponse,
} from '../../types/FinancialCreditCardTransactions.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { creditCardTransactionsReqSchema } from '../credit-card-transactions-req-schema.ts'
import { creditCardTransactionsRespSchema } from '../credit-card-transactions-resp-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const financialCreditCardTransactions200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CreditCardTransactionsResp>, "passthrough"> = creditCardTransactionsRespSchema as unknown as ToZod<FinancialCreditCardTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialCreditCardTransactions400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialCreditCardTransactions400>

/**
 * @description Invalid username
 */
export const financialCreditCardTransactions401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialCreditCardTransactions401>

export const financialCreditCardTransactionsMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CreditCardTransactionsReq>, "passthrough">> =
  creditCardTransactionsReqSchema.nullable() as unknown as ToZod<FinancialCreditCardTransactionsMutationRequest>

export const financialCreditCardTransactionsMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CreditCardTransactionsResp>, "passthrough"> =
  financialCreditCardTransactions200Schema as unknown as ToZod<FinancialCreditCardTransactionsMutationResponse>