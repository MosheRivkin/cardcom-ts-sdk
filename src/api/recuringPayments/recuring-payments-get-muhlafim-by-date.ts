/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  RecuringPaymentsGetMuhlafimByDateMutationRequest,
  RecuringPaymentsGetMuhlafimByDateMutationResponse,
  RecuringPaymentsGetMuhlafimByDate400,
  RecuringPaymentsGetMuhlafimByDate401,
} from '../../types/RecuringPaymentsGetMuhlafimByDate.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  recuringPaymentsGetMuhlafimByDateMutationResponseSchema,
  recuringPaymentsGetMuhlafimByDateMutationRequestSchema,
} from '../../zod/recuringPayments/recuring-payments-get-muhlafim-by-date-schema.ts'

function getRecuringPaymentsGetMuhlafimByDateUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/RecuringPayments/GetMuhlafimByDate"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/RecuringPayments/GetMuhlafimByDate"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/RecuringPayments/GetMuhlafimByDate` as const }
  return res
}

/**
 * @description Recurring Payments
 * @summary Get muhlafim tokens
 * {@link /api/v11/RecuringPayments/GetMuhlafimByDate}
 */
export async function recuringPaymentsGetMuhlafimByDate(
  { data }: { data?: RecuringPaymentsGetMuhlafimByDateMutationRequest },
  config: Partial<RequestConfig<RecuringPaymentsGetMuhlafimByDateMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; UpdateList?: { ID?: number | undefined; UpdatedTokenList?: { ID?: number | undefined; ExcelRow?: number | undefined; OriginalStatus?: string | null | undefined; Status?: number | undefined; Token?: string | null | undefined; NewExpirationDateYYYY?: string | null | undefined; NewExpirationDateMM?: string | null | undefined; Last4Digits?: string | null | undefined; }[] | null | undefined; }[] | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { apiUserName: string; apiPassword: string; fromDate: string; toDate: string; } | null = recuringPaymentsGetMuhlafimByDateMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtGetListOfFilesRsp> = await request<
    RecuringPaymentsGetMuhlafimByDateMutationResponse,
    ResponseErrorConfig<RecuringPaymentsGetMuhlafimByDate400 | RecuringPaymentsGetMuhlafimByDate401>,
    RecuringPaymentsGetMuhlafimByDateMutationRequest
  >({ method: 'POST', url: getRecuringPaymentsGetMuhlafimByDateUrl().url.toString(), data: requestData, ...requestConfig })
  return recuringPaymentsGetMuhlafimByDateMutationResponseSchema.parse(res.data)
}