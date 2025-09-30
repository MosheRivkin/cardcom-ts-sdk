/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  FinancialFinancialTransactionsMutationRequest,
  FinancialFinancialTransactionsMutationResponse,
  FinancialFinancialTransactions400,
  FinancialFinancialTransactions401,
} from '../../types/FinancialFinancialTransactions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  financialFinancialTransactionsMutationResponseSchema,
  financialFinancialTransactionsMutationRequestSchema,
} from '../../zod/financial/financial-financial-transactions-schema.ts'

function getFinancialFinancialTransactionsUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/FinancialTransactions"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Financial/FinancialTransactions"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Financial/FinancialTransactions` as const }
  return res
}

/**
 * @summary Finacial tranzaction
 * {@link /api/v11/Financial/FinancialTransactions}
 */
export async function financialFinancialTransactions(
  { data }: { data?: FinancialFinancialTransactionsMutationRequest },
  config: Partial<RequestConfig<FinancialFinancialTransactionsMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; Page?: number | undefined; Page_size?: number | undefined; FinancialTransactions?: { CreateDate?: string | undefined; FirstCardDigits?: number | null | undefined; Id?: number | undefined; ARN?: string | null | undefined; SapakNumber?: number | undefined; OrigTransactionAmount?: number | undefined; BankDepositesId?: number | null | undefined; BankDepositAt?: string | null | undefined; CreditCardTransactionsId?: number | undefined; ConcentrationNumber?: number | undefined; DepositeCurrency?: number | undefined; ActionCode?: number | undefined; CreditCardCurrency?: number | undefined; DepositeAmount?: number | undefined; IfPct?: number | undefined; FeePerTrnAmt?: number | undefined; FixFeeAmtDepoCurr?: number | undefined; MngtFeePct?: number | undefined; BrutoOrgCurAmt?: number | undefined; DiscOrigCurrAmt?: number | undefined; ClDscOrgCurAmt?: number | undefined; DiscFreqShopAmt?: number | undefined; AftDiscAmtDepoCur?: number | undefined; IfAmtDepoCur?: number | undefined; VatPrc?: number | undefined; VatIfNisDepoCur?: number | undefined; CurrencyOrIndexRate?: number | undefined; EffectiveCurrencyOrIndexRate?: number | undefined; EstimateDepositeDate?: string | null | undefined; NoOfPmt?: number | undefined; PmtNo?: number | undefined; Brand?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").Brand2 | undefined; TxnType?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").TXNType | undefined; IndexLinkType?: import("/home/m/dev/git/cardcom-ts-sdk/src/index").LinkedTransactionsType | undefined; PurchaseDate?: string | undefined; UID?: string | null | undefined; Last4CardDigits?: number | null | undefined; Last4CardDigitsStr?: string | null | undefined; SapakMutavNumber?: number | null | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; Page: number; Page_size: number; FromCreateDate?: string | null | undefined; ToCreateDate?: string | null | undefined; AddDepositedTransaction?: boolean | null | undefined; BankDepositeId?: number | undefined; } | null = financialFinancialTransactionsMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").FinancialTransactionsResp> = await request<
    FinancialFinancialTransactionsMutationResponse,
    ResponseErrorConfig<FinancialFinancialTransactions400 | FinancialFinancialTransactions401>,
    FinancialFinancialTransactionsMutationRequest
  >({ method: 'POST', url: getFinancialFinancialTransactionsUrl().url.toString(), data: requestData, ...requestConfig })
  return financialFinancialTransactionsMutationResponseSchema.parse(res.data)
}