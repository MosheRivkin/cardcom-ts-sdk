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

function getLowProfileGetLpResultUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/LowProfile/GetLpResult` as const }
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
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = lowProfileGetLpResultMutationRequestSchema.parse(data)
  const res = await request<
    LowProfileGetLpResultMutationResponse,
    ResponseErrorConfig<LowProfileGetLpResult400 | LowProfileGetLpResult401>,
    LowProfileGetLpResultMutationRequest
  >({ method: 'POST', url: getLowProfileGetLpResultUrl().url.toString(), data: requestData, ...requestConfig })
  return lowProfileGetLpResultMutationResponseSchema.parse(res.data)
}