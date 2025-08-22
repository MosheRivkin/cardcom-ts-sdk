
import { lowProfileCreate } from "@//api/lowProfile/low-profile-create.ts"
import { lowProfileGetLpResult } from "@//api/lowProfile/low-profile-get-lp-result.ts"
import { recuringPaymentsGetMuhlafimFile } from "@//api/recuringPayments/recuring-payments-get-muhlafim-file.ts"
import { recuringPaymentsGetRecurringPayment } from "@//api/recuringPayments/recuring-payments-get-recurring-payment.ts"
import { recuringPaymentsGetRecurringPaymentHistory } from "@//api/recuringPayments/recuring-payments-get-recurring-payment-history.ts"
import { recuringPaymentsGetMuhlafimByDate } from "@//api/recuringPayments/recuring-payments-get-muhlafim-by-date.ts"
import { recuringPaymentsIsBankNumberValid } from "@//api/recuringPayments/recuring-payments-is-bank-number-valid.ts"
import { recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable } from "@//api/recuringPayments/recuring-payments-change-status-for-history-recurring-to-irrevocable.ts"
import { accountGetByAccountId } from "@//api/account/account-get-by-account-id.ts"
import { transactionsListTransactions } from "@//api/transactions/transactions-list-transactions.ts"
import { transactionsGetTransactionInfoById } from "@//api/transactions/transactions-get-transaction-info-by-id.ts"
import { transactionsTransaction } from "@//api/transactions/transactions-transaction.ts"
import { transactionsRefundByTransactionId } from "@//api/transactions/transactions-refund-by-transaction-id.ts"
import { transactionsSpecialTransactions } from "@//api/transactions/transactions-special-transactions.ts"
import { transactionsGetTransactionByExternalUniqTran } from "@//api/transactions/transactions-get-transaction-by-external-uniq-tran.ts"
import { documentsCreateDocument } from "@//api/documents/documents-create-document.ts"
import { documentsCancelDoc } from "@//api/documents/documents-cancel-doc.ts"
import { documentsSendAllDocumentsToEmail } from "@//api/documents/documents-send-all-documents-to-email.ts"
import { documentsGetReport } from "@//api/documents/documents-get-report.ts"
import { documentsCrossDocument } from "@//api/documents/documents-cross-document.ts"
import { documentsCreateTaxInvoice } from "@//api/documents/documents-create-tax-invoice.ts"
import { documentsCreateDocumentUrl } from "@//api/documents/documents-create-document-url.ts"
import { companyOperationsGetCompanyStatus } from "@//api/companyOperations/company-operations-get-company-status.ts"
import { companyOperationsAddDocumentToCompany } from "@//api/companyOperations/company-operations-add-document-to-company.ts"
import { companyOperationsValidateCompanyCreation } from "@//api/companyOperations/company-operations-validate-company-creation.ts"
import { companyOperationsNewCompany } from "@//api/companyOperations/company-operations-new-company.ts"
import { companyOperationsCloseCompany } from "@//api/companyOperations/company-operations-close-company.ts"
import { companyOperationsReOpenCompany } from "@//api/companyOperations/company-operations-re-open-company.ts"
import { companyOperationsGetCities } from "@//api/companyOperations/company-operations-get-cities.ts"
import { companyOperationsGetStreets } from "@//api/companyOperations/company-operations-get-streets.ts"
import { companyOperationsGetCountries } from "@//api/companyOperations/company-operations-get-countries.ts"
import { companyOperationsGetBanks } from "@//api/companyOperations/company-operations-get-banks.ts"
import { companyOperationsGetBanksBranches } from "@//api/companyOperations/company-operations-get-banks-branches.ts"
import { companyOperationsGetMainMcCs } from "@//api/companyOperations/company-operations-get-main-mc-cs.ts"
import { companyOperationsGetSubMcCs } from "@//api/companyOperations/company-operations-get-sub-mc-cs.ts"
import { companyOperationsMeagedAddCompany } from "@//api/companyOperations/company-operations-meaged-add-company.ts"
import { companyOperationsMeagedGetCompanyInfo } from "@//api/companyOperations/company-operations-meaged-get-company-info.ts"
import { financialCreditCardTransactions } from "@//api/financial/financial-credit-card-transactions.ts"
import { financialCreditCardTransactionsHalted } from "@//api/financial/financial-credit-card-transactions-halted.ts"
import { financialFinancialTransactions } from "@//api/financial/financial-financial-transactions.ts"
import { financialBankDeposites } from "@//api/financial/financial-bank-deposites.ts"
import { financialGetSlikaInvoices } from "@//api/financial/financial-get-slika-invoices.ts"
import { tapTransactionsPrepareDevice } from "@//api/tapTransactions/tap-transactions-prepare-device.ts"
import { tapTransactionsProcessTransaction } from "@//api/tapTransactions/tap-transactions-process-transaction.ts"
import { tapTransactionsGetTransactions } from "@//api/tapTransactions/tap-transactions-get-transactions.ts"
import { tapTransactionsGetDevices } from "@//api/tapTransactions/tap-transactions-get-devices.ts"

interface ExternalConfig {
    apiUserName: string;
    terminalNumber: number;
    apiPassword?: string;
    accountId?: string;
}

