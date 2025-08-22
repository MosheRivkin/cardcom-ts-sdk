/**
 * @description Get transaction info request
*/
export type TransactionInfoRequest = {
    /**
     * @description Terminal Number for authentication
     * @type integer, int32
    */
    TerminalNumber: number;
    /**
     * @description API Name for authentication
     * @minLength 1
     * @type string
    */
    UserName: string;
    /**
     * @description API Password for authentication
     * @minLength 1
     * @type string
    */
    UserPassword: string;
    /**
     * @description InternalDealNumber to search
     * @type integer, int64
    */
    InternalDealNumber: number;
};