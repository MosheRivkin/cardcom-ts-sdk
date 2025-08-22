import type { BankDeposites } from "./BankDeposites.ts";

export type BankDepositesResp = {
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
     * @description BankDeposites
     * @type array
    */
    BankDeposites?: BankDeposites[] | null;
};