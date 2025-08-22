import type { FinancialBankDeposites200, FinancialBankDeposites400, FinancialBankDeposites401, FinancialBankDepositesMutationRequest, FinancialBankDepositesMutationResponse } from "../../types/FinancialBankDeposites.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { bankDepositesReqSchema } from "../bank-deposites-req-schema.ts";
import { bankDepositesRespSchema } from "../bank-deposites-resp-schema.ts";
import { errorInfoSchema } from "../error-info-schema.ts";

/**
 * @description successful request
 */
export const financialBankDeposites200Schema = bankDepositesRespSchema as unknown as ToZod<FinancialBankDeposites200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialBankDeposites400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<FinancialBankDeposites400>

/**
 * @description Invalid username
 */
export const financialBankDeposites401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<FinancialBankDeposites401>

export const financialBankDepositesMutationRequestSchema = bankDepositesReqSchema.nullable() as unknown as ToZod<FinancialBankDepositesMutationRequest>

export const financialBankDepositesMutationResponseSchema = financialBankDeposites200Schema as unknown as ToZod<FinancialBankDepositesMutationResponse>