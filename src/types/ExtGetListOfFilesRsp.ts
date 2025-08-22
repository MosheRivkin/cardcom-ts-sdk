import type { ExtUpdateTokens } from "./ExtUpdateTokens.ts";

/**
 * @description List of new Token to update
*/
export type ExtGetListOfFilesRsp = {
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
    /**
     * @description Tokens list
     * @type array
    */
    UpdateList?: ExtUpdateTokens[] | null;
};