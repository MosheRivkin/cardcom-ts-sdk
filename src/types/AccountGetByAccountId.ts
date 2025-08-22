import type { ErrorInfo } from "./ErrorInfo.ts";
import type { GetAccountById } from "./GetAccountById.ts";
import type { GetAccountByIdResponse } from "./GetAccountByIdResponse.ts";

/**
 * @description successful request
*/
export type AccountGetByAccountId200 = GetAccountByIdResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type AccountGetByAccountId400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type AccountGetByAccountId401 = ErrorInfo;

export type AccountGetByAccountIdMutationRequest = GetAccountById | null;

export type AccountGetByAccountIdMutationResponse = AccountGetByAccountId200;

export type AccountGetByAccountIdMutation = {
    Response: AccountGetByAccountId200;
    Request: AccountGetByAccountIdMutationRequest;
    Errors: AccountGetByAccountId400 | AccountGetByAccountId401;
};