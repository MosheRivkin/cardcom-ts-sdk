/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TapTransactionsGetTransactionsMutationRequest,
  TapTransactionsGetTransactionsMutationResponse,
  TapTransactionsGetTransactions400,
  TapTransactionsGetTransactions401,
} from '../../types/TapTransactionsGetTransactions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  tapTransactionsGetTransactionsMutationResponseSchema,
  tapTransactionsGetTransactionsMutationRequestSchema,
} from '../../zod/tapTransactions/tap-transactions-get-transactions-schema.ts'

function getTapTransactionsGetTransactionsUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/TapTransactions/GetTransactions"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/TapTransactions/GetTransactions"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/TapTransactions/GetTransactions` as const }
  return res
}

/**
 * @description Tap On Phone operations
 * @summary GetTransactions - Get all TAP transaction by given terminal number and dates range
 * {@link /api/v11/TapTransactions/GetTransactions}
 */
export async function tapTransactionsGetTransactions(
  { data }: { data?: TapTransactionsGetTransactionsMutationRequest },
  config: Partial<RequestConfig<TapTransactionsGetTransactionsMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; DealNumber?: number | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; TerminalNumber: number; FromDate: string; ToDate: string; } | null = tapTransactionsGetTransactionsMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").ProcessTransactionResponse> = await request<
    TapTransactionsGetTransactionsMutationResponse,
    ResponseErrorConfig<TapTransactionsGetTransactions400 | TapTransactionsGetTransactions401>,
    TapTransactionsGetTransactionsMutationRequest
  >({ method: 'POST', url: getTapTransactionsGetTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return tapTransactionsGetTransactionsMutationResponseSchema.parse(res.data)
}