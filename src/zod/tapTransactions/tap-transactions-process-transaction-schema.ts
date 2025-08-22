import type { TapTransactionsProcessTransaction200, TapTransactionsProcessTransaction400, TapTransactionsProcessTransaction401, TapTransactionsProcessTransactionMutationRequest, TapTransactionsProcessTransactionMutationResponse } from "../../types/TapTransactionsProcessTransaction.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { errorInfoSchema } from "../error-info-schema.ts";
import { processTransactionRequestSchema } from "../process-transaction-request-schema.ts";
import { processTransactionResponseSchema } from "../process-transaction-response-schema.ts";

/**
 * @description Successful request
 */
export const tapTransactionsProcessTransaction200Schema = processTransactionResponseSchema as unknown as ToZod<TapTransactionsProcessTransaction200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const tapTransactionsProcessTransaction400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<TapTransactionsProcessTransaction400>

/**
 * @description Invalid username
 */
export const tapTransactionsProcessTransaction401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<TapTransactionsProcessTransaction401>

export const tapTransactionsProcessTransactionMutationRequestSchema = processTransactionRequestSchema.nullable() as unknown as ToZod<TapTransactionsProcessTransactionMutationRequest>

export const tapTransactionsProcessTransactionMutationResponseSchema = tapTransactionsProcessTransaction200Schema as unknown as ToZod<TapTransactionsProcessTransactionMutationResponse>