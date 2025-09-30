/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  FinancialCreditCardTransactionsMutationRequest,
  FinancialCreditCardTransactionsMutationResponse,
  FinancialCreditCardTransactions400,
  FinancialCreditCardTransactions401,
} from '../../types/FinancialCreditCardTransactions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  financialCreditCardTransactionsMutationResponseSchema,
  financialCreditCardTransactionsMutationRequestSchema,
} from '../../zod/financial/financial-credit-card-transactions-schema.ts'

function getFinancialCreditCardTransactionsUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/CreditCardTransactions"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/CreditCardTransactions"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Financial/CreditCardTransactions` as const }
  return res
}

/**
 * @summary CreditCard Transactions
 * {@link /api/v11/Financial/CreditCardTransactions}
 */
export async function financialCreditCardTransactions(
  { data }: { data?: FinancialCreditCardTransactionsMutationRequest },
  config: Partial<RequestConfig<FinancialCreditCardTransactionsMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ Page: number; Page_size: number; ResponseCode?: number | undefined; Description?: string | null | undefined; CreditCardTransactions?: { CreateDate?: string | undefined; Id?: number | undefined; SapakNumber?: number | null | undefined; ARN?: string | null | undefined; TransacDate?: string | undefined; TransacTime?: string | undefined; TransmissionDate?: string | undefined; TransmissionTime?: string | undefined; TranType?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").TranType | undefined; Rrn?: string | null | undefined; Amount?: number | undefined; FirstPayment?: number | undefined; NotFirstPayment?: number | undefined; NoPayments?: number | undefined; IndexPayment?: number | undefined; Agg_PayDay?: string | undefined; Agg_IfPac?: number | undefined; ActionCode?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").ActionCode | undefined; Last4Digits?: number | null | undefined; Last4DigitsStr?: string | null | undefined; First7Digits?: number | null | undefined; Uid?: string | null | undefined; Mti?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").MTI | undefined; SessionNumber?: number | undefined; CouponNumber?: string | null | undefined; AuthorizeNo?: string | null | undefined; Retailer?: number | undefined; Brand?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Brand2 | undefined; Agg_IfPctFixAmt?: number | undefined; OriginCurrency?: number | undefined; PaymentCurrency?: number | undefined; SapakMutavNumber?: number | undefined; Eci?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").EciType | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; FromCreateDate: string; ToCreateDate: string; Page: number; Page_size: number; } | null = financialCreditCardTransactionsMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CreditCardTransactionsResp> = await request<
    FinancialCreditCardTransactionsMutationResponse,
    ResponseErrorConfig<FinancialCreditCardTransactions400 | FinancialCreditCardTransactions401>,
    FinancialCreditCardTransactionsMutationRequest
  >({ method: 'POST', url: getFinancialCreditCardTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return financialCreditCardTransactionsMutationResponseSchema.parse(res.data)
}