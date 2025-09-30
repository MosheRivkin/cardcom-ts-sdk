/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  LowProfileCreateMutationRequest,
  LowProfileCreateMutationResponse,
  LowProfileCreate400,
  LowProfileCreate401,
} from '../../types/LowProfileCreate.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { lowProfileCreateMutationResponseSchema, lowProfileCreateMutationRequestSchema } from '../../zod/lowProfile/low-profile-create-schema.ts'

function getLowProfileCreateUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/LowProfile/Create"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/LowProfile/Create"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/LowProfile/Create` as const }
  return res
}

/**
 * @description Create iframe redirect page to charge the customer
 * @summary Create a new Iframe \ Redirect page
 * {@link /api/v11/LowProfile/Create}
 */
export async function lowProfileCreate(
  { data }: { data?: LowProfileCreateMutationRequest },
  config: Partial<RequestConfig<LowProfileCreateMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; LowProfileId?: string | null | undefined; Url?: string | null | undefined; UrlToPayPal?: string | null | undefined; UrlToBit?: string | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { TerminalNumber: number; ApiName: string; Amount: number; SuccessRedirectUrl: string; FailedRedirectUrl: string; WebHookUrl: string; Operation?: import("src/index").Operation | undefined; ReturnValue?: string | null | undefined; CancelRedirectUrl?: string | null | undefined; ProductName?: string | null | undefined; Language?: string | null | undefined; ISOCoinId?: number | null | undefined; UIDefinition?: { IsHideCardOwnerName?: boolean | null | undefined; CardOwnerNameValue?: string | null | undefined; CardOwnerIdValue?: string | null | undefined; IsHideCardOwnerPhone?: boolean | null | undefined; CardOwnerPhoneValue?: string | null | undefined; IsCardOwnerPhoneRequired?: boolean | null | undefined; CardOwnerEmailValue?: string | null | undefined; IsHideCardOwnerEmail?: boolean | null | undefined; IsCardOwnerEmailRequired?: boolean | null | undefined; IsHideCardOwnerIdentityNumber?: boolean | null | undefined; IsHideCVV?: boolean | null | undefined; CSSUrl?: string | null | undefined; CustomFields?: { Id?: number | undefined; Value?: string | undefined; }[] | null | undefined; GooglePayBtnDesign?: { ButtonColor?: import("src/index").ButtonColor | undefined; ButtonType?: import("src/index").ButtonType | undefined; ButtonLocale?: import("src/index").ButtonLocale | undefined; ButtonWidth?: string | null | undefined; ButtonHeight?: string | null | undefined; } | null | undefined; } | null | undefined; AdvancedDefinition?: { VirtualTerminal?: { IsEnable?: boolean | null | undefined; IsOpenSum?: boolean | null | undefined; ChargeOnSwipe?: boolean | null | undefined; } | null | undefined; JValidateType?: (import("src/index").JValidateType | null) | undefined; IsAVSEnable?: boolean | null | undefined; SapakMutav?: string | null | undefined; CreditType?: number | null | undefined; IsRefundDeal?: boolean | null | undefined; ApiPassword?: string | null | undefined; ISOCoinName?: string | null | undefined; MinNumOfPayments?: number | null | undefined; MaxNumOfPayments?: number | null | undefined; SelectedNumOfPayments?: number | null | undefined; FirstPayment?: number | null | undefined; ConstPayment?: number | null | undefined; Token?: string | null | undefined; CardExpirationYear?: string | null | undefined; CardExpirationMonth?: string | null | undefined; CardNumber?: string | null | undefined; CVV?: string | null | undefined; ThreeDSecureState?: (import("src/index").ThreeDSecureState | null) | undefined; ShouldOpenPinpadOnPageLoad?: boolean | null | undefined; IsExternal?: boolean | null | undefined; } | null | undefined; Document?: { Name: string; DocumentTypeToCreate?: (import("src/index").DocumentToCreate | null) | undefined; TaxId?: string | null | undefined; Email?: string | null | undefined; IsSendByEmail?: boolean | null | undefined; AddressLine1?: string | null | undefined; AddressLine2?: string | null | undefined; City?: string | null | undefined; Mobile?: string | null | undefined; Phone?: string | null | undefined; Comments?: string | null | undefined; IsVatFree?: boolean | null | undefined; DepartmentId?: number | null | undefined; AdvancedDefinition?: { IsAutoCreateUpdateAccount?: (import("src/index").ConfigBool | null) | undefined; AccountForeignKey?: string | null | undefined; SiteUniqueId?: string | null | undefined; AccountID?: number | null | undefined; IsLoadInfoFromAccountID?: boolean | null | undefined; } | null | undefined; Products?: { Description: string; UnitCost: number; ProductID?: string | null | undefined; Quantity?: number | null | undefined; TotalLineCost?: number | null | undefined; IsVatFree?: boolean | null | undefined; }[] | undefined; ExternalId?: string | null | undefined; IsAllowEditDocument?: boolean | null | undefined; IsShowOnlyDocument?: boolean | null | undefined; Language?: string | null | undefined; } | null | undefined; UTM?: { Source?: string | null | undefined; Medium?: string | null | undefined; Campaign?: string | null | undefined; Content?: string | null | undefined; Term?: string | null | undefined; } | null | undefined; } | null = lowProfileCreateMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").CreateLowProfileResponse> = await request<LowProfileCreateMutationResponse, ResponseErrorConfig<LowProfileCreate400 | LowProfileCreate401>, LowProfileCreateMutationRequest>({
    method: 'POST',
    url: getLowProfileCreateUrl().url.toString(),
    data: requestData,
    ...requestConfig,
  })
  return lowProfileCreateMutationResponseSchema.parse(res.data)
}