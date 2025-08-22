import type { TransactionsGetTransactionInfoById200, TransactionsGetTransactionInfoById400, TransactionsGetTransactionInfoById401, TransactionsGetTransactionInfoByIdMutationRequest, TransactionsGetTransactionInfoByIdMutationResponse } from "../../types/TransactionsGetTransactionInfoById.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { errorInfoSchema } from "../error-info-schema.ts";
import { extShvaParamsSchema } from "../ext-shva-params-schema.ts";
import { transactionInfoRequestSchema } from "../transaction-info-request-schema.ts";
import { z } from "zod";

/**
 * @description successful request
 */
export const transactionsGetTransactionInfoById200Schema = z.array(extShvaParamsSchema) as unknown as ToZod<TransactionsGetTransactionInfoById200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const transactionsGetTransactionInfoById400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<TransactionsGetTransactionInfoById400>

/**
 * @description Invalid username
 */
export const transactionsGetTransactionInfoById401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<TransactionsGetTransactionInfoById401>

export const transactionsGetTransactionInfoByIdMutationRequestSchema = transactionInfoRequestSchema.nullable() as unknown as ToZod<TransactionsGetTransactionInfoByIdMutationRequest>

export const transactionsGetTransactionInfoByIdMutationResponseSchema = transactionsGetTransactionInfoById200Schema as unknown as ToZod<TransactionsGetTransactionInfoByIdMutationResponse>