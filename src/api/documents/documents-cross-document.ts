/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { DocumentsCrossDocumentMutationRequest, DocumentsCrossDocumentMutationResponse, DocumentsCrossDocument400, DocumentsCrossDocument401 } from "../../types/DocumentsCrossDocument.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { documentsCrossDocumentMutationResponseSchema, documentsCrossDocumentMutationRequestSchema } from "../../zod/documents/documents-cross-document-schema.ts";

function getDocumentsCrossDocumentUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Documents/CrossDocument` as const
  }
  return res
}

/**
 * @description Documents operations
 * @summary Cross document
 * {@link /api/v11/Documents/CrossDocument}
 */
export async function documentsCrossDocument({ data }: { data?: DocumentsCrossDocumentMutationRequest }, config: Partial<RequestConfig<DocumentsCrossDocumentMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = documentsCrossDocumentMutationRequestSchema.parse(data)
  const res = await request<DocumentsCrossDocumentMutationResponse, ResponseErrorConfig<DocumentsCrossDocument400 | DocumentsCrossDocument401>, DocumentsCrossDocumentMutationRequest>({ method: "POST", url: getDocumentsCrossDocumentUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsCrossDocumentMutationResponseSchema.parse(res.data)
}