import type { BanksBranches } from "./BanksBranches.ts";

export type CompanyOperationsGetBanksBranchesQueryParams = {
    /**
     * @type string
    */
    SupplierUserName: string | null;
    /**
     * @type string
    */
    secret: string | null;
    /**
     * @type integer, int32
    */
    bankNumber: number;
};

/**
 * @description successful request
*/
export type CompanyOperationsGetBanksBranches200 = BanksBranches[];

/**
 * @description Invalid username
*/
export type CompanyOperationsGetBanksBranches401 = string;

export type CompanyOperationsGetBanksBranchesQueryResponse = CompanyOperationsGetBanksBranches200;

export type CompanyOperationsGetBanksBranchesQuery = {
    Response: CompanyOperationsGetBanksBranches200;
    QueryParams: CompanyOperationsGetBanksBranchesQueryParams;
    Errors: CompanyOperationsGetBanksBranches401;
};