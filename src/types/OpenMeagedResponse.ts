import type { SapakStatus } from "./SapakStatus.ts";

export type OpenMeagedResponse = {
    /**
     * @description SapakNumber stats
    */
    SapakStatus?: SapakStatus;
    /**
     * @description Sapak Number for compoany
     * @type integer, int32
    */
    SapakNumber?: number | null;
    /**
     * @description Developer Error See InputErrorDescription for information, do not show this to the end user
     * @type boolean | undefined
    */
    IsDevError?: boolean;
    /**
     * @description Is one of the input values is invalid
     * @type boolean | undefined
    */
    IsInputError?: boolean;
    /**
     * @description if equel zero then success , else , a develper error see Description for more info
     * @type integer | undefined, int32
    */
    ResponseCode?: number;
    /**
     * @description Description of the ResponseCode
     * @type string
    */
    Description?: string | null;
    /**
     * @description for the developer to know what porp is invalid
     * @type string
    */
    InputErrorPropName?: string | null;
};