import type { ErrorInfo } from './ErrorInfo.ts'
import type { PrepareDeviceRequest } from './PrepareDeviceRequest.ts'
import type { PrepareDeviceResponse } from './PrepareDeviceResponse.ts'

/**
 * @description Successful request
 */
export type TapTransactionsPrepareDevice200 = PrepareDeviceResponse

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type TapTransactionsPrepareDevice400 = ErrorInfo

/**
 * @description Invalid username
 */
export type TapTransactionsPrepareDevice401 = ErrorInfo

export type TapTransactionsPrepareDeviceMutationRequest = PrepareDeviceRequest | null

export type TapTransactionsPrepareDeviceMutationResponse = TapTransactionsPrepareDevice200

export type TapTransactionsPrepareDeviceMutation = {
  Response: TapTransactionsPrepareDevice200
  Request: TapTransactionsPrepareDeviceMutationRequest
  Errors: TapTransactionsPrepareDevice400 | TapTransactionsPrepareDevice401
}