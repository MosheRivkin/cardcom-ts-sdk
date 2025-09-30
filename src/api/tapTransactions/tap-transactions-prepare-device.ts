/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  TapTransactionsPrepareDeviceMutationRequest,
  TapTransactionsPrepareDeviceMutationResponse,
  TapTransactionsPrepareDevice400,
  TapTransactionsPrepareDevice401,
} from '../../types/TapTransactionsPrepareDevice.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  tapTransactionsPrepareDeviceMutationResponseSchema,
  tapTransactionsPrepareDeviceMutationRequestSchema,
} from '../../zod/tapTransactions/tap-transactions-prepare-device-schema.ts'

function getTapTransactionsPrepareDeviceUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/TapTransactions/PrepareDevice"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/TapTransactions/PrepareDevice"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/TapTransactions/PrepareDevice` as const }
  return res
}

/**
 * @description Tap On Phone operations
 * @summary PrepareDevice - Get device information before performing Tap On Phone transaction
 * {@link /api/v11/TapTransactions/PrepareDevice}
 */
export async function tapTransactionsPrepareDevice(
  { data }: { data?: TapTransactionsPrepareDeviceMutationRequest },
  config: Partial<RequestConfig<TapTransactionsPrepareDeviceMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; TPN?: string | null | undefined; MerchantCode?: string | null | undefined; SapakMutavNumber?: string | null | undefined; RavMutavTerminalNumber?: number | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; TerminalNumber: number; DeviceUUID: string; DeviceManufacturer?: string | null | undefined; DeviceModel?: string | null | undefined; } | null = tapTransactionsPrepareDeviceMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").PrepareDeviceResponse> = await request<
    TapTransactionsPrepareDeviceMutationResponse,
    ResponseErrorConfig<TapTransactionsPrepareDevice400 | TapTransactionsPrepareDevice401>,
    TapTransactionsPrepareDeviceMutationRequest
  >({ method: 'POST', url: getTapTransactionsPrepareDeviceUrl().url.toString(), data: requestData, ...requestConfig })
  return tapTransactionsPrepareDeviceMutationResponseSchema.parse(res.data)
}