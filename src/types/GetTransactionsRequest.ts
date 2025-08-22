export type GetTransactionsRequest = {
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
     * @description Terminal number at Cardcom
     * @type integer, int32
    */
    TerminalNumber: number;
    /**
     * @description Date for a search from a specific date
     * @minLength 1
     * @type string, date-time
    */
    FromDate: string;
    /**
     * @description Date for searching up to a specific date
     * @minLength 1
     * @type string, date-time
    */
    ToDate: string;
};