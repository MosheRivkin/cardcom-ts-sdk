export type CreditCardTransactionsReq = {
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
     * @minLength 1
     * @type string
    */
    FromCreateDate: string;
    /**
     * @description To Create Date DDMMYYYY
     * @minLength 1
     * @type string
    */
    ToCreateDate: string;
    /**
     * @description page,  from 1
     * @type integer, int32
    */
    Page: number;
    /**
     * @description page size, 10 - 2000
     * @type integer, int32
    */
    Page_size: number;
};