import type { ListTransactionStatus } from "./ListTransactionStatus.ts";

/**
 * @description list transactions request
*/
export type ListTransactionsReq = {
    /**
     * @description Api Name for authentication
     * @minLength 1
     * @type string
    */
    ApiName: string;
    /**
     * @description Api password for authentication
     * @minLength 1
     * @type string
    */
    ApiPassword: string;
    /**
     * @description Form Date DDMMYYYY
     * @minLength 1
     * @type string
    */
    FromDate: string;
    /**
     * @description To Date DDMMYYYY
     * @minLength 1
     * @type string
    */
    ToDate: string;
    /**
     * @description status of transaction to return , default - Completed
     * @default "Success"
    */
    TranStatus?: ListTransactionStatus;
    /**
     * @description page from 1
     * @type integer, int32
    */
    Page: number;
    /**
     * @description page size 10 - 2000
     * @type integer, int32
    */
    Page_size: number;
    /**
     * @description return only transaction for a specific terminal in this company
     * @type integer, int32
    */
    LimitForTerminal?: number | null;
};