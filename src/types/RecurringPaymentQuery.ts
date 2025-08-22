export type RecurringPaymentQuery = {
    /**
     * @description API User Name
     * @type string
    */
    apiUserName?: string | null;
    /**
     * @description API Password
     * @type string
    */
    apiPassword?: string | null;
    /**
     * @type integer, int32
    */
    AccountId?: number | null;
    /**
     * @type integer, int32
    */
    RecurringId?: number | null;
};