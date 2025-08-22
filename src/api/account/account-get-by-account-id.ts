/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { AccountGetByAccountIdMutationRequest, AccountGetByAccountIdMutationResponse, AccountGetByAccountId400, AccountGetByAccountId401 } from "../../types/AccountGetByAccountId.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { accountGetByAccountIdMutationResponseSchema, accountGetByAccountIdMutationRequestSchema } from "../../zod/account/account-get-by-account-id-schema.ts";

function getAccountGetByAccountIdUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Account/GetByAccountId` as const
  }
  return res
}

/**
 * @description Account operation
 * @summary Get Account info by cardcom Account Id
 * {@link /api/v11/Account/GetByAccountId}
 */
export async function accountGetByAccountId({ data }: { data?: AccountGetByAccountIdMutationRequest }, config: Partial<RequestConfig<AccountGetByAccountIdMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = accountGetByAccountIdMutationRequestSchema.parse(data)
  const res = await request<AccountGetByAccountIdMutationResponse, ResponseErrorConfig<AccountGetByAccountId400 | AccountGetByAccountId401>, AccountGetByAccountIdMutationRequest>({ method: "POST", url: getAccountGetByAccountIdUrl().url.toString(), data: requestData, ...requestConfig })
  return accountGetByAccountIdMutationResponseSchema.parse(res.data)
}