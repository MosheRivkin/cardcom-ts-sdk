import type { AcquiredCompanyAccount } from "./AcquiredCompanyAccount.ts";
import type { ErrorInfo } from "./ErrorInfo.ts";
import type { OpenNewCompanyResponse } from "./OpenNewCompanyResponse.ts";

/**
 * @description successful request
*/
export type CompanyOperationsCloseCompany200 = OpenNewCompanyResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type CompanyOperationsCloseCompany400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type CompanyOperationsCloseCompany401 = ErrorInfo;

export type CompanyOperationsCloseCompanyMutationRequest = AcquiredCompanyAccount | null;

export type CompanyOperationsCloseCompanyMutationResponse = CompanyOperationsCloseCompany200;

export type CompanyOperationsCloseCompanyMutation = {
    Response: CompanyOperationsCloseCompany200;
    Request: CompanyOperationsCloseCompanyMutationRequest;
    Errors: CompanyOperationsCloseCompany400 | CompanyOperationsCloseCompany401;
};