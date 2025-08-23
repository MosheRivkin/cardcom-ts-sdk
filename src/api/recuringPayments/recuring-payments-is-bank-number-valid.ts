/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  RecuringPaymentsIsBankNumberValidQueryRequest,
  RecuringPaymentsIsBankNumberValidQueryResponse,
  RecuringPaymentsIsBankNumberValid400,
  RecuringPaymentsIsBankNumberValid401,
} from '../../types/RecuringPaymentsIsBankNumberValid.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  recuringPaymentsIsBankNumberValidQueryResponseSchema,
  recuringPaymentsIsBankNumberValidQueryRequestSchema,
} from '../../zod/recuringPayments/recuring-payments-is-bank-number-valid-schema.ts'

function getRecuringPaymentsIsBankNumberValidUrl() {
  const res = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/RecuringPayments/IsBankNumberValid` as const }
  return res
}

/**
 * @description Recurring Payments
 * @summary Is Bank Number Valid
 * {@link /api/v11/RecuringPayments/IsBankNumberValid}
 */
export async function recuringPaymentsIsBankNumberValid(
  { data }: { data?: RecuringPaymentsIsBankNumberValidQueryRequest },
  config: Partial<RequestConfig<RecuringPaymentsIsBankNumberValidQueryRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = recuringPaymentsIsBankNumberValidQueryRequestSchema.parse(data)
  const res = await request<
    RecuringPaymentsIsBankNumberValidQueryResponse,
    ResponseErrorConfig<RecuringPaymentsIsBankNumberValid400 | RecuringPaymentsIsBankNumberValid401>,
    RecuringPaymentsIsBankNumberValidQueryRequest
  >({ method: 'GET', url: getRecuringPaymentsIsBankNumberValidUrl().url.toString(), data: requestData, ...requestConfig })
  return recuringPaymentsIsBankNumberValidQueryResponseSchema.parse(res.data)
}