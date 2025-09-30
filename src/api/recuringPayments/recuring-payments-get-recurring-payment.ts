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

function getRecuringPaymentsGetRecurringPaymentUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/RecuringPayments/GetRecurringPayment"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/RecuringPayments/GetRecurringPayment"; } = { method: 'GET', url: `https://secure.cardcom.solutions/api/v11/RecuringPayments/GetRecurringPayment` as const }
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
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; UpdateList?: { RecurringId?: number | null | undefined; InternalDecription?: string | null | undefined; NextDateToBill?: string | undefined; TotalNumOfBills?: number | undefined; NumOfPaymentsAlreadyCharged?: number | null | undefined; IsActive?: boolean | null | undefined; ChargeIntervals?: { TimeIntervalId?: number | undefined; AddDays?: number | undefined; AddWeeks?: number | undefined; AddMonth?: number | undefined; AddYears?: number | undefined; } | null | undefined; FinalDebitCoinId?: number | undefined; IsDocumentCreate?: boolean | null | undefined; DocTypeToCreate?: number | null | undefined; Comment?: string | null | undefined; IsPrintNumOfPayments?: boolean | undefined; IsPrintBillMonth?: boolean | undefined; DepartmentId?: number | undefined; UserId?: number | undefined; ReturnValue?: string | null | undefined; ChargeInTerminal?: number | null | undefined; FlexItem?: { DocumentLineDesc?: string | null | undefined; Price?: number | undefined; IsPriceIncludeVat?: boolean | undefined; ProductId?: string | null | undefined; } | null | undefined; IsByProducts?: boolean | undefined; ProdList?: { ProductId?: string | null | undefined; Quantity?: number | undefined; }[] | null | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { apiUserName?: string | null | undefined; apiPassword?: string | null | undefined; AccountId?: number | null | undefined; RecurringId?: number | null | undefined; } | null = recuringPaymentsGetRecurringPaymentQueryRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtGetRecurringPaymentRsp> = await request<
    RecuringPaymentsGetRecurringPaymentQueryResponse,
    ResponseErrorConfig<RecuringPaymentsGetRecurringPayment400 | RecuringPaymentsGetRecurringPayment401>,
    RecuringPaymentsGetRecurringPaymentQueryRequest
  >({ method: 'GET', url: getRecuringPaymentsGetRecurringPaymentUrl().url.toString(), data: requestData, ...requestConfig })
  return recuringPaymentsGetRecurringPaymentQueryResponseSchema.parse(res.data)
}