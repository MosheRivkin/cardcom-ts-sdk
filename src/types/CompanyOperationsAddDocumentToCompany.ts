import type { AcquiredCompanyAccountFileUpload } from './AcquiredCompanyAccountFileUpload.ts'
import type { ErrorInfo } from './ErrorInfo.ts'
import type { OpenNewCompanyResponse } from './OpenNewCompanyResponse.ts'

/**
 * @description successful request
 */
export type CompanyOperationsAddDocumentToCompany200 = OpenNewCompanyResponse

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type CompanyOperationsAddDocumentToCompany400 = ErrorInfo

/**
 * @description Invalid username
 */
export type CompanyOperationsAddDocumentToCompany401 = ErrorInfo

export type CompanyOperationsAddDocumentToCompanyMutationRequest = AcquiredCompanyAccountFileUpload | null

export type CompanyOperationsAddDocumentToCompanyMutationResponse = CompanyOperationsAddDocumentToCompany200

export type CompanyOperationsAddDocumentToCompanyMutation = {
  Response: CompanyOperationsAddDocumentToCompany200
  Request: CompanyOperationsAddDocumentToCompanyMutationRequest
  Errors: CompanyOperationsAddDocumentToCompany400 | CompanyOperationsAddDocumentToCompany401
}