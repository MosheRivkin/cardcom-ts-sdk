/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { RecuringPaymentsGetMuhlafimByDateMutationRequest, RecuringPaymentsGetMuhlafimByDateMutationResponse, RecuringPaymentsGetMuhlafimByDate400, RecuringPaymentsGetMuhlafimByDate401 } from "../../types/RecuringPaymentsGetMuhlafimByDate.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { recuringPaymentsGetMuhlafimByDateMutationResponseSchema, recuringPaymentsGetMuhlafimByDateMutationRequestSchema } from "../../zod/recuringPayments/recuring-payments-get-muhlafim-by-date-schema.ts";

function getRecuringPaymentsGetMuhlafimByDateUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/RecuringPayments/GetMuhlafimByDate` as const
  }
  return res
}

/**
 * @description Recurring Payments
 * @summary Get muhlafim tokens
 * {@link /api/v11/RecuringPayments/GetMuhlafimByDate}
 */
export async function recuringPaymentsGetMuhlafimByDate({ data }: { data?: RecuringPaymentsGetMuhlafimByDateMutationRequest }, config: Partial<RequestConfig<RecuringPaymentsGetMuhlafimByDateMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = recuringPaymentsGetMuhlafimByDateMutationRequestSchema.parse(data)
  const res = await request<RecuringPaymentsGetMuhlafimByDateMutationResponse, ResponseErrorConfig<RecuringPaymentsGetMuhlafimByDate400 | RecuringPaymentsGetMuhlafimByDate401>, RecuringPaymentsGetMuhlafimByDateMutationRequest>({ method: "POST", url: getRecuringPaymentsGetMuhlafimByDateUrl().url.toString(), data: requestData, ...requestConfig })
  return recuringPaymentsGetMuhlafimByDateMutationResponseSchema.parse(res.data)
}