import type { DocumentsInfo } from "./DocumentsInfo.ts";

export type AcquiredCompanyAccountFileUpload = {
    /**
     * @description Document for upload
     * @type array
    */
    DocumentsInfo?: DocumentsInfo[] | null;
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
     * @description CompanyInternalID
     * @minLength 1
     * @type string, guid
    */
    CompanyInternalID: string;
};