/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  RecuringPaymentsGetRecurringPaymentHistoryQueryRequest,
  RecuringPaymentsGetRecurringPaymentHistoryQueryResponse,
  RecuringPaymentsGetRecurringPaymentHistory400,
  RecuringPaymentsGetRecurringPaymentHistory401,
} from '../../types/RecuringPaymentsGetRecurringPaymentHistory.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  recuringPaymentsGetRecurringPaymentHistoryQueryResponseSchema,
  recuringPaymentsGetRecurringPaymentHistoryQueryRequestSchema,
} from '../../zod/recuringPayments/recuring-payments-get-recurring-payment-history-schema.ts'

function getRecuringPaymentsGetRecurringPaymentHistoryUrl() {
  const res = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/RecuringPayments/GetRecurringPaymentHistory` as const }
  return res
}

/**
 * @description Recurring Payments
 * @summary Get recurring payment history
 * {@link /api/v11/RecuringPayments/GetRecurringPaymentHistory}
 */
export async function recuringPaymentsGetRecurringPaymentHistory(
  { data }: { data?: RecuringPaymentsGetRecurringPaymentHistoryQueryRequest },
  config: Partial<RequestConfig<RecuringPaymentsGetRecurringPaymentHistoryQueryRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = recuringPaymentsGetRecurringPaymentHistoryQueryRequestSchema.parse(data)
  const res = await request<
    RecuringPaymentsGetRecurringPaymentHistoryQueryResponse,
    ResponseErrorConfig<RecuringPaymentsGetRecurringPaymentHistory400 | RecuringPaymentsGetRecurringPaymentHistory401>,
    RecuringPaymentsGetRecurringPaymentHistoryQueryRequest
  >({ method: 'GET', url: getRecuringPaymentsGetRecurringPaymentHistoryUrl().url.toString(), data: requestData, ...requestConfig })
  return recuringPaymentsGetRecurringPaymentHistoryQueryResponseSchema.parse(res.data)
}