type DerivedInternalConfig<C extends ExternalConfig> = {
    terminalNumber: C["terminalNumber"];
    ApiName: C["apiUserName"];
    apiUserName: C["apiUserName"];
} & ('apiPassword' extends keyof C ? { apiPassword: C['apiPassword'] } : {})
    & ('accountId' extends keyof C ? { AccountId: C['accountId'] } : {});


type WithOptionalConfigInData<T, Config extends object> = T extends (params: { data: infer D }, ...args: infer A) => infer R
    ? (params: { data: Omit<NonNullable<D>, keyof Config> & Partial<Config> }, ...rest: A) => R
    : T;


class CardCom<C extends ExternalConfig> {
    #config: DerivedInternalConfig<C>;

    constructor(config: C) {
        this.#config = {
            ApiName: config.apiUserName,
            apiUserName: config.apiUserName,
            terminalNumber: config.terminalNumber,
            ...(config.apiPassword && { apiPassword: config.apiPassword }),
            ...(config.accountId && { AccountId: config.accountId }),
        } as DerivedInternalConfig<C>;
    }

    #createDataMethod<T extends (params: { data: any }, ...args: any[]) => any>(
        originalFunction: T
    ): WithOptionalConfigInData<T, DerivedInternalConfig<C>> {
        return ((params, ...rest) => {
            const mergedParams = {
                data: {
                    ...this.#config,
                    ...params.data
                }
            };
            return originalFunction(mergedParams, ...rest);
        }) as WithOptionalConfigInData<T, DerivedInternalConfig<C>>;
    }


    lowProfile = {
        create: this.#createDataMethod(lowProfileCreate),
        getLpResult: this.#createDataMethod(lowProfileGetLpResult),
    }


    recuringPayments = {
        getMuhlafimFile: this.#createDataMethod(recuringPaymentsGetMuhlafimFile),
        getRecurringPayment: this.#createDataMethod(recuringPaymentsGetRecurringPayment),
        getRecurringPaymentHistory: this.#createDataMethod(recuringPaymentsGetRecurringPaymentHistory),
        getMuhlafimByDate: this.#createDataMethod(recuringPaymentsGetMuhlafimByDate),
        isBankNumberValid: this.#createDataMethod(recuringPaymentsIsBankNumberValid),
        changeStatusForHistoryRecurringToIrrevocable: this.#createDataMethod(recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable),
    }


    account = {
        getByAccountId: this.#createDataMethod(accountGetByAccountId),
    }


    transactions = {
        listTransactions: this.#createDataMethod(transactionsListTransactions),
        getTransactionInfoById: this.#createDataMethod(transactionsGetTransactionInfoById),
        transaction: this.#createDataMethod(transactionsTransaction),
        refundByTransactionId: this.#createDataMethod(transactionsRefundByTransactionId),
        specialTransactions: this.#createDataMethod(transactionsSpecialTransactions),
        getTransactionByExternalUniqTran: this.#createDataMethod(transactionsGetTransactionByExternalUniqTran),
    }


    documents = {
        createDocument: this.#createDataMethod(documentsCreateDocument),
        cancelDoc: this.#createDataMethod(documentsCancelDoc),
        sendAllDocumentsToEmail: this.#createDataMethod(documentsSendAllDocumentsToEmail),
        getReport: this.#createDataMethod(documentsGetReport),
        crossDocument: this.#createDataMethod(documentsCrossDocument),
        createTaxInvoice: this.#createDataMethod(documentsCreateTaxInvoice),
        createDocumentUrl: this.#createDataMethod(documentsCreateDocumentUrl),
    }


    companyOperations = {
        getCompanyStatus: companyOperationsGetCompanyStatus,
        addDocumentToCompany: this.#createDataMethod(companyOperationsAddDocumentToCompany),
        validateCompanyCreation: this.#createDataMethod(companyOperationsValidateCompanyCreation),
        newCompany: this.#createDataMethod(companyOperationsNewCompany),
        closeCompany: this.#createDataMethod(companyOperationsCloseCompany),
        reOpenCompany: this.#createDataMethod(companyOperationsReOpenCompany),
        getCities: companyOperationsGetCities,
        getStreets: companyOperationsGetStreets,
        getCountries: companyOperationsGetCountries,
        getBanks: companyOperationsGetBanks,
        getBanksBranches: companyOperationsGetBanksBranches,
        getMainMcCs: companyOperationsGetMainMcCs,
        getSubMcCs: companyOperationsGetSubMcCs,
        meagedAddCompany: this.#createDataMethod(companyOperationsMeagedAddCompany),
        meagedGetCompanyInfo: this.#createDataMethod(companyOperationsMeagedGetCompanyInfo),
    }


    financial = {
        creditCardTransactions: this.#createDataMethod(financialCreditCardTransactions),
        creditCardTransactionsHalted: this.#createDataMethod(financialCreditCardTransactionsHalted),
        financialTransactions: this.#createDataMethod(financialFinancialTransactions),
        bankDeposites: this.#createDataMethod(financialBankDeposites),
        getSlikaInvoices: this.#createDataMethod(financialGetSlikaInvoices),
    }


    tapTransactions = {
        prepareDevice: this.#createDataMethod(tapTransactionsPrepareDevice),
        processTransaction: this.#createDataMethod(tapTransactionsProcessTransaction),
        getTransactions: this.#createDataMethod(tapTransactionsGetTransactions),
        getDevices: this.#createDataMethod(tapTransactionsGetDevices),
    }


}

export function createCardComClient<C extends ExternalConfig>(config: C) {
    return new CardCom(config);
}
