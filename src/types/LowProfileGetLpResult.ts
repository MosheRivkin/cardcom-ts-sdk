import type { ErrorInfo } from './ErrorInfo.ts'
import type { GetLowProfileResult } from './GetLowProfileResult.ts'
import type { LowProfileResult } from './LowProfileResult.ts'

/**
 * @description successful request
 */
export type LowProfileGetLpResult200 = LowProfileResult

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export type LowProfileGetLpResult400 = ErrorInfo

/**
 * @description Invalid username
 */
export type LowProfileGetLpResult401 = ErrorInfo

export type LowProfileGetLpResultMutationRequest = GetLowProfileResult | null

export type LowProfileGetLpResultMutationResponse = LowProfileGetLpResult200

export type LowProfileGetLpResultMutation = {
  Response: LowProfileGetLpResult200
  Request: LowProfileGetLpResultMutationRequest
  Errors: LowProfileGetLpResult400 | LowProfileGetLpResult401
}