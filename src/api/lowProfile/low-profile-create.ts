/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { LowProfileCreateMutationRequest, LowProfileCreateMutationResponse, LowProfileCreate400, LowProfileCreate401 } from "../../types/LowProfileCreate.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { lowProfileCreateMutationResponseSchema, lowProfileCreateMutationRequestSchema } from "../../zod/lowProfile/low-profile-create-schema.ts";

function getLowProfileCreateUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/LowProfile/Create` as const
  }
  return res
}

/**
 * @description Create iframe redirect page to charge the customer
 * @summary Create a new Iframe \ Redirect page
 * {@link /api/v11/LowProfile/Create}
 */
export async function lowProfileCreate({ data }: { data?: LowProfileCreateMutationRequest }, config: Partial<RequestConfig<LowProfileCreateMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = lowProfileCreateMutationRequestSchema.parse(data)
  const res = await request<LowProfileCreateMutationResponse, ResponseErrorConfig<LowProfileCreate400 | LowProfileCreate401>, LowProfileCreateMutationRequest>({ method: "POST", url: getLowProfileCreateUrl().url.toString(), data: requestData, ...requestConfig })
  return lowProfileCreateMutationResponseSchema.parse(res.data)
}