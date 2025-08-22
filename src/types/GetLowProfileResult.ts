/**
 * @description Get iframe \\ redirect result
*/
export type GetLowProfileResult = {
    /**
     * @description Cardcom terminal number
     * @type integer, int32
    */
    TerminalNumber: number;
    /**
     * @description Api Name for authentication
     * @minLength 1
     * @type string
    */
    ApiName: string;
    /**
     * @description The unique Id of the low profile transaction
     * @minLength 1
     * @type string, guid
    */
    LowProfileId: string;
};