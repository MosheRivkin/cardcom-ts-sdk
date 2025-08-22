import type { CompanyOperationsError } from "./CompanyOperationsError.ts";
import type { ErrorInfo } from "./ErrorInfo.ts";
import type { HttpStatusCode } from "./HttpStatusCode.ts";

export type RSContent = (ErrorInfo & {
    /**
     * @type array
    */
    DocumentsErrorResults?: CompanyOperationsError[] | null;
    /**
     * @type array
    */
    KycErrorResults?: CompanyOperationsError[] | null;
    /**
     * @type array
    */
    CompanyErrorResults?: CompanyOperationsError[] | null;
    /**
     * @type array
    */
    UserErrorResults?: CompanyOperationsError[] | null;
    /**
     * @type string, guid
    */
    CompanyInternalID?: string | null;
    /**
     * @type integer, int32
    */
    TerminalNumber?: number | null;
    /**
     * @type string
    */
    APIUserName?: string | null;
    /**
     * @type string
    */
    APISecret?: string | null;
    /**
     * @type array
    */
    ModulesList?: string[] | null;
    /**
     * @type integer | undefined
    */
    Request?: HttpStatusCode;
    /**
     * @type boolean | undefined
    */
    IsDone?: boolean;
});