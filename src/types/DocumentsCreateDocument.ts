import type { CreateDocumentRequest } from './CreateDocumentRequest.ts'
import type { DocumentInfo } from './DocumentInfo.ts'
import type { ErrorInfo } from './ErrorInfo.ts'

/**
 * @description successful request
 */
export type DocumentsCreateDocument200 = DocumentInfo

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type DocumentsCreateDocument400 = ErrorInfo

/**
 * @description Invalid username
 */
export type DocumentsCreateDocument401 = ErrorInfo

export type DocumentsCreateDocumentMutationRequest = CreateDocumentRequest | null

export type DocumentsCreateDocumentMutationResponse = DocumentsCreateDocument200

export type DocumentsCreateDocumentMutation = {
  Response: DocumentsCreateDocument200
  Request: DocumentsCreateDocumentMutationRequest
  Errors: DocumentsCreateDocument400 | DocumentsCreateDocument401
}