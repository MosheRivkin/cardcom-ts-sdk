/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  CompanyOperationsNewCompanyMutationRequest,
  CompanyOperationsNewCompanyMutationResponse,
  CompanyOperationsNewCompany400,
  CompanyOperationsNewCompany401,
} from '../../types/CompanyOperationsNewCompany.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  companyOperationsNewCompanyMutationResponseSchema,
  companyOperationsNewCompanyMutationRequestSchema,
} from '../../zod/companyOperations/company-operations-new-company-schema.ts'

function getCompanyOperationsNewCompanyUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/NewCompany"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/CompanyOperations/NewCompany"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/CompanyOperations/NewCompany` as const }
  return res
}

/**
 * @description RecruitmentSystem operations
 * @summary New company
 * {@link /api/v11/CompanyOperations/NewCompany}
 */
export async function companyOperationsNewCompany(
  { data }: { data?: CompanyOperationsNewCompanyMutationRequest },
  config: Partial<RequestConfig<CompanyOperationsNewCompanyMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; CompanyInternalID?: string | null | undefined; TerminalNumber?: number | null | undefined; APIUserName?: string | null | undefined; APISecret?: string | null | undefined; ModulesList?: string[] | null | undefined; UpayAPIKey?: string | null | undefined; ShowErrorToEndUser?: boolean | undefined; CardComSapakNumber?: string | null | undefined; CompanyNumber?: number | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { SupplierUserName: string; SupplierPassword: string; Secret: string; CompanyInfo?: { BusinessRegistrationNumber: string; Name: string; Activity?: string | null | undefined; ContactPerson?: string | null | undefined; Email?: string | null | undefined; Fax?: string | null | undefined; PhoneNumber?: string | null | undefined; MobilePhone?: string | null | undefined; ZipCode?: string | null | undefined; IsVatFreeCompany?: boolean | undefined; Citizenship?: import("src/index").Citizenship | undefined; CompanyInternalID?: string | null | undefined; NameEng?: string | null | undefined; CityCode?: number | null | undefined; StreetCode?: number | null | undefined; HouseNumber?: string | null | undefined; WebSiteUrl?: string | null | undefined; Entrance?: string | null | undefined; CountryCode?: number | undefined; NameLegalCorporation?: string | null | undefined; AgreementInfo?: { AgreementId?: number | undefined; } | null | undefined; } | null | undefined; UserInfo?: { IdentityNumber: string; LogInName: string; StreetCode?: number | undefined; CityCode?: number | undefined; Email?: string | null | undefined; LogInPassword?: string | null | undefined; FirstName?: string | null | undefined; Fax?: string | null | undefined; PhoneNumber?: string | null | undefined; MobilePhone?: string | null | undefined; ZipCode?: string | null | undefined; LastName?: string | null | undefined; BirthDate?: string | null | undefined; Gender?: (import("src/index").Gender | null) | undefined; IdentityIssueDate?: string | null | undefined; PassportIssueCountryCode?: number | undefined; IdIssueDateOrPassportIDTypes?: (import("src/index").HumanIDTypes | null) | undefined; PersonalIdentificationCode?: string | null | undefined; } | null | undefined; TerminalInfo?: { BankCode?: string | null | undefined; BankBranchCode?: string | null | undefined; BankAccountNumber?: string | null | undefined; ModuleList?: { ModuleID?: string | null | undefined; }[] | null | undefined; } | null | undefined; KycInfo?: { KycInfoGeneric?: { CountriesTargetedMarket?: string | null | undefined; NamesOfRelatedBusinesses?: string | null | undefined; ExpectedPercentagePaymentOfOnePayment?: number | null | undefined; ExpectedPercentageOfPaymentTransactions?: number | null | undefined; ExpectedPercentageOfCreditPaymentTransactions?: number | null | undefined; ExpectedPercentageOfTouristTransactions?: number | null | undefined; ExpectedPaymentNumberForAverageTransaction?: number | null | undefined; SalePlatform?: (import("src/index").SalePlatform | null) | undefined; SalePlatforms?: import("src/index").SalePlatform2[] | null | undefined; IsPaymentsFacilitator?: boolean | null | undefined; IsBusinessFacilitateCashWithdrawls?: boolean | null | undefined; IsBusinessFacilitateVoucherOrRechargingCardsSales?: boolean | null | undefined; IsBusinessFacilitateCreditForTransactionsOutsideBusinessScope?: boolean | null | undefined; IsBusinessPlaceCashRegistersInOtherBusinesses?: boolean | null | undefined; TypeOfPlannedService?: string | null | undefined; MinimumAmountOfCreditTransaction?: number | null | undefined; MaximumAmountOfCreditTransaction?: number | null | undefined; IsTheBusinessSeasonal?: boolean | null | undefined; IsTheBusinessPreviouslyClearedCreditCards?: boolean | null | undefined; NumberOfYearsBusinessHasInClrearance?: number | null | undefined; ExpectedStoreSupplyDeliverySchedule?: (import("src/index").ExpectedStoreSupplyDeliverySchedule | null) | undefined; TimeTillProductShips?: number | null | undefined; AvarageTransactionAmountInCreditCard?: number | null | undefined; EstimatedMonthlyTransactionAmount?: number | null | undefined; IsBusinessBeenDeniedActionVersusBankingCorporation?: boolean | null | undefined; GeneralBusinessFieldMccCode?: number | null | undefined; SpecifiedBusinessFieldMccCode?: number | null | undefined; TypeOfRecruitment?: (import("src/index").TypeOfRecruitment | null) | undefined; } | null | undefined; KycInfoOsekMurshe?: { IsOwnerAddressDifferentFromBusinessAddress?: boolean | null | undefined; BusinessOwnerHomeNumber?: string | null | undefined; BusinessOwnerEntranceNumber?: string | null | undefined; BusinessOwnerStreetCode?: number | null | undefined; BusinessOwnerCityCode?: number | null | undefined; BusinessOwnerZipCode?: string | null | undefined; MotherMaidenName?: string | null | undefined; } | null | undefined; } | null | undefined; } | null = companyOperationsNewCompanyMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").OpenNewCompanyResponse> = await request<
    CompanyOperationsNewCompanyMutationResponse,
    ResponseErrorConfig<CompanyOperationsNewCompany400 | CompanyOperationsNewCompany401>,
    CompanyOperationsNewCompanyMutationRequest
  >({ method: 'POST', url: getCompanyOperationsNewCompanyUrl().url.toString(), data: requestData, ...requestConfig })
  return companyOperationsNewCompanyMutationResponseSchema.parse(res.data)
}