export type FinancialTransactionsReq = {
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
     * @description Form Create Date DDMMYYYY
     * @type string
    */
    FromCreateDate?: string | null;
    /**
     * @description To Create Date DDMMYYYY
     * @type string
    */
    ToCreateDate?: string | null;
    /**
     * @description Will return transaction that have bean depisited in the fron to dates
     * @type boolean
    */
    AddDepositedTransaction?: boolean | null;
    /**
     * @description page,  from 1
     * @type integer, int32
    */
    Page: number;
    /**
     * @description BankDepositeId
     * @type integer | undefined, int32
    */
    BankDepositeId?: number;
    /**
     * @description page size, 10 - 2000
     * @type integer, int32
    */
    Page_size: number;
};