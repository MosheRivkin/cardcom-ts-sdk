import type { CompanyInfo } from "./CompanyInfo.ts";
import type { KycInfo } from "./KycInfo.ts";
import type { TerminalInfo } from "./TerminalInfo.ts";
import type { UserInfo } from "./UserInfo.ts";

export type AcquiredCompanyAccount = {
    /**
     * @description SupplierUserName
     * @minLength 1
     * @type string
    */
    SupplierUserName: string;
    /**
     * @description SupplierPassword
     * @minLength 1
     * @type string
    */
    SupplierPassword: string;
    /**
     * @description Secret
     * @minLength 1
     * @type string
    */
    Secret: string;
    /**
     * @description Company info
    */
    CompanyInfo?: CompanyInfo | null;
    /**
     * @description User info
    */
    UserInfo?: UserInfo | null;
    /**
     * @description Terminal info
    */
    TerminalInfo?: TerminalInfo | null;
    /**
     * @description Kyc info
    */
    KycInfo?: KycInfo | null;
};