/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest, RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponse, RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400, RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401 } from "../../types/RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { recuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponseSchema, recuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequestSchema } from "../../zod/recuringPayments/recuring-payments-change-status-for-history-recurring-to-irrevocable-schema.ts";

function getRecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/RecuringPayments/ChangeStatusForHistoryRecurringToIrrevocable` as const
  }
  return res
}

/**
 * @description Recurring Payments
 * @summary Update debit order history item to irrevocable status
 * {@link /api/v11/RecuringPayments/ChangeStatusForHistoryRecurringToIrrevocable}
 */
export async function recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable({ data }: { data?: RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest }, config: Partial<RequestConfig<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = recuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequestSchema.parse(data)
  const res = await request<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponse, ResponseErrorConfig<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400 | RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401>, RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest>({ method: "POST", url: getRecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableUrl().url.toString(), data: requestData, ...requestConfig })
  return recuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponseSchema.parse(res.data)
}