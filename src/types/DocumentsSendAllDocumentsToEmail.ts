import type { ErrorInfo } from './ErrorInfo.ts'
import type { SendAllDocumentsToEmailRequest } from './SendAllDocumentsToEmailRequest.ts'
import type { SendAllDocumentsToEmailResponse } from './SendAllDocumentsToEmailResponse.ts'

/**
 * @description successful request
 */
export type DocumentsSendAllDocumentsToEmail200 = SendAllDocumentsToEmailResponse

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type DocumentsSendAllDocumentsToEmail400 = ErrorInfo

/**
 * @description Invalid username
 */
export type DocumentsSendAllDocumentsToEmail401 = ErrorInfo

export type DocumentsSendAllDocumentsToEmailMutationRequest = SendAllDocumentsToEmailRequest | null

export type DocumentsSendAllDocumentsToEmailMutationResponse = DocumentsSendAllDocumentsToEmail200

export type DocumentsSendAllDocumentsToEmailMutation = {
  Response: DocumentsSendAllDocumentsToEmail200
  Request: DocumentsSendAllDocumentsToEmailMutationRequest
  Errors: DocumentsSendAllDocumentsToEmail400 | DocumentsSendAllDocumentsToEmail401
}