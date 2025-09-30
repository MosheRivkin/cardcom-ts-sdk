/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  FinancialCreditCardTransactionsHaltedMutationRequest,
  FinancialCreditCardTransactionsHaltedMutationResponse,
  FinancialCreditCardTransactionsHalted400,
  FinancialCreditCardTransactionsHalted401,
} from '../../types/FinancialCreditCardTransactionsHalted.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  financialCreditCardTransactionsHaltedMutationResponseSchema,
  financialCreditCardTransactionsHaltedMutationRequestSchema,
} from '../../zod/financial/financial-credit-card-transactions-halted-schema.ts'

function getFinancialCreditCardTransactionsHaltedUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/CreditCardTransactionsHalted"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/CreditCardTransactionsHalted"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Financial/CreditCardTransactionsHalted` as const }
  return res
}

/**
 * @summary CreditCard Transactions - Halted
 * {@link /api/v11/Financial/CreditCardTransactionsHalted}
 */
export async function financialCreditCardTransactionsHalted(
  { data }: { data?: FinancialCreditCardTransactionsHaltedMutationRequest },
  config: Partial<RequestConfig<FinancialCreditCardTransactionsHaltedMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; CreditCardTransactions?: { CreateDate?: string | undefined; Id?: number | undefined; SapakNumber?: number | null | undefined; ARN?: string | null | undefined; TransacDate?: string | undefined; TransacTime?: string | undefined; TransmissionDate?: string | undefined; TransmissionTime?: string | undefined; TranType?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").TranType | undefined; Rrn?: string | null | undefined; Amount?: number | undefined; FirstPayment?: number | undefined; NotFirstPayment?: number | undefined; NoPayments?: number | undefined; IndexPayment?: number | undefined; Agg_PayDay?: string | undefined; Agg_IfPac?: number | undefined; ActionCode?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").ActionCode | undefined; Last4Digits?: number | null | undefined; Last4DigitsStr?: string | null | undefined; First7Digits?: number | null | undefined; Uid?: string | null | undefined; Mti?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").MTI | undefined; SessionNumber?: number | undefined; CouponNumber?: string | null | undefined; AuthorizeNo?: string | null | undefined; Retailer?: number | undefined; Brand?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Brand2 | undefined; Agg_IfPctFixAmt?: number | undefined; OriginCurrency?: number | undefined; PaymentCurrency?: number | undefined; SapakMutavNumber?: number | undefined; Eci?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").EciType | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; } | null = financialCreditCardTransactionsHaltedMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").CreditCardTransactionsHaltedResp> = await request<
    FinancialCreditCardTransactionsHaltedMutationResponse,
    ResponseErrorConfig<FinancialCreditCardTransactionsHalted400 | FinancialCreditCardTransactionsHalted401>,
    FinancialCreditCardTransactionsHaltedMutationRequest
  >({ method: 'POST', url: getFinancialCreditCardTransactionsHaltedUrl().url.toString(), data: requestData, ...requestConfig })
  return financialCreditCardTransactionsHaltedMutationResponseSchema.parse(res.data)
}