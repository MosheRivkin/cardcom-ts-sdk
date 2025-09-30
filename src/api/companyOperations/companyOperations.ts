/* eslint-disable no-alert, no-console */

import { companyOperationsAddDocumentToCompany } from './company-operations-add-document-to-company.ts'
import { companyOperationsCloseCompany } from './company-operations-close-company.ts'
import { companyOperationsGetBanksBranches } from './company-operations-get-banks-branches.ts'
import { companyOperationsGetBanks } from './company-operations-get-banks.ts'
import { companyOperationsGetCities } from './company-operations-get-cities.ts'
import { companyOperationsGetCompanyStatus } from './company-operations-get-company-status.ts'
import { companyOperationsGetCountries } from './company-operations-get-countries.ts'
import { companyOperationsGetMainMcCs } from './company-operations-get-main-mc-cs.ts'
import { companyOperationsGetStreets } from './company-operations-get-streets.ts'
import { companyOperationsGetSubMcCs } from './company-operations-get-sub-mc-cs.ts'
import { companyOperationsMeagedAddCompany } from './company-operations-meaged-add-company.ts'
import { companyOperationsMeagedGetCompanyInfo } from './company-operations-meaged-get-company-info.ts'
import { companyOperationsNewCompany } from './company-operations-new-company.ts'
import { companyOperationsReOpenCompany } from './company-operations-re-open-company.ts'
import { companyOperationsValidateCompanyCreation } from './company-operations-validate-company-creation.ts'

export function companyOperations(): { companyOperationsGetCompanyStatus: typeof companyOperationsGetCompanyStatus; companyOperationsAddDocumentToCompany: typeof companyOperationsAddDocumentToCompany; companyOperationsValidateCompanyCreation: typeof companyOperationsValidateCompanyCreation; companyOperationsNewCompany: typeof companyOperationsNewCompany; companyOperationsCloseCompany: typeof companyOperationsCloseCompany; companyOperationsReOpenCompany: typeof companyOperationsReOpenCompany; companyOperationsGetCities: typeof companyOperationsGetCities; companyOperationsGetStreets: typeof companyOperationsGetStreets; companyOperationsGetCountries: typeof companyOperationsGetCountries; companyOperationsGetBanks: typeof companyOperationsGetBanks; companyOperationsGetBanksBranches: typeof companyOperationsGetBanksBranches; companyOperationsGetMainMcCs: typeof companyOperationsGetMainMcCs; companyOperationsGetSubMcCs: typeof companyOperationsGetSubMcCs; companyOperationsMeagedAddCompany: typeof companyOperationsMeagedAddCompany; companyOperationsMeagedGetCompanyInfo: typeof companyOperationsMeagedGetCompanyInfo; } {
  return {
    companyOperationsGetCompanyStatus,
    companyOperationsAddDocumentToCompany,
    companyOperationsValidateCompanyCreation,
    companyOperationsNewCompany,
    companyOperationsCloseCompany,
    companyOperationsReOpenCompany,
    companyOperationsGetCities,
    companyOperationsGetStreets,
    companyOperationsGetCountries,
    companyOperationsGetBanks,
    companyOperationsGetBanksBranches,
    companyOperationsGetMainMcCs,
    companyOperationsGetSubMcCs,
    companyOperationsMeagedAddCompany,
    companyOperationsMeagedGetCompanyInfo,
  }
}