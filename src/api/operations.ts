/* eslint-disable no-alert, no-console */

export const operations: { readonly LowProfile_Create: { readonly path: "/api/v11/LowProfile/Create"; readonly method: "post"; }; readonly LowProfile_GetLpResult: { readonly path: "/api/v11/LowProfile/GetLpResult"; readonly method: "post"; }; readonly RecuringPayments_GetMuhlafimFile: { readonly path: "/api/v11/RecuringPayments/GetMuhlafimFile"; readonly method: "post"; }; readonly RecuringPayments_GetRecurringPayment: { readonly path: "/api/v11/RecuringPayments/GetRecurringPayment"; readonly method: "get"; }; readonly RecuringPayments_GetRecurringPaymentHistory: { readonly path: "/api/v11/RecuringPayments/GetRecurringPaymentHistory"; readonly method: "get"; }; readonly RecuringPayments_GetMuhlafimByDate: { readonly path: "/api/v11/RecuringPayments/GetMuhlafimByDate"; readonly method: "post"; }; readonly RecuringPayments_IsBankNumberValid: { readonly path: "/api/v11/RecuringPayments/IsBankNumberValid"; readonly method: "get"; }; readonly RecuringPayments_ChangeStatusForHistoryRecurringToIrrevocable: { readonly path: "/api/v11/RecuringPayments/ChangeStatusForHistoryRecurringToIrrevocable"; readonly method: "post"; }; readonly Account_GetByAccountId: { readonly path: "/api/v11/Account/GetByAccountId"; readonly method: "post"; }; readonly Transactions_ListTransactions: { readonly path: "/api/v11/Transactions/ListTransactions"; readonly method: "post"; }; readonly Transactions_GetTransactionInfoById: { readonly path: "/api/v11/Transactions/GetTransactionInfoById"; readonly method: "post"; }; readonly Transactions_Transaction: { readonly path: "/api/v11/Transactions/Transaction"; readonly method: "post"; }; readonly Transactions_RefundByTransactionId: { readonly path: "/api/v11/Transactions/RefundByTransactionId"; readonly method: "post"; }; readonly Transactions_SpecialTransactions: { readonly path: "/api/v11/Transactions/SpecialTransactions"; readonly method: "post"; }; readonly Transactions_GetTransactionByExternalUniqTran: { readonly path: "/api/v11/Transactions/GetTransactionByExternalUniqTran"; readonly method: "post"; }; readonly Documents_CreateDocument: { readonly path: "/api/v11/Documents/CreateDocument"; readonly method: "post"; }; readonly Documents_CancelDoc: { readonly path: "/api/v11/Documents/CancelDoc"; readonly method: "post"; }; readonly Documents_SendAllDocumentsToEmail: { readonly path: "/api/v11/Documents/SendAllDocumentsToEmail"; readonly method: "post"; }; readonly Documents_GetReport: { readonly path: "/api/v11/Documents/GetReport"; readonly method: "post"; }; readonly Documents_CrossDocument: { readonly path: "/api/v11/Documents/CrossDocument"; readonly method: "post"; }; readonly Documents_CreateTaxInvoice: { readonly path: "/api/v11/Documents/CreateTaxInvoice"; readonly method: "post"; }; readonly Documents_CreateDocumentUrl: { readonly path: "/api/v11/Documents/CreateDocumentUrl"; readonly method: "post"; }; readonly CompanyOperations_GetCompanyStatus: { readonly path: "/api/v11/CompanyOperations/GetCompanyStatus"; readonly method: "get"; }; readonly CompanyOperations_AddDocumentToCompany: { readonly path: "/api/v11/CompanyOperations/AddDocumentToCompany"; readonly method: "post"; }; readonly CompanyOperations_ValidateCompanyCreation: { readonly path: "/api/v11/CompanyOperations/ValidateCompanyCreation"; readonly method: "post"; }; readonly CompanyOperations_NewCompany: { readonly path: "/api/v11/CompanyOperations/NewCompany"; readonly method: "post"; }; readonly CompanyOperations_CloseCompany: { readonly path: "/api/v11/CompanyOperations/CloseCompany"; readonly method: "post"; }; readonly CompanyOperations_ReOpenCompany: { readonly path: "/api/v11/CompanyOperations/ReOpenCompany"; readonly method: "post"; }; readonly CompanyOperations_GetCities: { readonly path: "/api/v11/CompanyOperations/GetCities"; readonly method: "get"; }; readonly CompanyOperations_GetStreets: { readonly path: "/api/v11/CompanyOperations/GetStreets"; readonly method: "get"; }; readonly CompanyOperations_GetCountries: { readonly path: "/api/v11/CompanyOperations/GetCountries"; readonly method: "get"; }; readonly CompanyOperations_GetBanks: { readonly path: "/api/v11/CompanyOperations/GetBanks"; readonly method: "get"; }; readonly CompanyOperations_GetBanksBranches: { readonly path: "/api/v11/CompanyOperations/GetBanksBranches"; readonly method: "get"; }; readonly CompanyOperations_GetMainMCCs: { readonly path: "/api/v11/CompanyOperations/GetMainMCCs"; readonly method: "get"; }; readonly CompanyOperations_GetSubMCCs: { readonly path: "/api/v11/CompanyOperations/GetSubMCCs"; readonly method: "get"; }; readonly CompanyOperations_MeagedAddCompany: { readonly path: "/api/v11/CompanyOperations/MeagedAddCompany"; readonly method: "post"; }; readonly CompanyOperations_MeagedGetCompanyInfo: { readonly path: "/api/v11/CompanyOperations/MeagedGetCompanyInfo"; readonly method: "post"; }; readonly Financial_CreditCardTransactions: { readonly path: "/api/v11/Financial/CreditCardTransactions"; readonly method: "post"; }; readonly Financial_CreditCardTransactionsHalted: { readonly path: "/api/v11/Financial/CreditCardTransactionsHalted"; readonly method: "post"; }; readonly Financial_FinancialTransactions: { readonly path: "/api/v11/Financial/FinancialTransactions"; readonly method: "post"; }; readonly Financial_BankDeposites: { readonly path: "/api/v11/Financial/BankDeposites"; readonly method: "post"; }; readonly Financial_GetSlikaInvoices: { readonly path: "/api/v11/Financial/GetSlikaInvoices"; readonly method: "post"; }; readonly TapTransactions_PrepareDevice: { readonly path: "/api/v11/TapTransactions/PrepareDevice"; readonly method: "post"; }; readonly TapTransactions_ProcessTransaction: { readonly path: "/api/v11/TapTransactions/ProcessTransaction"; readonly method: "post"; }; readonly TapTransactions_GetTransactions: { readonly path: "/api/v11/TapTransactions/GetTransactions"; readonly method: "post"; }; readonly TapTransactions_GetDevices: { readonly path: "/api/v11/TapTransactions/GetDevices"; readonly method: "post"; }; } = {
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