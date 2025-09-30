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
export const financialFinancialTransactions200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").FinancialTransactionsResp>, "passthrough"> = financialTransactionsRespSchema as unknown as ToZod<FinancialFinancialTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialFinancialTransactions400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialFinancialTransactions400>

/**
 * @description Invalid username
 */
export const financialFinancialTransactions401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialFinancialTransactions401>

export const financialFinancialTransactionsMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").FinancialTransactionsReq>, "passthrough">> =
  financialTransactionsReqSchema.nullable() as unknown as ToZod<FinancialFinancialTransactionsMutationRequest>

export const financialFinancialTransactionsMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").FinancialTransactionsResp>, "passthrough"> =
  financialFinancialTransactions200Schema as unknown as ToZod<FinancialFinancialTransactionsMutationResponse>