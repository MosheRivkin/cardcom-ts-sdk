/* eslint-disable no-alert, no-console */

import fetch from "@kubb/plugin-client/clients/axios";
import type { DocumentsSendAllDocumentsToEmailMutationRequest, DocumentsSendAllDocumentsToEmailMutationResponse, DocumentsSendAllDocumentsToEmail400, DocumentsSendAllDocumentsToEmail401 } from "../../types/DocumentsSendAllDocumentsToEmail.ts";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import { documentsSendAllDocumentsToEmailMutationResponseSchema, documentsSendAllDocumentsToEmailMutationRequestSchema } from "../../zod/documents/documents-send-all-documents-to-email-schema.ts";

function getDocumentsSendAllDocumentsToEmailUrl() {
  const res =
  {
    method: 'POST',
    url: `/api/v11/Documents/SendAllDocumentsToEmail` as const
  }
  return res
}

/**
 * @description Documents operations
 * @summary send PDF docuemnts to email by date range
 * {@link /api/v11/Documents/SendAllDocumentsToEmail}
 */
export async function documentsSendAllDocumentsToEmail({ data }: { data?: DocumentsSendAllDocumentsToEmailMutationRequest }, config: Partial<RequestConfig<DocumentsSendAllDocumentsToEmailMutationRequest>> & { client?: typeof fetch } = {}) {
  const { client: request = fetch, ...requestConfig } = config

  const requestData = documentsSendAllDocumentsToEmailMutationRequestSchema.parse(data)
  const res = await request<DocumentsSendAllDocumentsToEmailMutationResponse, ResponseErrorConfig<DocumentsSendAllDocumentsToEmail400 | DocumentsSendAllDocumentsToEmail401>, DocumentsSendAllDocumentsToEmailMutationRequest>({ method: "POST", url: getDocumentsSendAllDocumentsToEmailUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsSendAllDocumentsToEmailMutationResponseSchema.parse(res.data)
}