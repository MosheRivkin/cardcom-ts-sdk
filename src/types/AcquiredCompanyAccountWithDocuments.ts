import type { AcquiredCompanyAccount } from "./AcquiredCompanyAccount.ts";
import type { DocumentsInfo } from "./DocumentsInfo.ts";

export type AcquiredCompanyAccountWithDocuments = {
    /**
     * @description Document object
     * @type array
    */
    DocumentsInfos?: DocumentsInfo[] | null;
    /**
     * @description General info object
    */
    AcquiredCompanyAccount?: AcquiredCompanyAccount | null;
};