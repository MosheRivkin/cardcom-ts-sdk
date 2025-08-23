/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  DocumentsCreateDocumentUrlMutationRequest,
  DocumentsCreateDocumentUrlMutationResponse,
  DocumentsCreateDocumentUrl400,
  DocumentsCreateDocumentUrl401,
} from '../../types/DocumentsCreateDocumentUrl.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  documentsCreateDocumentUrlMutationResponseSchema,
  documentsCreateDocumentUrlMutationRequestSchema,
} from '../../zod/documents/documents-create-document-url-schema.ts'

function getDocumentsCreateDocumentUrlUrl() {
  const res = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Documents/CreateDocumentUrl` as const }
  return res
}

/**
 * @description Documents operations
 * @summary Create document URL
 * {@link /api/v11/Documents/CreateDocumentUrl}
 */
export async function documentsCreateDocumentUrl(
  { data }: { data?: DocumentsCreateDocumentUrlMutationRequest },
  config: Partial<RequestConfig<DocumentsCreateDocumentUrlMutationRequest>> & { client?: typeof fetch } = {},
) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = documentsCreateDocumentUrlMutationRequestSchema.parse(data)
  const res = await request<
    DocumentsCreateDocumentUrlMutationResponse,
    ResponseErrorConfig<DocumentsCreateDocumentUrl400 | DocumentsCreateDocumentUrl401>,
    DocumentsCreateDocumentUrlMutationRequest
  >({ method: 'POST', url: getDocumentsCreateDocumentUrlUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsCreateDocumentUrlMutationResponseSchema.parse(res.data)
}