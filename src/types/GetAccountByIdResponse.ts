import type { Account } from "./Account.ts";

/**
 * @description get account by id response
*/
export type GetAccountByIdResponse = {
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
     * @description Account inforamtion
    */
    Account?: Account | null;
};