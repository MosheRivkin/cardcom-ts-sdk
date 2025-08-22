export type BankDeposites = {
    /**
     * @description uniq deposite id
     * @type integer | undefined, int32
    */
    Id?: number;
    /**
     * @description Deposite date
     * @type string | undefined, date-time
    */
    DepositeAt?: string;
    /**
     * @description Sapak Number
     * @type integer | undefined, int32
    */
    SapakNumber?: number;
    /**
     * @description Deposite amount
     * @type number | undefined, decimal
    */
    Amount?: number;
    /**
     * @description Israel bank Number
     * @type integer | undefined, int32
    */
    BankNumber?: number;
    /**
     * @description Israel Branch Number
     * @type integer | undefined, int32
    */
    BranchNumber?: number;
    /**
     * @description Israel Account number
     * @type integer | undefined, int32
    */
    AccountNumber?: number;
    /**
     * @description deposit currency
     * @type integer | undefined, int32
    */
    Currency?: number;
};