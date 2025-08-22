import type { RSContent } from "./RSContent.ts";

export type CompanyOperationsGetCompanyStatusQueryParams = {
    /**
     * @type integer, int32
    */
    companyNumber: number;
    /**
     * @type integer, int32
    */
    terminalNumber: number;
};

/**
 * @description successful request
*/
export type CompanyOperationsGetCompanyStatus200 = RSContent;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type CompanyOperationsGetCompanyStatus400 = RSContent;

/**
 * @description Invalid username
*/
export type CompanyOperationsGetCompanyStatus401 = RSContent;

export type CompanyOperationsGetCompanyStatusQueryResponse = CompanyOperationsGetCompanyStatus200;

export type CompanyOperationsGetCompanyStatusQuery = {
    Response: CompanyOperationsGetCompanyStatus200;
    QueryParams: CompanyOperationsGetCompanyStatusQueryParams;
    Errors: CompanyOperationsGetCompanyStatus400 | CompanyOperationsGetCompanyStatus401;
};