/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  RecuringPaymentsGetMuhlafimFileMutationRequest,
  RecuringPaymentsGetMuhlafimFileMutationResponse,
} from '../../types/RecuringPaymentsGetMuhlafimFile.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  recuringPaymentsGetMuhlafimFileMutationResponseSchema,
  recuringPaymentsGetMuhlafimFileMutationRequestSchema,
} from '../../zod/recuringPayments/recuring-payments-get-muhlafim-file-schema.ts'

function getRecuringPaymentsGetMuhlafimFileUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/RecuringPayments/GetMuhlafimFile` as const }
  return res
}

/**
 * @description Recurring Payments
 * @summary Get muhlafim cards
 * {@link /api/v11/RecuringPayments/GetMuhlafimFile}
 */
export async function recuringPaymentsGetMuhlafimFile(
  { data }: { data?: RecuringPaymentsGetMuhlafimFileMutationRequest },
  config: Partial<RequestConfig<RecuringPaymentsGetMuhlafimFileMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = recuringPaymentsGetMuhlafimFileMutationRequestSchema.parse(data)
  const res = await request<RecuringPaymentsGetMuhlafimFileMutationResponse, ResponseErrorConfig<Error>, RecuringPaymentsGetMuhlafimFileMutationRequest>({
    method: 'POST',
    url: getRecuringPaymentsGetMuhlafimFileUrl().url.toString(),
    data: requestData,
    ...requestConfig,
  })
  return recuringPaymentsGetMuhlafimFileMutationResponseSchema.parse(res.data)
}