/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  AccountGetByAccountIdMutationRequest,
  AccountGetByAccountIdMutationResponse,
  AccountGetByAccountId400,
  AccountGetByAccountId401,
} from '../../types/AccountGetByAccountId.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { accountGetByAccountIdMutationResponseSchema, accountGetByAccountIdMutationRequestSchema } from '../../zod/account/account-get-by-account-id-schema.ts'

function getAccountGetByAccountIdUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Account/GetByAccountId"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Account/GetByAccountId"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Account/GetByAccountId` as const }
  return res
}

/**
 * @description Account operation
 * @summary Get Account info by cardcom Account Id
 * {@link /api/v11/Account/GetByAccountId}
 */
export async function accountGetByAccountId(
  { data }: { data?: AccountGetByAccountIdMutationRequest },
  config: Partial<RequestConfig<AccountGetByAccountIdMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; Account?: { Name: string; AccountId?: number | undefined; FirstName?: string | null | undefined; TaxId?: string | null | undefined; City?: string | null | undefined; AddressLine1?: string | null | undefined; AddressLine2?: string | null | undefined; Mobile?: string | null | undefined; Phone?: string | null | undefined; Email?: string | null | undefined; IsVatFree?: boolean | null | undefined; ZipCode?: string | null | undefined; PoBox?: string | null | undefined; Fax?: string | null | undefined; OpenDate?: string | null | undefined; Comments?: string | null | undefined; AccountForeignKey?: string | null | undefined; SiteUniqueId?: string | null | undefined; ContactName?: string | null | undefined; ISOCoinId?: number | undefined; Balance?: number | undefined; OpeningBalance?: number | undefined; } | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; AccountId: number; } | null = accountGetByAccountIdMutationRequestSchema.parse(data)
  const res: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-client/dist/clients/axios").ResponseConfig<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetAccountByIdResponse> = await request<
    AccountGetByAccountIdMutationResponse,
    ResponseErrorConfig<AccountGetByAccountId400 | AccountGetByAccountId401>,
    AccountGetByAccountIdMutationRequest
  >({ method: 'POST', url: getAccountGetByAccountIdUrl().url.toString(), data: requestData, ...requestConfig })
  return accountGetByAccountIdMutationResponseSchema.parse(res.data)
}