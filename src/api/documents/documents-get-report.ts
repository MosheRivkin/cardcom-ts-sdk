/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  DocumentsGetReportMutationRequest,
  DocumentsGetReportMutationResponse,
  DocumentsGetReport400,
  DocumentsGetReport401,
} from '../../types/DocumentsGetReport.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { documentsGetReportMutationResponseSchema, documentsGetReportMutationRequestSchema } from '../../zod/documents/documents-get-report-schema.ts'

function getDocumentsGetReportUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Documents/GetReport` as const }
  return res
}

/**
 * @description Documents operations
 * @summary Query invoice documents
 * {@link /api/v11/Documents/GetReport}
 */
export async function documentsGetReport(
  { data }: { data?: DocumentsGetReportMutationRequest },
  config: Partial<RequestConfig<DocumentsGetReportMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = documentsGetReportMutationRequestSchema.parse(data)
  const res = await request<
    DocumentsGetReportMutationResponse,
    ResponseErrorConfig<DocumentsGetReport400 | DocumentsGetReport401>,
    DocumentsGetReportMutationRequest
  >({ method: 'POST', url: getDocumentsGetReportUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsGetReportMutationResponseSchema.parse(res.data)
}