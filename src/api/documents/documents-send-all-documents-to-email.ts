/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  DocumentsSendAllDocumentsToEmailMutationRequest,
  DocumentsSendAllDocumentsToEmailMutationResponse,
  DocumentsSendAllDocumentsToEmail400,
  DocumentsSendAllDocumentsToEmail401,
} from '../../types/DocumentsSendAllDocumentsToEmail.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  documentsSendAllDocumentsToEmailMutationResponseSchema,
  documentsSendAllDocumentsToEmailMutationRequestSchema,
} from '../../zod/documents/documents-send-all-documents-to-email-schema.ts'

function getDocumentsSendAllDocumentsToEmailUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/SendAllDocumentsToEmail"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/SendAllDocumentsToEmail"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Documents/SendAllDocumentsToEmail` as const }
  return res
}

/**
 * @description Documents operations
 * @summary send PDF docuemnts to email by date range
 * {@link /api/v11/Documents/SendAllDocumentsToEmail}
 */
export async function documentsSendAllDocumentsToEmail(
  { data }: { data?: DocumentsSendAllDocumentsToEmailMutationRequest },
  config: Partial<RequestConfig<DocumentsSendAllDocumentsToEmailMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; EmailTo: string; FromDateYYYYMMDD: string; ToDateYYYYMMDD: string; SendEmptyEmail?: boolean | null | undefined; ForceOriginal?: boolean | null | undefined; DocumentType?: number | null | undefined; } | null = documentsSendAllDocumentsToEmailMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").SendAllDocumentsToEmailResponse> = await request<
    DocumentsSendAllDocumentsToEmailMutationResponse,
    ResponseErrorConfig<DocumentsSendAllDocumentsToEmail400 | DocumentsSendAllDocumentsToEmail401>,
    DocumentsSendAllDocumentsToEmailMutationRequest
  >({ method: 'POST', url: getDocumentsSendAllDocumentsToEmailUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsSendAllDocumentsToEmailMutationResponseSchema.parse(res.data)
}