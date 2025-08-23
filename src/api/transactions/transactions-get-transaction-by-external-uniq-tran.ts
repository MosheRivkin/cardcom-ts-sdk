/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TransactionsGetTransactionByExternalUniqTranMutationRequest,
  TransactionsGetTransactionByExternalUniqTranMutationResponse,
  TransactionsGetTransactionByExternalUniqTran400,
  TransactionsGetTransactionByExternalUniqTran401,
} from '../../types/TransactionsGetTransactionByExternalUniqTran.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  transactionsGetTransactionByExternalUniqTranMutationResponseSchema,
  transactionsGetTransactionByExternalUniqTranMutationRequestSchema,
} from '../../zod/transactions/transactions-get-transaction-by-external-uniq-tran-schema.ts'

function getTransactionsGetTransactionByExternalUniqTranUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Transactions/GetTransactionByExternalUniqTran` as const }
  return res
}

/**
 * @description use to validate if there is a successful transaction using the External UniqTranId parameter
 * @summary Query Transaction By ExternalUniqTranId
 * {@link /api/v11/Transactions/GetTransactionByExternalUniqTran}
 */
export async function transactionsGetTransactionByExternalUniqTran(
  { data }: { data?: TransactionsGetTransactionByExternalUniqTranMutationRequest },
  config: Partial<RequestConfig<TransactionsGetTransactionByExternalUniqTranMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = transactionsGetTransactionByExternalUniqTranMutationRequestSchema.parse(data)
  const res = await request<
    TransactionsGetTransactionByExternalUniqTranMutationResponse,
    ResponseErrorConfig<TransactionsGetTransactionByExternalUniqTran400 | TransactionsGetTransactionByExternalUniqTran401>,
    TransactionsGetTransactionByExternalUniqTranMutationRequest
  >({ method: 'POST', url: getTransactionsGetTransactionByExternalUniqTranUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsGetTransactionByExternalUniqTranMutationResponseSchema.parse(res.data)
}