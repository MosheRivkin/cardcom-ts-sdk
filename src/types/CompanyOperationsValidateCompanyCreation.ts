import type { AcquiredCompanyAccountWithDocuments } from './AcquiredCompanyAccountWithDocuments.ts'
import type { RSContent } from './RSContent.ts'

/**
 * @description successful request
 */
export type CompanyOperationsValidateCompanyCreation200 = RSContent

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type CompanyOperationsValidateCompanyCreation400 = RSContent

/**
 * @description Invalid username
 */
export type CompanyOperationsValidateCompanyCreation401 = RSContent

export type CompanyOperationsValidateCompanyCreationMutationRequest = AcquiredCompanyAccountWithDocuments | null

export type CompanyOperationsValidateCompanyCreationMutationResponse = CompanyOperationsValidateCompanyCreation200

export type CompanyOperationsValidateCompanyCreationMutation = {
  Response: CompanyOperationsValidateCompanyCreation200
  Request: CompanyOperationsValidateCompanyCreationMutationRequest
  Errors: CompanyOperationsValidateCompanyCreation400 | CompanyOperationsValidateCompanyCreation401
}