import type { ErrorInfo } from "./ErrorInfo.ts";
import type { TransactionInfo } from "./TransactionInfo.ts";
import type { TransactionReq } from "./TransactionReq.ts";

/**
 * @description successful request, see \'ResponseCode\' if request succeeded
*/
export type TransactionsTransaction200 = TransactionInfo;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type TransactionsTransaction400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type TransactionsTransaction401 = ErrorInfo;

export type TransactionsTransactionMutationRequest = TransactionReq | null;

export type TransactionsTransactionMutationResponse = TransactionsTransaction200;

export type TransactionsTransactionMutation = {
    Response: TransactionsTransaction200;
    Request: TransactionsTransactionMutationRequest;
    Errors: TransactionsTransaction400 | TransactionsTransaction401;
};