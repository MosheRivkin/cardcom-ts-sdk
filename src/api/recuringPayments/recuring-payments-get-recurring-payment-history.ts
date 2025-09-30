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

function getRecuringPaymentsGetRecurringPaymentHistoryUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/RecuringPayments/GetRecurringPaymentHistory"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/RecuringPayments/GetRecurringPaymentHistory"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/RecuringPayments/GetRecurringPaymentHistory` as const }
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
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; RecurringPaymentHistory?: { RowID?: number | undefined; RecurringId?: number | undefined; TerminalNumber?: number | undefined; AccountID?: number | undefined; DocumentDescription?: string | null | undefined; LastDate?: string | null | undefined; OriginalNextDate?: string | null | undefined; FinalDebitCoinID?: number | undefined; SumToBill?: number | undefined; SumToBillNoVat?: number | undefined; DepartmentID?: number | undefined; IsDocumentCreate?: boolean | undefined; AgentID?: number | null | undefined; PaymentNum?: number | null | undefined; IsReNewOrder?: boolean | undefined; ProductID?: string | null | undefined; TranzactionId?: number | null | undefined; ResposeCode?: number | null | undefined; ProcessID?: number | null | undefined; DocumentType?: number | null | undefined; DocumentNumber?: number | null | undefined; Quantity?: number | undefined; UnitPrice?: number | undefined; UnitPriceNoVAT?: number | undefined; IsIncludesVAT?: boolean | undefined; VAT?: number | undefined; BillingAttempts?: number | undefined; CreateDate?: string | undefined; ActualBillingType?: number | undefined; NumOfCreditPayments?: number | null | undefined; Status?: string | null | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { apiUserName?: string | null | undefined; apiPassword?: string | null | undefined; RowId?: number | null | undefined; AccountId?: number | null | undefined; FromDate?: string | null | undefined; ToDate?: string | null | undefined; FilterBy?: (import("src/index").FilterBy | null) | undefined; } | null = recuringPaymentsGetRecurringPaymentHistoryQueryRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").ExtGetRecurringPaymentHistoryRsp> = await request<
    RecuringPaymentsGetRecurringPaymentHistoryQueryResponse,
    ResponseErrorConfig<RecuringPaymentsGetRecurringPaymentHistory400 | RecuringPaymentsGetRecurringPaymentHistory401>,
    RecuringPaymentsGetRecurringPaymentHistoryQueryRequest
  >({ method: 'GET', url: getRecuringPaymentsGetRecurringPaymentHistoryUrl().url.toString(), data: requestData, ...requestConfig })
  return recuringPaymentsGetRecurringPaymentHistoryQueryResponseSchema.parse(res.data)
}