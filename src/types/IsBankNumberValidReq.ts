/**
 * @description Is Bank valid
*/
export type IsBankNumberValidReq = {
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
     * @description Bank number
     * @type integer | undefined, int32
    */
    Bank?: number;
    /**
     * @description Snif
     * @type integer | undefined, int32
    */
    Snif?: number;
    /**
     * @description Bank Account number
     * @type string
    */
    Account?: string | null;
};