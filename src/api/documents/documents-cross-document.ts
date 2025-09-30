/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  DocumentsCrossDocumentMutationRequest,
  DocumentsCrossDocumentMutationResponse,
  DocumentsCrossDocument400,
  DocumentsCrossDocument401,
} from '../../types/DocumentsCrossDocument.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import {
  documentsCrossDocumentMutationResponseSchema,
  documentsCrossDocumentMutationRequestSchema,
} from '../../zod/documents/documents-cross-document-schema.ts'

function getDocumentsCrossDocumentUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/CrossDocument"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/CrossDocument"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Documents/CrossDocument` as const }
  return res
}

/**
 * @description Documents operations
 * @summary Cross document
 * {@link /api/v11/Documents/CrossDocument}
 */
export async function documentsCrossDocument(
  { data }: { data?: DocumentsCrossDocumentMutationRequest },
  config: Partial<RequestConfig<DocumentsCrossDocumentMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName?: string | undefined; ApiPassword?: string | undefined; FromDocNumber?: number | undefined; FromDocType?: number | undefined; ToDocumentsList?: { DocNumber?: number | undefined; DocType?: number | undefined; PartialSumToCorss?: number | null | undefined; }[] | undefined; } | null = documentsCrossDocumentMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").CrossDocumentResponse> = await request<
    DocumentsCrossDocumentMutationResponse,
    ResponseErrorConfig<DocumentsCrossDocument400 | DocumentsCrossDocument401>,
    DocumentsCrossDocumentMutationRequest
  >({ method: 'POST', url: getDocumentsCrossDocumentUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsCrossDocumentMutationResponseSchema.parse(res.data)
}