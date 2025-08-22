import type { CreditCardTransaction } from "./CreditCardTransaction.ts";

export type CreditCardTransactionsResp = {
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
     * @description page, from 1
     * @type integer, int32
    */
    Page: number;
    /**
     * @description page size, 10 - 2000
     * @type integer, int32
    */
    Page_size: number;
    /**
     * @type array
    */
    CreditCardTransactions?: CreditCardTransaction[] | null;
};