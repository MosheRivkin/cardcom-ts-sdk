/* eslint-disable no-alert, no-console */

import { tapTransactionsGetDevices } from './tap-transactions-get-devices.ts'
import { tapTransactionsGetTransactions } from './tap-transactions-get-transactions.ts'
import { tapTransactionsPrepareDevice } from './tap-transactions-prepare-device.ts'
import { tapTransactionsProcessTransaction } from './tap-transactions-process-transaction.ts'

export function tapTransactions(): { tapTransactionsPrepareDevice: typeof tapTransactionsPrepareDevice; tapTransactionsProcessTransaction: typeof tapTransactionsProcessTransaction; tapTransactionsGetTransactions: typeof tapTransactionsGetTransactions; tapTransactionsGetDevices: typeof tapTransactionsGetDevices; } {
  return { tapTransactionsPrepareDevice, tapTransactionsProcessTransaction, tapTransactionsGetTransactions, tapTransactionsGetDevices }
}