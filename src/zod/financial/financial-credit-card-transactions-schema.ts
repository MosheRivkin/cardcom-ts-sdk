import type { FinancialCreditCardTransactions200, FinancialCreditCardTransactions400, FinancialCreditCardTransactions401, FinancialCreditCardTransactionsMutationRequest, FinancialCreditCardTransactionsMutationResponse } from "../../types/FinancialCreditCardTransactions.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { creditCardTransactionsReqSchema } from "../credit-card-transactions-req-schema.ts";
import { creditCardTransactionsRespSchema } from "../credit-card-transactions-resp-schema.ts";
import { errorInfoSchema } from "../error-info-schema.ts";

/**
 * @description successful request
 */
export const financialCreditCardTransactions200Schema = creditCardTransactionsRespSchema as unknown as ToZod<FinancialCreditCardTransactions200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialCreditCardTransactions400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<FinancialCreditCardTransactions400>

/**
 * @description Invalid username
 */
export const financialCreditCardTransactions401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<FinancialCreditCardTransactions401>

export const financialCreditCardTransactionsMutationRequestSchema = creditCardTransactionsReqSchema.nullable() as unknown as ToZod<FinancialCreditCardTransactionsMutationRequest>

export const financialCreditCardTransactionsMutationResponseSchema = financialCreditCardTransactions200Schema as unknown as ToZod<FinancialCreditCardTransactionsMutationResponse>