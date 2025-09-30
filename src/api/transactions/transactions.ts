/* eslint-disable no-alert, no-console */

import { transactionsGetTransactionByExternalUniqTran } from './transactions-get-transaction-by-external-uniq-tran.ts'
import { transactionsGetTransactionInfoById } from './transactions-get-transaction-info-by-id.ts'
import { transactionsListTransactions } from './transactions-list-transactions.ts'
import { transactionsRefundByTransactionId } from './transactions-refund-by-transaction-id.ts'
import { transactionsSpecialTransactions } from './transactions-special-transactions.ts'
import { transactionsTransaction } from './transactions-transaction.ts'

export function transactions(): { transactionsListTransactions: typeof transactionsListTransactions; transactionsGetTransactionInfoById: typeof transactionsGetTransactionInfoById; transactionsTransaction: typeof transactionsTransaction; transactionsRefundByTransactionId: typeof transactionsRefundByTransactionId; transactionsSpecialTransactions: typeof transactionsSpecialTransactions; transactionsGetTransactionByExternalUniqTran: typeof transactionsGetTransactionByExternalUniqTran; } {
  return {
    transactionsListTransactions,
    transactionsGetTransactionInfoById,
    transactionsTransaction,
    transactionsRefundByTransactionId,
    transactionsSpecialTransactions,
    transactionsGetTransactionByExternalUniqTran,
  }
}