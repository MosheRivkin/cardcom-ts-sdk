/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TapTransactionsProcessTransactionMutationRequest,
  TapTransactionsProcessTransactionMutationResponse,
  TapTransactionsProcessTransaction400,
  TapTransactionsProcessTransaction401,
} from '../../types/TapTransactionsProcessTransaction.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  tapTransactionsProcessTransactionMutationResponseSchema,
  tapTransactionsProcessTransactionMutationRequestSchema,
} from '../../zod/tapTransactions/tap-transactions-process-transaction-schema.ts'

function getTapTransactionsProcessTransactionUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/TapTransactions/ProcessTransaction"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/TapTransactions/ProcessTransaction"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/TapTransactions/ProcessTransaction` as const }
  return res
}

/**
 * @description Tap On Phone operations
 * @summary ProcessTransaction - Process Tap On Phone transaction
 * {@link /api/v11/TapTransactions/ProcessTransaction}
 */
export async function tapTransactionsProcessTransaction(
  { data }: { data?: TapTransactionsProcessTransactionMutationRequest },
  config: Partial<RequestConfig<TapTransactionsProcessTransactionMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; DealNumber?: number | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; TerminalNumber: number; DeviceUUID: string; TransactionInfo: { Amount: string; Type: number; CreditType: number; NumberOfPayments: number; CustomerName: string; ResponseCode: number; Message: string; Status: string; TransactionId: number; ReturnCode: number; ReturnMessage: string; CardNumber: string; CardExpireDateMMYY: string; CardBrandCode: number; CardIssuerCode: number; CardFinancerCode: number; Token: string; ApprovalNumber: string; ResultRecord: string; UID: string; CustomerEmail?: string | null | undefined; CustomerPhoneNumber?: string | null | undefined; CustomerIdNumber?: string | null | undefined; }; RavMutavTerminalNumber?: number | null | undefined; } | null = tapTransactionsProcessTransactionMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ProcessTransactionResponse> = await request<
    TapTransactionsProcessTransactionMutationResponse,
    ResponseErrorConfig<TapTransactionsProcessTransaction400 | TapTransactionsProcessTransaction401>,
    TapTransactionsProcessTransactionMutationRequest
  >({ method: 'POST', url: getTapTransactionsProcessTransactionUrl().url.toString(), data: requestData, ...requestConfig })
  return tapTransactionsProcessTransactionMutationResponseSchema.parse(res.data)
}