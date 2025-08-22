import type { ErrorInfo } from "./ErrorInfo.ts";
import type { SpecialTransactionsReq } from "./SpecialTransactionsReq.ts";
import type { SpecialTransactionsResp } from "./SpecialTransactionsResp.ts";

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
*/
export type TransactionsSpecialTransactions200 = SpecialTransactionsResp;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type TransactionsSpecialTransactions400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type TransactionsSpecialTransactions401 = ErrorInfo;

export type TransactionsSpecialTransactionsMutationRequest = SpecialTransactionsReq | null;

export type TransactionsSpecialTransactionsMutationResponse = TransactionsSpecialTransactions200;

export type TransactionsSpecialTransactionsMutation = {
    Response: TransactionsSpecialTransactions200;
    Request: TransactionsSpecialTransactionsMutationRequest;
    Errors: TransactionsSpecialTransactions400 | TransactionsSpecialTransactions401;
};