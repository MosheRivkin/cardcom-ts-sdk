/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TapTransactionsGetDevicesMutationRequest,
  TapTransactionsGetDevicesMutationResponse,
  TapTransactionsGetDevices400,
  TapTransactionsGetDevices401,
} from '../../types/TapTransactionsGetDevices.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  tapTransactionsGetDevicesMutationResponseSchema,
  tapTransactionsGetDevicesMutationRequestSchema,
} from '../../zod/tapTransactions/tap-transactions-get-devices-schema.ts'

function getTapTransactionsGetDevicesUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/TapTransactions/GetDevices"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/TapTransactions/GetDevices"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/TapTransactions/GetDevices` as const }
  return res
}

/**
 * @description Tap On Phone operations
 * @summary GetDevices - Get all registered TAP devices
 * {@link /api/v11/TapTransactions/GetDevices}
 */
export async function tapTransactionsGetDevices(
  { data }: { data?: TapTransactionsGetDevicesMutationRequest },
  config: Partial<RequestConfig<TapTransactionsGetDevicesMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; DealNumber?: number | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; TerminalNumber: number; } | null = tapTransactionsGetDevicesMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").ProcessTransactionResponse> = await request<
    TapTransactionsGetDevicesMutationResponse,
    ResponseErrorConfig<TapTransactionsGetDevices400 | TapTransactionsGetDevices401>,
    TapTransactionsGetDevicesMutationRequest
  >({ method: 'POST', url: getTapTransactionsGetDevicesUrl().url.toString(), data: requestData, ...requestConfig })
  return tapTransactionsGetDevicesMutationResponseSchema.parse(res.data)
}