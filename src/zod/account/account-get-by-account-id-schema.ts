import type { AccountGetByAccountId200, AccountGetByAccountId400, AccountGetByAccountId401, AccountGetByAccountIdMutationRequest, AccountGetByAccountIdMutationResponse } from "../../types/AccountGetByAccountId.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { errorInfoSchema } from "../error-info-schema.ts";
import { getAccountByIdResponseSchema } from "../get-account-by-id-response-schema.ts";
import { getAccountByIdSchema } from "../get-account-by-id-schema.ts";

/**
 * @description successful request
 */
export const accountGetByAccountId200Schema = getAccountByIdResponseSchema.describe("get account by id response") as unknown as ToZod<AccountGetByAccountId200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const accountGetByAccountId400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<AccountGetByAccountId400>

/**
 * @description Invalid username
 */
export const accountGetByAccountId401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<AccountGetByAccountId401>

export const accountGetByAccountIdMutationRequestSchema = getAccountByIdSchema.nullable() as unknown as ToZod<AccountGetByAccountIdMutationRequest>

export const accountGetByAccountIdMutationResponseSchema = accountGetByAccountId200Schema as unknown as ToZod<AccountGetByAccountIdMutationResponse>