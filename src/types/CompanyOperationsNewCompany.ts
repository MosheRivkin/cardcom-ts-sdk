import type { AcquiredCompanyAccount } from "./AcquiredCompanyAccount.ts";
import type { ErrorInfo } from "./ErrorInfo.ts";
import type { OpenNewCompanyResponse } from "./OpenNewCompanyResponse.ts";

/**
 * @description successful request
*/
export type CompanyOperationsNewCompany200 = OpenNewCompanyResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type CompanyOperationsNewCompany400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type CompanyOperationsNewCompany401 = ErrorInfo;

export type CompanyOperationsNewCompanyMutationRequest = AcquiredCompanyAccount | null;

export type CompanyOperationsNewCompanyMutationResponse = CompanyOperationsNewCompany200;

export type CompanyOperationsNewCompanyMutation = {
    Response: CompanyOperationsNewCompany200;
    Request: CompanyOperationsNewCompanyMutationRequest;
    Errors: CompanyOperationsNewCompany400 | CompanyOperationsNewCompany401;
};