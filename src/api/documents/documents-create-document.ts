/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { DocumentsCreateDocumentMutationRequest, DocumentsCreateDocumentMutationResponse, DocumentsCreateDocument400, DocumentsCreateDocument401 } from "../../types/DocumentsCreateDocument.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { documentsCreateDocumentMutationResponseSchema, documentsCreateDocumentMutationRequestSchema } from "../../zod/documents/documents-create-document-schema.ts";

function getDocumentsCreateDocumentUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Documents/CreateDocument` as const
  }
  return res
}

/**
 * @description Documents operations
 * @summary Create a document associated to a deal
 * {@link /api/v11/Documents/CreateDocument}
 */
export async function documentsCreateDocument({ data }: { data?: DocumentsCreateDocumentMutationRequest }, config: Partial<RequestConfig<DocumentsCreateDocumentMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = documentsCreateDocumentMutationRequestSchema.parse(data)
  const res = await request<DocumentsCreateDocumentMutationResponse, ResponseErrorConfig<DocumentsCreateDocument400 | DocumentsCreateDocument401>, DocumentsCreateDocumentMutationRequest>({ method: "POST", url: getDocumentsCreateDocumentUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsCreateDocumentMutationResponseSchema.parse(res.data)
}