/* eslint-disable no-alert, no-console */

import { financialBankDeposites } from './financial-bank-deposites.ts'
import { financialCreditCardTransactionsHalted } from './financial-credit-card-transactions-halted.ts'
import { financialCreditCardTransactions } from './financial-credit-card-transactions.ts'
import { financialFinancialTransactions } from './financial-financial-transactions.ts'
import { financialGetSlikaInvoices } from './financial-get-slika-invoices.ts'

export function financial(): { financialCreditCardTransactions: typeof financialCreditCardTransactions; financialCreditCardTransactionsHalted: typeof financialCreditCardTransactionsHalted; financialFinancialTransactions: typeof financialFinancialTransactions; financialBankDeposites: typeof financialBankDeposites; financialGetSlikaInvoices: typeof financialGetSlikaInvoices; } {
  return {
    financialCreditCardTransactions,
    financialCreditCardTransactionsHalted,
    financialFinancialTransactions,
    financialBankDeposites,
    financialGetSlikaInvoices,
  }
}