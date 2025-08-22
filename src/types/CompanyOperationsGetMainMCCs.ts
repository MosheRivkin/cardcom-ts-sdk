import type { MCCDBsMAIN } from "./MCCDBsMAIN.ts";

export type CompanyOperationsGetMainMCCsQueryParams = {
    /**
     * @type string
    */
    SupplierUserName: string | null;
    /**
     * @type string
    */
    secret: string | null;
};

/**
 * @description successful request
*/
export type CompanyOperationsGetMainMCCs200 = MCCDBsMAIN[];

/**
 * @description Invalid username
*/
export type CompanyOperationsGetMainMCCs401 = string;

export type CompanyOperationsGetMainMCCsQueryResponse = CompanyOperationsGetMainMCCs200;

export type CompanyOperationsGetMainMCCsQuery = {
    Response: CompanyOperationsGetMainMCCs200;
    QueryParams: CompanyOperationsGetMainMCCsQueryParams;
    Errors: CompanyOperationsGetMainMCCs401;
};