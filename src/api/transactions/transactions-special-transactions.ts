/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TransactionsSpecialTransactionsMutationRequest,
  TransactionsSpecialTransactionsMutationResponse,
  TransactionsSpecialTransactions400,
  TransactionsSpecialTransactions401,
} from '../../types/TransactionsSpecialTransactions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  transactionsSpecialTransactionsMutationResponseSchema,
  transactionsSpecialTransactionsMutationRequestSchema,
} from '../../zod/transactions/transactions-special-transactions-schema.ts'

function getTransactionsSpecialTransactionsUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/SpecialTransactions"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Transactions/SpecialTransactions"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Transactions/SpecialTransactions` as const }
  return res
}

/**
 * @description get other transaction if you use CardCom as acquire
 * @summary Special Transactions
 * {@link /api/v11/Transactions/SpecialTransactions}
 */
export async function transactionsSpecialTransactions(
  { data }: { data?: TransactionsSpecialTransactionsMutationRequest },
  config: Partial<RequestConfig<TransactionsSpecialTransactionsMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; SpecialTransactions?: { CreateDate?: string | undefined; SpecialType?: number | undefined; SpecialTypeDesc?: string | undefined; SpecialTypeSubType?: number | undefined; Description?: string | null | undefined; Amount?: number | null | undefined; OriginlTranAmount?: number | null | undefined; ARN?: string | null | undefined; UID?: string | null | undefined; SapakNumber?: number | undefined; TranzactionId?: number | null | undefined; Last4CardDigits?: string | null | undefined; MarkedAsRead?: boolean | null | undefined; CurrencyISO?: number | null | undefined; CardToken?: string | null | undefined; OriginlTranDate?: string | null | undefined; SpecialTranDate?: string | null | undefined; SapakMutavNumber?: number | null | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; FromDate: string; ToDate: string; } | null = transactionsSpecialTransactionsMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SpecialTransactionsResp> = await request<
    TransactionsSpecialTransactionsMutationResponse,
    ResponseErrorConfig<TransactionsSpecialTransactions400 | TransactionsSpecialTransactions401>,
    TransactionsSpecialTransactionsMutationRequest
  >({ method: 'POST', url: getTransactionsSpecialTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return transactionsSpecialTransactionsMutationResponseSchema.parse(res.data)
}