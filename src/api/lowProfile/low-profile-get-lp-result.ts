/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  LowProfileGetLpResultMutationRequest,
  LowProfileGetLpResultMutationResponse,
  LowProfileGetLpResult400,
  LowProfileGetLpResult401,
} from '../../types/LowProfileGetLpResult.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  lowProfileGetLpResultMutationResponseSchema,
  lowProfileGetLpResultMutationRequestSchema,
} from '../../zod/lowProfile/low-profile-get-lp-result-schema.ts'

function getLowProfileGetLpResultUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/LowProfile/GetLpResult"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/LowProfile/GetLpResult"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/LowProfile/GetLpResult` as const }
  return res
}

/**
 * @description Create iframe redirect page to charge the customer
 * @summary Get the result of an Iframe \ Redirect deal
 * {@link /api/v11/LowProfile/GetLpResult}
 */
export async function lowProfileGetLpResult(
  { data }: { data?: LowProfileGetLpResultMutationRequest },
  config: Partial<RequestConfig<LowProfileGetLpResultMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; TerminalNumber?: number | undefined; LowProfileId?: string | undefined; TranzactionId?: number | undefined; ReturnValue?: string | null | undefined; Operation?: (import("src/index").Operation | null) | undefined; UIValues?: { CardOwnerEmail?: string | undefined; CardOwnerName?: string | undefined; CardOwnerPhone?: string | undefined; CardOwnerIdentityNumber?: string | undefined; NumOfPayments?: number | undefined; CardYear?: number | undefined; CardMonth?: number | undefined; CustomFields?: { Id?: number | undefined; Value?: string | undefined; }[] | null | undefined; IsAbroadCard?: boolean | undefined; } | undefined; DocumentInfo?: { ResponseCode?: number | undefined; Description?: string | undefined; DocumentType?: import("src/index").DocumentType | undefined; DocumentNumber?: number | undefined; AccountId?: number | undefined; ForeignAccountNumber?: string | null | undefined; SiteUniqueId?: string | null | undefined; DocumentUrl?: string | null | undefined; } | null | undefined; TokenInfo?: { Token?: string | undefined; TokenExDate?: string | undefined; CardYear?: number | undefined; CardMonth?: number | undefined; TokenApprovalNumber?: string | undefined; CardOwnerIdentityNumber?: string | undefined; } | null | undefined; SuspendedInfo?: { SuspendedDealId?: number | undefined; } | null | undefined; TranzactionInfo?: { ResponseCode?: number | undefined; Description?: string | null | undefined; TranzactionId?: number | undefined; TerminalNumber?: number | undefined; Amount?: number | undefined; CoinId?: number | undefined; CouponNumber?: string | null | undefined; CreateDate?: string | undefined; Last4CardDigits?: number | undefined; Last4CardDigitsString?: string | null | undefined; FirstCardDigits?: number | undefined; JParameter?: string | null | undefined; CardMonth?: number | undefined; CardYear?: number | undefined; ApprovalNumber?: string | null | undefined; FirstPaymentAmount?: number | undefined; ConstPaymentAmount?: number | undefined; NumberOfPayments?: number | undefined; CardInfo?: import("src/index").CardInfo | undefined; CardOwnerName?: string | null | undefined; CardOwnerPhone?: string | null | undefined; CardOwnerEmail?: string | null | undefined; CardOwnerIdentityNumber?: string | null | undefined; Token?: string | null | undefined; CardName?: string | null | undefined; SapakMutav?: string | null | undefined; Uid?: string | null | undefined; ConcentrationNumber?: string | null | undefined; DocumentNumber?: number | null | undefined; DocumentType?: (import("src/index").DocumentType | null) | undefined; Rrn?: string | null | undefined; Brand?: import("src/index").Brand | undefined; Acquire?: import("src/index").Acquire | undefined; Issuer?: import("src/index").Issuer | undefined; PaymentType?: import("src/index").PaymentType | undefined; CardNumberEntryMode?: import("src/index").CardNumberEntryMode | undefined; DealType?: import("src/index").DealType | undefined; IsRefund?: boolean | undefined; DocumentUrl?: string | null | undefined; CustomFields?: { Id?: number | undefined; Value?: string | undefined; }[] | null | undefined; IsAbroadCard?: boolean | undefined; IssuerAuthCodeDescription?: string | null | undefined; } | null | undefined; ExternalPaymentVector?: string | null | undefined; Country?: string | null | undefined; UTM?: { Source?: string | null | undefined; Medium?: string | null | undefined; Campaign?: string | null | undefined; Content?: string | null | undefined; Term?: string | null | undefined; } | null | undefined; IssuerAuthCodeDescription?: string | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { TerminalNumber: number; ApiName: string; LowProfileId: string; } | null = lowProfileGetLpResultMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").LowProfileResult> = await request<
    LowProfileGetLpResultMutationResponse,
    ResponseErrorConfig<LowProfileGetLpResult400 | LowProfileGetLpResult401>,
    LowProfileGetLpResultMutationRequest
  >({ method: 'POST', url: getLowProfileGetLpResultUrl().url.toString(), data: requestData, ...requestConfig })
  return lowProfileGetLpResultMutationResponseSchema.parse(res.data)
}