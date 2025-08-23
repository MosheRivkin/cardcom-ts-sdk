import type { MeagedGetCompanyInfoResponse } from './MeagedGetCompanyInfoResponse.ts'
import type { MeagedGetCompanyInfoReuqest } from './MeagedGetCompanyInfoReuqest.ts'

/**
 * @description successful request
 */
export type CompanyOperationsMeagedGetCompanyInfo200 = MeagedGetCompanyInfoResponse

export type CompanyOperationsMeagedGetCompanyInfoMutationRequest = MeagedGetCompanyInfoReuqest | null

export type CompanyOperationsMeagedGetCompanyInfoMutationResponse = CompanyOperationsMeagedGetCompanyInfo200

export type CompanyOperationsMeagedGetCompanyInfoMutation = {
  Response: CompanyOperationsMeagedGetCompanyInfo200
  Request: CompanyOperationsMeagedGetCompanyInfoMutationRequest
  Errors: any
}