/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { TapTransactionsPrepareDeviceMutationRequest, TapTransactionsPrepareDeviceMutationResponse, TapTransactionsPrepareDevice400, TapTransactionsPrepareDevice401 } from "../../types/TapTransactionsPrepareDevice.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { tapTransactionsPrepareDeviceMutationResponseSchema, tapTransactionsPrepareDeviceMutationRequestSchema } from "../../zod/tapTransactions/tap-transactions-prepare-device-schema.ts";

function getTapTransactionsPrepareDeviceUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/TapTransactions/PrepareDevice` as const
  }
  return res
}

/**
 * @description Tap On Phone operations
 * @summary PrepareDevice - Get device information before performing Tap On Phone transaction
 * {@link /api/v11/TapTransactions/PrepareDevice}
 */
export async function tapTransactionsPrepareDevice({ data }: { data?: TapTransactionsPrepareDeviceMutationRequest }, config: Partial<RequestConfig<TapTransactionsPrepareDeviceMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = tapTransactionsPrepareDeviceMutationRequestSchema.parse(data)
  const res = await request<TapTransactionsPrepareDeviceMutationResponse, ResponseErrorConfig<TapTransactionsPrepareDevice400 | TapTransactionsPrepareDevice401>, TapTransactionsPrepareDeviceMutationRequest>({ method: "POST", url: getTapTransactionsPrepareDeviceUrl().url.toString(), data: requestData, ...requestConfig })
  return tapTransactionsPrepareDeviceMutationResponseSchema.parse(res.data)
}