/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { TapTransactionsGetDevicesMutationRequest, TapTransactionsGetDevicesMutationResponse, TapTransactionsGetDevices400, TapTransactionsGetDevices401 } from "../../types/TapTransactionsGetDevices.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { tapTransactionsGetDevicesMutationResponseSchema, tapTransactionsGetDevicesMutationRequestSchema } from "../../zod/tapTransactions/tap-transactions-get-devices-schema.ts";

function getTapTransactionsGetDevicesUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/TapTransactions/GetDevices` as const
  }
  return res
}

/**
 * @description Tap On Phone operations
 * @summary GetDevices - Get all registered TAP devices
 * {@link /api/v11/TapTransactions/GetDevices}
 */
export async function tapTransactionsGetDevices({ data }: { data?: TapTransactionsGetDevicesMutationRequest }, config: Partial<RequestConfig<TapTransactionsGetDevicesMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = tapTransactionsGetDevicesMutationRequestSchema.parse(data)
  const res = await request<TapTransactionsGetDevicesMutationResponse, ResponseErrorConfig<TapTransactionsGetDevices400 | TapTransactionsGetDevices401>, TapTransactionsGetDevicesMutationRequest>({ method: "POST", url: getTapTransactionsGetDevicesUrl().url.toString(), data: requestData, ...requestConfig })
  return tapTransactionsGetDevicesMutationResponseSchema.parse(res.data)
}