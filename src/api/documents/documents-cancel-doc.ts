/* eslint-disable no-alert, no-console */

import fetch from '@kubb/plugin-client/clients/axios'
import type {
  DocumentsCancelDocMutationRequest,
  DocumentsCancelDocMutationResponse,
  DocumentsCancelDoc400,
  DocumentsCancelDoc401,
} from '../../types/DocumentsCancelDoc.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import { documentsCancelDocMutationResponseSchema, documentsCancelDocMutationRequestSchema } from '../../zod/documents/documents-cancel-doc-schema.ts'

function getDocumentsCancelDocUrl(): { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/CancelDoc"; } {
  const res: { method: string; url: "https://secure.cardcom.solutions/api/v11/Documents/CancelDoc"; } = { method: 'POST', url: `https://secure.cardcom.solutions/api/v11/Documents/CancelDoc` as const }
  return res
}

/**
 * @description Documents operations
 * @summary Cancel document and refund credit card
 * {@link /api/v11/Documents/CancelDoc}
 */
export async function documentsCancelDoc(
  { data }: { data?: DocumentsCancelDocMutationRequest },
  config: Partial<RequestConfig<DocumentsCancelDocMutationRequest>> & { client?: typeof fetch } = {},
): Promise<{ ResponseCode?: number | undefined; Description?: string | null | undefined; NewDocumentNumber?: number | null | undefined; NewDocumentType?: number | null | undefined; AccountID?: number | null | undefined; }> {
  const { client: request = fetch, ...requestConfig } = config

  const requestData: { ApiName: string; ApiPassword: string; DocumentNumber: number; DocumentType: number; IsCancelEmailSend?: boolean | undefined; IsSendSMS?: boolean | undefined; IsCreditCardCancelOnly?: boolean | undefined; } | null = documentsCancelDocMutationRequestSchema.parse(data)
  const res: import("@kubb/plugin-client/clients/axios").ResponseConfig<import("src/index").CancelDocResponse> = await request<
    DocumentsCancelDocMutationResponse,
    ResponseErrorConfig<DocumentsCancelDoc400 | DocumentsCancelDoc401>,
    DocumentsCancelDocMutationRequest
  >({ method: 'POST', url: getDocumentsCancelDocUrl().url.toString(), data: requestData, ...requestConfig })
  return documentsCancelDocMutationResponseSchema.parse(res.data)
}