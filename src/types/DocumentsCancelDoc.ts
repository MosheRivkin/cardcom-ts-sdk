import type { CancelDocRequest } from './CancelDocRequest.ts'
import type { CancelDocResponse } from './CancelDocResponse.ts'
import type { ErrorInfo } from './ErrorInfo.ts'

/**
 * @description successful request
 */
export type DocumentsCancelDoc200 = CancelDocResponse

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type DocumentsCancelDoc400 = ErrorInfo

/**
 * @description Invalid username
 */
export type DocumentsCancelDoc401 = ErrorInfo

export type DocumentsCancelDocMutationRequest = CancelDocRequest | null

export type DocumentsCancelDocMutationResponse = DocumentsCancelDoc200

export type DocumentsCancelDocMutation = {
  Response: DocumentsCancelDoc200
  Request: DocumentsCancelDocMutationRequest
  Errors: DocumentsCancelDoc400 | DocumentsCancelDoc401
}