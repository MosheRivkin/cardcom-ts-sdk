/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  RecuringPaymentsGetRecurringPaymentQueryRequest,
  RecuringPaymentsGetRecurringPaymentQueryResponse,
  RecuringPaymentsGetRecurringPayment400,
  RecuringPaymentsGetRecurringPayment401,
} from '../../types/RecuringPaymentsGetRecurringPayment.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  recuringPaymentsGetRecurringPaymentQueryResponseSchema,
  recuringPaymentsGetRecurringPaymentQueryRequestSchema,
} from '../../zod/recuringPayments/recuring-payments-get-recurring-payment-schema.ts'

function getRecuringPaymentsGetRecurringPaymentUrl() {
  const res = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/RecuringPayments/GetRecurringPayment` as const }
  return res
}

/**
 * @description Recurring Payments
 * @summary Get recurring payment info
 * {@link /api/v11/RecuringPayments/GetRecurringPayment}
 */
export async function recuringPaymentsGetRecurringPayment(
  { data }: { data?: RecuringPaymentsGetRecurringPaymentQueryRequest },
  config: Partial<RequestConfig<RecuringPaymentsGetRecurringPaymentQueryRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = recuringPaymentsGetRecurringPaymentQueryRequestSchema.parse(data)
  const res = await request<
    RecuringPaymentsGetRecurringPaymentQueryResponse,
    ResponseErrorConfig<RecuringPaymentsGetRecurringPayment400 | RecuringPaymentsGetRecurringPayment401>,
    RecuringPaymentsGetRecurringPaymentQueryRequest
  >({ method: 'GET', url: getRecuringPaymentsGetRecurringPaymentUrl().url.toString(), data: requestData, ...requestConfig })
  return recuringPaymentsGetRecurringPaymentQueryResponseSchema.parse(res.data)
}