import type { AcquiredCompanyAccount } from './AcquiredCompanyAccount.ts'
import type { ErrorInfo } from './ErrorInfo.ts'
import type { OpenNewCompanyResponse } from './OpenNewCompanyResponse.ts'

/**
 * @description successful request
 */
export type CompanyOperationsReOpenCompany200 = OpenNewCompanyResponse

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type CompanyOperationsReOpenCompany400 = ErrorInfo

/**
 * @description Invalid username
 */
export type CompanyOperationsReOpenCompany401 = ErrorInfo

export type CompanyOperationsReOpenCompanyMutationRequest = AcquiredCompanyAccount | null

export type CompanyOperationsReOpenCompanyMutationResponse = CompanyOperationsReOpenCompany200

export type CompanyOperationsReOpenCompanyMutation = {
  Response: CompanyOperationsReOpenCompany200
  Request: CompanyOperationsReOpenCompanyMutationRequest
  Errors: CompanyOperationsReOpenCompany400 | CompanyOperationsReOpenCompany401
}