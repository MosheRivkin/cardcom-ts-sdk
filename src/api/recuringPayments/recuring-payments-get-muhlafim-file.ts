/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  RecuringPaymentsGetMuhlafimFileMutationRequest,
  RecuringPaymentsGetMuhlafimFileMutationResponse,
} from '../../types/RecuringPaymentsGetMuhlafimFile.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  recuringPaymentsGetMuhlafimFileMutationResponseSchema,
  recuringPaymentsGetMuhlafimFileMutationRequestSchema,
} from '../../zod/recuringPayments/recuring-payments-get-muhlafim-file-schema.ts'

function getRecuringPaymentsGetMuhlafimFileUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/RecuringPayments/GetMuhlafimFile"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/RecuringPayments/GetMuhlafimFile"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/RecuringPayments/GetMuhlafimFile` as const }
  return res
}

/**
 * @description Recurring Payments
 * @summary Get muhlafim cards
 * {@link /api/v11/RecuringPayments/GetMuhlafimFile}
 */
export async function recuringPaymentsGetMuhlafimFile(
  { data }: { data?: RecuringPaymentsGetMuhlafimFileMutationRequest },
  config: Partial<RequestConfig<RecuringPaymentsGetMuhlafimFileMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ Code?: number | undefined; Description?: string | null | undefined; Content?: { Data?: { MuhlafID?: number | undefined; EntryType?: number | undefined; EntryNumber?: number | undefined; SapakNumber?: number | undefined; OldCreditNumber?: string | null | undefined; NewCreditNumber?: string | null | undefined; ReportCode?: import("src/index").ReportCodes | undefined; NewCardExpirationDate?: string | null | undefined; }[] | null | undefined; } | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { SupplierUserName: string; Secret: string; DateFrom: string; DateTo: string; CompanyNumber: number; Certification: string; } | null = recuringPaymentsGetMuhlafimFileMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").DtoResponseOfMuhlafimData> = await request<RecuringPaymentsGetMuhlafimFileMutationResponse, ResponseErrorConfig<Error>, RecuringPaymentsGetMuhlafimFileMutationRequest>({
    method: 'POST',
    url: getRecuringPaymentsGetMuhlafimFileUrl().url.toString(),
    data: requestData,
    ...requestConfig,
  })
  return recuringPaymentsGetMuhlafimFileMutationResponseSchema.parse(res.data)
}