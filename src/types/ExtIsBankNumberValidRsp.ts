/**
 * @description Is Bank valid
*/
export type ExtIsBankNumberValidRsp = {
    /**
     * @description Response code , if it equel to zero than all is OK , else error see Description
     * @type integer | undefined, int32
    */
    ResponseCode?: number;
    /**
     * @description Description for errors only
     * @type string
    */
    Description?: string | null;
};