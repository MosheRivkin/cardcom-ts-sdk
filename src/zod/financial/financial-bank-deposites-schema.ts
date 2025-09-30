import type {
  FinancialBankDeposites200,
  FinancialBankDeposites400,
  FinancialBankDeposites401,
  FinancialBankDepositesMutationRequest,
  FinancialBankDepositesMutationResponse,
} from '../../types/FinancialBankDeposites.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { bankDepositesReqSchema } from '../bank-deposites-req-schema.ts'
import { bankDepositesRespSchema } from '../bank-deposites-resp-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'

/**
 * @description successful request
 */
export const financialBankDeposites200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").BankDepositesResp>> = bankDepositesRespSchema as unknown as ToZod<FinancialBankDeposites200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialBankDeposites400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialBankDeposites400>

/**
 * @description Invalid username
 */
export const financialBankDeposites401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialBankDeposites401>

export const financialBankDepositesMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").BankDepositesReq>>> = bankDepositesReqSchema.nullable() as unknown as ToZod<FinancialBankDepositesMutationRequest>

export const financialBankDepositesMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").BankDepositesResp>> = financialBankDeposites200Schema as unknown as ToZod<FinancialBankDepositesMutationResponse>