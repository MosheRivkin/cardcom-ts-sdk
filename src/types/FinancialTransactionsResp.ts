import type { FinancialTransactions } from "./FinancialTransactions.ts";

export type FinancialTransactionsResp = {
    /**
     * @description if equel zero then success , else , a develper error see Description for more info
     * @type integer | undefined, int32
    */
    ResponseCode?: number;
    /**
     * @description Description of the ResponseCode
     * @maxLength 250
     * @type string
    */
    Description?: string | null;
    /**
     * @type integer | undefined, int32
    */
    Page?: number;
    /**
     * @type integer | undefined, int32
    */
    Page_size?: number;
    /**
     * @description Financial Transactions
     * @type array
    */
    FinancialTransactions?: FinancialTransactions[] | null;
};