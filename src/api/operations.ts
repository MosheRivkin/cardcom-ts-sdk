/* eslint-disable no-alert, no-console */

export const operations = {
  LowProfile_Create: {
    path: '/api/v11/LowProfile/Create',
    method: 'post',
  },
  LowProfile_GetLpResult: {
    path: '/api/v11/LowProfile/GetLpResult',
    method: 'post',
  },
  RecuringPayments_GetMuhlafimFile: {
    path: '/api/v11/RecuringPayments/GetMuhlafimFile',
    method: 'post',
  },
  RecuringPayments_GetRecurringPayment: {
    path: '/api/v11/RecuringPayments/GetRecurringPayment',
    method: 'get',
  },
  RecuringPayments_GetRecurringPaymentHistory: {
    path: '/api/v11/RecuringPayments/GetRecurringPaymentHistory',
    method: 'get',
  },
  RecuringPayments_GetMuhlafimByDate: {
    path: '/api/v11/RecuringPayments/GetMuhlafimByDate',
    method: 'post',
  },
  RecuringPayments_IsBankNumberValid: {
    path: '/api/v11/RecuringPayments/IsBankNumberValid',
    method: 'get',
  },
  RecuringPayments_ChangeStatusForHistoryRecurringToIrrevocable: {
    path: '/api/v11/RecuringPayments/ChangeStatusForHistoryRecurringToIrrevocable',
    method: 'post',
  },
  Account_GetByAccountId: {
    path: '/api/v11/Account/GetByAccountId',
    method: 'post',
  },
  Transactions_ListTransactions: {
    path: '/api/v11/Transactions/ListTransactions',
    method: 'post',
  },
  Transactions_GetTransactionInfoById: {
    path: '/api/v11/Transactions/GetTransactionInfoById',
    method: 'post',
  },
  Transactions_Transaction: {
    path: '/api/v11/Transactions/Transaction',
    method: 'post',
  },
  Transactions_RefundByTransactionId: {
    path: '/api/v11/Transactions/RefundByTransactionId',
    method: 'post',
  },
  Transactions_SpecialTransactions: {
    path: '/api/v11/Transactions/SpecialTransactions',
    method: 'post',
  },
  Transactions_GetTransactionByExternalUniqTran: {
    path: '/api/v11/Transactions/GetTransactionByExternalUniqTran',
    method: 'post',
  },
  Documents_CreateDocument: {
    path: '/api/v11/Documents/CreateDocument',
    method: 'post',
  },
  Documents_CancelDoc: {
    path: '/api/v11/Documents/CancelDoc',
    method: 'post',
  },
  Documents_SendAllDocumentsToEmail: {
    path: '/api/v11/Documents/SendAllDocumentsToEmail',
    method: 'post',
  },
  Documents_GetReport: {
    path: '/api/v11/Documents/GetReport',
    method: 'post',
  },
  Documents_CrossDocument: {
    path: '/api/v11/Documents/CrossDocument',
    method: 'post',
  },
  Documents_CreateTaxInvoice: {
    path: '/api/v11/Documents/CreateTaxInvoice',
    method: 'post',
  },
  Documents_CreateDocumentUrl: {
    path: '/api/v11/Documents/CreateDocumentUrl',
    method: 'post',
  },
  CompanyOperations_GetCompanyStatus: {
    path: '/api/v11/CompanyOperations/GetCompanyStatus',
    method: 'get',
  },
  CompanyOperations_AddDocumentToCompany: {
    path: '/api/v11/CompanyOperations/AddDocumentToCompany',
    method: 'post',
  },
  CompanyOperations_ValidateCompanyCreation: {
    path: '/api/v11/CompanyOperations/ValidateCompanyCreation',
    method: 'post',
  },
  CompanyOperations_NewCompany: {
    path: '/api/v11/CompanyOperations/NewCompany',
    method: 'post',
  },
  CompanyOperations_CloseCompany: {
    path: '/api/v11/CompanyOperations/CloseCompany',
    method: 'post',
  },
  CompanyOperations_ReOpenCompany: {
    path: '/api/v11/CompanyOperations/ReOpenCompany',
    method: 'post',
  },
  CompanyOperations_GetCities: {
    path: '/api/v11/CompanyOperations/GetCities',
    method: 'get',
  },
  CompanyOperations_GetStreets: {
    path: '/api/v11/CompanyOperations/GetStreets',
    method: 'get',
  },
  CompanyOperations_GetCountries: {
    path: '/api/v11/CompanyOperations/GetCountries',
    method: 'get',
  },
  CompanyOperations_GetBanks: {
    path: '/api/v11/CompanyOperations/GetBanks',
    method: 'get',
  },
  CompanyOperations_GetBanksBranches: {
    path: '/api/v11/CompanyOperations/GetBanksBranches',
    method: 'get',
  },
  CompanyOperations_GetMainMCCs: {
    path: '/api/v11/CompanyOperations/GetMainMCCs',
    method: 'get',
  },
  CompanyOperations_GetSubMCCs: {
    path: '/api/v11/CompanyOperations/GetSubMCCs',
    method: 'get',
  },
  CompanyOperations_MeagedAddCompany: {
    path: '/api/v11/CompanyOperations/MeagedAddCompany',
    method: 'post',
  },
  CompanyOperations_MeagedGetCompanyInfo: {
    path: '/api/v11/CompanyOperations/MeagedGetCompanyInfo',
    method: 'post',
  },
  Financial_CreditCardTransactions: {
    path: '/api/v11/Financial/CreditCardTransactions',
    method: 'post',
  },
  Financial_CreditCardTransactionsHalted: {
    path: '/api/v11/Financial/CreditCardTransactionsHalted',
    method: 'post',
  },
  Financial_FinancialTransactions: {
    path: '/api/v11/Financial/FinancialTransactions',
    method: 'post',
  },
  Financial_BankDeposites: {
    path: '/api/v11/Financial/BankDeposites',
    method: 'post',
  },
  Financial_GetSlikaInvoices: {
    path: '/api/v11/Financial/GetSlikaInvoices',
    method: 'post',
  },
  TapTransactions_PrepareDevice: {
    path: '/api/v11/TapTransactions/PrepareDevice',
    method: 'post',
  },
  TapTransactions_ProcessTransaction: {
    path: '/api/v11/TapTransactions/ProcessTransaction',
    method: 'post',
  },
  TapTransactions_GetTransactions: {
    path: '/api/v11/TapTransactions/GetTransactions',
    method: 'post',
  },
  TapTransactions_GetDevices: {
    path: '/api/v11/TapTransactions/GetDevices',
    method: 'post',
  },
} as const