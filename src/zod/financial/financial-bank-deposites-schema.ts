import type {
  FinancialBankDeposites200,
  FinancialBankDeposites400,
  FinancialBankDeposites401,
  FinancialBankDepositesMutationRequest,
  FinancialBankDepositesMutationResponse,
} from '../../types/FinancialBankDeposites.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { bankDepositesReqSchema } from '../bank-deposites-req-schema.ts'
import { bankDepositesRespSchema } from '../bank-deposites-resp-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const financialBankDeposites200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").BankDepositesResp>, "passthrough"> = bankDepositesRespSchema as unknown as ToZod<FinancialBankDeposites200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialBankDeposites400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialBankDeposites400>

/**
 * @description Invalid username
 */
export const financialBankDeposites401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialBankDeposites401>

export const financialBankDepositesMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").BankDepositesReq>, "passthrough">> = bankDepositesReqSchema.nullable() as unknown as ToZod<FinancialBankDepositesMutationRequest>

export const financialBankDepositesMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").BankDepositesResp>, "passthrough"> = financialBankDeposites200Schema as unknown as ToZod<FinancialBankDepositesMutationResponse>