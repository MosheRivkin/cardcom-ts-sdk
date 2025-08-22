import type { CrossDocumentToList } from "./CrossDocumentToList.ts";

/**
 * @description the From document number
*/
export type CrossDocumentRequest = {
    /**
     * @description Api Name for authentication
     * @type string | undefined
    */
    ApiName?: string;
    /**
     * @description Api password for authentication
     * @type string | undefined
    */
    ApiPassword?: string;
    /**
     * @description the From document number
     * @type integer | undefined, int32
    */
    FromDocNumber?: number;
    /**
     * @description the From document number
     * @type integer | undefined, int32
    */
    FromDocType?: number;
    /**
     * @description the From document number
     * @type array | undefined
    */
    ToDocumentsList?: CrossDocumentToList[];
};